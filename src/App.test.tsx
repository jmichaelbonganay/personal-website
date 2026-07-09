import { fireEvent, render, screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import App from "./App";

describe("Portfolio landing page", () => {
  const styles = readFileSync(resolve(process.cwd(), "src/styles.css"), "utf8");

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

  it("uses cursor affordances for clickable and disabled controls", () => {
    expect(styles).toMatch(/:where\(a,\s*button,\s*\[role="button"\],\s*summary\)/);
    expect(styles).toMatch(/cursor:\s*pointer/);
    expect(styles).toMatch(/:where\(button,\s*\[role="button"\]\):disabled/);
    expect(styles).toMatch(/cursor:\s*not-allowed/);
  });

  it("adds a softened radius system to containers without rounding every control", () => {
    expect(styles).toMatch(/--radius-container:\s*8px/);
    expect(styles).toMatch(/\.theme-shell\s+:where\(\.portrait-frame,\s*article,\s*\[role="dialog"\]\)/);
    expect(styles).toMatch(/border-radius:\s*var\(--radius-container\)/);
    expect(styles).not.toMatch(/--radius-control/);
    expect(styles).not.toMatch(/border-radius:\s*var\(--radius-control\)/);
  });

  it("introduces John Michael Bonganay in the hero section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /john michael bonganay/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/landing page developer\/web designer/i)
    ).toBeInTheDocument();
  });

  it("keeps the hero clean and moves LinkedIn to the contact area", () => {
    render(<App />);

    const introSection = document.querySelector("#intro") as HTMLElement;
    const contactSection = screen
      .getByRole("heading", { name: /04 - contact/i })
      .closest("section") as HTMLElement;

    expect(within(introSection).queryByRole("link", { name: /^work$/i })).not.toBeInTheDocument();
    expect(
      within(introSection).queryByRole("link", { name: /^capabilities$/i })
    ).not.toBeInTheDocument();
    expect(within(introSection).queryByRole("link", { name: /^experience$/i })).not.toBeInTheDocument();
    expect(within(introSection).queryByRole("link", { name: /^contact$/i })).not.toBeInTheDocument();
    expect(within(introSection).queryByRole("link", { name: /linkedin/i })).not.toBeInTheDocument();

    const linkedinLink = within(contactSection).getByRole("link", { name: /linkedin profile/i });

    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/john-michael-bonganay-802950167/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noreferrer");
  });

  it("shows an honest live availability snapshot in the hero section", () => {
    render(<App />);

    const introSection = document.querySelector("#intro");

    expect(introSection).not.toBeNull();
    expect(
      within(introSection as HTMLElement).getByText(/available for 1-2 landing page builds this month/i)
    ).toBeInTheDocument();
    expect(
      within(introSection as HTMLElement).getByRole("link", { name: /check availability/i })
    ).toHaveAttribute("href", "#contact");
  });

  it("places project slots in the desktop sidebar with a mobile hero fallback", () => {
    render(<App />);

    const sidebar = document.querySelector("aside");
    const introSection = document.querySelector("#intro");
    const mobileSlotsFallback = introSection?.querySelector(".md\\:hidden");

    expect(sidebar).not.toBeNull();
    expect(introSection).not.toBeNull();
    expect(mobileSlotsFallback).not.toBeNull();

    expect(within(sidebar as HTMLElement).getByText(/^project slots$/i)).toBeInTheDocument();
    expect(within(sidebar as HTMLElement).getByText("2 open")).toBeInTheDocument();
    expect(within(sidebar as HTMLElement).getByText("4 total")).toBeInTheDocument();

    expect(
      within(mobileSlotsFallback as HTMLElement).getByText(/^project slots$/i)
    ).toBeInTheDocument();
    expect(within(mobileSlotsFallback as HTMLElement).getByText("2 open")).toBeInTheDocument();
    expect(within(mobileSlotsFallback as HTMLElement).getByText("4 total")).toBeInTheDocument();
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

  it("adds an interactive conversion page checklist above the stack", () => {
    render(<App />);

    const capabilitiesSection = screen
      .getByRole("heading", { name: /02 - capabilities/i })
      .closest("section") as HTMLElement;

    expect(
      within(capabilitiesSection).getByRole("heading", { name: /conversion page checklist/i })
    ).toBeInTheDocument();

    const offerButton = within(capabilitiesSection).getByRole("button", {
      name: /clear above-the-fold offer/i
    });

    fireEvent.click(offerButton);

    expect(offerButton).toHaveAttribute("aria-expanded", "true");
    expect(
      within(capabilitiesSection).getByText(/visitors should understand the product/i)
    ).toBeInTheDocument();

    const ctaButton = within(capabilitiesSection).getByRole("button", {
      name: /strong cta path/i
    });

    fireEvent.click(ctaButton);

    expect(ctaButton).toHaveAttribute("aria-expanded", "true");
    expect(
      within(capabilitiesSection).getByText(/every section should make the next action obvious/i)
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).queryByText(/visitors should understand the product/i)
    ).not.toBeInTheDocument();
  });

  it("lets visitors switch weak copy into conversion-focused copy", () => {
    render(<App />);

    const capabilitiesSection = screen
      .getByRole("heading", { name: /02 - capabilities/i })
      .closest("section") as HTMLElement;

    expect(
      within(capabilitiesSection).getByRole("heading", { name: /before \/ after copy switcher/i })
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).getByText(/we sell a pet toy that dogs can play with/i)
    ).toBeInTheDocument();

    fireEvent.click(within(capabilitiesSection).getByRole("button", { name: /^after$/i }));

    expect(within(capabilitiesSection).getByRole("button", { name: /^after$/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(
      within(capabilitiesSection).getByText(/keep your dog entertained and anxiety-free/i)
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).queryByText(/we sell a pet toy that dogs can play with/i)
    ).not.toBeInTheDocument();

    fireEvent.click(within(capabilitiesSection).getByRole("button", { name: /supplement page example/i }));

    expect(
      within(capabilitiesSection).getByText(/support natural cleansing with ethiopian black seed oil/i)
    ).toBeInTheDocument();
  });

  it("helps visitors choose a build type and generate sharper CTA copy", () => {
    render(<App />);

    const capabilitiesSection = screen
      .getByRole("heading", { name: /02 - capabilities/i })
      .closest("section") as HTMLElement;

    expect(
      within(capabilitiesSection).getByRole("heading", { name: /build type selector/i })
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).getByText(/shopify product page/i)
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).getByText(/offer hierarchy, product proof, sticky cta flow/i)
    ).toBeInTheDocument();

    fireEvent.click(within(capabilitiesSection).getByRole("button", { name: /advertorial/i }));

    expect(
      within(capabilitiesSection).getByText(/story-led advertorial/i)
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).getByText(/angle, education flow, proof placement, and bridge to checkout/i)
    ).toBeInTheDocument();

    expect(
      within(capabilitiesSection).getByRole("heading", { name: /cta copy generator/i })
    ).toBeInTheDocument();
    expect(
      within(capabilitiesSection).getByText(/get a product page that turns more visitors into buyers/i)
    ).toBeInTheDocument();

    fireEvent.click(within(capabilitiesSection).getByRole("button", { name: /service business cta/i }));

    expect(
      within(capabilitiesSection).getByText(/book a clearer landing page plan/i)
    ).toBeInTheDocument();
  });

  it("toggles sticky conversion strategy notes across the page", () => {
    render(<App />);

    expect(screen.queryByText(/strategy note: hero/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/strategy note: work/i)).not.toBeInTheDocument();

    const showNotesButton = screen.getByRole("button", { name: /show strategy notes/i });

    fireEvent.click(showNotesButton);

    expect(screen.getByRole("button", { name: /hide strategy notes/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByText(/strategy note: hero/i)).toBeInTheDocument();
    expect(screen.getByText(/strategy note: work/i)).toBeInTheDocument();
    expect(screen.getByText(/strategy note: capabilities/i)).toBeInTheDocument();
    expect(screen.getByText(/strategy note: contact/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /hide strategy notes/i }));

    expect(screen.getByRole("button", { name: /show strategy notes/i })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
    expect(screen.queryByText(/strategy note: hero/i)).not.toBeInTheDocument();
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

  it("lets visitors run a compact landing page health check before contacting", () => {
    render(<App />);

    const contactSection = screen
      .getByRole("heading", { name: /04 - contact/i })
      .closest("section") as HTMLElement;

    expect(
      within(contactSection).getByRole("heading", { name: /landing page health check/i })
    ).toBeInTheDocument();
    expect(
      within(contactSection).getByText(/best fit: conversion-focused landing page rebuild/i)
    ).toBeInTheDocument();
    expect(
      within(contactSection).getByText(/hero message, offer clarity, CTA flow, and mobile polish/i)
    ).toBeInTheDocument();

    fireEvent.click(within(contactSection).getByRole("button", { name: /stronger cta/i }));

    expect(
      within(contactSection).getByText(/best fit: CTA and offer path tune-up/i)
    ).toBeInTheDocument();
    expect(
      within(contactSection).getByText(/hero promise, repeated CTA points, and low-friction contact path/i)
    ).toBeInTheDocument();
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
    expect(
      within(workSection as HTMLElement).getByText(
        /scroll down to the compact archive section for more projects/i
      )
    ).toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).queryByText(/keep the top of the portfolio curated/i)
    ).not.toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).queryByText(/add future projects here/i)
    ).not.toBeInTheDocument();

    const featuredProjects = within(workSection as HTMLElement).getAllByTestId("featured-project-card");
    const visibleArchiveProjects = within(workSection as HTMLElement).getAllByTestId("archive-project-row");

    expect(featuredProjects).toHaveLength(3);
    expect(visibleArchiveProjects).toHaveLength(6);
    expect(
      within(workSection as HTMLElement).getByRole("heading", { name: "Vista Veil" })
    ).toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).queryByRole("heading", { name: "Zoomie Zoom" })
    ).not.toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).queryByText(/details soon/i)
    ).not.toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).getByText(/showing 1-6 of 27 builds/i)
    ).toBeInTheDocument();
    expect((workSection as HTMLElement).querySelector(".archive-list")).toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).getByRole("button", { name: /previous archive page/i })
    ).toBeDisabled();
    expect(
      within(workSection as HTMLElement).getByRole("button", { name: /archive page 1/i })
    ).toHaveAttribute("aria-current", "page");

    const vistaVeilLink = within(workSection as HTMLElement)
      .getAllByRole("link", { name: /view/i })
      .find((link) =>
        link.getAttribute("href") ===
        "https://tryvistaveil.com/products/vistaveil-anti-aging"
    );

    expect(vistaVeilLink).toBeInTheDocument();

    fireEvent.click(within(workSection as HTMLElement).getByRole("button", { name: /next archive page/i }));

    expect(within(workSection as HTMLElement).getAllByTestId("archive-project-row")).toHaveLength(6);
    expect(
      within(workSection as HTMLElement).queryByRole("heading", { name: "Vista Veil" })
    ).not.toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).getByRole("heading", { name: "Skeeter Strike" })
    ).toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).getByText(/showing 7-12 of 27 builds/i)
    ).toBeInTheDocument();

    fireEvent.click(within(workSection as HTMLElement).getByRole("button", { name: /archive page 5/i }));

    expect(within(workSection as HTMLElement).getAllByTestId("archive-project-row")).toHaveLength(3);
    expect((workSection as HTMLElement).querySelectorAll("[data-archive-slot='true']")).toHaveLength(6);
    expect(within(workSection as HTMLElement).getAllByTestId("archive-project-placeholder")).toHaveLength(3);
    expect(
      within(workSection as HTMLElement).getByRole("heading", { name: "Eye Ease Advertorial" })
    ).toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).getByText(/showing 25-27 of 27 builds/i)
    ).toBeInTheDocument();
    expect(
      within(workSection as HTMLElement).getByRole("button", { name: /next archive page/i })
    ).toBeDisabled();
  });

  it("opens and closes a featured project quick preview", () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: /quick preview/i })[0]);

    expect(
      screen.getByRole("dialog", { name: /barkchester united shopify product page/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/conversion focus/i)).toBeInTheDocument();
    expect(
      screen.getByText(/make the pet product offer easier to understand/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open live site/i })).toHaveAttribute(
      "href",
      "https://barkchester.com/products/discount"
    );

    fireEvent.click(screen.getByRole("button", { name: /close project preview/i }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("filters the compact archive and resets pagination", () => {
    render(<App />);

    const workSection = screen
      .getByRole("heading", { name: /01 - selected work/i })
      .closest("section") as HTMLElement;

    fireEvent.click(within(workSection).getByRole("button", { name: /next archive page/i }));

    expect(within(workSection).getByText(/showing 7-12 of 27 builds/i)).toBeInTheDocument();

    fireEvent.click(within(workSection).getByRole("button", { name: /wordpress filter/i }));

    expect(within(workSection).getByText(/showing 1-5 of 5 builds/i)).toBeInTheDocument();
    expect(within(workSection).getByRole("heading", { name: "Aqua Blast" })).toBeInTheDocument();
    expect(
      within(workSection).queryByRole("heading", { name: "Vista Veil" })
    ).not.toBeInTheDocument();
    expect(within(workSection).getByRole("button", { name: /archive page 1/i })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(within(workSection).getByRole("button", { name: /wordpress filter/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("toggles selected work between clean mode and proof mode", () => {
    render(<App />);

    const workSection = screen
      .getByRole("heading", { name: /01 - selected work/i })
      .closest("section") as HTMLElement;

    expect(within(workSection).queryByText(/conversion focus/i)).not.toBeInTheDocument();

    fireEvent.click(within(workSection).getByRole("button", { name: /proof mode/i }));

    expect(within(workSection).getAllByText(/conversion focus/i).length).toBeGreaterThan(0);
    expect(
      within(workSection).getByText(/make the pet product offer easier to understand/i)
    ).toBeInTheDocument();
    expect(within(workSection).getByRole("button", { name: /proof mode/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );

    fireEvent.click(within(workSection).getByRole("button", { name: /clean mode/i }));

    expect(
      within(workSection).queryByText(/make the pet product offer easier to understand/i)
    ).not.toBeInTheDocument();
  });

  it("guides visitors through proof mode layers", () => {
    render(<App />);

    const workSection = screen
      .getByRole("heading", { name: /01 - selected work/i })
      .closest("section") as HTMLElement;

    expect(
      within(workSection).queryByRole("heading", { name: /proof mode guided tour/i })
    ).not.toBeInTheDocument();

    fireEvent.click(within(workSection).getByRole("button", { name: /proof mode/i }));

    expect(
      within(workSection).getByRole("heading", { name: /proof mode guided tour/i })
    ).toBeInTheDocument();
    expect(within(workSection).getByRole("button", { name: /offer tour step/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(
      within(workSection).getByText(/lead with the clearest promise/i)
    ).toBeInTheDocument();

    fireEvent.click(within(workSection).getByRole("button", { name: /cta tour step/i }));

    expect(within(workSection).getByRole("button", { name: /cta tour step/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(
      within(workSection).getByText(/make the next action impossible to miss/i)
    ).toBeInTheDocument();
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
