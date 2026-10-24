const patterns = {
  'Array / String': {
    name: 'Array scan',
    structure: 'array',
    phases: ['Read the current value', 'Compare with the running state', 'Keep or update the result', 'Move to the next value'],
  },
  'Two Pointers': {
    name: 'Two pointers',
    structure: 'pointers',
    phases: ['Place pointers at the ends', 'Compare the active values', 'Move the pointer that can improve the answer', 'Stop when the search range closes'],
  },
  'Sliding Window': {
    name: 'Sliding window',
    structure: 'window',
    phases: ['Expand the right edge', 'Update counts for the new value', 'Shrink until the window is valid', 'Record the best window'],
  },
  Matrix: {
    name: 'Matrix traversal',
    structure: 'matrix',
    phases: ['Set the current row and column', 'Visit the active cell', 'Advance along the current boundary', 'Turn or finish at the boundary'],
  },
  Hashmap: {
    name: 'Hash map',
    structure: 'map',
    phases: ['Read the next key', 'Look up the needed value', 'Record or update its count', 'Return the stored match or grouping'],
  },
  Intervals: {
    name: 'Interval sweep',
    structure: 'intervals',
    phases: ['Sort intervals by start', 'Compare the next interval', 'Merge overlap or close the current interval', 'Emit the final interval'],
  },
  Stack: {
    name: 'Stack',
    structure: 'stack',
    phases: ['Read the next token', 'Push an opening value or operand', 'Pop when the operation is ready', 'Finish when the input is consumed'],
  },
  'Linked List': {
    name: 'Linked-list pointers',
    structure: 'linked-list',
    phases: ['Set the current and boundary pointers', 'Save the next node before relinking', 'Update links or advance pointers', 'Return the resulting head or state'],
  },
  'Binary Tree General': {
    name: 'Tree traversal',
    structure: 'tree',
    phases: ['Start at the root', 'Visit the current node', 'Add its children to the traversal state', 'Finish when no nodes remain'],
  },
  'Binary Tree BFS': {
    name: 'Breadth-first traversal',
    structure: 'tree',
    phases: ['Queue the root', 'Read the front node', 'Enqueue its children', 'Complete the current level'],
  },
  'Binary Search Tree': {
    name: 'BST traversal',
    structure: 'tree',
    phases: ['Compare the current node with the target or bound', 'Choose the ordered subtree', 'Visit the next node', 'Return when the condition is resolved'],
  },
  'Graph General': {
    name: 'Graph traversal',
    structure: 'graph',
    phases: ['Choose a start vertex', 'Mark it visited before exploring', 'Visit an unvisited neighbor', 'Finish when the frontier is empty'],
  },
  'Graph BFS': {
    name: 'Graph breadth-first search',
    structure: 'graph',
    phases: ['Queue the start state', 'Remove the oldest frontier state', 'Add valid unvisited neighbors', 'Stop at the target or exhausted frontier'],
  },
  Trie: {
    name: 'Trie traversal',
    structure: 'trie',
    phases: ['Start at the root node', 'Follow the edge for the next character', 'Create or inspect the child node', 'Mark or return the terminal state'],
  },
  Backtracking: {
    name: 'Backtracking',
    structure: 'backtracking',
    phases: ['Choose a valid candidate', 'Add it to the current path', 'Explore the next choice', 'Undo the choice when returning'],
  },
  'Divide & Conquer': {
    name: 'Divide and conquer',
    structure: 'divide',
    phases: ['Split the current range', 'Solve each smaller part', 'Combine the partial results', 'Return the merged result'],
  },
  "Kadane's Algorithm": {
    name: 'Kadane dynamic scan',
    structure: 'array',
    phases: ['Read the next value', 'Extend or restart the current subarray', 'Update the global best', 'Continue to the next position'],
  },
  'Binary Search': {
    name: 'Binary search',
    structure: 'search',
    phases: ['Find the middle of the active range', 'Compare the middle value with the target', 'Discard the impossible half', 'Return the match or insertion boundary'],
  },
  Heap: {
    name: 'Heap frontier',
    structure: 'heap',
    phases: ['Insert candidates into the heap', 'Read the highest-priority candidate', 'Remove it and add its next candidates', 'Stop after the required results'],
  },
  'Bit Manipulation': {
    name: 'Bit operations',
    structure: 'bits',
    phases: ['Read the current bit pattern', 'Apply a mask or bitwise operation', 'Shift or accumulate the result', 'Return the final bit pattern'],
  },
  Math: {
    name: 'Numeric iteration',
    structure: 'math',
    phases: ['Initialize the numeric state', 'Apply the arithmetic step', 'Update the remaining range or accumulator', 'Return when the stopping condition is met'],
  },
  '1D DP': {
    name: 'One-dimensional dynamic programming',
    structure: 'dp',
    phases: ['Set the base cases', 'Read the previous subproblem states', 'Compute the current state', 'Return the final table entry'],
  },
  'Multidimensional DP': {
    name: 'Multidimensional dynamic programming',
    structure: 'matrix',
    phases: ['Initialize boundary states', 'Select the current subproblem cell', 'Combine neighboring states', 'Read the destination state'],
  },
};

const sampleValues = [4, 1, 7, 3, 6, 2, 8, 5];

export function createVisualization(problem) {
  const pattern = patterns[problem.category] ?? patterns['Array / String'];
  const rotation = problem.id % sampleValues.length;
  const values = [...sampleValues.slice(rotation), ...sampleValues.slice(0, rotation)];
  const steps = pattern.phases.map((message, index) => ({
    stage: index + 1,
    message: `${message}. This is the ${pattern.name.toLowerCase()} pattern used to solve ${problem.title}.`,
    focus: Math.min(index * 2, values.length - 1),
    values: values.slice(0, Math.max(2, values.length - index)),
  }));

  return {
    kind: 'pattern',
    pattern: pattern.name,
    structure: pattern.structure,
    input: values,
    steps,
  };
}

export function getVisualization(problem) {
  return problem.visualization ?? createVisualization(problem);
}
