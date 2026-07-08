# Work Section Interactions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add project quick previews, archive filters, and Clean/Proof mode to the portfolio selected work section.

**Architecture:** Keep the implementation in the existing React/Tailwind landing page. Extend the featured project data with optional strategy fields, derive filtered archive rows from component state, and render a click-driven modal for project previews.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Vitest, Testing Library.

## Global Constraints

- Quick preview opens a `dialog` with an accessible name.
- Modal close button is keyboard reachable.
- Filter buttons expose active state with `aria-pressed`.
- Build mode buttons expose active state with `aria-pressed`.
- Filtering resets archive pagination to page 1.
- Clean mode hides proof details; Proof mode reveals them.

---

### Task 1: Add Interaction Tests

**Files:**
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: Existing `<App />` rendering and Testing Library helpers.
- Produces: Failing tests for quick preview, archive filtering, and build mode.

- [ ] **Step 1: Write failing tests**

Add tests that:

```tsx
it("opens and closes a featured project quick preview", () => {
  render(<App />);

  fireEvent.click(screen.getAllByRole("button", { name: /quick preview/i })[0]);

  expect(screen.getByRole("dialog", { name: /barkchester united shopify product page/i })).toBeInTheDocument();
  expect(screen.getByText(/Conversion focus/i)).toBeInTheDocument();
  expect(screen.getByText(/make the pet product offer easier to understand/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /close project preview/i }));

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("filters the compact archive and resets pagination", () => {
  render(<App />);

  const workSection = screen.getByRole("heading", { name: /01 - selected work/i }).closest("section") as HTMLElement;

  fireEvent.click(within(workSection).getByRole("button", { name: /next archive page/i }));
  expect(within(workSection).getByText(/showing 7-12 of 27 builds/i)).toBeInTheDocument();

  fireEvent.click(within(workSection).getByRole("button", { name: /wordpress filter/i }));

  expect(within(workSection).getByText(/showing 1-5 of 5 builds/i)).toBeInTheDocument();
  expect(within(workSection).getByRole("heading", { name: "Aqua Blast" })).toBeInTheDocument();
  expect(within(workSection).queryByRole("heading", { name: "Vista Veil" })).not.toBeInTheDocument();
  expect(within(workSection).getByRole("button", { name: /archive page 1/i })).toHaveAttribute("aria-current", "page");
});

it("toggles selected work between clean mode and proof mode", () => {
  render(<App />);

  const workSection = screen.getByRole("heading", { name: /01 - selected work/i }).closest("section") as HTMLElement;

  expect(within(workSection).queryByText(/Conversion focus/i)).not.toBeInTheDocument();

  fireEvent.click(within(workSection).getByRole("button", { name: /proof mode/i }));

  expect(within(workSection).getAllByText(/Conversion focus/i).length).toBeGreaterThan(0);
  expect(within(workSection).getByText(/make the pet product offer easier to understand/i)).toBeInTheDocument();

  fireEvent.click(within(workSection).getByRole("button", { name: /clean mode/i }));

  expect(within(workSection).queryByText(/make the pet product offer easier to understand/i)).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run tests to verify failure**

Run: `npm.cmd test -- --run`

Expected: failures mention missing quick preview buttons, filters, or proof mode UI.

### Task 2: Implement Work Section State And UI

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: Tests from Task 1.
- Produces: `selectedProject`, `archiveFilter`, and `buildMode` state with rendered controls.

- [ ] **Step 1: Add project strategy fields**

Extend `Project` with optional `goal`, `conversionFocus`, and `stack` fields. Populate all featured projects with concise copy.

- [ ] **Step 2: Add state and filtering**

Add:

```tsx
type ArchiveFilter = "All" | "Shopify" | "WordPress" | "Advertorial";
type BuildMode = "clean" | "proof";
```

Derive `filteredArchiveProjects`, `archivePageCount`, `visibleArchiveProjects`, and archive count text from `archiveFilter`.

- [ ] **Step 3: Render controls**

Render:

- Clean/Proof mode buttons near the selected work header.
- Quick preview buttons on featured cards.
- Archive filter buttons above archive rows.
- A modal dialog when `selectedProject` is set.

- [ ] **Step 4: Run tests**

Run: `npm.cmd test -- --run`

Expected: all tests pass.

### Task 3: Verify Build

**Files:**
- Test: app build output only.

**Interfaces:**
- Consumes: Completed implementation from Task 2.
- Produces: Verified production build.

- [ ] **Step 1: Run production build**

Run: `npm.cmd run build`

Expected: TypeScript and Vite build complete with exit code 0.
