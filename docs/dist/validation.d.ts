export declare function validateOldHungarianInput(text: string): boolean;
export declare function findIllegalOldHungarianCharacter(text: string): {
    character: string;
    position: number;
} | null;
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
export declare function validateLatinInput(text: string): boolean;
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
export declare function findIllegalLatinCharacter(text: string): {
    character: string;
    position: number;
} | null;
//# sourceMappingURL=validation.d.ts.map