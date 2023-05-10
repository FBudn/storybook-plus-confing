import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import SignUpTemplate, { SignUpTemplateProps } from "./SignUpTemplate";
import "jest-styled-components";

const mockOnClick = jest.fn();

const props: SignUpTemplateProps = {
  onPressButton: mockOnClick,
  testId: `test-signUpTemplate-id`,
  onPressIcon: mockOnClick,
  onPressLink: mockOnClick,
};

test(`Should render SignUpTemplate component`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const SignUpTemplateElement = TestRenderer.create(
    <SignUpTemplate {...props} />
  ).toJSON;
  expect(SignUpTemplateElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  expect(SignUpTemplateElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const { getByText } = within(screen.getByTestId(`test-signUpTemplate-id`));
  const { getAllByText } = within(screen.getByTestId(`test-signUpTemplate-id`));
  expect(getByText("Email")).toBeOnTheScreen();
  expect(getByText("Password")).toBeOnTheScreen();
  expect(getAllByText("SIGN UP")[0]).toBeOnTheScreen();
  expect(getAllByText("SIGN UP")).toHaveLength(2);
});

test(`(Button from Forms) Should render and handle onButtonClick`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const ButtonElement = within(SignUpTemplateElement).getByTestId(
    `test-button-id`
  );
  expect(ButtonElement).toBeOnTheScreen();
  expect(mockOnClick).toBeCalledTimes(0);
  fireEvent.press(ButtonElement);
  expect(mockOnClick).toBeCalledTimes(1);
});

test(`(Button from Footer) Should render and handle onButtonLinkClick`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const ButtonLinkElement = within(SignUpTemplateElement).getByTestId(
    `test-Footer-linkButton-id`
  );
  expect(ButtonLinkElement).toBeOnTheScreen();
  expect(mockOnClick).toBeCalledTimes(0);
  fireEvent.press(ButtonLinkElement);
  expect(mockOnClick).toBeCalledTimes(1);
});

test(`Should render and have backgound styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const Background = within(SignUpTemplateElement).getByTestId(
    `test-background-id`
  );
  expect(Background).toBeOnTheScreen();

  expect(Background).toHaveStyle({
    flex: 1,
    backgroundColor: "rgb(96 165 250)",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  });
});

test(`Should render and have maxwidth styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const MaxWidth = within(SignUpTemplateElement).getByTestId(
    `test-maxWidth-id`
  );
  expect(MaxWidth).toBeOnTheScreen();

  expect(MaxWidth).toHaveStyle({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    maxWidth: "1700px",
  });
});

test(`Should render and have tile styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const Tile = within(SignUpTemplateElement).getByTestId(`test-tile-id`);
  expect(Tile).toBeOnTheScreen();

  expect(Tile).toHaveStyle({
    flex: 0.7,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 20,
    alignItems: "stretch",
    gap: 10,
  });
});

/* test(`Should render and have tileContainer styles:`, () => {
  render(<SignUpTemplate {...props} />);
  const SignUpTemplateElement = screen.getByTestId(`test-signUpTemplate-id`);
  expect(SignUpTemplateElement).toBeOnTheScreen();

  const TileContainer = within(SignUpTemplateElement).getByTestId(
    `test-tileContainer-id`
  );
  expect(TileContainer).toBeOnTheScreen();

  expect(TileContainer).toHaveStyle({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 16px 16px 16px",
    width: "75%",
    gap: "6px",
  });
}); */
