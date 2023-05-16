import React from "react";
import { render, screen, within } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import CheckboxAndLabel, { CheckboxAndLabelProps } from "./CheckboxAndLabel";

const mockSetCheckboxValue = jest.fn();
const props: CheckboxAndLabelProps = {
  infoText: `CheckboxAndLabel Test`,
  testId: `test-checkboxAndLabel-id`,
  alignItems: `flex-start`,
  setCheckboxValue: mockSetCheckboxValue,
  checkboxValue: false,
};

test(`Should render CheckboxAndLabel component`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElement = screen.getByTestId(`test-checkboxAndLabel-id`);
  expect(ChecboxAndLabelElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const CheckboxAndLabelElement = TestRenderer.create(
    <CheckboxAndLabel {...props} />
  ).toJSON;
  expect(CheckboxAndLabelElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElement = screen.getByTestId(`test-checkboxAndLabel-id`);
  expect(ChecboxAndLabelElement).toBeOnTheScreen();

  expect(ChecboxAndLabelElement).toHaveStyle({
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
    color: "rgb(82 82 91)",
  });
});

test(`Should render with text`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElem = screen.getByTestId(`test-checkboxAndLabel-id`);
  expect(ChecboxAndLabelElem).toBeOnTheScreen();
  const TextLabelElement =
    within(ChecboxAndLabelElem).getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeOnTheScreen();
  expect(TextLabelElement).toHaveTextContent(`CheckboxAndLabel Test`);
});

test(`CheckboxInput should not be checked`, () => {
  render(<CheckboxAndLabel {...props} />);
  const ChecboxAndLabelElem = screen.getByTestId(`test-checkboxAndLabel-id`);
  expect(ChecboxAndLabelElem).toBeOnTheScreen();
  const CheckboxInput =
    within(ChecboxAndLabelElem).getByTestId(`test-checkbox-id`);
  expect(CheckboxInput).toBeOnTheScreen();
  expect(CheckboxInput).not.toBeUndefined();
});
