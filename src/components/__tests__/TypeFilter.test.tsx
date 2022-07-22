import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TypeFilter } from "../TypeFilter";

test("should render dropdown", () => {
  render(<TypeFilter typeSetHandler={() => {}} />);

  const typesList = screen.getByRole("combobox");
  expect(typesList).toBeInTheDocument();
});

test("should render dropdown with 2 names", () => {
  render(<TypeFilter typeSetHandler={() => {}} />);

  const optionsList = screen.getAllByRole("option");
  expect(optionsList).toHaveLength(4);
});

test("should show selected item", () => {
  render(<TypeFilter typeSetHandler={() => {}} />);

  const typesList = screen.getByRole("combobox");
  userEvent.selectOptions(typesList, "Planets");
  const selectedOption = screen.getByRole("option", {
    name: "Planets",
  }) as HTMLOptionElement;
  expect(selectedOption.selected).toBeTruthy();
});
