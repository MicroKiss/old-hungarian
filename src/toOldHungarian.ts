import { getLatinToOldHungarianMaps } from './characterMap.js';
import { IllegalCharacterError } from './errors.js';
import { validateLatinInput, findIllegalLatinCharacter } from './validation.js';
import {convertNumbersToOldHungarian} from './convertNumbersToOldHungarian.js'

function convertDoubleCharactersToOldHungarian(text: string, doubleMap: ReadonlyMap<string, string>): string {
	let result = '';
	for (let i = 0; i < text.length; i++) {
		const doubleChar = text.slice(i, i + 2);
		const mapping = doubleMap.get(doubleChar);
		if (mapping) {
			result += mapping;
			i++; // Skip the next character as it is part of the double character
		} else {
			result += text[i];
		}
	}
	return result;
}

function convertSingleCharactersToOldHungarian(text: string, singleMap: ReadonlyMap<string, string>): string {
	let result = '';
	for (const char of text) {
		const mapping = singleMap.get(char);
		if (mapping) {
			result += mapping;
		} else {
			result += char;
		}
	}
	return result;
}

/**
 * Options for customizing the conversion from Latin to Old Hungarian script
 */
export type ToOldHungarianOptions = {
	/**
	 * Enforce strict mode, throwing an error for translatable characters ( ?.!, etc.) instead of passing them through
	 * @default false
	 */
	strict?: boolean;
	/**
	 * Number conversion format
	 * - 'multiplicative': Better for large numbers (456 = 4×100 + 5×10 + 6×1)
	 * - 'additive': Traditional format (456 = 100+100+100+100+50+5+1)
	 * @default 'multiplicative'
	 */
	numberFormat?: 'additive' | 'multiplicative';
	/**
	 * Use alternative 'k' character (𐳔/𐲔 instead of 𐳓/𐲓)
	 * @default false
	 */
	alternativeK?: boolean;
	/**
	 * Use alternative 'ö' character (𐳞/𐲞 instead of 𐳝/𐲝)
	 * @default false
	 */
	alternativeO?: boolean;
};

/**
 * Converts Latin text to Old Hungarian script (Székely rovásírás)
 * 
 * Supports:
 * - All Hungarian letters including digraphs (cs, gy, ly, ny, sz, ty, zs)
 * - Numbers (with additive or multiplicative format)
 * - Alternative character variants for 'k' and 'ö'
 * - Optional pass-through of non-Latin characters
 * 
 * @param text - The Latin text to convert (Hungarian alphabet, digits, and spaces)
 * @param options - Optional conversion settings
 * @returns The text converted to Old Hungarian script
 * @throws {IllegalCharacterError} When input contains non-Latin characters and strict mode is enabled
 * 
 * @example
 * ```typescript
 * toOldHungarian('Szia'); // '𐲥𐳐𐳀'
 * ```
 */
export function toOldHungarian(text: string, options?: ToOldHungarianOptions): string {
    text = text.normalize('NFC');
    
    const strict = options?.strict ?? false;
	const useAltK = options?.alternativeK ?? false;
	const useAltO = options?.alternativeO ?? false;
	const numberFormat = options?.numberFormat ?? 'multiplicative';
	
	if (strict && !validateLatinInput(text)) {
		const illegal = findIllegalLatinCharacter(text);
		if (illegal) {
			throw new IllegalCharacterError(
				`Input contains illegal character '${illegal.character}' at position ${illegal.position}`,
				illegal.character,
				illegal.position
			);
		}
		throw new IllegalCharacterError('Input contains illegal character', '', -1);
	}

	const maps = getLatinToOldHungarianMaps(useAltK, useAltO);
	
	let result = convertNumbersToOldHungarian(text, numberFormat);
	result = convertDoubleCharactersToOldHungarian(result, maps.double);
	result = convertSingleCharactersToOldHungarian(result, maps.single);
	
	return result;
}
