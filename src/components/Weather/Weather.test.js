import { cleanup, render } from "@testing-library/react";
import React from "react";
import { weather as mockData } from "__mock__/weather";
import { useFetch } from "../../hooks/useFetch";
import Weather from "./Weather";

jest.mock("../../hooks/useFetch");

afterEach(cleanup);

describe("<Weather/>", () => {
  it("renders Weather correctly", () => {
    useFetch.mockReturnValue({
      loading: false,
      data: mockData,
    });
    const { asFragment } = render(<Weather position={{ lat: 1, lon: 3 }} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should show Loader during async call", () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null,
    });
    const { asFragment } = render(<Weather position={{ lat: 1, lon: 3 }} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should show error message if there is a API error", () => {
    useFetch.mockReturnValue({
      loading: true,
      error: "Error",
    });
    const { asFragment } = render(<Weather position={{ lat: 1, lon: 3 }} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
