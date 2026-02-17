import { fromOldHungarian } from '../../src/fromOldHungarian.js';

test('Numbers basics symbols', () => {
	expect(fromOldHungarian('𐳺')).toBe('1');
	expect(fromOldHungarian('𐳻')).toBe('5');
	expect(fromOldHungarian('𐳼')).toBe('10');
	expect(fromOldHungarian('𐳽')).toBe('50');
	expect(fromOldHungarian('𐳾')).toBe('100');
	expect(fromOldHungarian('𐳿')).toBe('1000');

	const additive = (num: string) => fromOldHungarian(num, { numberFormat: 'additive' });

	expect(additive('𐳺')).toBe('1');
	expect(additive('𐳻')).toBe('5');
	expect(additive('𐳼')).toBe('10');
	expect(additive('𐳽')).toBe('50');
	expect(additive('𐳾')).toBe('100');
	expect(additive('𐳿')).toBe('1000');
});

test('Numbers with multiplicative format', () => {
	expect(fromOldHungarian('𐳺𐳺')).toBe('2');
	expect(fromOldHungarian('𐳺𐳺𐳺')).toBe('3');
	expect(fromOldHungarian('𐳺𐳺𐳺𐳺')).toBe('4');
	expect(fromOldHungarian('𐳻𐳺')).toBe('6');
	expect(fromOldHungarian('𐳼𐳺')).toBe('11');
	expect(fromOldHungarian('𐳼𐳻')).toBe('15');
	expect(fromOldHungarian('𐳼𐳼𐳺𐳺𐳺')).toBe('23');
	expect(fromOldHungarian('𐳼𐳼𐳼𐳼𐳺𐳺')).toBe('42');
	expect(fromOldHungarian('𐳽𐳼𐳻𐳺𐳺𐳺𐳺')).toBe('69');
	expect(fromOldHungarian('𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺𐳺')).toBe('99');
	expect(fromOldHungarian('𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺')).toBe('237');
	expect(fromOldHungarian('𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺')).toBe('456');
	expect(fromOldHungarian('𐳻𐳺𐳾𐳽𐳼𐳻𐳺')).toBe('666');
	expect(fromOldHungarian('𐳻𐳺𐳺𐳺𐳺𐳾𐳽𐳼𐳼𐳼𐳺')).toBe('981');
	expect(fromOldHungarian('𐳺𐳺𐳿𐳼𐳻𐳺𐳺𐳺𐳺')).toBe('2019');
	expect(fromOldHungarian('𐳿𐳻𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺')).toBe('1956');
	expect(fromOldHungarian('𐳺𐳺𐳺𐳺𐳿𐳻𐳺𐳺𐳺𐳾𐳼𐳺𐳺𐳺𐳺')).toBe('4814');
	expect(fromOldHungarian('𐳾𐳼𐳼𐳼𐳻𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺')).toBe('137024');
	expect(fromOldHungarian('𐳿𐳿')).toBe('1000000');
	expect(fromOldHungarian('𐳿𐳿𐳿')).toBe('1000000000');
	expect(fromOldHungarian('𐳻𐳿𐳿')).toBe('5000000');
	expect(fromOldHungarian('𐳻𐳿𐳿𐳻𐳾')).toBe('5000500');
	expect(fromOldHungarian('𐳼𐳼𐳿𐳿')).toBe('20000000');
	expect(fromOldHungarian('𐳼𐳼𐳺𐳺𐳿𐳿')).toBe('22000000');
	expect(fromOldHungarian('𐳼𐳼𐳺𐳺𐳿𐳺𐳺𐳾𐳼𐳼𐳺𐳺𐳿')).toBe('22222000');
	expect(fromOldHungarian('𐳼𐳼𐳺𐳺𐳿𐳺𐳺𐳾𐳼𐳼𐳺𐳺𐳿𐳺𐳺𐳾𐳼𐳼𐳺𐳺')).toBe('22222222');
});

test('Numbers with additive format', () => {
	const additive = (num: string) => fromOldHungarian(num, { numberFormat: 'additive' });

	expect(additive('𐳺𐳺')).toBe('2');
	expect(additive('𐳺𐳺𐳺')).toBe('3');
	expect(additive('𐳺𐳺𐳺𐳺')).toBe('4');
	expect(additive('𐳻𐳺')).toBe('6');
	expect(additive('𐳼𐳺')).toBe('11');
	expect(additive('𐳼𐳻')).toBe('15');
	expect(additive('𐳼𐳼𐳺𐳺𐳺')).toBe('23');
	expect(additive('𐳼𐳼𐳼𐳼𐳺𐳺')).toBe('42');
	expect(additive('𐳽𐳼𐳻𐳺𐳺𐳺𐳺')).toBe('69');
	expect(additive('𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺𐳺')).toBe('99');
	expect(additive('𐳾𐳾𐳼𐳼𐳼𐳻𐳺𐳺')).toBe('237');
	expect(additive('𐳾𐳾𐳾𐳾𐳽𐳻𐳺')).toBe('456');
	expect(additive('𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳻𐳺')).toBe('666');
	expect(additive('𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳼𐳼𐳺')).toBe('981');

	expect(additive('𐳿𐳿𐳼𐳻𐳺𐳺𐳺𐳺')).toBe('2019');
	expect(additive('𐳿𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳻𐳺')).toBe('1956');
	expect(additive('𐳿𐳿𐳿𐳿𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳼𐳺𐳺𐳺𐳺')).toBe('4814');
	expect(additive('𐳿'.repeat(137) + '𐳼𐳼𐳺𐳺𐳺𐳺')).toBe('137024');
});