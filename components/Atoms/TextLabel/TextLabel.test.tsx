import React from "react";
import { render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import TextLabel, { TextLabelProps } from "./TextLabel";

const props: TextLabelProps = {
  color: "black",
  fontSize: 10,
  testId: `test-textLabel-id`,
  children: `TextLabel Test`,
};

test(`Should render TextLabel component`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeOnTheScreen();
});

test(`Should match snapshot`, () => {
  const TextLabelElement = TestRenderer.create(
    <TextLabel {...props} />
  ).toJSON();
  expect(TextLabelElement).toMatchSnapshot();
});

/* test(`Should render and have styles:`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeOnTheScreen();

  expect(TextLabelElement).toHaveStyle({
    display: "flex",
    border: "none",
  });
}); */

test(`Should render with text`, () => {
  render(<TextLabel {...props} />);
  const TextLabelElement = screen.getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeOnTheScreen();
  expect(TextLabelElement).toHaveTextContent(`TextLabel Test`);
});
