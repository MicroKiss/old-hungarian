import { toOldHungarian, IllegalCharacterError } from '../../src/index.js';

test('Convert vowels to old hungarian', () => {
  expect(toOldHungarian('a')).toBe('𐳀');
  expect(toOldHungarian('A')).toBe('𐲀');
  expect(toOldHungarian('á')).toBe('𐳁');
  expect(toOldHungarian('Á')).toBe('𐲁');
  expect(toOldHungarian('e')).toBe('𐳉');
  expect(toOldHungarian('E')).toBe('𐲉');
  expect(toOldHungarian('é')).toBe('𐳋');
  expect(toOldHungarian('É')).toBe('𐲋');
  expect(toOldHungarian('i')).toBe('𐳐');
  expect(toOldHungarian('I')).toBe('𐲐');
  expect(toOldHungarian('í')).toBe('𐳑');
  expect(toOldHungarian('Í')).toBe('𐲑');
  expect(toOldHungarian('o')).toBe('𐳛');
  expect(toOldHungarian('O')).toBe('𐲛');
  expect(toOldHungarian('ó')).toBe('𐳜');
  expect(toOldHungarian('Ó')).toBe('𐲜');
  expect(toOldHungarian('ö')).toBe('𐳝');
  expect(toOldHungarian('Ö')).toBe('𐲝');
  expect(toOldHungarian('ő')).toBe('𐳟');
  expect(toOldHungarian('Ő')).toBe('𐲟');
  expect(toOldHungarian('u')).toBe('𐳪');
  expect(toOldHungarian('U')).toBe('𐲪');
  expect(toOldHungarian('ú')).toBe('𐳫');
  expect(toOldHungarian('Ú')).toBe('𐲫');
  expect(toOldHungarian('ü')).toBe('𐳬');
  expect(toOldHungarian('Ü')).toBe('𐲬');
  expect(toOldHungarian('ű')).toBe('𐳭');
  expect(toOldHungarian('Ű')).toBe('𐲭');
});

test('Convert single consonants to old hungarian', () => {
  expect(toOldHungarian('b')).toBe('𐳂');
  expect(toOldHungarian('B')).toBe('𐲂');
  expect(toOldHungarian('c')).toBe('𐳄');
  expect(toOldHungarian('C')).toBe('𐲄');
  expect(toOldHungarian('d')).toBe('𐳇');
  expect(toOldHungarian('D')).toBe('𐲇');
  expect(toOldHungarian('f')).toBe('𐳌');
  expect(toOldHungarian('F')).toBe('𐲌');
  expect(toOldHungarian('g')).toBe('𐳍');
  expect(toOldHungarian('G')).toBe('𐲍');
  expect(toOldHungarian('h')).toBe('𐳏');
  expect(toOldHungarian('H')).toBe('𐲏');
  expect(toOldHungarian('j')).toBe('𐳒');
  expect(toOldHungarian('J')).toBe('𐲒');
  expect(toOldHungarian('k')).toBe('𐳓');
  expect(toOldHungarian('K')).toBe('𐲓');
  expect(toOldHungarian('l')).toBe('𐳖');
  expect(toOldHungarian('L')).toBe('𐲖');
  expect(toOldHungarian('m')).toBe('𐳘');
  expect(toOldHungarian('M')).toBe('𐲘');
  expect(toOldHungarian('n')).toBe('𐳙');
  expect(toOldHungarian('N')).toBe('𐲙');
  expect(toOldHungarian('p')).toBe('𐳠');
  expect(toOldHungarian('P')).toBe('𐲠');
  expect(toOldHungarian('q')).toBe('𐳓𐳮');
  expect(toOldHungarian('Q')).toBe('𐲓𐲮');
  expect(toOldHungarian('r')).toBe('𐳢');
  expect(toOldHungarian('R')).toBe('𐲢');
  expect(toOldHungarian('s')).toBe('𐳤');
  expect(toOldHungarian('S')).toBe('𐲤');
  expect(toOldHungarian('t')).toBe('𐳦');
  expect(toOldHungarian('T')).toBe('𐲦');
  expect(toOldHungarian('v')).toBe('𐳮');
  expect(toOldHungarian('V')).toBe('𐲮');
  expect(toOldHungarian('w')).toBe('𐳮𐳮');
  expect(toOldHungarian('W')).toBe('𐲮𐲮');
  expect(toOldHungarian('x')).toBe('𐳓𐳥');
  expect(toOldHungarian('X')).toBe('𐲓𐲥');
  expect(toOldHungarian('y')).toBe('𐳐𐳒');
  expect(toOldHungarian('Y')).toBe('𐲐𐲒');
  expect(toOldHungarian('z')).toBe('𐳯');
  expect(toOldHungarian('Z')).toBe('𐲯');
});

test('Convert multi consonants to old hungarian', () => {
  expect(toOldHungarian('cs')).toBe('𐳆');
  expect(toOldHungarian('Cs')).toBe('𐲆');
  expect(toOldHungarian('gy')).toBe('𐳎');
  expect(toOldHungarian('Gy')).toBe('𐲎');
  expect(toOldHungarian('ly')).toBe('𐳗');
  expect(toOldHungarian('Ly')).toBe('𐲗');
  expect(toOldHungarian('ny')).toBe('𐳚');
  expect(toOldHungarian('Ny')).toBe('𐲚');
  expect(toOldHungarian('sz')).toBe('𐳥');
  expect(toOldHungarian('Sz')).toBe('𐲥');
  expect(toOldHungarian('ty')).toBe('𐳨');
  expect(toOldHungarian('Ty')).toBe('𐲨');
  expect(toOldHungarian('zs')).toBe('𐳰');
  expect(toOldHungarian('Zs')).toBe('𐲰');
});

test('latin characters that equal combination of old hungarian characters', () => {
  expect(toOldHungarian('q')).toBe('𐳓𐳮');
  expect(toOldHungarian('Q')).toBe('𐲓𐲮');
  expect(toOldHungarian('w')).toBe('𐳮𐳮');
  expect(toOldHungarian('W')).toBe('𐲮𐲮');
  expect(toOldHungarian('x')).toBe('𐳓𐳥');
  expect(toOldHungarian('X')).toBe('𐲓𐲥');
  expect(toOldHungarian('y')).toBe('𐳐𐳒');
  expect(toOldHungarian('Y')).toBe('𐲐𐲒');
});

test('Convert words to old hungarian', () => {
  expect(toOldHungarian('Hi')).toBe('𐲏𐳐');
  expect(toOldHungarian('cat')).toBe('𐳄𐳀𐳦');
  expect(toOldHungarian('Szia')).toBe('𐲥𐳐𐳀');
  expect(toOldHungarian('cica')).toBe('𐳄𐳐𐳄𐳀');
  expect(toOldHungarian('Gyönyörű')).toBe('𐲎𐳝𐳚𐳝𐳢𐳭');
  expect(toOldHungarian('nap')).toBe('𐳙𐳀𐳠');
  expect(toOldHungarian('beautiful')).toBe('𐳂𐳉𐳀𐳪𐳦𐳐𐳌𐳪𐳖');
  expect(toOldHungarian('Vonyarcvashegy')).toBe('𐲮𐳛𐳚𐳀𐳢𐳄𐳮𐳀𐳤𐳏𐳉𐳎');
});

test('Convert sentences to old hungarian', () => {
  expect(toOldHungarian('Szia cica')).toBe('𐲥𐳐𐳀 𐳄𐳐𐳄𐳀');
  expect(toOldHungarian('Hello World')).toBe('𐲏𐳉𐳖𐳖𐳛 𐲮𐲮𐳛𐳢𐳖𐳇');
  expect(toOldHungarian('Gyönyörű nap')).toBe('𐲎𐳝𐳚𐳝𐳢𐳭 𐳙𐳀𐳠');
  expect(toOldHungarian('Árvíztűrő tükörfúrógép hol marad')).toBe('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠 𐳏𐳛𐳖 𐳘𐳀𐳢𐳀𐳇');
  expect(toOldHungarian('The quick brown fox jumps over the lazy dog')).toBe('𐲦𐳏𐳉 𐳓𐳮𐳪𐳐𐳄𐳓 𐳂𐳢𐳛𐳮𐳮𐳙 𐳌𐳛𐳓𐳥 𐳒𐳪𐳘𐳠𐳤 𐳛𐳮𐳉𐳢 𐳦𐳏𐳉 𐳖𐳀𐳯𐳐𐳒 𐳇𐳛𐳍');
  expect(toOldHungarian('In modern Hungarian the script is known formally as Székely rovásírás')).toBe('𐲐𐳙 𐳘𐳛𐳇𐳉𐳢𐳙 𐲏𐳪𐳙𐳍𐳀𐳢𐳐𐳀𐳙 𐳦𐳏𐳉 𐳤𐳄𐳢𐳐𐳠𐳦 𐳐𐳤 𐳓𐳙𐳛𐳮𐳮𐳙 𐳌𐳛𐳢𐳘𐳀𐳖𐳗 𐳀𐳤 𐲥𐳋𐳓𐳉𐳗 𐳢𐳛𐳮𐳁𐳤𐳑𐳢𐳁𐳤');
});

test('Non latin characters should throw IllegalCharacterError with details', () => {
  const TestError = (text: string, illegalChar: string, position: number) => {
    try {
      toOldHungarian(text, { strict: true });
      fail('Should have thrown an error');
    } catch (error) {
      expect(error).toBeInstanceOf(IllegalCharacterError);
      expect((error as IllegalCharacterError).illegalCharacter).toBe(illegalChar);
      expect((error as IllegalCharacterError).position).toBe(position);
      expect((error as IllegalCharacterError).message).toContain('Input contains illegal character');
    }
  };

  TestError('你好', '你', 0);
  TestError('Hello 世界', '世', 6);
  TestError('café™', '™', 4);
  TestError('Привет', 'П', 0);
  TestError('asdこんにちは', 'こ', 3);
  TestError('Szia mia!', '!', 8);
  TestError('H?i There', '?', 1);
});

test('Allow illegal characters by default', () => {

  expect(toOldHungarian('Hello 世界')).toBe('𐲏𐳉𐳖𐳖𐳛 世界');
  expect(toOldHungarian('café™')).toBe('𐳄𐳀𐳌𐳋™');
  expect(toOldHungarian('Szia mia 😺 ⚰️')).toBe('𐲥𐳐𐳀 𐳘𐳐𐳀 😺 ⚰️');
  expect(toOldHungarian('Привет мир')).toBe('Привет мир');
  expect(toOldHungarian('lang🥚egg')).toBe('𐳖𐳀𐳙𐳍🥚𐳉𐳍𐳍');
  expect(toOldHungarian('Test₁₂₃')).toBe('𐲦𐳉𐳤𐳦₁₂₃');
  expect(toOldHungarian('questionmark?questionmark')).toBe('𐳓𐳮𐳪𐳉𐳤𐳦𐳐𐳛𐳙𐳘𐳀𐳢𐳓?𐳓𐳮𐳪𐳉𐳤𐳦𐳐𐳛𐳙𐳘𐳀𐳢𐳓');
});

test('Alternative K character', () => {
  expect(toOldHungarian('k')).toBe('𐳓');
  expect(toOldHungarian('K')).toBe('𐲓');
  expect(toOldHungarian('kör')).toBe('𐳓𐳝𐳢');
  expect(toOldHungarian('Káka')).toBe('𐲓𐳁𐳓𐳀');

  expect(toOldHungarian('k', { alternativeK: true })).toBe('𐳔');
  expect(toOldHungarian('K', { alternativeK: true })).toBe('𐲔');
  expect(toOldHungarian('kör', { alternativeK: true })).toBe('𐳔𐳝𐳢');
  expect(toOldHungarian('Káka', { alternativeK: true })).toBe('𐲔𐳁𐳔𐳀');
  expect(toOldHungarian('kettő', { alternativeK: true })).toBe('𐳔𐳉𐳦𐳦𐳟');
  expect(toOldHungarian('Kék', { alternativeK: true })).toBe('𐲔𐳋𐳔');
});

test('Alternative O character', () => {
  expect(toOldHungarian('ö')).toBe('𐳝');
  expect(toOldHungarian('Ö')).toBe('𐲝');
  expect(toOldHungarian('öt')).toBe('𐳝𐳦');
  expect(toOldHungarian('Ördög')).toBe('𐲝𐳢𐳇𐳝𐳍');

  expect(toOldHungarian('ö', { alternativeO: true })).toBe('𐳞');
  expect(toOldHungarian('Ö', { alternativeO: true })).toBe('𐲞');
  expect(toOldHungarian('öt', { alternativeO: true })).toBe('𐳞𐳦');
  expect(toOldHungarian('Ördög', { alternativeO: true })).toBe('𐲞𐳢𐳇𐳞𐳍');
  expect(toOldHungarian('tök', { alternativeO: true })).toBe('𐳦𐳞𐳓');
  expect(toOldHungarian('Török', { alternativeO: true })).toBe('𐲦𐳞𐳢𐳞𐳓');
});

test('Both alternative characters combined', () => {
  const altBoth = (str: string) => toOldHungarian(str, { alternativeK: true, alternativeO: true });

  expect(altBoth('kör')).toBe('𐳔𐳞𐳢');
  expect(altBoth('Kör')).toBe('𐲔𐳞𐳢');
  expect(altBoth('köd')).toBe('𐳔𐳞𐳇');
  expect(altBoth('Kötél')).toBe('𐲔𐳞𐳦𐳋𐳖');
  expect(altBoth('körök')).toBe('𐳔𐳞𐳢𐳞𐳔');
  expect(altBoth('kökény')).toBe('𐳔𐳞𐳔𐳋𐳚');

  expect(altBoth('kel')).toBe('𐳔𐳉𐳖');
  expect(altBoth('kapa')).toBe('𐳔𐳀𐳠𐳀');

  expect(altBoth('tör')).toBe('𐳦𐳞𐳢');
  expect(altBoth('öl')).toBe('𐳞𐳖');
});

test('Switching between different option modes', () => {
  const testWord = 'kör';

  const default1 = toOldHungarian(testWord);
  expect(default1).toBe('𐳓𐳝𐳢');

  const altK1 = toOldHungarian(testWord, { alternativeK: true });
  expect(altK1).toBe('𐳔𐳝𐳢');

  const altO1 = toOldHungarian(testWord, { alternativeO: true });
  expect(altO1).toBe('𐳓𐳞𐳢');

  const altBoth1 = toOldHungarian(testWord, { alternativeK: true, alternativeO: true });
  expect(altBoth1).toBe('𐳔𐳞𐳢');

  const default2 = toOldHungarian(testWord);
  expect(default2).toBe('𐳓𐳝𐳢');

  const altK2 = toOldHungarian(testWord, { alternativeK: true });
  expect(altK2).toBe('𐳔𐳝𐳢');

  expect(default1).toBe(default2);
  expect(altK1).toBe(altK2);

  expect(toOldHungarian('kettő')).toBe('𐳓𐳉𐳦𐳦𐳟');
  expect(toOldHungarian('kettő', { alternativeK: true })).toBe('𐳔𐳉𐳦𐳦𐳟');
  expect(toOldHungarian('öt')).toBe('𐳝𐳦');
  expect(toOldHungarian('öt', { alternativeO: true })).toBe('𐳞𐳦');
  expect(toOldHungarian('kökény', { alternativeK: true, alternativeO: true })).toBe('𐳔𐳞𐳔𐳋𐳚');
});

test('Alternative characters with other options', () => {
  const result1 = toOldHungarian('kör😊test', {
    alternativeK: true,
    alternativeO: true
  });
  expect(result1).toBe('𐳔𐳞𐳢😊𐳦𐳉𐳤𐳦');
  const result2 = toOldHungarian('köszönöm123', {
    alternativeO: true
  });
  expect(result2).toBe('𐳓𐳞𐳥𐳞𐳙𐳞𐳘𐳾𐳼𐳼𐳺𐳺𐳺');
  const result3 = toOldHungarian('k!k', {
    alternativeK: true
  });
  expect(result3).toBe('𐳔!𐳔');
});

test('Number in sentence', () => {
  expect(toOldHungarian('A tartozásod 27 bárány és 2 szurony')).toBe('𐲀 𐳦𐳀𐳢𐳦𐳛𐳯𐳁𐳤𐳛𐳇 𐳼𐳼𐳻𐳺𐳺 𐳂𐳁𐳢𐳁𐳚 𐳋𐳤 𐳺𐳺 𐳥𐳪𐳢𐳛𐳚');
  expect(toOldHungarian('I have 2 cats and 3 dogs')).toBe('𐲐 𐳏𐳀𐳮𐳉 𐳺𐳺 𐳄𐳀𐳦𐳤 𐳀𐳙𐳇 𐳺𐳺𐳺 𐳇𐳛𐳍𐳤');
  expect(toOldHungarian('4567 és 1231 az 5798')).toBe('𐳺𐳺𐳺𐳺𐳿𐳻𐳾𐳽𐳼𐳻𐳺𐳺 𐳋𐳤 𐳿𐳺𐳺𐳾𐳼𐳼𐳼𐳺 𐳀𐳯 𐳻𐳿𐳻𐳺𐳺𐳾𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺');
  expect(toOldHungarian('4567 and 1231 is 5798', { numberFormat: 'additive' })).toBe('𐳿𐳿𐳿𐳿𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳻𐳺𐳺 𐳀𐳙𐳇 𐳿𐳾𐳾𐳼𐳼𐳼𐳺 𐳐𐳤 𐳿𐳿𐳿𐳿𐳿𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺');
  expect(toOldHungarian('2026 az aktuális év')).toBe('𐳺𐳺𐳿𐳼𐳼𐳻𐳺 𐳀𐳯 𐳀𐳓𐳦𐳪𐳁𐳖𐳐𐳤 𐳋𐳮');
  expect(toOldHungarian('2024 az aktuális év', { numberFormat: 'additive' })).toBe('𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳀𐳯 𐳀𐳓𐳦𐳪𐳁𐳖𐳐𐳤 𐳋𐳮');
  expect(toOldHungarian('The year is 2024')).toBe('𐲦𐳏𐳉 𐳐𐳒𐳉𐳀𐳢 𐳐𐳤 𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺');
  expect(toOldHungarian('The year is 2024', { numberFormat: 'additive' })).toBe('𐲦𐳏𐳉 𐳐𐳒𐳉𐳀𐳢 𐳐𐳤 𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺');
});

test('Empty string input', () => {
  expect(toOldHungarian('')).toBe('');
});