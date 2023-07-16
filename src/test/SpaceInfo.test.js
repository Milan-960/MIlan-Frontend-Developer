import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SpaceInfo from "../components/Space-Info";

// Mocking the 'Video' component to make it return a simple div with a 'data-testid' attribute.
jest.mock("../ui/Video", () => () => <div data-testid="mock-video" />);

test("renders SpaceInfo with title, subtitle, and button", () => {
  // Render the SpaceInfo component
  render(<SpaceInfo />);

  expect(screen.getByText(/upcoming launch/i)).toBeInTheDocument();
  expect(screen.getByText(/starlink mission/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /launch/i })).toBeInTheDocument();
  expect(screen.getByTestId("mock-video")).toBeInTheDocument();
});

// Mock the scrollIntoView function, which is a native function used to scroll to an element in the page
test("handleLaunchClick function works correctly", () => {
  const scrollIntoViewMock = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  // function in SpaceInfo tries to scroll to this element
  document.body.innerHTML = `<div id="searchForm"></div>`;

  render(<SpaceInfo />);
  fireEvent.click(screen.getByRole("button", { name: /launch/i }));
  expect(scrollIntoViewMock).toHaveBeenCalled();
});
