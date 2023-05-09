import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import FormSignUp, { FormSignUpProps } from "./FormSignUp";

const mockOnButtonClick = jest.fn();

const props: FormSignUpProps = {
  onButtonClick: mockOnButtonClick,
  testId: `test-formSignup-id`,
};

test(`Should render FormSignUp component`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const FormSignUpElement = TestRenderer.create(
    <FormSignUp {...props} />
  ).toJSON;
  expect(FormSignUpElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeOnTheScreen();

  expect(FormSignUpElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeOnTheScreen();

  const { getByText } = within(screen.getByTestId(`test-formSignup-id`));
  const { getAllByText } = within(screen.getByTestId(`test-formSignup-id`));
  expect(getByText("Email")).toBeOnTheScreen();
  expect(getByText("Password")).toBeOnTheScreen();
  expect(getAllByText("SIGN UP")[0]).toBeOnTheScreen();
  expect(getAllByText("SIGN UP")).toHaveLength(2);
});

test(`Should render and handle onButtonClick`, () => {
  render(<FormSignUp {...props} />);
  const FormSignUpElement = screen.getByTestId(`test-formSignup-id`);
  expect(FormSignUpElement).toBeOnTheScreen();

  const ButtonElement = within(FormSignUpElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
  expect(mockOnButtonClick).toBeCalledTimes(0);
  fireEvent.press(ButtonElement);
  expect(mockOnButtonClick).toBeCalledTimes(1);
});
