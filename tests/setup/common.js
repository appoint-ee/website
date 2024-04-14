process.on('unhandledRejection', () => {
  // to prevent unhandled promise rejection.
});

// const builtinError = global.console.error;
// const builtinTrace = global.console.trace;

// global.console.error = (...args) => {
//   console.log("error", args);
//   builtinError(...args);
// };

// global.console.trace = (...args) => {
//   console.log("trace", args);
//   // builtinTrace(...args);
// };
