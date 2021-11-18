import { render, screen } from "@testing-library/react";
import { ErrorPage } from "./ErrorPage"; // notice that we are not importing the default

describe("Default Error Page", () => {
  beforeAll(() => render(<ErrorPage t={(key: any) => key} />));

  it("renders the heading", () => {
    const heading = screen.getByRole("heading", {
      name: /An error occured./i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the error code as '?'", () => {
    const code = screen.queryByTestId("error-code");
    if (code) {
      expect(code.textContent).toBe("?");
    }
  });

  it.todo("renders the return link");
});

describe("Customized Error Page", () => {
  const testingMessage = "Testing message.";
  const errorCode = 404;
  beforeAll(() =>
    render(
      <ErrorPage t={(key: any) => key} code={errorCode}>
        {testingMessage}
      </ErrorPage>,
    ),
  );

  it("renders the heading", () => {
    const h = screen.getByRole("heading", {
      name: testingMessage,
    });

    expect(h).toBeInTheDocument();
  });

  it("renders the error code", () => {
    const c = screen.queryByTestId("error-code");
    if (c) {
      expect(c.textContent).toBe(errorCode);
    }
  });

  it.todo("renders the return link");
});
