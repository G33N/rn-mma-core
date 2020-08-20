#!/usr/bin/env node

const program = require('commander');

// import function to list available options
const help = require('../lib/help');

// import function to build app
const build = require('../lib/build');

/*******************************************/

// Print available options
// $ rn-mma-core help
// $ rn-mma-core -h
program.on('--help', () => {
  help();
});

// Build an android release binary
// $ rn-mma-core android:release
// $ rn-mma-core ar
program
  .command('android:release') // sub-command name
  .alias('ar') // alternative sub-command is `ar`
  .description('List coffee menu') // command description

  // function to execute when command is uses
  .action(function () {
    build();
  });

// allow commander to parse `process.argv`
program.parse(process.argv);
