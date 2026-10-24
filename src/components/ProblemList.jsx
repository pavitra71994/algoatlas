import { useEffect, useMemo, useRef, useState } from 'react';
import { problems } from '../data/problems.js';

const difficultyOrder = { Easy: 0, Medium: 1, Hard: 2 };
const pageSize = 15;

export function ProblemList({ categories, onSelect, selectedProblemId }) {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const searchRef = useRef(null);

  useEffect(() => {
    function focusSearch(event) {
      const target = event.target;
      if (event.key === '/' && target instanceof HTMLElement && !target.isContentEditable &&
          !['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener('keydown', focusSearch);
    return () => window.removeEventListener('keydown', focusSearch);
  }, []);

  const filteredProblems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return problems
      .filter((problem) =>
        problem.title.toLowerCase().includes(normalizedQuery) ||
        String(problem.id).includes(normalizedQuery))
      .filter((problem) => difficulty === 'All' || problem.difficulty === difficulty)
      .filter((problem) => category === 'All' || problem.category === category)
      .sort((first, second) => {
        const byDifficulty = difficultyOrder[first.difficulty] - difficultyOrder[second.difficulty];
        const orderedDifficulty = sortOrder === 'asc' ? byDifficulty : -byDifficulty;
        return orderedDifficulty || first.title.localeCompare(second.title);
      });
  }, [category, difficulty, query, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredProblems.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const firstProblemIndex = (currentPage - 1) * pageSize;
  const visibleProblems = filteredProblems.slice(firstProblemIndex, firstProblemIndex + pageSize);

  return (
    <>
      <label className="search-box">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="sr-only">Search problems</span>
        <input
          aria-label="Search problems"
          onChange={(event) => { setQuery(event.target.value); setPage(1); }}
          placeholder="Search problems..."
          ref={searchRef}
          type="search"
          value={query}
        />
        <kbd aria-hidden="true">/</kbd>
      </label>

      <div className="filter-row">
        <label className="filter-control">
          <span className="sr-only">Filter by difficulty</span>
          <select aria-label="Filter by difficulty" onChange={(event) => { setDifficulty(event.target.value); setPage(1); }} value={difficulty}>
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
        <label className="filter-control">
          <span className="sr-only">Filter by category</span>
          <select aria-label="Filter by category" onChange={(event) => { setCategory(event.target.value); setPage(1); }} value={category}>
            <option>All</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <button
          aria-label={`Sort difficulty ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
          className="sort-button"
          onClick={() => { setSortOrder((current) => current === 'asc' ? 'desc' : 'asc'); setPage(1); }}
          title={`Difficulty ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
          type="button"
        >
          {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>

      <div className="problem-list" aria-label="Problems">
        {visibleProblems.map((problem) => (
          <button
            aria-current={problem.id === selectedProblemId ? 'page' : undefined}
            className={`problem-row ${problem.id === selectedProblemId ? 'selected' : ''}`}
            key={problem.id}
            onClick={() => onSelect(problem.id)}
            type="button"
          >
            <span className={`difficulty-dot ${problem.difficulty.toLowerCase()}`} aria-hidden="true" />
            <span className="problem-row-title">{problem.title}</span>
            <span className="problem-status" aria-label={problem.solutionReady ? 'Solution available' : 'Solution coming soon'}>
              {problem.solutionReady ? '✓' : '·'}
            </span>
            <span className="problem-id">{problem.id}</span>
          </button>
        ))}
        {filteredProblems.length === 0 && (
          <div className="empty-state">
            <span aria-hidden="true">⌕</span>
            <p>No problems match those filters.</p>
            <button
              className="text-button"
              onClick={() => { setQuery(''); setDifficulty('All'); setCategory('All'); setPage(1); }}
              type="button"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      {filteredProblems.length > 0 && (
        <nav className="problem-pagination" aria-label="Problem list pages">
          <span className="pagination-count">
            {firstProblemIndex + 1}–{Math.min(firstProblemIndex + pageSize, filteredProblems.length)} of {filteredProblems.length}
          </span>
          <div className="pagination-controls">
            <button
              aria-label="Previous page"
              className="pagination-button"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
              type="button"
            >
              ‹
            </button>
            <span className="pagination-current" aria-live="polite">Page {currentPage} of {pageCount}</span>
            <button
              aria-label="Next page"
              className="pagination-button"
              disabled={currentPage === pageCount}
              onClick={() => setPage(currentPage + 1)}
              type="button"
            >
              ›
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
