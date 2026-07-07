import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Portfolio landing page", () => {
  it("renders the core one-page portfolio structure", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /john michael bonganay/i })
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

  it("introduces John Michael Bonganay in the hero section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /john michael bonganay/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/landing page developer\/web designer/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/john-michael-bonganay-802950167/"
    );
  });

  it("shows John Michael Bonganay's portrait in the hero section", () => {
    render(<App />);

    expect(
      screen.getByRole("img", { name: /john michael bonganay portrait/i })
    ).toHaveAttribute("src", "/images/john-michael-bonganay.png");
  });

  it("keeps the portrait in its original color", () => {
    render(<App />);

    expect(
      screen.getByRole("img", { name: /john michael bonganay portrait/i })
    ).not.toHaveClass("grayscale");
  });

  it("summarizes John Michael's portfolio metrics", () => {
    render(<App />);

    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("Projects shipped")).toBeInTheDocument();
    expect(screen.getByText("4+ yrs")).toBeInTheDocument();
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("Core skills")).toBeInTheDocument();
  });

  it("keeps the portfolio metrics closer to the hero section", () => {
    render(<App />);

    const introSection = document.querySelector("#intro");

    expect(introSection).toHaveClass("min-h-[86vh]");
    expect(introSection).not.toHaveClass("min-h-screen");
  });

  it("highlights the most important stack from John Michael's resume", () => {
    render(<App />);

    const capabilitiesSection = screen
      .getByRole("heading", { name: /02 - capabilities/i })
      .closest("section");

    expect(capabilitiesSection).not.toBeNull();

    [
      "WordPress",
      "Elementor",
      "Shopify",
      "GoHighLevel",
      "Figma",
      "HTML/CSS",
      "JavaScript",
      "Zapier / Make"
    ].forEach((stackItem) => {
      expect(within(capabilitiesSection as HTMLElement).getByText(stackItem)).toBeInTheDocument();
    });

    expect(within(capabilitiesSection as HTMLElement).getByText(/^stack$/i)).toBeInTheDocument();
    expect(
      within(capabilitiesSection as HTMLElement).queryByText(/resume stack/i)
    ).not.toBeInTheDocument();
    expect(within(capabilitiesSection as HTMLElement).queryByText("Tailwind CSS")).not.toBeInTheDocument();
  });

  it("uses icons instead of dash markers in the primary sidebar navigation", () => {
    render(<App />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });
    const navLinks = within(primaryNav).getAllByRole("link");

    expect(navLinks).toHaveLength(5);
    navLinks.forEach((link) => {
      expect(link.querySelector("svg[aria-hidden='true']")).toBeInTheDocument();
      expect(link.querySelector("span.h-px")).not.toBeInTheDocument();
    });
  });

  it("replaces the sidebar placeholder with a focused availability note", () => {
    render(<App />);

    expect(
      screen.getByText(/building conversion-focused pages that turn visitors into leads, buyers, and booked calls/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/start a conversation/i)).toBeInTheDocument();
    expect(screen.queryByText(/content placeholders are ready/i)).not.toBeInTheDocument();
  });

  it("lets visitors switch between light and dark mode", () => {
    const { container } = render(<App />);

    const page = container.firstElementChild;

    expect(page).toHaveAttribute("data-theme", "light");

    fireEvent.click(screen.getAllByRole("button", { name: /switch to dark mode/i })[0]);

    expect(page).toHaveAttribute("data-theme", "dark");
    expect(screen.getAllByRole("button", { name: /switch to light mode/i }).length).toBeGreaterThan(0);

    fireEvent.click(screen.getAllByRole("button", { name: /switch to light mode/i })[0]);

    expect(page).toHaveAttribute("data-theme", "light");
  });

  it("adds a subtle motion treatment to theme switching", () => {
    const { container } = render(<App />);

    const page = container.firstElementChild;
    const darkToggle = screen.getAllByRole("button", { name: /switch to dark mode/i })[0];

    expect(page).toHaveClass("theme-shell");
    expect(page).toHaveAttribute("data-theme-motion", "0");
    expect(darkToggle).toHaveClass("theme-toggle");
    expect(darkToggle.querySelector(".theme-toggle-icon")).toBeInTheDocument();
    expect(darkToggle.querySelector(".theme-toggle-flash")).toBeInTheDocument();

    fireEvent.click(darkToggle);

    const lightToggle = screen.getAllByRole("button", { name: /switch to light mode/i })[0];

    expect(page).toHaveAttribute("data-theme-motion", "1");
    expect(lightToggle.querySelector(".theme-toggle-icon")).toBeInTheDocument();
    expect(lightToggle.querySelector(".theme-toggle-flash")).toBeInTheDocument();
  });

  it("fills the experience timeline with resume-backed entries", () => {
    render(<App />);

    const experienceSection = screen
      .getByRole("heading", { name: /03 - experience/i })
      .closest("section");

    expect(experienceSection).not.toBeNull();

    expect(
      within(experienceSection as HTMLElement).getAllByRole("heading", {
        name: /landing page developer \/ web designer/i
      })
    ).toHaveLength(2);
    expect(within(experienceSection as HTMLElement).getByText("Cherrington Media")).toBeInTheDocument();
    expect(within(experienceSection as HTMLElement).getByText("April 2023 - April 2026")).toBeInTheDocument();
    expect(
      within(experienceSection as HTMLElement).getByText(/shopify product pages/i)
    ).toBeInTheDocument();

    expect(within(experienceSection as HTMLElement).getByText("Nest Marketing")).toBeInTheDocument();
    expect(within(experienceSection as HTMLElement).getByText("2022 - 2023")).toBeInTheDocument();
    expect(
      within(experienceSection as HTMLElement).getByText(/figma and sketch/i)
    ).toBeInTheDocument();

    expect(
      within(experienceSection as HTMLElement).getByRole("heading", {
        name: /bachelor of science in information technology/i
      })
    ).toBeInTheDocument();
    expect(
      within(experienceSection as HTMLElement).getByText("Bicol University College of Science")
    ).toBeInTheDocument();
    expect(within(experienceSection as HTMLElement).queryByText(/Portfolio foundation/i)).not.toBeInTheDocument();
  });

  it("uses resume-backed contact details and email", () => {
    render(<App />);

    const contactSection = screen
      .getByRole("heading", { name: /04 - contact/i })
      .closest("section");

    expect(contactSection).not.toBeNull();

    expect(
      within(contactSection as HTMLElement).getByText(/available for landing page and automation work/i)
    ).toBeInTheDocument();
    expect(
      within(contactSection as HTMLElement).getByRole("heading", {
        name: /let's build a cleaner landing page, funnel, or workflow for your next launch/i
      })
    ).toBeInTheDocument();
    expect(within(contactSection as HTMLElement).getByText(/tabaco city, philippines/i)).toBeInTheDocument();
    expect(within(contactSection as HTMLElement).getByText(/full-time \/ flexible across us, uk, and au time zones/i)).toBeInTheDocument();

    const emailLink = within(contactSection as HTMLElement).getByRole("link", {
      name: /johnmichaelbonganay1231@gmail\.com/i
    });

    expect(emailLink).toHaveAttribute("href", "mailto:johnmichaelbonganay1231@gmail.com");
    expect(within(contactSection as HTMLElement).queryByText("hello@example.com")).not.toBeInTheDocument();
  });

  it("features the Barkchester Shopify product page as the first project", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /barkchester united shopify product page/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /barkchester united product page preview/i })
    ).toHaveAttribute("src", "/images/projects/barkchester-united.webp");
    expect(screen.getByText(/shopify liquid/i)).toBeInTheDocument();
    const liveSiteLink = screen
      .getAllByRole("link", { name: /visit live site/i })
      .find((link) => link.getAttribute("href") === "https://barkchester.com/products/discount");

    expect(liveSiteLink).toBeInTheDocument();
    expect(liveSiteLink).toHaveAttribute(
      "href",
      "https://barkchester.com/products/discount"
    );
    expect(liveSiteLink).toHaveAttribute("target", "_blank");
    expect(liveSiteLink).toHaveAttribute("rel", "noreferrer");
  });

  it("structures selected work as featured projects plus a compact archive", () => {
    render(<App />);

    const workSection = screen
      .getByRole("heading", { name: /01 - selected work/i })
      .closest("section");

    expect(workSection).not.toBeNull();
    expect(within(workSection as HTMLElement).getByText(/featured projects/i)).toBeInTheDocument();
    expect(within(workSection as HTMLElement).getByText(/more builds/i)).toBeInTheDocument();

    const featuredProjects = within(workSection as HTMLElement).getAllByTestId("featured-project-card");
    const archiveProjects = within(workSection as HTMLElement).getAllByTestId("archive-project-row");

    expect(featuredProjects).toHaveLength(3);
    expect(archiveProjects).toHaveLength(4);
    expect(
      within(workSection as HTMLElement).getAllByText(/future project slot/i)
    ).toHaveLength(4);
    expect(
      within(workSection as HTMLElement).getAllByText(/details soon/i).length
    ).toBeGreaterThan(0);
  });

  it("features the Nest Marketing Netlify agency website project", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /nest marketing netlify agency website/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /nest marketing agency website preview/i })
    ).toHaveAttribute("src", "/images/projects/nest-marketing-netlify.webp");
    expect(screen.getAllByText(/netlify/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/custom code/i).length).toBeGreaterThan(0);

    const liveSiteLinks = screen.getAllByRole("link", { name: /visit live site/i });
    const nestLiveSiteLink = liveSiteLinks.find(
      (link) => link.getAttribute("href") === "https://nestmarketing.co/"
    );

    expect(nestLiveSiteLink).toBeInTheDocument();
    expect(nestLiveSiteLink).toHaveAttribute("target", "_blank");
    expect(nestLiveSiteLink).toHaveAttribute("rel", "noreferrer");
  });

  it("features the Purely Nutrient Shopify landing page project", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /purely nutrient black seed oil landing page/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /purely nutrient black seed oil page preview/i })
    ).toHaveAttribute("src", "/images/projects/purely-nutrient.webp");
    expect(screen.getAllByText(/gem pages/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/liquid code/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/4\.8\/5 from 4,463 reviews/i)).toBeInTheDocument();

    const liveSiteLinks = screen.getAllByRole("link", { name: /visit live site/i });
    const purelyLiveSiteLink = liveSiteLinks.find(
      (link) =>
        link.getAttribute("href") ===
        "https://purelynutrient.com/pages/ethiopian-black-seed-oil"
    );

    expect(purelyLiveSiteLink).toBeInTheDocument();
    expect(purelyLiveSiteLink).toHaveAttribute("target", "_blank");
    expect(purelyLiveSiteLink).toHaveAttribute("rel", "noreferrer");
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
