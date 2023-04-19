/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import TestRenderer from "react-test-renderer";
import App from "./App";

test(`should App render`, () => {
  render(<App />);
  const AppTest = screen.getByTestId(`test-app-id`);
  expect(AppTest).toBeOnTheScreen();
});

test("Should match snapshot:", () => {
  const AppTest = TestRenderer.create(<App />).toJSON();
  expect(AppTest).toMatchSnapshot();
});

test(`test App have text content `, () => {
  render(<App />);
  const AppTest = screen.getByTestId(`test-app-id`);
  expect(AppTest).toBeOnTheScreen();
  expect(AppTest).toHaveTextContent(
    `Open up App.tsx to start working on your app!`
  );
});
