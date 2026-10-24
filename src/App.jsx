import { useMemo, useState } from 'react';
import { catalogProgress, problems } from './data/problems.js';
import { ProblemList } from './components/ProblemList.jsx';
import { ProblemDetail } from './components/ProblemDetail.jsx';

export default function App() {
  const [selectedProblemId, setSelectedProblemId] = useState(problems[0].id);
  const selectedProblem = problems.find((problem) => problem.id === selectedProblemId);

  const categories = useMemo(
    () => [...new Set(problems.map((problem) => problem.category))].sort(),
    [],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setSelectedProblemId(problems[0].id)}>
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>algo<span className="brand-accent">atlas</span></span>
        </a>
        <div className="topbar-right">
          <span className="catalog-badge">TOP INTERVIEW 150</span>
          <a className="source-link" href="https://leetcode.com/studyplan/top-interview-150/" target="_blank" rel="noreferrer">
            Source collection <span aria-hidden="true">↗</span>
          </a>
          <span className="avatar" aria-label="Guest profile">G</span>
        </div>
      </header>

      <main className="workspace">
        <aside className="sidebar" aria-label="Problem catalog">
          <div className="sidebar-heading">
            <div>
              <p className="eyebrow">YOUR STUDY SPACE</p>
              <h1>Problem set</h1>
            </div>
            <span className="count-pill">{catalogProgress.total}</span>
          </div>
          <ProblemList
            categories={categories}
            onSelect={setSelectedProblemId}
            selectedProblemId={selectedProblemId}
          />
          <div className="sidebar-footnote">
            <span className="status-dot" />
            <span>{catalogProgress.solutionsReady}/{catalogProgress.total} four-language solutions · {catalogProgress.visualizationsReady} visualizations</span>
          </div>
        </aside>

        <section className="main-panel" aria-live="polite">
          {selectedProblem && <ProblemDetail key={selectedProblem.id} problem={selectedProblem} />}
        </section>
      </main>
    </div>
  );
}
