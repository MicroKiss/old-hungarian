# Old Hungarian(Hungarian runes) Script Converter

A TypeScript/JavaScript library for bidirectional conversion between Latin text and Old Hungarian script (Székely rovásírás), achieved using Unicode characters. Supports the complete Hungarian alphabet, numbers, and alternative character variants.

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-blue.svg?style=flat&logo=buy-me-a-coffee)](https://buymeacoffee.com/microkiss)

## About Old Hungarian Script

Old Hungarian script (Székely-Hungarian rovás, Hungarian: 𐲥𐳋𐳓𐳉𐳗-𐳘𐳀𐳍𐳀𐳢 𐳢𐳛𐳮𐳁𐳤) is a historical writing system used by Hungarians before the adoption of the Latin alphabet. It's still used today for decorative and cultural purposes, particularly in the Székely Land region of Romania.

## Live Demo

Visit the live demo at: **https://MicroKiss.github.io/old-hungarian/**


## Features

- **Bidirectional conversion** between Latin and Old Hungarian script
- Convert Latin text to Old Hungarian script
- Convert Old Hungarian script back to Latin text
- Support for all Hungarian letters including digraphs (cs, gy, ly, ny, sz, ty, zs)
- Number conversion with additive and multiplicative formats
- Alternative character variants for 'k' and 'ö'
- Validation and error handling for illegal characters
- Zero dependencies

## Installation

```bash
npm install old-hungarian
```

## Quick Start

```typescript
import { toOldHungarian, fromOldHungarian } from 'old-hungarian';

// Convert to Old Hungarian
toOldHungarian('Szia');
// '𐲥𐳐𐳀'

toOldHungarian('Magyarország');
// '𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍'

// Convert from Old Hungarian
fromOldHungarian('𐲥𐳐𐳀');
// 'Szia'

fromOldHungarian('𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍');
// 'Magyarország'

// With options
toOldHungarian('kör 456', { 
  alternativeK: true,
  alternativeO: true,
  numberFormat: 'additive'
});
// '𐳔𐳞𐳢 𐳾𐳾𐳾𐳾𐳽𐳻𐳺'

fromOldHungarian('𐳔𐳞𐳢 𐳾𐳾𐳾𐳾𐳽𐳻𐳺', {
  numberFormat: 'additive'
});
// 'kör 456'
```

## Unicode Support

> **Important:** Old Hungarian script uses Unicode characters from the range **U+10C80 to U+10CFF**. To properly display these characters:
> 
> - Ensure your system/application uses **UTF-8 encoding**
> - Use a font that supports Old Hungarian characters (e.g., Noto Sans Old Hungarian, Segoe UI Historic)
> - For web applications, add `<meta charset="UTF-8">` to your HTML
> - Some environments may show boxes (□) if the font doesn't support these characters
>
> See the [Unicode Standard - Old Hungarian](https://unicode.org/charts/PDF/U10C80.pdf) for more information.

## Usage Examples

```typescript
import { 
  toOldHungarian,
  fromOldHungarian,
  validateLatinInput,
  validateOldHungarianInput,
  IllegalCharacterError 
} from 'old-hungarian';

// Basic conversion to Old Hungarian
const result = toOldHungarian('hello');
// '𐳏𐳉𐳖𐳖𐳛'

// Basic conversion from Old Hungarian
const original = fromOldHungarian('𐳏𐳉𐳖𐳖𐳛');
// 'hello'

// Validation before conversion (Latin)
if (validateLatinInput('Szia')) {
  const converted = toOldHungarian('Szia');
}

// Validation before conversion (Old Hungarian)
if (validateOldHungarianInput('𐲥𐳐𐳀')) {
  const converted = fromOldHungarian('𐲥𐳐𐳀');
}

// Error handling
try {
  toOldHungarian('Hello 世界', { strict: true });
} catch (error) {
  if (error instanceof IllegalCharacterError) {
    console.log(`Illegal character '${error.illegalCharacter}' at position ${error.position}`);
  }
}
```

## Documentation

- **[API Reference](./docs/API.md)** - Complete API documentation with all functions, options, types, and examples
- **[Character Mappings](./docs/CHARACTER_MAPPINGS.md)** - Full reference of Latin to Old Hungarian character mappings

### Quick Reference

- **`toOldHungarian(text, options?)`** - Convert Latin text to Old Hungarian script
- **`fromOldHungarian(text, options?)`** - Convert Old Hungarian script to Latin text
- **`validateLatinInput(text)`** - Check if text contains only legal Latin characters
- **`findIllegalLatinCharacter(text)`** - Find first illegal Latin character and its position
- **`validateOldHungarianInput(text)`** - Check if text contains only legal Old Hungarian characters
- **`findIllegalOldHungarianCharacter(text)`** - Find first illegal Old Hungarian character and its position
- **`IllegalCharacterError`** - Custom error class for illegal characters
- **`oldHungarianCharacters`** - Array of character mappings
- **`oldHungarianNumbers`** - Array of number mappings

## Resources

- [Old Hungarian on Wikipedia](https://en.wikipedia.org/wiki/Old_Hungarian_script)
- [Unicode Standard - Old Hungarian](https://unicode.org/charts/PDF/U10C80.pdf)
- [magyarrovas.hu](https://magyarrovas.hu/)

## License

MIT

## Author

János Kiss <dinnyetok@gmail.com>

## Repository

https://github.com/MicroKiss/old-hungarian