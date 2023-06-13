#!/usr/bin/env node

const { execSync } = require('child_process');

execSync('node --experimental-specifier-resolution=node ./node_modules/hint/dist/src/bin/hint.js', { stdio: 'inherit' });
