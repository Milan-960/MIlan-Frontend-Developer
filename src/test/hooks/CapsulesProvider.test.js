import React from "react";
import renderer from "react-test-renderer";

import { fetchCapsules } from "../../services/spacexService";

import {
  CapsulesProvider,
  CapsulesContext,
} from "../../hooks/CapsulesProvider";

jest.mock("../../services/spacexService");

// Dummy component that will consume the context
const Consumer = () => {
  const contextValue = React.useContext(CapsulesContext);
  return <div>{JSON.stringify(contextValue)}</div>;
};

test("CapsulesProvider provides correct context value", async () => {
  const mockData = [
    { type: "type1", status: "status1", original_launch: "launch1" },
  ];
  fetchCapsules.mockResolvedValue(mockData);

  const component = renderer.create(
    <CapsulesProvider>
      <Consumer />
    </CapsulesProvider>
  );

  // Let's give some time for the async function to resolve
  await renderer.act(() => new Promise((resolve) => setTimeout(resolve, 100)));

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
