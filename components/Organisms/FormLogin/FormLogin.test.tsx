import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import FormLogin, { FormLoginProps } from "./FormLogin";

const mockonPressButton = jest.fn();
const mockInputFunction = jest.fn();
const mockSetCheckboxValue = jest.fn();

const props: FormLoginProps = {
  onPressButton: mockonPressButton,
  testId: `test-formLogin-id`,
  setEmailValue: mockInputFunction,
  setPasswordValue: mockInputFunction,
  setCheckboxValue: mockSetCheckboxValue,
  checkboxValue: false,
};

test(`Should render FormLogin component`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const FormLoginElement = TestRenderer.create(<FormLogin {...props} />).toJSON;
  expect(FormLoginElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeOnTheScreen();

  expect(FormLoginElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeOnTheScreen();

  const { getByText } = within(screen.getByTestId(`test-formLogin-id`));
  const { getAllByText } = within(screen.getByTestId(`test-formLogin-id`));
  expect(getByText("Email")).toBeOnTheScreen();
  expect(getByText("Password")).toBeOnTheScreen();
  expect(getAllByText("LOGIN")[0]).toBeOnTheScreen();
  expect(getAllByText("LOGIN")).toHaveLength(2);
  expect(getByText("Remember me?")).toBeOnTheScreen();
  expect(getByText("Forgot Password?")).toBeOnTheScreen();
});

test(`Should render and handle onPressButton`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeOnTheScreen();

  const ButtonElement = within(FormLoginElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
  expect(mockonPressButton).toBeCalledTimes(0);
  fireEvent.press(ButtonElement);
  expect(mockonPressButton).toBeCalledTimes(1);
});

test(`CheckboxInput should not be checked`, () => {
  render(<FormLogin {...props} />);
  const ChecboxAndLabelElem = screen.getByTestId(`test-formLogin-id`);
  expect(ChecboxAndLabelElem).toBeOnTheScreen();
  const CheckboxInput =
    within(ChecboxAndLabelElem).getByTestId(`test-checkbox-id`);
  expect(CheckboxInput).toBeOnTheScreen();
  expect(CheckboxInput).toBeUndefined();
});

test(`Should render and handle inputFunction`, () => {
  render(<FormLogin {...props} />);
  const FormLoginElement = screen.getByTestId(`test-formLogin-id`);
  expect(FormLoginElement).toBeOnTheScreen();

  const InputElement = within(FormLoginElement).getByTestId(`test-input-id`);
  expect(InputElement).toBeOnTheScreen();

  expect(mockInputFunction).toBeCalledTimes(0);
  fireEvent.changeText(InputElement);
  expect(mockInputFunction).toBeCalledTimes(1);
});
