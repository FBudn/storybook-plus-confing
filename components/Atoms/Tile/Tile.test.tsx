import React from "react";
import { render, screen } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";
import Tile, { TileProps } from "./Tile";

const props: TileProps = {
  children: `Tile Test`,
  testId: `test-tile-id`,
};

test("Should render Tile component", () => {
  render(<Tile {...props} />);
  const TileElement = screen.getByTestId(`test-tile-id`);
  expect(TileElement).toBeOnTheScreen();
});

test("Should match snapshot:", () => {
  const TileElement = TestRenderer.create(<Tile {...props} />).toJSON();
  expect(TileElement).toMatchSnapshot();
});

test("Should render and have styles:", () => {
  render(<Tile {...props} />);
  const TileElement = screen.getByTestId(`test-tile-id`);
  expect(TileElement).toBeOnTheScreen();

  expect(TileElement).toHaveStyle({
    flex: 0.7,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 16,
    alignItems: "stretch",
  });
});

test(`Should render with text`, () => {
  render(<Tile {...props} />);
  const TileElement = screen.getByTestId(`test-tile-id`);
  expect(TileElement).toBeOnTheScreen();
  expect(TileElement).toHaveTextContent(`Tile Test`);
});
