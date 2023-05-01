import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import Icon, { IconProps } from "./Icon";

const mockOnPressIcon = jest.fn();

const props1: IconProps = {
  testId: `test-icon1-id`,
  color: `blue`,
  icon: `facebook`,
  onPressIcon: mockOnPressIcon,
};
const props2: IconProps = {
  testId: `test-icon2-id`,
  color: `red`,
  icon: `google`,
  onPressIcon: mockOnPressIcon,
};
const props3: IconProps = {
  testId: `test-icon3-id`,
  color: `blue`,
  icon: `linkedin`,
  onPressIcon: mockOnPressIcon,
};

test(`Should render Icon component`, () => {
  render(<Icon {...props1} />);
  render(<Icon {...props2} />);
  render(<Icon {...props3} />);
  const IconElement1 = screen.getByTestId(`test-icon1-id`);
  const IconElement2 = screen.getByTestId(`test-icon2-id`);
  const IconElement3 = screen.getByTestId(`test-icon3-id`);
  expect(IconElement1).toBeOnTheScreen();
  expect(IconElement2).toBeOnTheScreen();
  expect(IconElement3).toBeOnTheScreen();
});

test(`Should match snapshot test-icon1-id:`, () => {
  const IconElement1 = TestRenderer.create(<Icon {...props1} />).toJSON();
  expect(IconElement1).toMatchSnapshot();
});

test(`Should match snapshot test-icon2-id:`, () => {
  const IconElement2 = TestRenderer.create(<Icon {...props2} />).toJSON();
  expect(IconElement2).toMatchSnapshot();
});

test(`Should match snapshot test-icon3-id:`, () => {
  const IconElement3 = TestRenderer.create(<Icon {...props3} />).toJSON();
  expect(IconElement3).toMatchSnapshot();
});

test(`Should render and have styles test-icon1-id:`, () => {
  render(<Icon {...props1} />);
  const IconElement1 = screen.getByTestId(`test-icon1-id`);
  expect(IconElement1).toBeOnTheScreen();
  expect(IconElement1).toHaveStyle({
    flex: 0.05,
    width: 60,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    fontSize: 1,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 2,
  });
});

test(`Should render and have styles test-icon2-id:`, () => {
  render(<Icon {...props2} />);
  const IconElement2 = screen.getByTestId(`test-icon2-id`);
  expect(IconElement2).toBeOnTheScreen();
  expect(IconElement2).toHaveStyle({
    flex: 0.05,
    width: 60,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    fontSize: 1,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 2,
  });
});

test(`Should render and have styles test-icon3-id:`, () => {
  render(<Icon {...props3} />);
  const IconElement3 = screen.getByTestId(`test-icon3-id`);

  expect(IconElement3).toBeOnTheScreen();
  expect(IconElement3).toHaveStyle({
    flex: 0.05,
    width: 60,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    fontSize: 1,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 2,
  });
});

test(`should handle onPresss test-icon1-id`, () => {
  render(<Icon {...props1} />);
  const consoleLogIcon1 = screen.getByTestId(`test-icon1-id`);
  fireEvent.press(consoleLogIcon1);
  expect(mockOnPressIcon).toBeCalledTimes(1);
  mockOnPressIcon(`Icon Test 1`);
  expect(mockOnPressIcon).toBeCalledWith(`Icon Test 1`);
});

test(`should handle onPresss test-icon2-id`, () => {
  render(<Icon {...props2} />);
  const consoleLogIcon2 = screen.getByTestId(`test-icon2-id`);
  fireEvent.press(consoleLogIcon2);
  expect(mockOnPressIcon).toBeCalledTimes(1);
  mockOnPressIcon(`Icon Test 2`);
  expect(mockOnPressIcon).toBeCalledWith(`Icon Test 2`);
});

test(`should handle onPresss test-icon3-id`, () => {
  render(<Icon {...props3} />);
  const consoleLogIcon3 = screen.getByTestId(`test-icon3-id`);
  fireEvent.press(consoleLogIcon3);
  expect(mockOnPressIcon).toBeCalledTimes(1);
  mockOnPressIcon(`Icon Test 3`);
  expect(mockOnPressIcon).toBeCalledWith(`Icon Test 3`);
});
