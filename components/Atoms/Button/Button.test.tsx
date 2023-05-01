import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import TestRenderer from "react-test-renderer";
import Button, { ButtonProps } from "./Button";

const mockOnButtonClick = jest.fn();
const props: ButtonProps = {
  onPress: mockOnButtonClick,
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
    flex: 0.1,
    maxHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "rgb(236 72 153)",
    shadowColor: "#94a3b8",
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
  expect(mockOnButtonClick).toBeCalledTimes(0);
  fireEvent.press(ButtonElement);
  expect(mockOnButtonClick).toBeCalledTimes(1);
});

// import "@testing-library/jest-native/extend-expect";
