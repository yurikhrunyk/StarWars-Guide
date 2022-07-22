import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModelFilter } from "../ModelFilter";

const defaultProps: any = {
  names: [{ name: "Luke Skywalker" }, { name: "C-3P0" }],
  nameSetHandler: () => {},
};

test("should render dropdown", () => {
  render(<ModelFilter {...defaultProps} />);

  const namesList = screen.getByRole("combobox");
  expect(namesList).toBeInTheDocument();
});

test("should render dropdown with 2 names", () => {
  render(<ModelFilter {...defaultProps} />);

  const optionsList = screen.getAllByRole("option");
  expect(optionsList).toHaveLength(3);
});

test("should show selected item", () => {
  render(<ModelFilter {...defaultProps} />);

  const namesList = screen.getByRole("combobox");
  userEvent.selectOptions(namesList, "Luke Skywalker");
  const selectedOption = screen.getByRole("option", {
    name: "Luke Skywalker",
  }) as HTMLOptionElement;
  expect(selectedOption.selected).toBeTruthy();
});
