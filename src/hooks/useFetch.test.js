import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import useFetch from "./useFetch";

jest.mock("axios");

const mockData = {
  data: [
    {
      temp: "19",
    },
  ],
};

describe("useFetch", () => {
  it("should return hooks success response", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    const setUpHook = () => renderHook(() => useFetch("__URL__"));
    const { result, waitForNextUpdate } = setUpHook();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toBeNull();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toStrictEqual(mockData.data);
  });
  it("should return error when API fails", async () => {
    axios.get = jest.fn(() => Promise.reject("Error"));
    const setUpHook = () => renderHook(() => useFetch("__URL__"));
    const { result, waitForNextUpdate } = setUpHook();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe("Error");
  });
});
