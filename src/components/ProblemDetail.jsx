import { useState } from 'react';
import { TracePlayer } from './TracePlayer.jsx';

export function ProblemDetail({ problem }) {
  const [language, setLanguage] = useState('python');
  const [activeTab, setActiveTab] = useState('solution');
  const availableLanguages = Object.keys(problem.solutions ?? {});
  const selectedLanguage = availableLanguages.includes(language) ? language : availableLanguages[0];
  const languageLabels = { python: 'Python 3', golang: 'Go', java: 'Java', javascript: 'JavaScript' };

  return (
    <article className="problem-detail">
      <div className="breadcrumb">
        <span>Problems</span><span className="breadcrumb-slash">/</span>
        <span>{problem.category}</span><span className="breadcrumb-slash">/</span>
        <span className="breadcrumb-current">{problem.title}</span>
      </div>

      <div className="problem-header">
        <div className="problem-heading-copy">
          <div className="problem-kicker">
            <span className="problem-number">#{problem.id}</span>
            <span className="problem-signal" aria-label={`Signal ${problem.signal}`}>{problem.signal}</span>
            <span className={`difficulty-label ${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
            <span className="source-status" title="Status from the provided problem list">List {problem.collectionStatus}</span>
          </div>
          <h2>{problem.title}</h2>
          <p className="problem-summary">{problem.summary}</p>
        </div>
        <a className="external-problem-link" href={problem.sourceUrl} target="_blank" rel="noreferrer">
          Open problem <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="content-grid">
        <div className="left-column">
          <section className="card approach-card">
            <div className="card-heading">
              <div className="heading-icon approach-icon" aria-hidden="true">✳</div>
              <div>
                <p className="eyebrow">THE IDEA</p>
                <h3>Algorithm approach</h3>
              </div>
            </div>
            {problem.approach && problem.complexity ? (
              <>
                <p className="approach-copy">{problem.approach}</p>
                <div className="complexity-row">
                  <div className="complexity-item">
                    <span className="complexity-icon" aria-hidden="true">◷</span>
                    <div><span className="complexity-label">Time</span><strong>{problem.complexity.time}</strong></div>
                  </div>
                  <div className="complexity-divider" />
                  <div className="complexity-item">
                    <span className="complexity-icon memory" aria-hidden="true">▤</span>
                    <div><span className="complexity-label">Space</span><strong>{problem.complexity.space}</strong></div>
                  </div>
                </div>
              </>
            ) : (
              <p className="content-pending">The algorithm explanation and complexity analysis are being prepared.</p>
            )}
          </section>

          <section className="card code-card">
            <div className="code-card-top">
              <div className="tab-buttons" role="tablist" aria-label="Problem content">
                <button
                  aria-selected={activeTab === 'solution'}
                  className={`content-tab ${activeTab === 'solution' ? 'active' : ''}`}
                  onClick={() => setActiveTab('solution')}
                  role="tab"
                  type="button"
                >
                  <span aria-hidden="true">‹›</span> Solution
                </button>
                <button
                  aria-selected={activeTab === 'visualize'}
                  className={`content-tab ${activeTab === 'visualize' ? 'active' : ''}`}
                  onClick={() => setActiveTab('visualize')}
                  role="tab"
                  type="button"
                >
                  <span aria-hidden="true">▥</span> Visualize
                  {problem.visualization && <span className="available-dot" />}
                </button>
              </div>
              {activeTab === 'solution' && availableLanguages.length > 0 && (
                <label className="language-select">
                  <span className="sr-only">Solution language</span>
                  <select aria-label="Solution language" onChange={(event) => setLanguage(event.target.value)} value={selectedLanguage}>
                    {availableLanguages.map((item) => <option key={item} value={item}>{languageLabels[item] ?? item}</option>)}
                  </select>
                </label>
              )}
            </div>
            {activeTab === 'solution' && selectedLanguage ? (
              <div className="code-content" role="tabpanel">
                <div className="code-meta"><span className="code-language-dot" />{languageLabels[selectedLanguage] ?? selectedLanguage} <span className="code-meta-muted">· Solution</span></div>
                <pre><code>{problem.solutions[selectedLanguage]}</code></pre>
              </div>
            ) : activeTab === 'solution' ? (
              <div className="visualization-unavailable" role="tabpanel">
                <span aria-hidden="true">◌</span>
                <h3>Solutions coming soon</h3>
                <p>Python, Go, Java, and JavaScript solutions for this problem are still being prepared.</p>
              </div>
            ) : problem.visualization ? (
              <div className="visualization-content" role="tabpanel">
                <TracePlayer visualization={problem.visualization} />
              </div>
            ) : (
              <div className="visualization-unavailable" role="tabpanel">
                <span aria-hidden="true">◌</span>
                <h3>Visualization coming soon</h3>
                <p>This problem has an explanation and solutions. Step-by-step playback is being added.</p>
              </div>
            )}
          </section>
        </div>

        <aside className="right-column">
          <section className="card complexity-card">
            <p className="eyebrow">QUICK REFERENCE</p>
            <h3>Complexity</h3>
            <div className="complexity-summary">
              {problem.complexity ? (
              <>
                <div><span>Time</span><strong>{problem.complexity.time}</strong></div>
                <div><span>Space</span><strong>{problem.complexity.space}</strong></div>
              </>
              ) : <p className="content-pending">Analysis pending</p>}
            </div>
          </section>
          <section className="card concepts-card">
            <p className="eyebrow">TOPIC</p>
            <h3>Key concepts</h3>
            <span className="topic-chip">{problem.category}</span>
            {problem.visualization && <span className="topic-chip green-chip">Step-by-step visual</span>}
          </section>
          <section className="study-note">
            <span className="note-icon" aria-hidden="true">✦</span>
            <div><strong>Make it stick</strong><p>Try to explain the approach out loud before checking the code.</p></div>
          </section>
        </aside>
      </div>
    </article>
  );
}
