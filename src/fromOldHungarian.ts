import {  getOldHungarianToLatinMaps } from './characterMap.js';
import { IllegalCharacterError } from './errors.js';
import { findIllegalOldHungarianCharacter, validateOldHungarianInput } from './validation.js';
import {convertNumbersFromOldHungarian} from './convertNumbersFromOldHungarian.js'

function convertDoubleCharactersFromOldHungarian(text: string, doubleMap: ReadonlyMap<string, string>): string {
    let result = '';
    const chars = [...text]; // Convert to array of Unicode characters
    for (let i = 0; i < chars.length; i++) {
        const doubleChar = chars[i] + (chars[i + 1] || '');
        const mapping = doubleMap.get(doubleChar);
        if (mapping) {
            result += mapping;
            i++; // Skip the next character as it is part of the double character
        } else {
            result += chars[i];
        }
    }
    return result;
}

function convertSingleCharactersFromOldHungarian(text: string, singleMap: ReadonlyMap<string, string>): string {
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


export type FromOldHungarianOptions = {
	strict?: boolean; // If true, throws an error on illegal characters. If false, ignores them.
	numberFormat?: 'additive' | 'multiplicative'; // Determines how numbers are converted
};

export function fromOldHungarian(text: string, options?: FromOldHungarianOptions): string {
	const strict = options?.strict ?? false;
	const numberFormat = options?.numberFormat ?? 'multiplicative';

	text = text.normalize('NFC');

	if (strict && !validateOldHungarianInput(text)) {
		const illegal = findIllegalOldHungarianCharacter(text);
		if (illegal) {
			throw new IllegalCharacterError(`Input contains illegal character '${illegal.character}' at position ${illegal.position}`,
				illegal.character, illegal.position);
		}
		throw new IllegalCharacterError('Input contains illegal character', '', -1);
	}

	const maps = getOldHungarianToLatinMaps();

	let result = convertNumbersFromOldHungarian(text, numberFormat);
	result = convertDoubleCharactersFromOldHungarian(result, maps.double);
	result = convertSingleCharactersFromOldHungarian(result, maps.single);
	return result;
}
