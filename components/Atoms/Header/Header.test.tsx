import React from "react";
import { render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import Header, { HeaderProps } from "./Header";

const props: HeaderProps = {
  children: `Header Test`,
  testId: `test-header-id`,
};

test("Should render Header component", () => {
  render(<Header {...props} />);
  const HeaderElement = screen.getByTestId(`test-header-id`);
  expect(HeaderElement).toBeOnTheScreen();
});

test("Should match snapshot:", () => {
  const HeaderElement = TestRenderer.create(<Header {...props} />).toJSON();
  expect(HeaderElement).toMatchSnapshot();
});

test("Should render and have styles:", () => {
  render(<Header {...props} />);
  const HeaderElement = screen.getByTestId(`test-header-id`);
  expect(HeaderElement).toBeOnTheScreen();

  expect(HeaderElement).toHaveStyle({
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
  });
});

test(`Should render with text`, () => {
  render(<Header {...props} />);
  const HeaderElement = screen.getByTestId(`test-header-id`);
  expect(HeaderElement).toBeOnTheScreen();
  expect(HeaderElement).toHaveTextContent(`Header Test`);
});
