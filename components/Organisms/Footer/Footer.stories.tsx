import React from "react";
import { View } from "react-native";
import Footer from "./Footer";

const FooterMeta = {
  title: "Organisms/Footer",
  component: Footer,
  argTypes: {
    onPressLink: { action: "Link pressed" },
    onPressIcon: { action: "Icon pressed" },
  },
  args: {
    infoText: "Need an account?",
    linkText: "SIGN UP",
    lineText: "OR",
    testId: "test-footer-id",
  },
  decorators: [
    (Story: any) => (
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default FooterMeta;
export const Basic = {};
