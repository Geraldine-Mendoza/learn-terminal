// Import dependencies
const { exec } = require('child_process');
const jwt = require('jsonwebtoken');

// Sign a jwt token with user id
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Send the signed token as a cookie
const createSendToken = (data, statusCode, req, res) => {
  const token = signToken(data.id);

  res.cookie('jwt_hwt', token, {
    expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      type: data.type,
      port: data.port,
    },
  });
};

// Global vars to keep track of issued tokens and ports
const tokenToPortMap = new Map();
let portCounter = 5000;

// Assigns a token to the user to access a terminal
exports.validateUser = (req, res) => {
  if (portCounter > 8000) {
    res.status(503);
    return;
  }
  let state = req.body.data.signIn;
  if ((state = 'true')) {
    tokenToPortMap.set(req.body.data.uid, portCounter);
    createSendToken(
      {
        type: 'permanent',
        id: req.body.data.uid,
        port: portCounter,
      },
      200,
      req,
      res
    );
    portCounter = portCounter + Math.floor(Math.random() * 10 + 1);
  } else if ((state = 'anon')) {
    tokenToPortMap.set(req.body.data.uid, portCounter);
    createSendToken(
      {
        type: 'temporary',
        id: req.body.data.uid,
        port: portCounter,
      },
      200,
      req,
      res
    );
    portCounter = portCounter + Math.floor(Math.random() * 10 + 1);
  } else {
    res.status(403).json({
      status: 'fail',
      message: 'unauthorized',
    });
  }
};

// Creates a container that the user can connect to
exports.createContainer = async (req, res) => {
  const uid = req.uid;
  console.log(req.uid);
  console.log(tokenToPortMap);
  const cmd = `docker run --rm -p ${tokenToPortMap.get(uid)}:7681 tsl0922/ttyd:alpine`;
  await exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error: ${error}`);
      res.status(400).json({
        status: 'fail',
      });
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.status(200).json({
      status: 'success',
    });
  });
};
