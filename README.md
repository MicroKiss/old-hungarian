# Old Hungarian Script Converter

A TypeScript/JavaScript library for converting Latin text to Old Hungarian script (Székely rovásírás). Supports the complete Hungarian alphabet, numbers, and alternative character variants.

## About Old Hungarian Script

Old Hungarian script (Székely-Hungarian rovás, Hungarian: 𐲥𐳋𐳓𐳉𐳗-𐳘𐳀𐳍𐳀𐳢 𐳢𐳛𐳮𐳁𐳤) is a historical writing system used by Hungarians before the adoption of the Latin alphabet. It's still used today for decorative and cultural purposes, particularly in the Székely Land region of Romania.

## Features

- Convert Latin text to Old Hungarian script
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
import { toOldHungarian } from 'old-hungarian';

toOldHungarian('Szia');
// '𐲥𐳐𐳀'

toOldHungarian('Magyarország');
// '𐲘𐳀𐳍𐳀𐳢𐳛𐳢𐳤𐳰𐳁𐳍'

// With options
toOldHungarian('kör 456', { 
  alternativeK: true,
  alternativeO: true,
  numberFormat: 'additive'
});
// '𐳔𐳞𐳢 𐳾𐳾𐳾𐳾𐳽𐳻𐳺'
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
  validateLatinInput,
  IllegalCharacterError 
} from 'old-hungarian';

// Basic conversion
const result = toOldHungarian('hello');
// '𐳏𐳉𐳖𐳖𐳛'

// Validation before conversion
if (validateLatinInput('Szia')) {
  const converted = toOldHungarian('Szia');
}

// Error handling
try {
  toOldHungarian('Hello 世界');
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
- **`validateLatinInput(text)`** - Check if text contains only legal characters  
- **`findIllegalCharacter(text)`** - Find first illegal character and its position
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