import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import SpaceInfo from "../components/Space-Info";

// Run cleanup function after each test
afterEach(cleanup);

// Describe a block of tests for the SpaceInfo component
describe("SpaceInfo", () => {
  // Test if the SpaceInfo component can render without throwing an error
  it("renders without crashing", () => {
    render(<SpaceInfo />);
  });

  // Test if the SpaceInfo component correctly renders a launch button
  it("renders a launch button", () => {
    render(<SpaceInfo />);
    // getByRole gets the first matching element by the specified role and name
    const button = screen.getByRole("button", { name: /launch/i });
    // We check if the button is in the document
    expect(button).toBeInTheDocument();
  });

  // Test if clicking the button in the SpaceInfo component does not throw an error
  it("does not throw an error when the button is clicked", () => {
    render(<SpaceInfo />);
    const button = screen.getByRole("button", { name: /launch/i });
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
