const { defineConfig } = require("eslint/config");
const config = require("@acme/eslint-config");

module.exports = defineConfig([config, { ignores: ["node_modules", "build"] }]);
