import { render } from "@testing-library/react";
import { CapsulesProvider } from "../hooks/CapsulesProvider";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("App matches snapshot", async () => {
  const { asFragment } = render(
    <BrowserRouter>
      <CapsulesProvider>
        <App />
      </CapsulesProvider>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
