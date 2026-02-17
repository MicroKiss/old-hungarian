import { getMaps, oldHungarianNumbers } from './characterMap.js';
import { IllegalCharacterError } from './errors.js';
import { validateLatinInput, findIllegalCharacter } from './validation.js';

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

function convertNumbersAdditively(number: number): string {
	let result = '';
	for (const { value, oldHungarian } of oldHungarianNumbers) {
		while (number >= value) {
			result += oldHungarian;
			number -= value;
		}
	}
	return result;
}

//above hundreds we write the number in multiplicative format, below we write it in additive format
function convertNumbersMultiplicatively(number: number): string {
	let result = '';
	
	const addMultiplicativePlace = (value: number, symbol: string): number => {
		const count = Math.floor(number / value);
		if (count > 1) {
			result += convertNumbersAdditively(count) + symbol;
		} else if (count === 1) {
			result += symbol;
		}
		return number - (count * value);
	};
	
	number = addMultiplicativePlace(1000, '𐳿');
	number = addMultiplicativePlace(100, '𐳾');
	result += convertNumbersAdditively(number);
	
	return result;
}

function convertNumbersToOldHungarian(text: string, format: 'additive' | 'multiplicative'): string {
	return text.replace(/\d+/g, (match) => {
		const number = parseInt(match, 10);
		return format === 'additive' 
			? convertNumbersAdditively(number)
			: convertNumbersMultiplicatively(number);
	});
}

/**
 * Options for customizing the conversion from Latin to Old Hungarian script
 */
export type ToOldHungarianOptions = {
	/**
	 * Allow non-Latin characters to pass through without throwing an error
	 * @default false
	 */
	allowIllegalCharacters?: boolean;
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
 * @throws {IllegalCharacterError} When input contains non-Latin characters and allowIllegalCharacters is false
 * 
 * @example
 * ```typescript
 * toOldHungarian('Szia'); // '𐲥𐳐𐳀'
 * ```
 */
export function toOldHungarian(text: string, options?: ToOldHungarianOptions): string {
	const allowIllegal = options?.allowIllegalCharacters ?? false;
	const useAltK = options?.alternativeK ?? false;
	const useAltO = options?.alternativeO ?? false;
	const numberFormat = options?.numberFormat ?? 'multiplicative';
	
	if (!allowIllegal && !validateLatinInput(text)) {
		const illegal = findIllegalCharacter(text);
		if (illegal) {
			throw new IllegalCharacterError(
				`Input contains illegal character '${illegal.character}' at position ${illegal.position}`,
				illegal.character,
				illegal.position
			);
		}
		throw new IllegalCharacterError('Input contains illegal character', '', -1);
	}

	let result = convertNumbersToOldHungarian(text, numberFormat);
	
	const maps = getMaps(useAltK, useAltO);
	result = convertDoubleCharactersToOldHungarian(result, maps.double);
	result = convertSingleCharactersToOldHungarian(result, maps.single);
	
	return result;
}
