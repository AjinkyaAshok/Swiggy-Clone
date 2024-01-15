import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should get the input box for search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCard = screen.getAllByTestId("resCard");
  expect(resCard.length).toBe(20);

  const searchBox = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchBox, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const resCardAfter = screen.getAllByTestId("resCard");
  expect(resCardAfter.length).toBe(2);
});
