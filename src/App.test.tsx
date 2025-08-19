import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import App from "./App";

describe("App", () => {
  it("renders navbar", () => {
    render(<App />);
    expect(screen.getByText(/Wealth Manager/i)).toBeInTheDocument();
  });

  it("renders input field", () => {
    render(<App />);
    expect(screen.getByLabelText(/Filter by Name or Sector/i)).toBeInTheDocument();
  });

  it("renders data table", () => {
    render(<App />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
