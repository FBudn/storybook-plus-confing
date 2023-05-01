module.exports = {
  stories: [
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};
