import React from "react";
import { render } from "@testing-library/react";
import { CapsulesProvider } from "../hooks/CapsulesProvider";
import App from "../App";

jest.mock("../services/spacexService", () => ({
  fetchCapsules: () => Promise.resolve([]),
}));

test("App matches snapshot", async () => {
  const { asFragment } = render(
    <CapsulesProvider>
      <App />
    </CapsulesProvider>
  );

  // Wait for any asynchronous actions (like useEffect) to complete
  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(asFragment()).toMatchSnapshot();
});
