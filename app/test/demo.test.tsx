import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
// import Demo2 from "../components/demo2";
import Demo from "../components/demo";
import Demo3 from "../components/demo3";
import Demo4 from "../components/demo4";
import Demo5 from "../components/demo5";
import "jest-fetch-mock";

it("test demo1", () => {
  render(<Demo />);
  expect(screen.getByText("Demo")).toBeInTheDocument();

  expect(screen.getByTestId("buttonSubmit")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByText("link")).not.toBeDisabled(); // enabled
});

// it("render demo2", () => {
//   render(<Demo2 />);

//   //   screen.debug();
//   const textInput = screen.getByTestId("input-text");
//   const numberInput = screen.getByTestId("input-number");
//   const emptyInput = screen.getByTestId("input-empty");
//   const selectInput = screen.getByTestId("select-number");

//   expect(textInput).toHaveValue("text");
//   expect(numberInput).toHaveValue(5);
//   expect(emptyInput).not.toHaveValue();
//   expect(selectInput).toHaveValue(["second", "third", "fourth"]);
// });

it("test demo3", () => {
  render(<Demo3 />);

  expect(screen.getAllByTestId("item").length).toBe(4);
});

it("test demo4", () => {
  render(<Demo4 />);

  expect(screen.getByTestId("button")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("button"));

  expect(screen.getAllByTestId("li").length).toBe(2);

  //   reset
  expect(screen.getByTestId("buttonReset")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("buttonReset"));

  expect(screen.queryByTestId("li")).not.toBeInTheDocument();
});

it("test demo5", async () => {
  const mockData = [
    {
      createdAt: "2024-07-24T16:53:45.020Z",
      name: "karin",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
      id: "1",
    },
  ];
  const axiosMock = jest.spyOn(axios, "get").mockImplementation((url) => {
    return Promise.resolve({
      data: mockData,
    });
  });

  render(<Demo5 />);

  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(await screen.findByText("karin")).toBeInTheDocument();

  expect(axios.get).toHaveBeenCalled();

  axiosMock.mockClear();
});
