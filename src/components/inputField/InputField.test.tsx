import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders with label", () => {
    render(<InputField label="Test Label" value="" onChange={() => {}} />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("updates value", () => {
    const handleChange = jest.fn();
    render(<InputField value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("shows error message", () => {
    render(<InputField value="x" onChange={() => {}} invalid errorMessage="Error" />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
