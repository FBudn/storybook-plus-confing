import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import IconsSection, { IconsSectionProps } from "./IconsSection";

const mockOnPressIcon = jest.fn();
const props: IconsSectionProps = {
  testId: "test-iconsSection-id",
  onPressIcon: mockOnPressIcon,
};

test(`Should render`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`test-iconsSection-id`);
  expect(IconsSectionElement).toBeOnTheScreen();
});

test(`Should match snapshot`, () => {
  const IconsSectionElement = TestRenderer.create(
    <IconsSection {...props} />
  ).toJSON;
  expect(IconsSectionElement).toMatchSnapshot();
});

test(`Should render and have styles`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`test-iconsSection-id`);
  expect(IconsSectionElement).toBeOnTheScreen();

  expect(IconsSectionElement).toHaveStyle({
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    margin: 4,
  });
});

test("Should render three icon components", () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`test-iconsSection-id`);
  expect(IconsSectionElement).toBeOnTheScreen();

  const Icon1 = within(IconsSectionElement).getByTestId(`test-icon1-id`);
  expect(Icon1).toBeOnTheScreen();

  const Icon2 = within(IconsSectionElement).getByTestId(`test-icon2-id`);
  expect(Icon2).toBeOnTheScreen();

  const Icon3 = within(IconsSectionElement).getByTestId(`test-icon3-id`);
  expect(Icon3).toBeOnTheScreen();
});

test(`Should render and handle onPressIcon test-icon1-id`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`test-iconsSection-id`);
  expect(IconsSectionElement).toBeOnTheScreen();

  const Icon1 = within(IconsSectionElement).getByTestId(`test-icon1-id`);
  expect(Icon1).toBeOnTheScreen();
  expect(mockOnPressIcon).toBeCalledTimes(0);
  fireEvent.press(Icon1);
  expect(mockOnPressIcon).toBeCalledTimes(1);
});

test(`Should render and handle onPressIcon test-icon2-id`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`test-iconsSection-id`);
  expect(IconsSectionElement).toBeOnTheScreen();

  const Icon2 = within(IconsSectionElement).getByTestId(`test-icon2-id`);
  expect(Icon2).toBeOnTheScreen();
  expect(mockOnPressIcon).toBeCalledTimes(0);
  fireEvent.press(Icon2);
  expect(mockOnPressIcon).toBeCalledTimes(1);
});

test(`Should render and handle onPressIcon test-icon3-id`, () => {
  render(<IconsSection {...props} />);
  const IconsSectionElement = screen.getByTestId(`test-iconsSection-id`);
  expect(IconsSectionElement).toBeOnTheScreen();

  const Icon3 = within(IconsSectionElement).getByTestId(`test-icon3-id`);
  expect(Icon3).toBeOnTheScreen();
  expect(mockOnPressIcon).toBeCalledTimes(0);
  fireEvent.press(Icon3);
  expect(mockOnPressIcon).toBeCalledTimes(1);
});
