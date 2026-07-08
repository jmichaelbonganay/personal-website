# Copy Switcher And Proof Tour Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a before/after conversion copy switcher and a guided Proof Mode tour to the portfolio.

**Architecture:** Keep both features in `src/App.tsx`. Add small data arrays for copy examples and proof tour steps, track active state in the main component, and render the UI inside the existing work and capabilities sections.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Vitest, Testing Library.

## Global Constraints

- Build only the before/after copy switcher and Proof Mode guided tour.
- Keep the editorial monochrome design language.
- The copy switcher must let visitors toggle between weak and conversion-focused copy.
- The Proof Mode guided tour must appear when Proof Mode is active.
- Interactive controls must expose active state with `aria-pressed`.

---

### Task 1: Add Failing Tests

**Files:**
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: Existing `<App />`.
- Produces: Tests for before/after copy switching and Proof Mode guided tour.

- [ ] **Step 1: Write tests**

Add one test for the `Before / After Copy Switcher` in the capabilities section. It should verify the weak copy appears first, clicking `After` reveals the improved copy, and selecting `Supplement page` changes the example.

Add one test for the `Proof Mode guided tour` in the work section. It should click `Proof mode`, verify the tour appears with `Offer` selected, then click `CTA` and verify the CTA explanation appears.

- [ ] **Step 2: Verify tests fail**

Run: `npm.cmd test -- --run`

Expected: FAIL because the two features do not exist yet.

### Task 2: Implement UI

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: Tests from Task 1.
- Produces: `copyExamples`, `proofTourSteps`, active state, and rendered UI.

- [ ] **Step 1: Add data**

Add `copyExamples` with product page, agency page, and supplement page examples.

Add `proofTourSteps` with Offer, Proof, Stack, and CTA explanations.

- [ ] **Step 2: Add state**

Track selected copy example, before/after copy mode, and selected proof tour step.

- [ ] **Step 3: Render features**

Render the Proof Mode guided tour above featured projects when Proof Mode is active.

Render the before/after copy switcher below the conversion checklist and above the stack grid.

- [ ] **Step 4: Verify tests pass**

Run: `npm.cmd test -- --run`

Expected: all tests pass.

### Task 3: Verify Build

**Files:**
- Test: build output only.

- [ ] **Step 1: Run production build**

Run: `npm.cmd run build`

Expected: TypeScript and Vite build complete with exit code 0.
