# Implementation Plan: DSA Problem and Algorithm Visualizer

**Date**: 2026-10-25 | **Spec**: User request in this session (no separate feature specification provided)

## Summary

Build a React JavaScript single-page app for studying the LeetCode Top Interview 150 collection. It will contain a complete problem catalog with title search, difficulty filtering and sorting, per-problem algorithm explanations and Python/Java reference solutions selectable by the user, and interactive step-by-step playback for a curated subset of representative problems. The linked repository is a source reference, not an assumed complete or reusable solution corpus: its README currently reports 74/150 progress. Audit its actual coverage and licensing, link and attribute material where appropriate, and independently author missing explanations and solutions rather than silently omitting them or copying unlicensed code.

## Technical Context

**Language/Version**: JavaScript (ES modules), React; modern browser baseline; exact runtime versions selected when scaffolding  
**Primary Dependencies**: Vite for the React app; React Router for problem URLs; use existing browser APIs and avoid adding visualization frameworks unless a concrete need emerges  
**Storage**: Static JSON/JavaScript content bundled with the app; no server or database in the MVP  
**Validation**: Production build, direct catalog integrity checks, and browser smoke checks; automated test cases are out of scope at the user's request  
**Target Platform**: Responsive desktop and mobile web browsers  
**Performance Goals**: Load the catalog without a network request; keep playback responsive and deterministic for the curated data set  
**Constraints**: Use React with JavaScript, not TypeScript. Include all 150 problems, algorithm explanations, and reference solutions in both Python and Java, selectable in the problem detail view. Support title search and difficulty filtering/sorting in Easy, Medium, Hard order. Interactive playback is limited to a curated subset for the first release. Do not assume the source repository provides all 150 solutions or permits code redistribution.

## Constitution Check

No project constitution or existing application code was present in the project directory.

| Principle | Result | Rationale |
|-----------|--------|-----------|
| Preserve requested technology | PASS | The frontend is React with JavaScript. |
| Keep the initial architecture simple | PASS | A static client-side app avoids an unnecessary API and persistence layer. |
| Trace content to its source and respect reuse rights | PASS WITH GATE | Link and credit the referenced repository; verify its license before reusing code. Author original solution content where reuse is not permitted or source material is missing. |
| Validate completeness and behavior | PASS | Validate exactly 150 unique catalog entries and test deterministic visualization traces and essential UI flows. |

## Applied Guidelines

No migration or transformation guidelines apply to this greenfield React JavaScript app. Keep the content model explicit, separate from rendering, and validate imported static data at build/test time.

## Implementation Steps

### Phase 1: Setup

#### Step 1.1: Initialize the React JavaScript application
- **Requirements**: REQ-005
- **Description**: Scaffold the Vite React JavaScript app, install only required routing and test dependencies, and establish the app entry points and scripts.

#### Step 1.2: Establish the application shell and navigation
- **Requirements**: REQ-002, REQ-005
- **Description**: Add the shared responsive shell, navigation, and route structure for the catalog and problem detail pages.

### Phase 2: Foundational content and data

#### Step 2.1: Build and validate the 150-problem catalog
- **Requirements**: REQ-001, REQ-006
- **Description**: Create a normalized static manifest using the Top Interview 150 index, with stable IDs, title, category, difficulty, canonical problem URL, and source references. Confirm exactly 150 unique entries. Record solution availability separately; the linked repository README reports 74/150 progress, so do not equate the index with complete solution coverage.

#### Step 2.2: Add explanations and original Python and Java reference solutions
- **Requirements**: REQ-003, REQ-006, REQ-007
- **Description**: Provide an algorithm approach, complexity, and original Python and Java reference solutions for every catalog entry. First inventory source coverage and license terms; link/attribute reusable source material only when permitted, and independently author missing or non-redistributable content.

### Phase 3: User story 1 — Browse and understand the problem set

#### Step 3.1: Search, filter, and sort the collection
- **Requirements**: REQ-001, REQ-002, REQ-005
- **Description**: Render the complete catalog, support problem-title search and difficulty filters, and sort by difficulty in Easy → Medium → Hard or Hard → Medium → Easy order. Make empty results and clearing/resetting controls understandable.

#### Step 3.2: Read a problem’s algorithm and select a solution language
- **Requirements**: REQ-002, REQ-003, REQ-006, REQ-007
- **Description**: Add a stable detail route showing problem metadata, an original algorithm explanation, complexity, a Python/Java language selector with the corresponding reference solution, and attribution/problem/source links.

### Phase 4: User story 2 — Explore selected algorithms visually

#### Step 4.1: Define deterministic algorithm traces and visualization rendering
- **Requirements**: REQ-004
- **Description**: Model each supported visualization as input plus ordered, typed trace states, then render those states through reusable React visualization components. Do not execute arbitrary source code in the browser to produce playback.

#### Step 4.2: Add playback controls and curated visualizations
- **Requirements**: REQ-004, REQ-005
- **Description**: Implement play/pause, previous/next step, reset, and playback speed controls; populate a curated subset chosen to represent distinct data structures and algorithm patterns, with explanatory captions and synchronized current-state indicators.

### Phase 5: Polish and validation

#### Step 5.1: Ensure accessible, responsive playback and catalog UI
- **Requirements**: REQ-005
- **Description**: Support keyboard operation, visible focus, semantic labels, reduced-motion preferences, and usable small-screen layouts without relying on color alone to communicate state.

#### Step 5.2: Verify acceptance criteria and document content provenance
- **Requirements**: REQ-001, REQ-002, REQ-003, REQ-004, REQ-005, REQ-006, REQ-007
- **Description**: Build the app and manually verify catalog/content coverage, search/filter/sort, language selection, and playback flows; document setup, attribution, and remaining content gaps. Do not add automated test cases.

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── app/
│   │   └── routes.jsx
│   ├── components/
│   │   ├── AppShell.jsx
│   │   ├── ProblemCard.jsx
│   │   ├── ProblemFilters.jsx
│   │   ├── AlgorithmExplanation.jsx
│   │   ├── SolutionLanguageSelector.jsx
│   │   └── visualizations/
│   │       ├── TracePlayer.jsx
│   │       └── TraceView.jsx
│   ├── data/
│   │   ├── problems.json
│   │   ├── solutions/
│   │   │   ├── python.js
│   │   │   └── java.js
│   │   └── visualizations.js
│   ├── pages/
│   │   ├── ProblemListPage.jsx
│   │   └── ProblemDetailPage.jsx
│   ├── utils/
│   │   └── filterProblems.js
│   └── styles.css
```

## Testing Strategy

This is a greenfield static single-page application.

- **Critical user journeys**:
  1. Open the catalog and see all 150 unique problems.
  2. Search by title, filter by Easy/Medium/Hard, sort in both difficulty orders, then reset controls.
  3. Open a problem detail route, read its approach and complexity, and switch between Python and Java solutions.
  4. Open a supported visualization, step through a trace, play/pause, change speed, and reset.
  5. Use catalog and playback controls with keyboard navigation and a narrow viewport.
- **Primary validation stack**: `npm run build` and browser smoke check. Per user instruction, do not create automated test cases.
- **Environment requirements**: Node.js and npm; no database, Docker, or external API required.
- **Known gaps**: Browser-specific behavior should receive a manual smoke check if no browser automation is configured. Source repository solution coverage and redistribution rights must be verified before importing any code.
- **Test data strategy**: Not applicable; automated test cases are excluded by user instruction. Directly verify catalog metadata and manually inspect interactive flows.
- **Acceptance criteria**:
  - The bundled catalog contains exactly 150 unique entries, each with title, category, difficulty, and canonical URL.
  - Every entry has an algorithm explanation and original Python and Java reference solutions; no solution is silently represented as available based only on a problem index.
  - Title search and difficulty filters return the expected entries; difficulty sorting supports Easy → Medium → Hard and Hard → Medium → Easy.
  - The solution-language selector displays the matching Python or Java implementation for the current problem.
  - Every curated visualization has a deterministic trace and playback controls reach the expected initial, intermediate, and final states.
  - Production build passes; catalog interactions and playback are manually checked in the browser.
  - Source attribution and reuse terms are documented; no unlicensed source solution is copied into the app.
- **Validation review expectations**: Confirm exact catalog/content coverage, no broken local routes, deterministic playback, keyboard-accessible controls, and documented content provenance.

## Requirement Mapping

| REQ ID | Description | Plan Items | Implementation Evidence |
|--------|-------------|------------|------------------------|
| REQ-001 | Include a complete catalog of the 150 Top Interview problems with metadata | 2.1, 3.1, 5.2 | `src/data/problemCatalog.js`, `src/data/problems.js`, `src/components/ProblemList.jsx` |
| REQ-002 | Search by title, filter/sort by difficulty, and open problem details | 1.2, 3.1, 3.2 | `src/app/routes.jsx`, `src/components/ProblemFilters.jsx`, `src/pages/ProblemDetailPage.jsx` |
| REQ-003 | Show an algorithm explanation and complexity for each problem | 2.2, 3.2, 5.2 | `src/data/solutions/python.js`, `src/data/solutions/java.js`, `src/components/AlgorithmExplanation.jsx` |
| REQ-004 | Visually step through a curated subset of algorithms | 4.1, 4.2 | `src/data/visualizations.js`, `src/components/visualizations/TracePlayer.jsx`, `src/components/visualizations/TraceView.jsx` |
| REQ-005 | Provide a responsive and accessible React JavaScript experience | 1.1, 1.2, 3.1, 4.2, 5.1 | `src/App.jsx`, `src/styles.css`, accessible UI controls |
| REQ-006 | Attribute source material and respect source coverage/licensing | 2.1, 2.2, 3.2, 5.2 | `src/data/problems.json`, problem detail attribution, `README.md` |
| REQ-007 | Let users select Python or Java and show the matching reference solution | 2.2, 3.2, 5.2 | `src/data/problems.js`, `src/components/ProblemDetail.jsx`, manual language-switch verification |

## Task Breakdown

### Phase 1: Setup

- [ ] T001 [Plan:1.1] Scaffold the Vite React JavaScript application and add app, test, and build scripts in `package.json`, `vite.config.js`, `index.html`, and `src/main.jsx`.
- [ ] T002 [P] [Plan:1.2] Create the shared responsive shell and catalog/detail route configuration in `src/App.jsx`, `src/app/routes.jsx`, and `src/components/AppShell.jsx`.

### Phase 2: Foundational content and data

- [ ] T003 [Plan:2.1] Create `src/data/problemCatalog.js` with 150 normalized problem records and source URLs; verify count, unique IDs/slugs, and difficulty metadata.
- [ ] T004 [Plan:2.2] Inventory the linked repository’s solution coverage and license, then populate `src/data/solutions/python.js` and `src/data/solutions/java.js` with an original approach, time/space complexity, and Python and Java reference solutions for each problem; link and attribute source material only when its terms permit reuse.
- [ ] T005 [P] [Plan:2.1,2.2] Run direct catalog integrity checks for count, unique IDs/slugs, URL format, and Python/Java solution availability metadata without adding test cases.

### Phase 3: User story 1 — Browse and understand the problem set

- [ ] T006 [US1] [Plan:3.1] Render the full problem catalog with title search, difficulty filter, and difficulty sort controls in `src/pages/ProblemListPage.jsx`, `src/components/ProblemFilters.jsx`, and `src/components/ProblemCard.jsx`.
- [ ] T007 [P] [US1] [Plan:3.1] Implement title search, Easy/Medium/Hard filtering, both difficulty sort orders, and empty/reset states in `src/components/ProblemFilters.jsx` and `src/utils/filterProblems.js`.
- [ ] T008 [US1] [Plan:3.2] Implement stable problem detail routes and render metadata, algorithm explanation, complexity, Python/Java language selection with the corresponding solution, and source attribution in `src/pages/ProblemDetailPage.jsx`, `src/components/AlgorithmExplanation.jsx`, and `src/components/SolutionLanguageSelector.jsx`.

### Phase 4: User story 2 — Explore selected algorithms visually

- [ ] T009 [US2] [Plan:4.1] Define typed-by-convention deterministic trace records and representative curated inputs in `src/data/visualizations.js`.
- [ ] T010 [US2] [Plan:4.1] Build reusable trace-state rendering for the selected data structures in `src/components/visualizations/TraceView.jsx`.
- [ ] T011 [US2] [Plan:4.2] Implement play/pause, previous/next, reset, speed, and current-step state in `src/components/visualizations/TracePlayer.jsx`.
- [ ] T012 [US2] [Plan:4.2] Connect curated visualizations to their problem detail pages and add synchronized step explanations in `src/pages/ProblemDetailPage.jsx` and `src/data/visualizations.js`.

### Phase 5: Polish and validation

- [ ] T013 [P] [Plan:5.1] Add keyboard-accessible labels and focus states, reduced-motion handling, and narrow-screen layouts in `src/components/visualizations/TracePlayer.jsx` and `src/styles/app.css`.
- [ ] T014 [Plan:5.2] Document setup and source attribution in `README.md`, run the production build, and manually verify search/sort, Python/Java selection, and visualization flows without adding test cases.
