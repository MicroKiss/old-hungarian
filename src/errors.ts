/**
 * Custom error thrown when input contains illegal (non-Latin) characters
 * 
 * @example
 * ```typescript
 * try {
 *   toOldHungarian('Hello 世界');
 * } catch (error) {
 *   if (error instanceof IllegalCharacterError) {
 *     console.log(error.illegalCharacter); // '世'
 *     console.log(error.position); // 6
 *   }
 * }
 * ```
 */
export class IllegalCharacterError extends Error {
	/**
	 * The illegal character that was found in the input
	 */
	public readonly illegalCharacter: string;
	
	/**
	 * The position (index) of the illegal character in the input string
	 */
	public readonly position: number;

	/**
	 * Creates a new IllegalCharacterError
	 * @param message - The error message
	 * @param illegalCharacter - The illegal character that was found
	 * @param position - The position of the illegal character in the input
	 */
	constructor(message: string, illegalCharacter: string, position: number) {
		super(message);
		this.name = 'IllegalCharacterError';
		this.illegalCharacter = illegalCharacter;
		this.position = position;
	}
}
