import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //3 saker
    //Arange - set up test,
    render(<Greeting />);

    //act - do the thing we want to test,

    //Assert - se om de blir som vi förväntat oss
    const helloWorlElement = screen.getByText("Hello World");
    expect(helloWorlElement).toBeInTheDocument();
  });

  test("renders good to see you if the btn was Not clicked", () => {
    render(<Greeting />);
    const outputlElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputlElement).toBeInTheDocument();
  });

  //testar user interaction & state changes
  test("renders Changed! if the button was clicked", () => {
    render(<Greeting />);

    //act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const outputlElement = screen.getByText("Changed");
    expect(outputlElement).toBeInTheDocument();
  });

  test("does not render good too see you if btn was clicked", () => {
    render(<Greeting />);

    //act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const outputlElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputlElement).toBeNull();
  });
});
