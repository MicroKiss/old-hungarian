import { toOldHungarian } from '../../src/toOldHungarian.js';

test('Numbers basics symbols', () => {

  expect(toOldHungarian('0')).toBe('');
  expect(toOldHungarian('1')).toBe('𐳺');
  expect(toOldHungarian('5')).toBe('𐳻');
  expect(toOldHungarian('10')).toBe('𐳼');
  expect(toOldHungarian('50')).toBe('𐳽');
  expect(toOldHungarian('100')).toBe('𐳾');
  expect(toOldHungarian('1000')).toBe('𐳿');

  const additive = (num: string) => toOldHungarian(num, { numberFormat: 'additive' }); 

  
  expect(additive('0')).toBe('');
  expect(additive('1')).toBe('𐳺');
  expect(additive('5')).toBe('𐳻');
  expect(additive('10')).toBe('𐳼');
  expect(additive('50')).toBe('𐳽');
  expect(additive('100')).toBe('𐳾');
  expect(additive('1000')).toBe('𐳿');
});

test('Numbers with multiplicative format', () => {
  expect(toOldHungarian('2')).toBe('𐳺𐳺');
  expect(toOldHungarian('3')).toBe('𐳺𐳺𐳺');
  expect(toOldHungarian('4')).toBe('𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('6')).toBe('𐳻𐳺');
  expect(toOldHungarian('11')).toBe('𐳼𐳺');
  expect(toOldHungarian('15')).toBe('𐳼𐳻');
  expect(toOldHungarian('23')).toBe('𐳼𐳼𐳺𐳺𐳺');
  expect(toOldHungarian('42')).toBe('𐳼𐳼𐳼𐳼𐳺𐳺');
  expect(toOldHungarian('69')).toBe('𐳽𐳼𐳻𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('99')).toBe('𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('237')).toBe('𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺');
  expect(toOldHungarian('456')).toBe('𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺');
  expect(toOldHungarian('666')).toBe('𐳻𐳺𐳾𐳽𐳼𐳻𐳺');
  expect(toOldHungarian('981')).toBe('𐳻𐳺𐳺𐳺𐳺𐳾𐳽𐳼𐳼𐳼𐳺');
  expect(toOldHungarian('2019')).toBe('𐳺𐳺𐳿𐳼𐳻𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('1956')).toBe('𐳿𐳻𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺');
  expect(toOldHungarian('4814')).toBe('𐳺𐳺𐳺𐳺𐳿𐳻𐳺𐳺𐳺𐳾𐳼𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('137024')).toBe('𐳾𐳼𐳼𐳼𐳻𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('1000000')).toBe('𐳿𐳿');
  expect(toOldHungarian('1000000000')).toBe('𐳿𐳿𐳿');
  expect(toOldHungarian('5000000')).toBe('𐳻𐳿𐳿');
  expect(toOldHungarian('5000500')).toBe('𐳻𐳿𐳿𐳻𐳾');
  expect(toOldHungarian('20000000')).toBe('𐳼𐳼𐳿𐳿');
  expect(toOldHungarian('22000000')).toBe('𐳼𐳼𐳺𐳺𐳿𐳿');
  expect(toOldHungarian('22222000')).toBe('𐳼𐳼𐳺𐳺𐳿𐳺𐳺𐳾𐳼𐳼𐳺𐳺𐳿');
  expect(toOldHungarian('22222222')).toBe('𐳼𐳼𐳺𐳺𐳿𐳺𐳺𐳾𐳼𐳼𐳺𐳺𐳿𐳺𐳺𐳾𐳼𐳼𐳺𐳺');
});

test('Numbers with additive format', () => {
  const additive = (num: string) => toOldHungarian(num, { numberFormat: 'additive' }); 

  expect(additive('2')).toBe('𐳺𐳺');
  expect(additive('3')).toBe('𐳺𐳺𐳺');
  expect(additive('4')).toBe('𐳺𐳺𐳺𐳺');
  expect(additive('6')).toBe('𐳻𐳺');
  expect(additive('11')).toBe('𐳼𐳺');
  expect(additive('15')).toBe('𐳼𐳻');
  expect(additive('23')).toBe('𐳼𐳼𐳺𐳺𐳺');
  expect(additive('42')).toBe('𐳼𐳼𐳼𐳼𐳺𐳺');
  expect(additive('69')).toBe('𐳽𐳼𐳻𐳺𐳺𐳺𐳺');
  expect(additive('99')).toBe('𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺𐳺');
  expect(additive('237')).toBe('𐳾𐳾𐳼𐳼𐳼𐳻𐳺𐳺');
  expect(additive('456')).toBe('𐳾𐳾𐳾𐳾𐳽𐳻𐳺');
  expect(additive('666')).toBe('𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳻𐳺');
  expect(additive('981')).toBe('𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳼𐳼𐳺');

  expect(additive('2019')).toBe('𐳿𐳿𐳼𐳻𐳺𐳺𐳺𐳺');
  expect(additive('1956')).toBe('𐳿𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳻𐳺');
  expect(additive('4814')).toBe('𐳿𐳿𐳿𐳿𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳼𐳺𐳺𐳺𐳺');
  expect(additive('137024')).toBe('𐳿'.repeat(137) + '𐳼𐳼𐳺𐳺𐳺𐳺');
});