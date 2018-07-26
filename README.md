# console-silencer

This zero-dependencies module allows you to silence console.log and console.error from the code that is currently tested without silencing the logs of your testrunner. Module is intended for use in Node JS v8.x enviroment.

### Installation
To install please run
```
npm i -D console-silencer
```

### Usage
This module exports a function that accepts one argument - a String with the word pattern of your testrunner logs (usually the name of the test running tool.
Inside the first file executed in your test suite you need to require this module 
```javascript
require('console-silencer')('mocha');
```
or, if it seems more convinient to you:
```javascript
const silencer = require('console-silencer');
silencer('mocha');
```
The function shall replace console.log and console.error functions with the one that checks its stack and if this stack includes an argument pattern as a substring - makes log into console, otherwise it does nothing.
