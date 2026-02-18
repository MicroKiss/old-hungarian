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
export declare const oldHungarianCharacters: OldHungarianCharacter[];
export declare const alternativeK: OldHungarianCharacter;
export declare const alternativeO: OldHungarianCharacter;
export type OldHungarianNumber = {
    value: number;
    oldHungarian: string;
};
export declare const oldHungarianNumbers: {
    readonly '1': "𐳺";
    readonly '5': "𐳻";
    readonly '10': "𐳼";
    readonly '50': "𐳽";
    readonly '100': "𐳾";
    readonly '1000': "𐳿";
    readonly descending: readonly [{
        readonly value: 1000;
        readonly oldHungarian: "𐳿";
    }, {
        readonly value: 100;
        readonly oldHungarian: "𐳾";
    }, {
        readonly value: 50;
        readonly oldHungarian: "𐳽";
    }, {
        readonly value: 10;
        readonly oldHungarian: "𐳼";
    }, {
        readonly value: 5;
        readonly oldHungarian: "𐳻";
    }, {
        readonly value: 1;
        readonly oldHungarian: "𐳺";
    }];
};
export type CharacterMaps = {
    single: ReadonlyMap<string, string>;
    double: ReadonlyMap<string, string>;
};
export declare function createCharacterMaps(useAltK: boolean, useAltO: boolean): CharacterMaps;
export declare function getLatinToOldHungarianMaps(useAltK: boolean, useAltO: boolean): CharacterMaps;
export declare function getOldHungarianToLatinMaps(): CharacterMaps;
//# sourceMappingURL=characterMap.d.ts.map