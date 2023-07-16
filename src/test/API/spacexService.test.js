import { fetchCapsules } from "../../services/spacexService";

describe("API tests", () => {
  let mockFetch;

  // Before each test, spy on the fetch function
  beforeEach(() => {
    mockFetch = jest.spyOn(global, "fetch");
  });

  // After each test, restore the original fetch function
  afterEach(() => {
    mockFetch.mockRestore();
  });

  // Test case: Successful API call
  it("fetches capsules successfully from an API", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ capsules: "mock capsule data" }),
    });

    const response = await fetchCapsules();
    expect(response).toEqual({ capsules: "mock capsule data" });

    // Assert that fetch was called with the expected URL
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api.php");
  });

  // Test case: Unsuccessful API call
  it("fetches erroneously from an API", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(fetchCapsules()).rejects.toThrow("API request failed");
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api.php");
  });
});
