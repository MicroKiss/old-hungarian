# API Reference

Complete API documentation for the Old Hungarian Script Converter library.

## Table of Contents

- [Main Functions](#main-functions)
  - [toOldHungarian()](#toOldHungarian)
  - [fromOldHungarian()](#fromOldHungarian)
- [Validation Functions](#validation-functions)
  - [validateLatinInput()](#validateLatinInput)
  - [findIllegalLatinCharacter()](#findIllegalLatinCharacter)
  - [validateOldHungarianInput()](#validateOldHungarianInput)
  - [findIllegalOldHungarianCharacter()](#findIllegalOldHungarianCharacter)
- [Error Classes](#error-classes)
  - [IllegalCharacterError](#IllegalCharacterError)
- [Data Exports](#data-exports)
  - [oldHungarianCharacters](#oldHungarianCharacters)
  - [oldHungarianNumbers](#oldHungarianNumbers)
- [TypeScript Types](#typescript-types)

---

## Main Functions

### `toOldHungarian(text, options?)`

Converts Latin text to Old Hungarian script.

**Parameters:**
- `text` (string) - Latin text to convert
- `options` (ToOldHungarianOptions, optional) - Conversion options

**Returns:** `string` - Converted text in Old Hungarian script

**Throws:** `IllegalCharacterError` when input contains non-Latin characters and strict mode is enabled

**Example:**
```typescript
import { toOldHungarian } from 'old-hungarian';

toOldHungarian('hello');
// '𐳏𐳉𐳖𐳖𐳛'

toOldHungarian('Gyönyörű');
// '𐲎𐳝𐳚𐳝𐳢𐳭'

toOldHungarian('Szia cica');
// '𐲥𐳐𐳀 𐳄𐳐𐳄𐳀'
```

#### Options

##### `strict` (boolean, default: `false`)

Enforce strict mode, throwing an error for non-translatable characters (punctuation, emojis, etc.) instead of passing them through. When set to `false` (default), illegal characters pass through unchanged.

**Example:**
```typescript
// Default behavior - allows illegal characters
toOldHungarian('Hello 世界');
// '𐲏𐳉𐳖𐳖𐳛 世界' ✅

// Strict mode - throws error
toOldHungarian('Hello 世界', { strict: true });
// ❌ Throws IllegalCharacterError

// Mixed content with emojis (default)
toOldHungarian('Szia 😊');
// '𐲥𐳐𐳀 😊'

// Punctuation (default)
toOldHungarian('Hello!');
// '𐲏𐳉𐳖𐳖𐳛!'
```

##### `numberFormat` ('additive' | 'multiplicative', default: `'multiplicative'`)

Controls how numbers are converted to Old Hungarian numerals.

**Multiplicative Format (default):**

Uses positional notation with multiplication for larger values. More compact representation.

```typescript
toOldHungarian('456');
// '𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺' (multiplicative: 4×100 + 50 + 5 + 1)

toOldHungarian('2024');
// '𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺' (2×1000 + 2×10 + 4×1)

toOldHungarian('237');
// '𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺' (2×100 + 3×10 + 7×1)
```

**Additive Format:**

Traditional format using only addition. Can be longer for large numbers.

```typescript
toOldHungarian('456', { numberFormat: 'additive' });
// '𐳾𐳾𐳾𐳾𐳽𐳻𐳺' (additive: 100+100+100+100 + 50 + 5 + 1)

toOldHungarian('2024', { numberFormat: 'additive' });
// '𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺' (1000+1000 + 10+10 + 1+1+1+1)

toOldHungarian('23', { numberFormat: 'additive' });
// '𐳼𐳼𐳺𐳺𐳺' (10+10 + 1+1+1)
```

**Numbers in Context:**

```typescript
toOldHungarian('Budapest 2024');
// '𐲂𐳪𐳇𐳀𐳠𐳉𐳤𐳦 𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺'

toOldHungarian('I have 5 cats', { 
  numberFormat: 'additive'
});
// '𐲐 𐳏𐳀𐳮𐳉 𐳻 𐳄𐳀𐳦𐳤'
```

##### `alternativeK` (boolean, default: `false`)

Use alternative 'k' character variant (𐳔/𐲔 instead of 𐳓/𐲓).

**Example:**
```typescript
// Default 'k'
toOldHungarian('kék');
// '𐳓𐳋𐳓'

// Alternative 'k'
toOldHungarian('kék', { alternativeK: true });
// '𐳔𐳋𐳔'

toOldHungarian('Káka', { alternativeK: true });
// '𐲔𐳁𐳔𐳀'

toOldHungarian('kettő', { alternativeK: true });
// '𐳔𐳉𐳦𐳦𐳟'
```

##### `alternativeO` (boolean, default: `false`)

Use alternative 'ö' character variant (𐳞/𐲞 instead of 𐳝/𐲝).

**Example:**
```typescript
// Default 'ö'
toOldHungarian('tök');
// '𐳦𐳝𐳓'

// Alternative 'ö'
toOldHungarian('tök', { alternativeO: true });
// '𐳦𐳞𐳓'

toOldHungarian('Ördög', { alternativeO: true });
// '𐲞𐳢𐳇𐳞𐳍'

toOldHungarian('öt', { alternativeO: true });
// '𐳞𐳦'
```

##### Combined Options

You can combine multiple options:

```typescript
toOldHungarian('kör 123', {
  alternativeK: true,
  alternativeO: true,
  numberFormat: 'additive'
});
// '𐳔𐳞𐳢 𐳾𐳼𐳼𐳺𐳺𐳺'

toOldHungarian('kör 456', {
  alternativeK: true,
  alternativeO: true,
  numberFormat: 'multiplicative'
});
// '𐳔𐳞𐳢 𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺'
```

---

### `fromOldHungarian(text, options?)`

Converts Old Hungarian script to Latin text.

**Parameters:**
- `text` (string) - Old Hungarian text to convert
- `options` (FromOldHungarianOptions, optional) - Conversion options

**Returns:** `string` - Converted text in Latin script

**Throws:** `IllegalCharacterError` when input contains illegal characters and strict mode is enabled

**Example:**
```typescript
import { fromOldHungarian } from 'old-hungarian';

fromOldHungarian('𐳏𐳉𐳖𐳖𐳛');
// 'hello'

fromOldHungarian('𐲎𐳝𐳚𐳝𐳢𐳭');
// 'Gyönyörű'

fromOldHungarian('𐲥𐳐𐳀 𐳄𐳐𐳄𐳀');
// 'Szia cica'
```

#### Options

##### `strict` (boolean, default: `false`)

Enforce strict mode, throwing an error for illegal characters instead of passing them through. When set to `false` (default), illegal characters pass through unchanged.

**Example:**
```typescript
// Default behavior - allows illegal characters
fromOldHungarian('𐳏𐳉𐳖𐳖𐳛 世界');
// 'hello 世界' ✅

// Strict mode - throws error
fromOldHungarian('𐳏𐳉𐳖𐳖𐳛 世界', { strict: true });
// ❌ Throws IllegalCharacterError
```

##### `numberFormat` ('additive' | 'multiplicative', default: `'multiplicative'`)

Controls how Old Hungarian numerals are converted to numbers.

**Multiplicative Format (default):**

Interprets numerals using positional notation with multiplication.

```typescript
fromOldHungarian('𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺');
// '456' (multiplicative: 4×100 + 50 + 5 + 1)

fromOldHungarian('𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺');
// '2024' (2×1000 + 2×10 + 4×1)

fromOldHungarian('𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺');
// '237' (2×100 + 3×10 + 7×1)
```

**Additive Format:**

Interprets numerals using traditional additive notation.

```typescript
fromOldHungarian('𐳾𐳾𐳾𐳾𐳽𐳻𐳺', { numberFormat: 'additive' });
// '456' (additive: 100+100+100+100 + 50 + 5 + 1)

fromOldHungarian('𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺', { numberFormat: 'additive' });
// '2024' (1000+1000 + 10+10 + 1+1+1+1)

fromOldHungarian('𐳼𐳼𐳺𐳺𐳺', { numberFormat: 'additive' });
// '23' (10+10 + 1+1+1)
```

**Numbers in Context:**

```typescript
fromOldHungarian('𐲂𐳪𐳇𐳀𐳠𐳉𐳤𐳦 𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺');
// 'Budapest 2024'

fromOldHungarian('𐲐 𐳏𐳀𐳮𐳉 𐳻 𐳄𐳀𐳦𐳤', { numberFormat: 'additive' });
// 'I have 5 cats'
```

##### Combined Options

You can combine multiple options:

```typescript
fromOldHungarian('𐳔𐳞𐳢 𐳾𐳼𐳼𐳺𐳺𐳺', {
  numberFormat: 'additive'
});
// 'kör 123'

fromOldHungarian('𐳔𐳞𐳢 𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺', {
  numberFormat: 'multiplicative'
});
// 'kör 456'
```

---

## Validation Functions

### `validateLatinInput(text)`

Checks if text contains only legal Latin characters (Hungarian alphabet, digits, spaces).

Legal characters include:
- Hungarian alphabet letters (a-z, á, é, í, ó, ö, ő, ú, ü, ű)
- Digraphs (cs, gy, ly, ny, sz, ty, zs)
- Digits (0-9)
- Spaces

**Parameters:**
- `text` (string) - Text to validate

**Returns:** `boolean` - `true` if all characters are legal, `false` otherwise

**Example:**
```typescript
import { validateLatinInput } from 'old-hungarian';

validateLatinInput('Szia');
// true

validateLatinInput('Hello 123');
// true

validateLatinInput('Magyarország');
// true

validateLatinInput('Hello 世界');
// false

validateLatinInput('café™');
// false
```

---

### `findIllegalLatinCharacter(text)`

Finds the first illegal character in the text and its position.

**Parameters:**
- `text` (string) - Text to check

**Returns:** `{ character: string; position: number } | null`
- Returns an object with the illegal character and its position (0-indexed)
- Returns `null` if all characters are legal

**Example:**
```typescript
import { findIllegalLatinCharacter } from 'old-hungarian';

findIllegalLatinCharacter('Szia');
// null

findIllegalLatinCharacter('Hello 世界');
// { character: '世', position: 6 }

findIllegalLatinCharacter('café™');
// { character: '™', position: 4 }

// Use with error messages
const result = findIllegalLatinCharacter('test™');
if (result) {
  console.log(`Found illegal character '${result.character}' at position ${result.position}`);
  // "Found illegal character '™' at position 4"
}
```

---

### `validateOldHungarianInput(text)`

Checks if text contains only legal Old Hungarian characters and spaces.

Legal characters include:
- All Old Hungarian script characters (both lowercase and uppercase)
- Spaces

**Parameters:**
- `text` (string) - Text to validate

**Returns:** `boolean` - `true` if all characters are legal, `false` otherwise

**Example:**
```typescript
import { validateOldHungarianInput } from 'old-hungarian';

validateOldHungarianInput('𐲥𐳐𐳀');
// true

validateOldHungarianInput('𐳏𐳉𐳖𐳖𐳛 𐳺𐳺𐳺');
// true

validateOldHungarianInput('𐲘𐳀𐳍𐳀𐳢𐳛𐳢𐳤𐳰𐳁𐳍');
// true

validateOldHungarianInput('𐳏𐳉𐳖𐳖𐳛 世界');
// false

validateOldHungarianInput('test');
// false
```

---

### `findIllegalOldHungarianCharacter(text)`

Finds the first illegal (non-Old Hungarian) character in the text and its position.

**Parameters:**
- `text` (string) - Text to check

**Returns:** `{ character: string; position: number } | null`
- Returns an object with the illegal character and its position (0-indexed)
- Returns `null` if all characters are legal

**Example:**
```typescript
import { findIllegalOldHungarianCharacter } from 'old-hungarian';

findIllegalOldHungarianCharacter('𐲥𐳐𐳀');
// null

findIllegalOldHungarianCharacter('𐳏𐳉𐳖𐳖𐳛 世界');
// { character: '世', position: 6 }

findIllegalOldHungarianCharacter('𐳏𐳉𐳖𐳖𐳛™');
// { character: '™', position: 5 }

// Use with error messages
const result = findIllegalOldHungarianCharacter('𐲥𐳐𐳀™');
if (result) {
  console.log(`Found illegal character '${result.character}' at position ${result.position}`);
  // "Found illegal character '™' at position 3"
}
```

---

## Error Classes

### `IllegalCharacterError`

Custom error class thrown when input contains non-Latin characters and strict mode is enabled.

**Extends:** `Error`

**Properties:**
- `illegalCharacter` (string, readonly) - The illegal character that was found
- `position` (number, readonly) - Position (0-indexed) of the illegal character in the input string
- `message` (string) - Error message
- `name` (string) - Always `'IllegalCharacterError'`

**Example:**
```typescript
import { toOldHungarian, IllegalCharacterError } from 'old-hungarian';

try {
  toOldHungarian('Hello 世界');
} catch (error) {
  if (error instanceof IllegalCharacterError) {
    console.log(error.illegalCharacter);  // '世'
    console.log(error.position);          // 6
    console.log(error.message);           
    // "Input contains illegal character '世' at position 6"
    console.log(error.name);
    // "IllegalCharacterError"
  }
}

// Handling with validation first
import { findIllegalLatinCharacter } from 'old-hungarian';

const text = 'test™';
const illegal = findIllegalLatinCharacter(text);
if (illegal) {
  console.warn(`Cannot convert: illegal character '${illegal.character}' at position ${illegal.position}`);
} else {
  const result = toOldHungarian(text);
}
```

---

## Data Exports

### `oldHungarianCharacters`

Array of all character mappings from Latin to Old Hungarian script.

**Type:** `OldHungarianCharacter[]`

**Properties:** Each item contains:
- `latin` (string) - The Latin character or digraph
- `small` (string) - The lowercase Old Hungarian character
- `large` (string) - The uppercase Old Hungarian character

**Example:**
```typescript
import { oldHungarianCharacters } from 'old-hungarian';

console.log(oldHungarianCharacters[0]);
// { latin: 'a', small: '𐳀', large: '𐲀' }

console.log(oldHungarianCharacters.length);
// 42

// Find a specific character
const kChar = oldHungarianCharacters.find(char => char.latin === 'k');
console.log(kChar);
// { latin: 'k', small: '𐳓', large: '𐲓' }

// Display all mappings
oldHungarianCharacters.forEach(char => {
  console.log(`${char.latin} → ${char.small}/${char.large}`);
});
```

---

### `oldHungarianNumbers`

Array of number mappings to Old Hungarian numerals, sorted from largest to smallest value.

**Type:** `readonly OldHungarianNumber[]`

**Properties:** Each item contains:
- `value` (number) - The numeric value
- `oldHungarian` (string) - The Old Hungarian numeral character

**Available values:** 1000, 100, 50, 10, 5, 1

**Example:**
```typescript
import { oldHungarianNumbers } from 'old-hungarian';

console.log(oldHungarianNumbers[0]);
// { value: 1000, oldHungarian: '𐳿' }

// Display all number mappings
oldHungarianNumbers.forEach(num => {
  console.log(`${num.value} → ${num.oldHungarian}`);
});
// 1000 → 𐳿
// 100 → 𐳾
// 50 → 𐳽
// 10 → 𐳼
// 5 → 𐳻
// 1 → 𐳺

// Find specific number
const hundred = oldHungarianNumbers.find(n => n.value === 100);
console.log(hundred);
// { value: 100, oldHungarian: '𐳾' }
```

---

## TypeScript Types

### `ToOldHungarianOptions`

Configuration options for the `toOldHungarian()` function.

```typescript
type ToOldHungarianOptions = {
  strict?: boolean;
  numberFormat?: 'additive' | 'multiplicative';
  alternativeK?: boolean;
  alternativeO?: boolean;
}
```

**Properties:**
- `strict?` (boolean, default: `false`) - Enforce strict mode, throwing an error for non-Latin characters
- `numberFormat?` ('additive' | 'multiplicative', default: `'multiplicative'`) - Number conversion format
- `alternativeK?` (boolean, default: `false`) - Use alternative 'k' variant
- `alternativeO?` (boolean, default: `false`) - Use alternative 'ö' variant

---

### `FromOldHungarianOptions`

Configuration options for the `fromOldHungarian()` function.

```typescript
type FromOldHungarianOptions = {
  strict?: boolean;
  numberFormat?: 'additive' | 'multiplicative';
}
```

**Properties:**
- `strict?` (boolean, default: `false`) - Enforce strict mode, throwing an error for illegal characters
- `numberFormat?` ('additive' | 'multiplicative', default: `'multiplicative'`) - Number conversion format

---

### `OldHungarianCharacter`

Represents a mapping between a Latin character and its Old Hungarian equivalents.

```typescript
type OldHungarianCharacter = {
  latin: string;      // Latin character or digraph (e.g., 'a', 'cs', 'gy')
  small: string;      // Lowercase Old Hungarian character
  large: string;      // Uppercase Old Hungarian character
}
```

**Example:**
```typescript
import { type OldHungarianCharacter, oldHungarianCharacters } from 'old-hungarian';

const aChar: OldHungarianCharacter = oldHungarianCharacters[0];
// { latin: 'a', small: '𐳀', large: '𐲀' }
```

---

### `OldHungarianNumber`

Represents a mapping between a numeric value and its Old Hungarian numeral.

```typescript
type OldHungarianNumber = {
  value: number;           // Numeric value (1, 5, 10, 50, 100, or 1000)
  oldHungarian: string;    // Old Hungarian numeral character
}
```

**Example:**
```typescript
import { type OldHungarianNumber, oldHungarianNumbers } from 'old-hungarian';

const thousand: OldHungarianNumber = oldHungarianNumbers[0];
// { value: 1000, oldHungarian: '𐳿' }
```

---

## Complete Import Example

```typescript
import { 
  toOldHungarian,
  fromOldHungarian,
  validateLatinInput,
  findIllegalLatinCharacter,
  validateOldHungarianInput,
  findIllegalOldHungarianCharacter,
  IllegalCharacterError,
  oldHungarianCharacters,
  oldHungarianNumbers,
  type ToOldHungarianOptions,
  type FromOldHungarianOptions,
  type OldHungarianCharacter,
  type OldHungarianNumber
} from 'old-hungarian';

// Convert to Old Hungarian
const toOld = toOldHungarian('Szia');

// Convert from Old Hungarian
const fromOld = fromOldHungarian('𐲥𐳐𐳀');

// Validation for Latin
if (validateLatinInput('text')) {
  // safe to convert to Old Hungarian
}

// Validation for Old Hungarian
if (validateOldHungarianInput('𐲥𐳐𐳀')) {
  // safe to convert from Old Hungarian
}

// Error handling
try {
  toOldHungarian('invalid™', { strict: true });
} catch (error) {
  if (error instanceof IllegalCharacterError) {
    console.error(error.message);
  }
}

// Using data exports
const characters: OldHungarianCharacter[] = oldHungarianCharacters;
const numbers: readonly OldHungarianNumber[] = oldHungarianNumbers;
```

