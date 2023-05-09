import React from "react";
import { render, screen, within } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import Line, { LineProps } from "./Line";

const props: LineProps = {
  children: `Line Test`,
  testId: `test-line-id`,
};

test(`Should render Line component`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeOnTheScreen();
});

test(`Should match the snapshot`, () => {
  const LineElement = TestRenderer.create(<Line {...props} />).toJSON;
  expect(LineElement).toMatchSnapshot();
});

test(`Should render and have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeOnTheScreen();

  expect(LineElement).toHaveStyle({
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  });
});

test(`Should render with text`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeOnTheScreen();
  expect(LineElement).toHaveTextContent(`Line Test`);
});

/* 
const TextLabelElement = within(LineElement).getByTestId(
    `test-Line-LineTextBox`
  );
  expect(TextLabelElement).toBeOnTheScreen();

( test(`Should render and <hr> element should have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeOnTheScreen();

  const HrElement = within(LineElement).getByTestId(`test-Line-HRStyled`);
  expect(HrElement).toBeOnTheScreen();
  expect(HrElement).toHaveStyle({
    width: "117px",
    border: "none",
    height: "2px",
    background: "rgb(229 231 235)",
  });
}); 

test(`Should render and text-box element should have styles:`, () => {
  render(<Line {...props} />);
  const LineElement = screen.getByTestId(`test-line-id`);
  expect(LineElement).toBeOnTheScreen();

  const TextBoxElement = within(LineElement).getByTestId(
    `test-Line-LineTextBox`
  );
  expect(TextBoxElement).toBeOnTheScreen();
  expect(TextBoxElement).toHaveStyle({
    display: "flex",
    padding: "2px",
  });
});
*/
