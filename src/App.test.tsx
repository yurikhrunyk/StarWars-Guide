
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders select type dropdown", () => {
  render(<App />);
  const select = screen.getByRole("option", { name: "Select type" });

  expect(select).toBeInTheDocument();
});

test("renders select name dropdown", async () => {
  render(<App />);

  const selectType = screen.getByRole("combobox");
  userEvent.selectOptions(selectType, "People");
  expect(
    (screen.getByRole("option", { name: "People" }) as HTMLOptionElement)
      .selected
  ).toBeTruthy();

  const selectName = await screen.findByRole("option", {
    name: "Luke Skywalker",
  });
  expect(selectName).toBeInTheDocument();
});

test("should render img after selecting name", async () => {
  render(<App />);

  const selectType = screen.getByRole("combobox");
  userEvent.selectOptions(selectType, "People");
  expect(
    (screen.getByRole("option", { name: "People" }) as HTMLOptionElement)
      .selected
  ).toBeTruthy();

  const selectName = await screen.findByRole("option", {
    name: "Luke Skywalker",
  });
  expect(selectName).toBeInTheDocument();

  const nameList = await screen.findByTestId("name-list");
  userEvent.selectOptions(nameList, "C-3P0");

  const img = await screen.findByRole('img')
  expect(img).toBeInTheDocument()
});
