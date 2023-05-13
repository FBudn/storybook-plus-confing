/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import Input, { InputProps } from "./Input";

const mockInputFunction = jest.fn();
const props: InputProps = {
  testId: `test-input-id`,
  secureText: true,
  setInputValue: mockInputFunction,
};

test(`Should render Input component`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeOnTheScreen();
});

test(`Should match snapshot`, () => {
  const InputElement = TestRenderer.create(<Input {...props} />).toJSON();
  expect(InputElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeOnTheScreen();

  expect(InputElement).toHaveStyle({
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgb(214 211 209)",
    height: 40,
  });
});

test(`Should render Input and handle setInputValue`, () => {
  render(<Input {...props} />);
  const InputElement = screen.getByTestId(`test-input-id`);
  expect(InputElement).toBeOnTheScreen();
  expect(mockInputFunction).toBeCalledTimes(0);
  fireEvent.press(InputElement);
  expect(mockInputFunction).toBeCalledTimes(1);
});
