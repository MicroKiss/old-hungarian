import { oldHungarianCharacters, oldHungarianNumbers } from './characterMap.js';
import { capitalize } from './helpers/capitalize.js';

const LEGAL_DIGITS = '0123456789';
const SPACE = ' ';

const legalLatinCharacters = 
		oldHungarianCharacters.map(({ latin }) => latin).join('') + 
		oldHungarianCharacters.map(({ latin }) => capitalize(latin)).join('') +
		SPACE + LEGAL_DIGITS;
		
const legalLatinCharacterPattern = new RegExp(`^[${legalLatinCharacters}]+$`);

const legalOldHungarianCharacters = 
		oldHungarianCharacters.map(({ small, large }) => small + large).join('') + 
		oldHungarianNumbers.descending.map(({ oldHungarian }) => oldHungarian).join('') +
		SPACE;
const legalOldHungarianCharacterPattern = new RegExp(`^[${legalOldHungarianCharacters}]+$`, 'u');


export function validateOldHungarianInput (text:string): boolean {
	return legalOldHungarianCharacterPattern.test(text);
}

export function findIllegalOldHungarianCharacter(text: string): { character: string; position: number } | null {
	if (legalOldHungarianCharacterPattern.test(text)) {
		return null;
	}
	const chars = [...text]; // Convert to array of Unicode characters
	for (let i = 0; i < chars.length; i++) {
		if (!legalOldHungarianCharacterPattern.test(chars[i])) {
			return { character: chars[i], position: i };
		}
	}
	return null;
}

/**
 * Validates if the input text contains only legal Latin characters, digits, and spaces
 * 
 * Legal characters include:
 * - Hungarian alphabet letters (a-z, á, é, í, ó, ö, ő, ú, ü, ű)
 * - Digraphs (cs, gy, ly, ny, sz, ty, zs)
 * - Digits (0-9)
 * - Spaces
 * 
 * @param text - The text to validate
 * @returns `true` if the text contains only legal characters, `false` otherwise
 * 
 * @example
 * ```typescript
 * validateLatinInput('Szia'); // true
 * validateLatinInput('Hello 123'); // true
 * validateLatinInput('Hello 世界'); // false
 * validateLatinInput('café™'); // false
 * ```
 */
export function validateLatinInput(text: string): boolean {
	return legalLatinCharacterPattern.test(text);
}

/**
 * Finds the first illegal (non-Latin) character in the text
 * 
 * @param text - The text to check
 * @returns An object containing the illegal character and its position, or `null` if all characters are legal
 * 
 * @example
 * ```typescript
 * findIllegalLatinCharacter('Szia'); // null
 * findIllegalLatinCharacter('Hello 世界'); // { character: '世', position: 6 }
 * findIllegalLatinCharacter('café™'); // { character: '™', position: 4 }
 * ```
 */
export function findIllegalLatinCharacter(text: string): { character: string; position: number } | null {
	if (legalLatinCharacterPattern.test(text)) {
		return null;
	}
	
	const chars = [...text]; // Convert to array of Unicode characters
	for (let i = 0; i < chars.length; i++) {
		if (!legalLatinCharacterPattern.test(chars[i])) {
			return { character: chars[i], position: i };
		}
	}
	return null;
}
