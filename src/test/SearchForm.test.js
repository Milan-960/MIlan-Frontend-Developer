import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

// This is often done to simplify the testing process and to avoid any issues that may be caused by the third-party library itself
jest.mock("react-select", () => (props) => {
  function handleChange(event) {
    const option = props.options.find(
      (option) => option.value === event.currentTarget.value
    );
    props.onChange(option);
  }

  return (
    <select
      data-testid={props.name}
      value={props.value || ""}
      onChange={handleChange}
    >
      {props.options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

test("renders SearchForm without crashing", () => {
  const mockFiltersChange = jest.fn();
  const mockLaunches = ["launch1", "launch2"];
  const mockTypes = ["type1", "type2"];
  const mockStatuses = ["status1", "status2"];

  render(
    <SearchForm
      launches={mockLaunches}
      types={mockTypes}
      statuses={mockStatuses}
      onFiltersChange={mockFiltersChange}
    />
  );

  expect(screen.getByText("Search Filters")).toBeInTheDocument();
});

test("changes select value", () => {
  // Here we are mocking the callback function that would be passed to the SearchForm component
  const mockFiltersChange = jest.fn();
  const mockLaunches = ["launch1", "launch2"];
  const mockTypes = ["type1", "type2"];
  const mockStatuses = ["status1", "status2"];

  // Rendering the SearchForm component with the mocked props
  render(
    <SearchForm
      launches={mockLaunches}
      types={mockTypes}
      statuses={mockStatuses}
      onFiltersChange={mockFiltersChange}
    />
  );

  fireEvent.change(screen.getByTestId("type"), {
    target: { value: mockTypes[0] },
  });

  expect(mockFiltersChange).toHaveBeenCalled();
});
