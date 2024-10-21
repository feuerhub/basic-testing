// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 9, b: 5, action: Action.Subtract, expected: 4 },
  { a: 5, b: 9, action: Action.Subtract, expected: -4 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 11, b: 4, action: Action.Multiply, expected: 44 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 0, action: Action.Exponentiate, expected: 1 },
];

const invalidTestCases = [
  { a: 2, b: 3, action: 'abc', expected: null },
  { a: 2, b: 3, action: 22, expected: null },
  { a: 1, b: 'abc', action: Action.Add, expected: null },
  { a: 'abc', b: 2, action: Action.Add, expected: null },
  { a: null, b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should $action two numbers',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
  test.each(invalidTestCases)(
    'should return $expected for invalid input',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
