# Strategy Notes Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a sticky conversion notes toggle that reveals strategy notes across the landing page.

**Architecture:** Keep the feature in `src/App.tsx`. Add one boolean state for the notes toggle and render a fixed button plus small conditional notes in key sections.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Vitest, Testing Library.

## Global Constraints

- Build only number 6, the sticky conversion notes toggle.
- Do not add quiz, scope builder, readiness meter, project matcher, or CTA game features.
- The sticky toggle must use `aria-pressed`.
- Notes must be hidden by default and visible after the toggle is clicked.
- Notes must fit the existing monochrome editorial design.

---

### Task 1: Add Failing Test

**Files:**
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: Existing `<App />`.
- Produces: A failing test for the strategy notes behavior.

- [ ] **Step 1: Write test**

Add a test that renders the page, verifies strategy notes are hidden, clicks `Show strategy notes`, verifies `aria-pressed="true"` and multiple notes appear, then clicks `Hide strategy notes` and verifies notes disappear.

- [ ] **Step 2: Verify failure**

Run: `npm.cmd test -- --run`

Expected: FAIL because the strategy notes toggle does not exist.

### Task 2: Implement Toggle And Notes

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: Test from Task 1.
- Produces: `showStrategyNotes` state, sticky toggle button, and conditional notes in hero, work, capabilities, and contact sections.

- [ ] **Step 1: Add state**

Add `const [showStrategyNotes, setShowStrategyNotes] = useState(false);`.

- [ ] **Step 2: Add sticky button**

Render a fixed bottom-right button with `aria-pressed`, using `Show strategy notes` and `Hide strategy notes` labels.

- [ ] **Step 3: Add conditional notes**

Add compact notes to the intro, selected work, capabilities, and contact sections.

- [ ] **Step 4: Verify tests pass**

Run: `npm.cmd test -- --run`

Expected: all tests pass.

### Task 3: Verify Build

**Files:**
- Test: build output only.

- [ ] **Step 1: Run production build**

Run: `npm.cmd run build`

Expected: TypeScript and Vite build complete with exit code 0.
