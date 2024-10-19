// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const values = ['a', 'b', 'c'];
    const valuesLinkedList = Object.freeze({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: {
            next: null,
            value: null,
          },
        },
      },
    });
    expect(generateLinkedList(values)).toStrictEqual(valuesLinkedList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const values = ['a', 'b', 'c', 'd'];
    const result = generateLinkedList(values);
    expect(result).toMatchSnapshot();
  });
});
