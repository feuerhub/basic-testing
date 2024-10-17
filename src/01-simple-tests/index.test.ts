// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Add })).toBe(5);
    expect(simpleCalculator({ a: 5, b: 6, action: Action.Add })).toBe(11);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 9, b: 5, action: Action.Subtract })).toBe(4);
    expect(simpleCalculator({ a: 5, b: 9, action: Action.Subtract })).toBe(-4);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 11, b: 4, action: Action.Multiply })).toBe(44);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 9, b: 3, action: Action.Divide })).toBe(3);
    expect(simpleCalculator({ a: 3, b: 2, action: Action.Divide })).toBe(1.5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
    expect(simpleCalculator({ a: 2, b: 0, action: Action.Exponentiate })).toBe(
      1,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: 'abc' })).toBe(null);
    expect(simpleCalculator({ a: 2, b: 3, action: 22 })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 1, b: 'abc', action: Action.Add })).toBe(null);
    expect(simpleCalculator({ a: 'abc', b: 2, action: Action.Add })).toBe(null);
  });
});
