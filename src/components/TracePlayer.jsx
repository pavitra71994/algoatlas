import { useEffect, useState } from 'react';

export function TracePlayer({ visualization }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!playing) return undefined;
    if (stepIndex === visualization.steps.length - 1) {
      setPlaying(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setStepIndex((current) => current + 1), 1100 / speed);
    return () => window.clearTimeout(timer);
  }, [playing, speed, stepIndex, visualization.steps.length]);

  const step = visualization.steps[stepIndex];

  function moveToStep(nextIndex) {
    setPlaying(false);
    setStepIndex(Math.max(0, Math.min(visualization.steps.length - 1, nextIndex)));
  }

  return (
    <div className="trace-player">
      <div className="trace-stage">
        {visualization.kind === 'pattern' && <PatternTrace visualization={visualization} step={step} />}
        {visualization.kind === 'merge' && <MergeTrace visualization={visualization} step={step} />}
        {visualization.kind === 'array' && <ArrayTrace visualization={visualization} step={step} />}
        {visualization.kind === 'pointers' && <PointerTrace visualization={visualization} step={step} />}
        {visualization.kind === 'search' && <SearchTrace visualization={visualization} step={step} />}
      </div>
      <p className="trace-message" aria-live="polite">{step.message}</p>
      <div className="trace-controls">
        <button aria-label="Reset visualization" className="trace-control" onClick={() => moveToStep(0)} type="button">↺</button>
        <button aria-label="Previous step" className="trace-control" disabled={stepIndex === 0} onClick={() => moveToStep(stepIndex - 1)} type="button">‹</button>
        <button
          aria-label={playing ? 'Pause visualization' : 'Play visualization'}
          className="play-control"
          onClick={() => {
            if (stepIndex === visualization.steps.length - 1 && !playing) setStepIndex(0);
            setPlaying((current) => !current);
          }}
          type="button"
        >
          {playing ? 'Ⅱ' : '▶'}
        </button>
        <button aria-label="Next step" className="trace-control" disabled={stepIndex === visualization.steps.length - 1} onClick={() => moveToStep(stepIndex + 1)} type="button">›</button>
        <label className="speed-select">
          <span className="sr-only">Playback speed</span>
          <select aria-label="Playback speed" onChange={(event) => setSpeed(Number(event.target.value))} value={speed}>
            <option value={0.5}>0.5×</option>
            <option value={1}>1×</option>
            <option value={2}>2×</option>
          </select>
        </label>
        <span className="trace-progress-label">Step {stepIndex + 1} <span>/ {visualization.steps.length}</span></span>
        <div className="trace-progress" aria-hidden="true">
          <span style={{ width: `${((stepIndex + 1) / visualization.steps.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

function PatternTrace({ visualization, step }) {
  return (
    <div className={`pattern-trace pattern-${visualization.structure}`}>
      <div className="pattern-label">{visualization.pattern} · sample state</div>
      <div className="pattern-values">
        {step.values.map((value, index) => (
          <div
            aria-current={index === step.focus ? 'step' : undefined}
            className={`pattern-value ${index === step.focus ? 'active-cell' : ''}`}
            key={`${index}-${value}`}
          >
            <span>{value}</span>
            <small>{index}</small>
          </div>
        ))}
      </div>
      <p className="pattern-stage">Phase {step.stage} of {visualization.steps.length}</p>
    </div>
  );
}

function MergeTrace({ visualization, step }) {
  const values = visualization.input.first.map((value, index) => index < visualization.input.firstCount ? value : null);
  let left = step.left;
  let right = step.right;
  let write = step.write;
  const state = visualization.steps.indexOf(step);
  for (let index = 0; index <= state; index += 1) {
    const current = visualization.steps[index];
    if (current.write >= 0 && current.write < values.length && current.right >= 0) {
      const fromFirst = current.left >= 0 && visualization.input.first[current.left] > visualization.input.second[current.right];
      values[current.write] = fromFirst ? visualization.input.first[current.left] : visualization.input.second[current.right];
    }
  }
  return (
    <div className="trace-array-wrap">
      <div className="trace-array" aria-label="Merged array state">
        {values.map((value, index) => (
          <div className={`trace-cell ${index === write ? 'active-cell' : ''} ${index === left || index === right + visualization.input.firstCount ? 'pointer-cell' : ''}`} key={index}>
            <span>{value ?? '·'}</span><small>{index}</small>
          </div>
        ))}
      </div>
      <div className="pointer-legend"><span>L {left >= 0 ? `at ${left}` : 'done'}</span><span>R {right >= 0 ? `at ${right}` : 'done'}</span><span>write {write}</span></div>
    </div>
  );
}

function ArrayTrace({ visualization, step }) {
  return (
    <div className="trace-array-wrap">
      <div className="trace-array">
        {visualization.input.map((value, index) => (
          <div className={`trace-cell ${index === step.index ? 'active-cell' : ''} ${index < step.write ? 'written-cell' : ''}`} key={index}>
            <span>{value}</span><small>{index}</small>
          </div>
        ))}
      </div>
      <div className="pointer-legend"><span>read {step.index}</span><span>write {step.write}</span><span>remove {visualization.target}</span></div>
    </div>
  );
}

function PointerTrace({ visualization, step }) {
  return (
    <div className="pointer-trace">
      <div className="trace-array">
        {[...visualization.input].map((character, index) => (
          <div className={`trace-cell ${index === step.left || index === step.right ? 'active-cell' : ''}`} key={`${character}-${index}`}>
            <span>{character === ' ' ? '␠' : character}</span><small>{index}</small>
          </div>
        ))}
      </div>
      <div className="pointer-legend"><span>left → {step.left}</span><span>right → {step.right}</span><span>case-insensitive</span></div>
    </div>
  );
}

function SearchTrace({ visualization, step }) {
  return (
    <div className="trace-array-wrap">
      <div className="trace-array">
        {visualization.input.map((value, index) => (
          <div className={`trace-cell ${index === step.middle ? 'active-cell' : ''} ${index < step.low || index > step.high ? 'discarded-cell' : ''}`} key={index}>
            <span>{value}</span><small>{index}</small>
          </div>
        ))}
      </div>
      <div className="pointer-legend"><span>low {step.low}</span><span>mid {step.middle}</span><span>high {step.high}</span><span>target {visualization.target}</span></div>
    </div>
  );
}
