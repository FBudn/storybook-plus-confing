import React from "react";
import {
  fireEvent,
  screen,
  render,
  within,
} from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import LoginTemplate, { LoginTemplateProps } from "./LoginTemplate";

const mockOnPress = jest.fn();

const props: LoginTemplateProps = {
  testId: "test-loginTemplate-id",
  onPressButton: mockOnPress,
  onPressIcon: mockOnPress,
  onPressLink: mockOnPress,
};

test(`Should render LoginTemplate component`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const LoginTemplateElement = TestRenderer.create(
    <LoginTemplate {...props} />
  ).toJSON;
  expect(LoginTemplateElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  expect(LoginTemplateElement).toHaveStyle({
    display: "flex",
    width: "100%",
  });
});

test(`Should render with texts`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const { getByText } = within(screen.getByTestId(`test-loginTemplate-id`));
  const { getAllByText } = within(screen.getByTestId(`test-loginTemplate-id`));
  expect(getByText("Email")).toBeOnTheScreen();
  expect(getByText("Password")).toBeOnTheScreen();
  expect(getAllByText("LOGIN")[0]).toBeOnTheScreen();
  expect(getAllByText("LOGIN")).toHaveLength(2);
  expect(getByText("Remember me?")).toBeOnTheScreen();
  expect(getByText("Forgot Password?")).toBeOnTheScreen();
});

test(`(Button from Forms) Should render and handle onButtonClick`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const ButtonElement =
    within(LoginTemplateElement).getByTestId(`test-button-id`);
  expect(ButtonElement).toBeOnTheScreen();
  expect(mockOnPress).toBeCalledTimes(0);
  fireEvent.press(ButtonElement);
  expect(mockOnPress).toBeCalledTimes(1);
});

test(`(Button from Footer) Should render and handle onButtonLinkClick`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const ButtonLinkElement = within(LoginTemplateElement).getByTestId(
    `test-Footer-linkButton-id`
  );
  expect(ButtonLinkElement).toBeOnTheScreen();
  expect(mockOnPress).toBeCalledTimes(0);
  fireEvent.press(ButtonLinkElement);
  expect(mockOnPress).toBeCalledTimes(1);
});

test(`CheckboxInput should not be checked`, () => {
  render(<LoginTemplate {...props} />);
  const ChecboxAndLabelElem = screen.getByTestId(`test-loginTemplate-id`);
  expect(ChecboxAndLabelElem).toBeOnTheScreen();
  const CheckboxInput =
    within(ChecboxAndLabelElem).getByTestId(`test-checkbox-id`);
  expect(CheckboxInput).toBeOnTheScreen();
  expect(CheckboxInput).not.toBeUndefined();
});

test(`Should render and have background styles:`, () => {
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const Background =
    within(LoginTemplateElement).getByTestId(`test-background-id`);
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
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const MaxWidth = within(LoginTemplateElement).getByTestId(`test-maxWidth-id`);
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
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const Tile = within(LoginTemplateElement).getByTestId(`test-tile-id`);
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
  render(<LoginTemplate {...props} />);
  const LoginTemplateElement = screen.getByTestId(`test-loginTemplate-id`);
  expect(LoginTemplateElement).toBeOnTheScreen();

  const TileContainer = within(LoginTemplateElement).getByTestId(
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
