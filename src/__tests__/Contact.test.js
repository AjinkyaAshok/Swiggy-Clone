import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page Tests", () => {
  it("should render a conatact page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("should get button text", () => {
    render(<Contact />);

    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });
  it("should get input", () => {
    render(<Contact />);

    const text = screen.getByPlaceholderText("Name");
    expect(text).toBeInTheDocument();
  });
  it("should get 2 input boxes", () => {
    render(<Contact />);

    const text = screen.getAllByRole("textbox");
    expect(text.length).toBe(2);
  });
});
