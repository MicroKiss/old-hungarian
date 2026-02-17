import { capitalize } from "../../src/helpers/capitalize.js";
import { unicodeLength } from '../../src/helpers/unicodeLength.js';

test('capitalize function', () => {
	expect(capitalize('hello')).toBe('Hello');
	expect(capitalize('Hello')).toBe('Hello');
	expect(capitalize('h')).toBe('H');
	expect(capitalize('')).toBe('');
});

test('unicodeLength function', () => {
	expect(unicodeLength('hello')).toBe(5);
	expect(unicodeLength('𐳀𐳁𐳂')).toBe(3);
	expect(unicodeLength('')).toBe(0);
	expect(unicodeLength('café')).toBe(4);
});