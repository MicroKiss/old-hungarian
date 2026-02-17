import { toOldHungarian } from "../../src";

test('Unicode normalization (NFD to NFC)', () => {
  // NFD: decomposed form (base character + combining diacritic)
  // NFC: composed form (single precomposed character)
  
  // Test single decomposed ö (o + combining diaeresis U+0308)
  expect(toOldHungarian('o\u0308')).toBe('𐳝');
  
  // Test decomposed ö in word "tök"
  expect(toOldHungarian('to\u0308k')).toBe('𐳦𐳝𐳓');
  
  // Test multiple decomposed characters "kör"
  expect(toOldHungarian('ko\u0308r')).toBe('𐳓𐳝𐳢');
  
  // Test with alternative characters
  expect(toOldHungarian('ko\u0308r', { alternativeK: true, alternativeO: true })).toBe('𐳔𐳞𐳢');
  
  // Test decomposed á (a + combining acute U+0301)
  expect(toOldHungarian('a\u0301')).toBe('𐳁');
  
  // Test decomposed é (e + combining acute U+0301)
  expect(toOldHungarian('e\u0301')).toBe('𐳋');
  
  // Test decomposed ü (u + combining diaeresis U+0308)
  expect(toOldHungarian('u\u0308')).toBe('𐳬');
  
  // Test mixed composed and decomposed in same string "Gyönyörü"
  expect(toOldHungarian('Gyo\u0308nyo\u0308ru\u0308')).toBe('𐲎𐳝𐳚𐳝𐳢𐳬');
});

test('Normalize', () => {
	const text = 'Árvíztűrő tükörfúrógép';

	expect(toOldHungarian(text.normalize('NFC'))).toBe('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠');
	expect(toOldHungarian(text.normalize('NFD'))).toBe('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠');
	expect(toOldHungarian(text.normalize('NFKC'))).toBe('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠');
	expect(toOldHungarian(text.normalize('NFKD'))).toBe('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠');
});