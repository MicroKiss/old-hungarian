import { capitalize } from "./helpers/capitalize.js";
import { unicodeLength } from './helpers/unicodeLength.js';
/**
 * Old Hungarian (Székely Rovásírás) Character Mapping
 * Maps Latin letters to their Old Hungarian equivalents
 */

/**
 * Represents a mapping between a Latin character and its Old Hungarian equivalents
 */
export type OldHungarianCharacter = {
	/** The Latin character or digraph (e.g., 'a', 'cs', 'gy') */
	latin: string;
	/** The small (lowercase) Old Hungarian character */
	small: string;
	/** The large (uppercase) Old Hungarian character */
	large: string;
};

export const oldHungarianCharacters: OldHungarianCharacter[] = [
	{ latin: 'a', small: '𐳀', large: '𐲀' },
	{ latin: 'á', small: '𐳁', large: '𐲁' },
	{ latin: 'b', small: '𐳂', large: '𐲂' },
	{ latin: 'c', small: '𐳄', large: '𐲄' },
	{ latin: 'cs', small: '𐳆', large: '𐲆' },
	{ latin: 'd', small: '𐳇', large: '𐲇' },
	{ latin: 'e', small: '𐳉', large: '𐲉' },
	{ latin: 'é', small: '𐳋', large: '𐲋' },
	{ latin: 'f', small: '𐳌', large: '𐲌' },
	{ latin: 'g', small: '𐳍', large: '𐲍' },
	{ latin: 'gy', small: '𐳎', large: '𐲎' },
	{ latin: 'h', small: '𐳏', large: '𐲏' },
	{ latin: 'i', small: '𐳐', large: '𐲐' },
	{ latin: 'í', small: '𐳑', large: '𐲑' },
	{ latin: 'j', small: '𐳒', large: '𐲒' },
	{ latin: 'k', small: '𐳓', large: '𐲓' },
	{ latin: 'l', small: '𐳖', large: '𐲖' },
	{ latin: 'ly', small: '𐳗', large: '𐲗' },
	{ latin: 'm', small: '𐳘', large: '𐲘' },
	{ latin: 'n', small: '𐳙', large: '𐲙' },
	{ latin: 'ny', small: '𐳚', large: '𐲚' },
	{ latin: 'o', small: '𐳛', large: '𐲛' },
	{ latin: 'ó', small: '𐳜', large: '𐲜' },
	{ latin: 'ö', small: '𐳝', large: '𐲝' },
	{ latin: 'ő', small: '𐳟', large: '𐲟' },
	{ latin: 'p', small: '𐳠', large: '𐲠' },
	{ latin: 'q', small: '𐳓𐳮', large: '𐲓𐲮' },
	{ latin: 'r', small: '𐳢', large: '𐲢' },
	{ latin: 's', small: '𐳤', large: '𐲤' },
	{ latin: 'sz', small: '𐳥', large: '𐲥' },
	{ latin: 't', small: '𐳦', large: '𐲦' },
	{ latin: 'ty', small: '𐳨', large: '𐲨' },
	{ latin: 'u', small: '𐳪', large: '𐲪' },
	{ latin: 'ú', small: '𐳫', large: '𐲫' },
	{ latin: 'ü', small: '𐳬', large: '𐲬' },
	{ latin: 'ű', small: '𐳭', large: '𐲭' },
	{ latin: 'v', small: '𐳮', large: '𐲮' },
	{ latin: 'w', small: '𐳮𐳮', large: '𐲮𐲮' },
	{ latin: 'x', small: '𐳓𐳥', large: '𐲓𐲥' },
	{ latin: 'y', small: '𐳐𐳒', large: '𐲐𐲒' },
	{ latin: 'z', small: '𐳯', large: '𐲯' },
	{ latin: 'zs', small: '𐳰', large: '𐲰' }
];

// Alternative variant for 'k' (ak)
export const alternativeK: OldHungarianCharacter = { latin: 'k', small: '𐳔', large: '𐲔' };
// Alternative variant for 'ö'
export const alternativeO: OldHungarianCharacter = { latin: 'ö', small: '𐳞', large: '𐲞' };



export type OldHungarianNumber = {
	value: number;
	oldHungarian: string
};
export const oldHungarianNumbers = {
	'1': '𐳺',
	'5': '𐳻',
	'10': '𐳼',
	'50': '𐳽',
	'100': '𐳾',
	'1000': '𐳿',
	descending: [
		{ value: 1000, oldHungarian: '𐳿' },
		{ value: 100, oldHungarian: '𐳾' },
		{ value: 50, oldHungarian: '𐳽' },
		{ value: 10, oldHungarian: '𐳼' },
		{ value: 5, oldHungarian: '𐳻' },
		{ value: 1, oldHungarian: '𐳺' },
	]
} as const;



export type CharacterMaps = {
	single: ReadonlyMap<string, string>;
	double: ReadonlyMap<string, string>;
};

export function createCharacterMaps(useAltK: boolean, useAltO: boolean): CharacterMaps {
	const singleMap = new Map<string, string>();
	const doubleMap = new Map<string, string>();

	for (const { latin, small, large } of oldHungarianCharacters) {
		if (useAltK && latin === 'k') continue;
		if (useAltO && latin === 'ö') continue;

		if (latin.length === 1) {
			singleMap.set(latin, small);
			singleMap.set(capitalize(latin), large);
		} else {
			doubleMap.set(latin, small);
			doubleMap.set(capitalize(latin), large);
		}
	}

	if (useAltK) {
		singleMap.set(alternativeK.latin, alternativeK.small);
		singleMap.set(capitalize(alternativeK.latin), alternativeK.large);
	}
	if (useAltO) {
		singleMap.set(alternativeO.latin, alternativeO.small);
		singleMap.set(capitalize(alternativeO.latin), alternativeO.large);
	}

	return { single: singleMap, double: doubleMap };
}

function createOldHunToLatinMaps() {
	const singleMap = new Map<string, string>();
	const doubleMap = new Map<string, string>();

	for (const { latin, small, large } of oldHungarianCharacters) {
		if (unicodeLength(small) === 1) {
			singleMap.set(small, latin);
			singleMap.set(large, capitalize(latin));
		} else {
			doubleMap.set(small, latin);
			doubleMap.set(large, capitalize(latin));
		}
	}

	singleMap.set(alternativeK.small, alternativeK.latin);
	singleMap.set(alternativeK.large, capitalize(alternativeK.latin));

	singleMap.set(alternativeO.small, alternativeO.latin);
	singleMap.set(alternativeO.large, capitalize(alternativeO.latin));

	return { single: singleMap, double: doubleMap };
}

const defaultMaps = createCharacterMaps(false, false);
const mapsCache = new Map<string, CharacterMaps>();

export function getLatinToOldHungarianMaps(useAltK: boolean, useAltO: boolean): CharacterMaps {
	if (!useAltK && !useAltO) {
		return defaultMaps;
	}

	const cacheKey = `${useAltK}-${useAltO}`;
	let cached = mapsCache.get(cacheKey);
	if (!cached) {
		cached = createCharacterMaps(useAltK, useAltO);
		mapsCache.set(cacheKey, cached);
	}
	return cached;
}

export function getOldHungarianToLatinMaps() {
	const cacheKey = 'oldHunToLat';
	let cached = mapsCache.get(cacheKey);
	if (!cached) {
		cached = createOldHunToLatinMaps();
		mapsCache.set(cacheKey, cached);
	}
	return cached;

}