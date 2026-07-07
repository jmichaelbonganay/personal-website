import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Portfolio landing page", () => {
  it("renders the core one-page portfolio structure", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /portfolio landing page/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /01 - selected work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /02 - capabilities/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /03 - experience/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /04 - contact/i })).toBeInTheDocument();
  });

  it("provides clear navigation landmarks for the landing page sections", () => {
    render(<App />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });

    expect(primaryNav).toBeInTheDocument();
    expect(within(primaryNav).getByRole("link", { name: /work/i })).toHaveAttribute(
      "href",
      "#work"
    );
    expect(within(primaryNav).getByRole("link", { name: /contact/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
