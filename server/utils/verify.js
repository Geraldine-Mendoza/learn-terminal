// Import dependencies
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  try {
    // Check if the token is valid
    const token = req.params.token;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.uid = decoded.id;
    // Throw error when invalid
    if (!decoded) {
      res.status(403).json({
        status: 'fail',
        message: err.message,
      });
      return;
    }
    next();
  } catch (err) {
    // Catch malformed jwt errors
    res.status(400).json({
      status: 'fail',
      message: 'BAD REQUEST',
    });
    console.log(err);
  }
};
