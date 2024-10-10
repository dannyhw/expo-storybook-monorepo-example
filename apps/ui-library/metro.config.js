const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.watchFolders.push(path.resolve(__dirname, "../../packages/ui"));

const withStorybook = require("@storybook/react-native/metro/withStorybook");

module.exports = withStorybook(defaultConfig);
