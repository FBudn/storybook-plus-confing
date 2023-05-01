import React from "react";
import { render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import CheckboxInput, { CheckboxInputProps } from "./CheckboxInput";

const props: CheckboxInputProps = {
  testId: `test-checkbox-id`,
};

test(`should CheckboxInput render`, () => {
  render(<CheckboxInput {...props} />);
  const CheckboxInputElement = screen.getByTestId(`test-checkbox-id`);
  expect(CheckboxInputElement).toBeOnTheScreen();
});

test("Should match snapshot:", () => {
  const CheckboxInputElement = TestRenderer.create(
    <CheckboxInput {...props} />
  ).toJSON();
  expect(CheckboxInputElement).toMatchSnapshot();
});

test(`Should have styles and render`, () => {
  render(<CheckboxInput {...props} />);
  const CheckboxInputElement = screen.getByTestId(`test-checkbox-id`);
  expect(CheckboxInputElement).toBeOnTheScreen();
  expect(CheckboxInputElement).toHaveStyle({
    flex: 0.05,
    maxHeight: 30,
    width: 30,
    maxWidth: 30,
    minHeight: 20,
    minWidth: 20,
    marginLeft: 5,
  });
});

test(`Should render CheckboxInput Component with not checked checkbox`, () => {
  render(<CheckboxInput {...props} />);
  const checkboxInputElement = screen.getByTestId(`test-checkbox-id`);
  expect(checkboxInputElement).toBeOnTheScreen();
  expect(checkboxInputElement).not.toBeFalsy();
});
