# Character Mappings

Complete reference of all Latin to Old Hungarian character mappings.

**Note:** These mappings work bidirectionally. You can use `toOldHungarian()` to convert from Latin to Old Hungarian, and `fromOldHungarian()` to convert from Old Hungarian back to Latin.

## Vowels

| Latin | Old Hungarian (small/large) | Notes |
|-------|----------------------------|-------|
| a/A | 𐳀/𐲀 | |
| á/Á | 𐳁/𐲁 | |
| e/E | 𐳉/𐲉 | |
| é/É | 𐳋/𐲋 | |
| i/I | 𐳐/𐲐 | |
| í/Í | 𐳑/𐲑 | |
| o/O | 𐳛/𐲛 | |
| ó/Ó | 𐳜/𐲜 | |
| ö/Ö | 𐳝/𐲝 | Alternative: 𐳞/𐲞 (with `alternativeO` option) |
| ő/Ő | 𐳟/𐲟 | |
| u/U | 𐳪/𐲪 | |
| ú/Ú | 𐳫/𐲫 | |
| ü/Ü | 𐳬/𐲬 | |
| ű/Ű | 𐳭/𐲭 | |

## Consonants

| Latin | Old Hungarian (small/large) | Notes |
|-------|----------------------------|-------|
| b/B | 𐳂/𐲂 | |
| c/C | 𐳄/𐲄 | |
| d/D | 𐳇/𐲇 | |
| f/F | 𐳌/𐲌 | |
| g/G | 𐳍/𐲍 | |
| h/H | 𐳏/𐲏 | |
| j/J | 𐳒/𐲒 | |
| k/K | 𐳓/𐲓 | Alternative: 𐳔/𐲔 (with `alternativeK` option) |
| l/L | 𐳖/𐲖 | |
| m/M | 𐳘/𐲘 | |
| n/N | 𐳙/𐲙 | |
| p/P | 𐳠/𐲠 | |
| r/R | 𐳢/𐲢 | |
| s/S | 𐳤/𐲤 | |
| t/T | 𐳦/𐲦 | |
| v/V | 𐳮/𐲮 | |
| z/Z | 𐳯/𐲯 | |

## Digraphs

Digraphs are two-letter combinations that represent a single sound in Hungarian.

| Latin | Old Hungarian (small/large) | Description |
|-------|----------------------------|-------------|
| cs/Cs | 𐳆/𐲆 | Voiceless postalveolar affricate |
| gy/Gy | 𐳎/𐲎 | Voiced palatal plosive |
| ly/Ly | 𐳗/𐲗 | Palatal lateral approximant |
| ny/Ny | 𐳚/𐲚 | Palatal nasal |
| sz/Sz | 𐳥/𐲥 | Voiceless alveolar fricative |
| ty/Ty | 𐳨/𐲨 | Voiceless palatal plosive |
| zs/Zs | 𐳰/𐲰 | Voiced postalveolar fricative |

## Special Combinations

These letters are not part of the traditional Hungarian alphabet but are represented as combinations of Old Hungarian characters.

| Latin | Old Hungarian (small/large) | Combination |
|-------|----------------------------|-------------|
| q/Q | 𐳓𐳮/𐲓𐲮 | k + v |
| w/W | 𐳮𐳮/𐲮𐲮 | v + v |
| x/X | 𐳓𐳥/𐲓𐲥 | k + sz |
| y/Y | 𐳐𐳒/𐲐𐲒 | i + j |

## Numbers

Old Hungarian numerals use an additive system with specific symbols for certain values.

| Value | Old Hungarian | Symbol Name |
|-------|---------------|-------------|
| 1 | 𐳺 | One |
| 5 | 𐳻 | Five |
| 10 | 𐳼 | Ten |
| 50 | 𐳽 | Fifty |
| 100 | 𐳾 | One Hundred |
| 1000 | 𐳿 | One Thousand |

### Number Formation

Numbers can be represented in two formats:

**Additive Format** (traditional):
- Simply add the symbols together
- Example: 23 = 10 + 10 + 1 + 1 + 1 = 𐳼𐳼𐳺𐳺𐳺

**Multiplicative Format** (modern):
- Uses multiplication for larger values (after hundreds)
- Example: 456 = 4×100 + 50 + 5 + 1 = 𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺

See the [API documentation](./API.md#numberformat-additive--multiplicative-default-multiplicative) for detailed examples of both formats.

## Unicode Information

Old Hungarian script is encoded in Unicode block U+10C80 to U+10CFF.

- **Block name**: Old Hungarian
- **Range**: U+10C80–U+10CFF
- **Characters**: 108 (42 letter pairs + numerals + punctuation)

## Alternative Variants

Some characters have alternative forms that can be used based on preference or historical tradition:

### Alternative K (ak/ák)
- Default: 𐳓/𐲓
- Alternative: 𐳔/𐲔
- Enable with: `alternativeK: true` option

### Alternative Ö (amb/ámb)
- Default: 𐳝/𐲝
- Alternative: 𐳞/𐲞
- Enable with: `alternativeO: true` option

## Examples

### Words with Digraphs

```typescript
import { toOldHungarian, fromOldHungarian } from 'old-hungarian';

// Latin to Old Hungarian
toOldHungarian('csaba');    // '𐳆𐳀𐳂𐳀'
toOldHungarian('gyula');    // '𐳎𐳪𐳖𐳀'
toOldHungarian('magyar');   // '𐳘𐳀�𐳀𐳢'
toOldHungarian('szép');     // '𐳥𐳋𐳠'

// Old Hungarian to Latin
fromOldHungarian('𐳆𐳀𐳂𐳀');  // 'csaba'
fromOldHungarian('𐳎𐳪𐳖𐳀');  // 'gyula'
fromOldHungarian('𐳘𐳀𐳍𐳀𐳢');  // 'magyar'
fromOldHungarian('𐳥𐳋𐳠');    // 'szép'
```

### Mixed Case

```typescript
// Latin to Old Hungarian
toOldHungarian('Magyarország');
// '𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍'
// M=𐲘 a=𐳀 gy=𐳎 a=𐳀 r=𐳢 o=𐳛 r=𐳢 sz=𐳥 á=𐳁 g=𐳍

// Old Hungarian to Latin
fromOldHungarian('𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍');
// 'Magyarország'
```

### Alternative Characters

```typescript
// Default k and ö
toOldHungarian('kökény');
// '𐳓𐳝𐳓𐳋𐳚'

// With alternatives
toOldHungarian('kökény', { alternativeK: true, alternativeO: true });
// '𐳔𐳞𐳔𐳋𐳚'

// Converting back works regardless of which variant was used
fromOldHungarian('𐳓𐳝𐳓𐳋𐳚');  // 'kökény'
fromOldHungarian('𐳔𐳞𐳔𐳋𐳚');  // 'kökény'
```

## Resources

- [Old Hungarian on Wikipedia](https://en.wikipedia.org/wiki/Old_Hungarian_script)
- [Unicode Standard - Old Hungarian](https://unicode.org/charts/PDF/U10C80.pdf)
- [magyarrovas.hu](https://magyarrovas.hu/)

## See Also

- [API Documentation](./API.md) - Complete API reference
- [README](../README.md) - Project overview and quick start
