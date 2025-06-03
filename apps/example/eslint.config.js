const config = require("@acme/eslint-config");
const globals = require("globals");

module.exports = [
  config,
  { ignores: ["node_modules", "build", ".expo", ".expo-shared"] },
  {
    files: ["*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
