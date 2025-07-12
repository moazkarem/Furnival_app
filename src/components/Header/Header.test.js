import { render, screen } from "@testing-library/react";
import Header from "./Header";
test("test header component", () => {
  render(<Header />);
  const headTest = screen.getByText("hello moaz");
  expect(headTest).toBeInTheDocument();
});
