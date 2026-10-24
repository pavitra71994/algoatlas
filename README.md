# AlgoAtlas

AlgoAtlas is a React learning app for browsing the LeetCode Top Interview 150 collection. It provides a searchable, filterable catalog, language-selectable solutions, and step-through algorithm visualizations.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

## Content

The catalog contains all 150 problems with collection ID, title, topic, difficulty, signal, and a LeetCode link. Search, difficulty filtering, topic filtering, and difficulty sorting operate over the complete catalog, which is shown 15 problems per page.

Every problem has a solution in Python, Go, Java, and JavaScript. The interface reports coverage only when all four implementations are present.

Every problem has an interactive topic-pattern visualization with step controls and playback speed selection. A small set of problems also has hand-authored, problem-specific walkthroughs; the generated topic-pattern examples are illustrative and are not execution traces of the displayed solution.

Automated test cases are intentionally not included, as requested. Validation checks the production build and verifies that all 150 entries have four language implementations and a visualization.

The source collection link points to the [LeetCode Top Interview 150 study plan](https://leetcode.com/studyplan/top-interview-150/). The displayed solution implementations are independently authored.
