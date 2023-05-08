/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:components(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.mdx",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",
  },
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./components/Atoms/Button/Button.stories.tsx": require("../components/Atoms/Button/Button.stories.tsx"),
    "./components/Atoms/CheckboxInput/CheckboxInput.stories.tsx": require("../components/Atoms/CheckboxInput/CheckboxInput.stories.tsx"),
    "./components/Atoms/Header/Header.stories.tsx": require("../components/Atoms/Header/Header.stories.tsx"),
    "./components/Atoms/Icon/Icon.stories.tsx": require("../components/Atoms/Icon/Icon.stories.tsx"),
    "./components/Atoms/Input/Input.stories.tsx": require("../components/Atoms/Input/Input.stories.tsx"),
    "./components/Atoms/LinkButton/LinkButton.stories.tsx": require("../components/Atoms/LinkButton/LinkButton.stories.tsx"),
    "./components/Atoms/TextLabel/TextLabel.stories.tsx": require("../components/Atoms/TextLabel/TextLabel.stories.tsx"),
    "./components/Atoms/Tile/Tile.stories.tsx": require("../components/Atoms/Tile/Tile.stories.tsx"),
    "./components/Molecules/CheckboxAndLabel/CheckboxAndLabel.stories.tsx": require("../components/Molecules/CheckboxAndLabel/CheckboxAndLabel.stories.tsx"),
  };
};

configure(getStories, module, false);
