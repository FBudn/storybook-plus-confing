import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import Footer, { FooterProps } from "./Footer";

const mockOnPressIcon = jest.fn();
const mockOnPressLink = jest.fn();

const props: FooterProps = {
  onPressIcon: mockOnPressIcon,
  onPressLink: mockOnPressLink,
  testId: `test-footer-id`,
  infoText: `Link Test`,
  linkText: `LinkText Test`,
  lineText: `LineText Test`,
};

test(`Should render Footer component`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const FooterElement = TestRenderer.create(<Footer {...props} />).toJSON;
  expect(FooterElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();

  expect(FooterElement).toHaveStyle({
    alignItems: "stretch",
    gap: 10,
  });
});

test(`Should render with text TextLabel`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();
  const TextLabelElement =
    within(FooterElement).getByTestId(`test-textLabel-id`);
  expect(TextLabelElement).toBeOnTheScreen();
  expect(TextLabelElement).toHaveTextContent(`Link Test`);
});

test(`Should render with text Line`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();

  const LineElement = within(FooterElement).getByTestId(`test-line-id`);
  expect(LineElement).toBeOnTheScreen();
  expect(LineElement).toHaveTextContent(`LineText Test`);
});

test(`Should render with text LinkButton`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();

  const LinkButtonElement = within(FooterElement).getByTestId(
    `test-Footer-linkButton-id`
  );
  expect(LinkButtonElement).toBeOnTheScreen();
  expect(LinkButtonElement).toHaveTextContent(`LinkText Test`);
});

test(`Should render and handle onButtonLinkClick`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();

  const ButtonLinkElement = within(FooterElement).getByTestId(
    `test-Footer-linkButton-id`
  );
  expect(ButtonLinkElement).toBeOnTheScreen();

  expect(mockOnPressLink).toBeCalledTimes(0);
  fireEvent.press(ButtonLinkElement);
  expect(mockOnPressLink).toBeCalledTimes(1);
});

test(`Should render and handle onIconLinkClick`, () => {
  render(<Footer {...props} />);
  const FooterElement = screen.getByTestId(`test-footer-id`);
  expect(FooterElement).toBeOnTheScreen();

  const IconLinkElement = within(FooterElement).getByTestId(`test-icon3-id`);
  expect(IconLinkElement).toBeOnTheScreen();

  expect(mockOnPressIcon).toBeCalledTimes(0);
  fireEvent.press(IconLinkElement);
  expect(mockOnPressIcon).toBeCalledTimes(1);
});
