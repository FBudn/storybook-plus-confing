/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import TestRenderer from "react-test-renderer";
import Button, { ButtonProps } from "./Button";

const mockOnButtonClick = jest.fn();
const props: ButtonProps = {
  onPress: mockOnButtonClick,
  text: `test test`,
};

test(`should App render`, () => {
  render(<Button {...props} />);
  const ButtonTest = screen.getByTestId(`test-button-id`);
  expect(ButtonTest).toBeOnTheScreen();
});

test("Should match snapshot:", () => {
  const ButtonTest = TestRenderer.create(<Button {...props} />).toJSON();
  expect(ButtonTest).toMatchSnapshot();
});

test(`test Button have text content `, () => {
  render(<Button {...props} />);
  const ButtonTest = screen.getByTestId(`test-button-id`);
  expect(ButtonTest).toBeOnTheScreen();
  expect(ButtonTest).toHaveTextContent(`test test`);
});
