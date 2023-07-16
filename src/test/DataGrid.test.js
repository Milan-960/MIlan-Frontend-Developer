import React from "react";
import { render } from "@testing-library/react";
import DataGrid from "../components/DataGrid";

test("renders DataGrid component without errors", () => {
  render(<DataGrid data={[]} onSelect={() => {}} />);

  // Verify that the component renders without throwing any errors
  const dataGridElement = document.querySelector(".grid");
  expect(dataGridElement).toBeInTheDocument();
});
