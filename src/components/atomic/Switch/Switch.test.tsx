import { render, screen, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch component", () => {
  const labelText = "Testing label.";

  it("renders switch with label text", () => {
    render(<Switch>{labelText}</Switch>);

    const el = screen.getByRole("checkbox", { name: labelText });

    expect(el).toBeInTheDocument();
  });

  it("doesn't cause duplicate calls", () => {
    const onChangeHandlerMock = jest.fn();
    const onClickHandlerMock = jest.fn();

    render(
      <Switch onChange={onChangeHandlerMock} onClick={onClickHandlerMock} />,
    );
    const el = screen.getByRole("checkbox");

    fireEvent.click(el);

    expect(onChangeHandlerMock).toBeCalledTimes(1);
    expect(onClickHandlerMock).toBeCalledTimes(1);

    fireEvent.click(el);

    expect(onChangeHandlerMock).toBeCalledTimes(2);
    expect(onClickHandlerMock).toBeCalledTimes(2);
  });

  it("can be disabled", () => {
    const handlerMock = jest.fn();

    render(<Switch disabled onClick={handlerMock} />);

    const el = screen.getByRole("checkbox");

    expect(el).toBeDisabled();

    fireEvent.click(el);

    expect(handlerMock).toBeCalledTimes(0);
  });
});
