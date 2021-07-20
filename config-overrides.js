const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@APP": path.resolve(__dirname, "src/"),
    },
  };

  return config;
};
