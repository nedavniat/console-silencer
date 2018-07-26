module.exports = function (pattern) {
  const {log: ORIGINAL} = console;
  function copycat(...args) {
    try {
      throw new Error();
    } catch ({stack}) {
      if (stack.includes(pattern)) ORIGINAL(...args);
    }
  }
  console.log = console.error = copycat;
};