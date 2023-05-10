import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import LinkButton, { LinkButtonProps } from "./LinkButton";

const mockonPressLink = jest.fn();

const props: LinkButtonProps = {
  testId: `test-linkButton-id`,
  children: `LinkButton Test`,
  onPressLink: mockonPressLink,
};

test(`Should renred LinkButton component`, () => {
  render(<LinkButton {...props} />);
  const LinkButtonElement = screen.getByTestId(`test-linkButton-id`);
  expect(LinkButtonElement).toBeOnTheScreen();
});

test(`Schould match snapshot`, () => {
  const LinkButtonElement = TestRenderer.create(
    <LinkButton {...props} />
  ).toJSON();
  expect(LinkButtonElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<LinkButton {...props} />);
  const LinkButtonElement = screen.getByTestId(`test-linkButton-id`);
  expect(LinkButtonElement).toBeOnTheScreen();

  expect(LinkButtonElement).toHaveStyle({
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  });
});

test(`Should handleClick`, () => {
  render(<LinkButton {...props} />);
  const LinkButtonElement = screen.getByTestId(`test-linkButton-id`);
  fireEvent.press(LinkButtonElement);
  expect(mockonPressLink).toBeCalledTimes(1);
});
