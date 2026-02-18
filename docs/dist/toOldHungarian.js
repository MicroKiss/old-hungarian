import { getLatinToOldHungarianMaps } from './characterMap.js';
import { IllegalCharacterError } from './errors.js';
import { validateLatinInput, findIllegalLatinCharacter } from './validation.js';
import { convertNumbersToOldHungarian } from './convertNumbersToOldHungarian.js';
function convertDoubleCharactersToOldHungarian(text, doubleMap) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const doubleChar = text.slice(i, i + 2);
        const mapping = doubleMap.get(doubleChar);
        if (mapping) {
            result += mapping;
            i++; // Skip the next character as it is part of the double character
        }
        else {
            result += text[i];
        }
    }
    return result;
}
function convertSingleCharactersToOldHungarian(text, singleMap) {
    let result = '';
    for (const char of text) {
        const mapping = singleMap.get(char);
        if (mapping) {
            result += mapping;
        }
        else {
            result += char;
        }
    }
    return result;
}
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
export function toOldHungarian(text, options) {
    text = text.normalize('NFC');
    const strict = options?.strict ?? false;
    const useAltK = options?.alternativeK ?? false;
    const useAltO = options?.alternativeO ?? false;
    const numberFormat = options?.numberFormat ?? 'multiplicative';
    if (strict && !validateLatinInput(text)) {
        const illegal = findIllegalLatinCharacter(text);
        if (illegal) {
            throw new IllegalCharacterError(`Input contains illegal character '${illegal.character}' at position ${illegal.position}`, illegal.character, illegal.position);
        }
        throw new IllegalCharacterError('Input contains illegal character', '', -1);
    }
    const maps = getLatinToOldHungarianMaps(useAltK, useAltO);
    let result = convertNumbersToOldHungarian(text, numberFormat);
    result = convertDoubleCharactersToOldHungarian(result, maps.double);
    result = convertSingleCharactersToOldHungarian(result, maps.single);
    return result;
}
//# sourceMappingURL=toOldHungarian.js.map