import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import TestRenderer from "react-test-renderer";
import Button, { ButtonProps } from "./Button";

const mockOnPressButton = jest.fn();
const props: ButtonProps = {
  onPressButton: mockOnPressButton,
  children: `test test`,
  testId: `test-button-id`,
};

test(`should Button render`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
});

test("Should match snapshot:", () => {
  const ButtonElement = TestRenderer.create(<Button {...props} />).toJSON();
  expect(ButtonElement).toMatchSnapshot();
});

test(`Should have styles and render`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
  expect(ButtonElement).toHaveStyle({
    maxHeight: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    backgroundColor: "rgb(236 72 153)",
    shadowColor: "#94a3b8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 5,
  });
});

test(`should render with text `, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
  expect(ButtonElement).toHaveTextContent(`test test`);
});

test(`Should render button and handle onClick`, () => {
  render(<Button {...props} />);
  const ButtonElement = screen.getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
  expect(mockOnPressButton).toBeCalledTimes(0);
  fireEvent.press(ButtonElement);
  expect(mockOnPressButton).toBeCalledTimes(1);
});

// import "@testing-library/jest-native/extend-expect";
