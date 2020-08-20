const {spawn} = require('child_process');
const path = require('path');

// export function to available options
module.exports = function () {
  console.log('Building...');
  console.log('------------------');

  const newDir = __dirname.substring(0, __dirname.length - 3);
  console.log(newDir);
  const options = {
    cwd: newDir + 'android/',
  };
  // options on separate lines
  const child = spawn('./gradlew', ['assembleRelease'], options);
  // use child.stdout.setEncoding('utf8'); if you want text chunks
  child.stdout.on('data', (chunk) => {
    // data from the standard output is here as buffers
    console.log(chunk);
  });
  // since these are streams, you can pipe them elsewhere
  child.stderr.pipe(child.stdin);
  child.on('error', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
