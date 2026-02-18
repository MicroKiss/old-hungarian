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
export declare function toOldHungarian(text: string, options?: ToOldHungarianOptions): string;
//# sourceMappingURL=toOldHungarian.d.ts.map