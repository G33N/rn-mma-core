const colors = require('colors');
const {options} = require('./values');

// export function to available options
module.exports = function () {
  console.log('Calling for help? this is the available commands!');
  console.log('------------------');

  // options on separate lines
  options.forEach((type) => {
    console.log(
      '%s %s',
      colors.bold(type.name),
      colors.grey('/ ' + type.description),
    );
  });
};
