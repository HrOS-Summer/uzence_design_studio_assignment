import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "./Navbar";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false, // or true if you want to default to dark mode
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});



describe("Navbar", () => {
  it("renders username", () => {
    render(<Navbar />);
    expect(screen.getByText(/john_doe/i)).toBeInTheDocument();
  });

  it("toggles dark mode", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /toggle dark mode/i });
    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
