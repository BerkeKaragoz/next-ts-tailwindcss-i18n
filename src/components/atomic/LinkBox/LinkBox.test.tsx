import { fireEvent, render, screen } from "@testing-library/react";
import LinkBox from "./LinkBox";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createRouterMock } from "@/__mocks__/createRouter.mock";

describe("LinkText", () => {
  const msg = "Testing message.";
  const href = "/testing";
  const router = createRouterMock({ pathname: "/" });

  it("renders the contents", () => {
    render(
      <LinkBox href={href}>
        <div>{msg}</div>
      </LinkBox>,
    );

    const el = screen.getByRole("link", { hidden: true });

    expect(el).toHaveTextContent(msg);
    expect(el).toHaveAttribute("href", href);
  });

  it("link routes correctly", () => {
    render(
      <RouterContext.Provider value={router}>
        <LinkBox href={href}>{msg}</LinkBox>
      </RouterContext.Provider>,
    );

    const el = screen.getByText(msg);

    fireEvent.click(el);

    expect(router.push).toHaveBeenCalledTimes(1);
    //expect(router.push).toHaveBeenCalledWith("href"); //TODO
  });
});
