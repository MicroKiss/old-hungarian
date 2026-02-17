import { toOldHungarian } from '../../src/toOldHungarian.js';
import { fromOldHungarian } from '../../src/fromOldHungarian.js';

describe('Round-trip conversion: Latin -> Old Hungarian -> Latin (multiplicative)', () => {
	test('Single digit numbers', () => {
		expect(fromOldHungarian(toOldHungarian('1'))).toBe('1');
		expect(fromOldHungarian(toOldHungarian('2'))).toBe('2');
		expect(fromOldHungarian(toOldHungarian('3'))).toBe('3');
		expect(fromOldHungarian(toOldHungarian('4'))).toBe('4');
		expect(fromOldHungarian(toOldHungarian('5'))).toBe('5');
		expect(fromOldHungarian(toOldHungarian('6'))).toBe('6');
		expect(fromOldHungarian(toOldHungarian('7'))).toBe('7');
		expect(fromOldHungarian(toOldHungarian('8'))).toBe('8');
		expect(fromOldHungarian(toOldHungarian('9'))).toBe('9');
	});

	test('Two digit numbers', () => {
		expect(fromOldHungarian(toOldHungarian('10'))).toBe('10');
		expect(fromOldHungarian(toOldHungarian('11'))).toBe('11');
		expect(fromOldHungarian(toOldHungarian('15'))).toBe('15');
		expect(fromOldHungarian(toOldHungarian('23'))).toBe('23');
		expect(fromOldHungarian(toOldHungarian('42'))).toBe('42');
		expect(fromOldHungarian(toOldHungarian('50'))).toBe('50');
		expect(fromOldHungarian(toOldHungarian('69'))).toBe('69');
		expect(fromOldHungarian(toOldHungarian('99'))).toBe('99');
	});

	test('Three digit numbers', () => {
		expect(fromOldHungarian(toOldHungarian('100'))).toBe('100');
		expect(fromOldHungarian(toOldHungarian('123'))).toBe('123');
		expect(fromOldHungarian(toOldHungarian('237'))).toBe('237');
		expect(fromOldHungarian(toOldHungarian('456'))).toBe('456');
		expect(fromOldHungarian(toOldHungarian('666'))).toBe('666');
		expect(fromOldHungarian(toOldHungarian('981'))).toBe('981');
		expect(fromOldHungarian(toOldHungarian('999'))).toBe('999');
	});

	test('Four digit numbers', () => {
		expect(fromOldHungarian(toOldHungarian('1000'))).toBe('1000');
		expect(fromOldHungarian(toOldHungarian('1956'))).toBe('1956');
		expect(fromOldHungarian(toOldHungarian('2019'))).toBe('2019');
		expect(fromOldHungarian(toOldHungarian('2024'))).toBe('2024');
		expect(fromOldHungarian(toOldHungarian('2026'))).toBe('2026');
		expect(fromOldHungarian(toOldHungarian('4814'))).toBe('4814');
		expect(fromOldHungarian(toOldHungarian('9999'))).toBe('9999');
	});

	test('Large numbers', () => {
		expect(fromOldHungarian(toOldHungarian('137024'))).toBe('137024');
		expect(fromOldHungarian(toOldHungarian('1000000'))).toBe('1000000');
		expect(fromOldHungarian(toOldHungarian('5000000'))).toBe('5000000');
		expect(fromOldHungarian(toOldHungarian('5000500'))).toBe('5000500');
		expect(fromOldHungarian(toOldHungarian('20000000'))).toBe('20000000');
		expect(fromOldHungarian(toOldHungarian('22000000'))).toBe('22000000');
		expect(fromOldHungarian(toOldHungarian('22222000'))).toBe('22222000');
		expect(fromOldHungarian(toOldHungarian('22222222'))).toBe('22222222');
		expect(fromOldHungarian(toOldHungarian('1000000000'))).toBe('1000000000');
	});

	test('Numbers in text context', () => {
		expect(fromOldHungarian(toOldHungarian('2024 év'))).toBe('2024 év');
		expect(fromOldHungarian(toOldHungarian('A szám 42 volt'))).toBe('A szám 42 volt');
		expect(fromOldHungarian(toOldHungarian('123 alma és 456 körte'))).toBe('123 alma és 456 körte');
		expect(fromOldHungarian(toOldHungarian('Az 1956-os forradalom'))).toBe('Az 1956-os forradalom');
	});
});

describe('Round-trip conversion: Latin -> Old Hungarian -> Latin (additive)', () => {
	const toAdditive = (text: string) => toOldHungarian(text, { numberFormat: 'additive' });
	const fromAdditive = (text: string) => fromOldHungarian(text, { numberFormat: 'additive' });

	test('Single digit numbers', () => {
		expect(fromAdditive(toAdditive('1'))).toBe('1');
		expect(fromAdditive(toAdditive('2'))).toBe('2');
		expect(fromAdditive(toAdditive('3'))).toBe('3');
		expect(fromAdditive(toAdditive('4'))).toBe('4');
		expect(fromAdditive(toAdditive('5'))).toBe('5');
		expect(fromAdditive(toAdditive('6'))).toBe('6');
		expect(fromAdditive(toAdditive('7'))).toBe('7');
		expect(fromAdditive(toAdditive('8'))).toBe('8');
		expect(fromAdditive(toAdditive('9'))).toBe('9');
	});

	test('Two digit numbers', () => {
		expect(fromAdditive(toAdditive('10'))).toBe('10');
		expect(fromAdditive(toAdditive('11'))).toBe('11');
		expect(fromAdditive(toAdditive('15'))).toBe('15');
		expect(fromAdditive(toAdditive('23'))).toBe('23');
		expect(fromAdditive(toAdditive('42'))).toBe('42');
		expect(fromAdditive(toAdditive('50'))).toBe('50');
		expect(fromAdditive(toAdditive('69'))).toBe('69');
		expect(fromAdditive(toAdditive('99'))).toBe('99');
	});

	test('Three digit numbers', () => {
		expect(fromAdditive(toAdditive('100'))).toBe('100');
		expect(fromAdditive(toAdditive('123'))).toBe('123');
		expect(fromAdditive(toAdditive('237'))).toBe('237');
		expect(fromAdditive(toAdditive('456'))).toBe('456');
		expect(fromAdditive(toAdditive('666'))).toBe('666');
		expect(fromAdditive(toAdditive('981'))).toBe('981');
		expect(fromAdditive(toAdditive('999'))).toBe('999');
	});

	test('Four digit numbers', () => {
		expect(fromAdditive(toAdditive('1000'))).toBe('1000');
		expect(fromAdditive(toAdditive('1956'))).toBe('1956');
		expect(fromAdditive(toAdditive('2019'))).toBe('2019');
		expect(fromAdditive(toAdditive('2024'))).toBe('2024');
		expect(fromAdditive(toAdditive('2026'))).toBe('2026');
		expect(fromAdditive(toAdditive('4814'))).toBe('4814');
		expect(fromAdditive(toAdditive('9999'))).toBe('9999');
	});

	test('Numbers in text context', () => {
		expect(fromAdditive(toAdditive('2024 év'))).toBe('2024 év');
		expect(fromAdditive(toAdditive('A szám 42 volt'))).toBe('A szám 42 volt');
		expect(fromAdditive(toAdditive('123 alma és 456 körte'))).toBe('123 alma és 456 körte');
	});
});

describe('Round-trip conversion: Old Hungarian -> Latin -> Old Hungarian (multiplicative)', () => {
	test('Basic numbers', () => {
		const ohNumbers = ['𐳺', '𐳺𐳺', '𐳺𐳺𐳺', '𐳻', '𐳼', '𐳽', '𐳾', '𐳿'];
		ohNumbers.forEach(ohNum => {
			const latin = fromOldHungarian(ohNum);
			const backToOH = toOldHungarian(latin);
			expect(backToOH).toBe(ohNum);
		});
	});

	test('Complex numbers', () => {
		expect(toOldHungarian(fromOldHungarian('𐳼𐳼𐳻𐳺𐳺'))).toBe('𐳼𐳼𐳻𐳺𐳺'); // 27
		expect(toOldHungarian(fromOldHungarian('𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺'))).toBe('𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺'); // 237
		expect(toOldHungarian(fromOldHungarian('𐳺𐳺𐳿𐳼𐳻𐳺𐳺𐳺𐳺'))).toBe('𐳺𐳺𐳿𐳼𐳻𐳺𐳺𐳺𐳺'); // 2019
		expect(toOldHungarian(fromOldHungarian('𐳿𐳿'))).toBe('𐳿𐳿'); // 1000000
	});

	test('Numbers in text context', () => {
		expect(toOldHungarian(fromOldHungarian('𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳋𐳮'))).toBe('𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳋𐳮');
		expect(toOldHungarian(fromOldHungarian('𐲀 𐳥𐳁𐳘 𐳺𐳺𐳼𐳼 𐳮𐳛𐳖𐳦'))).toBe('𐲀 𐳥𐳁𐳘 𐳼𐳼𐳺𐳺 𐳮𐳛𐳖𐳦');
	});
});

describe('Round-trip conversion: Old Hungarian -> Latin -> Old Hungarian (additive)', () => {
	const toAdditive = (text: string) => toOldHungarian(text, { numberFormat: 'additive' });
	const fromAdditive = (text: string) => fromOldHungarian(text, { numberFormat: 'additive' });

	test('Basic numbers', () => {
		const ohNumbers = ['𐳺', '𐳺𐳺', '𐳺𐳺𐳺', '𐳻', '𐳼', '𐳽', '𐳾', '𐳿'];
		ohNumbers.forEach(ohNum => {
			const latin = fromAdditive(ohNum);
			const backToOH = toAdditive(latin);
			expect(backToOH).toBe(ohNum);
		});
	});

	test('Complex numbers', () => {
		expect(toAdditive(fromAdditive('𐳼𐳼𐳻𐳺𐳺'))).toBe('𐳼𐳼𐳻𐳺𐳺'); // 27
		expect(toAdditive(fromAdditive('𐳾𐳾𐳼𐳼𐳼𐳻𐳺𐳺'))).toBe('𐳾𐳾𐳼𐳼𐳼𐳻𐳺𐳺'); // 237
		expect(toAdditive(fromAdditive('𐳿𐳿𐳼𐳻𐳺𐳺𐳺𐳺'))).toBe('𐳿𐳿𐳼𐳻𐳺𐳺𐳺𐳺'); // 2019
	});

	test('Numbers in text context', () => {
		expect(toAdditive(fromAdditive('𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳋𐳮'))).toBe('𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳋𐳮');
		expect(toAdditive(fromAdditive('𐲀 𐳥𐳁𐳘 𐳼𐳼𐳼𐳼𐳺𐳺 𐳮𐳛𐳖𐳦'))).toBe('𐲀 𐳥𐳁𐳘 𐳼𐳼𐳼𐳼𐳺𐳺 𐳮𐳛𐳖𐳦');
	});
});
