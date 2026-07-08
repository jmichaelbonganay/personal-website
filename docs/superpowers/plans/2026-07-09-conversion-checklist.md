# Conversion Checklist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an interactive conversion checklist to the portfolio without adding the availability status widget.

**Architecture:** Keep the feature inside `src/App.tsx` near the existing capabilities section. Store checklist items in a local array, track the active checklist item with component state, and reveal one explanatory note at a time through accessible buttons.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, Vitest, Testing Library.

## Global Constraints

- Add only number 2, the interactive conversion checklist.
- Do not add number 4, the availability status widget.
- Place the checklist above the existing stack grid in the capabilities section.
- Checklist buttons expose active state with `aria-expanded`.
- The checklist reveals a short note when an item is clicked.

---

### Task 1: Add Checklist Test

**Files:**
- Modify: `src/App.test.tsx`

**Interfaces:**
- Consumes: Existing `<App />` rendering.
- Produces: A failing test for the conversion checklist behavior.

- [ ] **Step 1: Write the failing test**

Add a test that renders `<App />`, locates the capabilities section, verifies the `Conversion page checklist` heading, clicks `Clear above-the-fold offer`, verifies its note appears and has `aria-expanded="true"`, then clicks `Strong CTA path` and verifies the first note is hidden while the CTA note is shown.

- [ ] **Step 2: Run the test**

Run: `npm.cmd test -- --run`

Expected: FAIL because the checklist heading and buttons do not exist yet.

### Task 2: Implement Checklist

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: Test from Task 1.
- Produces: `conversionChecklist` data, `activeChecklistIndex` state, and a rendered interactive checklist.

- [ ] **Step 1: Add data and state**

Add checklist items for clear offer, benefit-driven copy, trust and proof signals, strong CTA path, mobile-first polish, and fast clean implementation.

- [ ] **Step 2: Render checklist**

Render the checklist above the stack grid in the capabilities section. Use buttons with `aria-expanded`, and show one selected note at a time.

- [ ] **Step 3: Run tests**

Run: `npm.cmd test -- --run`

Expected: all tests pass.

### Task 3: Verify Production Build

**Files:**
- Test: build output only.

- [ ] **Step 1: Run production build**

Run: `npm.cmd run build`

Expected: TypeScript and Vite build complete with exit code 0.
