import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import InputAndLabel, { InputAndLabelProps } from "./InputAndLabel";

const mockInputFunction = jest.fn();
const props: InputAndLabelProps = {
  testId: `test-inputAndLabel-id`,
  children: `InputAndLabel Test`,
  secureText: true,
  setInputValue: mockInputFunction,
};

test(`Should render InputAndLabel component`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const InputAndLabelElement = TestRenderer.create(
    <InputAndLabel {...props} />
  ).toJSON;
  expect(InputAndLabelElement).toMatchSnapshot();
});

test(`Should render and have styles`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeOnTheScreen();

  expect(InputAndLabelElement).toHaveStyle({
    gap: 1,
    width: "100%",
  });
});

test(`Should render with text`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeOnTheScreen();
  const TextLabelElement =
    within(InputAndLabelElement).getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeOnTheScreen();
  expect(TextLabelElement).toHaveTextContent(`InputAndLabel Test`);
});

test(`Should redner input element`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeOnTheScreen();
  const InputElement =
    within(InputAndLabelElement).getByTestId(`test-input-id`);
  expect(InputElement).toBeOnTheScreen();
});

test(`Should render Input and handle setInputValue`, () => {
  render(<InputAndLabel {...props} />);
  const InputAndLabelElement = screen.getByTestId(`test-inputAndLabel-id`);
  expect(InputAndLabelElement).toBeOnTheScreen();

  const InputElement =
    within(InputAndLabelElement).getByTestId(`test-input-id`);
  expect(InputElement).toBeOnTheScreen();

  expect(mockInputFunction).toBeCalledTimes(0);
  fireEvent.press(InputElement);
  expect(mockInputFunction).toBeCalledTimes(1);
});
