import { enableFetchMocks } from "jest-fetch-mock";

import { fetchCapsules } from "../../services/spacexService";

// Enable fetch mocks so that all fetch requests are replaced with a mock function
enableFetchMocks();

describe("fetchCapsules", () => {
  // Reset all mocks after each test
  afterEach(() => {
    fetch.resetMocks();
  });

  it("returns data when fetch is successful", async () => {
    const mockData = [
      { id: "1", name: "Capsule 1" },
      { id: "2", name: "Capsule 2" },
    ];
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const data = await fetchCapsules();

    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api.php");
  });

  it("returns undefined and logs error when fetch fails", async () => {
    console.error = jest.fn(); // Mock console.error to avoid logging in test

    // Simulate an unsuccessful request with status code 400
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ ok: false, status: 400 })
    );

    const data = await fetchCapsules();

    expect(data).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      "API request failed with status 400"
    );
  });
});
