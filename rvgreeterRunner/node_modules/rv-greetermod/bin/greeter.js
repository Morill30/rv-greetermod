#!/usr/bin/env node

const argv = require('yargs').argv;
const greet = require('../index.js');
var whoami = require('whoami-exec');
 
var username = whoami();

console.log(greet(typeof argv.name === 'string'? argv.name: username ));