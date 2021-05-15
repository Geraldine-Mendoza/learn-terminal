// works locally, feel free to change as needed

const { exec } = require('child_process');

exports.execCmd = async (req, res) => {
  // change command for container
  const command = req.params.cmd;
    await exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.json({
          "output": stdout
        })
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }
