import { fromOldHungarian, IllegalCharacterError } from '../../src/index.js';

test('Convert vowels from old hungarian', () => {
	expect(fromOldHungarian('𐳀')).toBe('a');
	expect(fromOldHungarian('𐲀')).toBe('A');
	expect(fromOldHungarian('𐳁')).toBe('á');
	expect(fromOldHungarian('𐲁')).toBe('Á');
	expect(fromOldHungarian('𐳉')).toBe('e');
	expect(fromOldHungarian('𐲉')).toBe('E');
	expect(fromOldHungarian('𐳋')).toBe('é');
	expect(fromOldHungarian('𐲋')).toBe('É');
	expect(fromOldHungarian('𐳐')).toBe('i');
	expect(fromOldHungarian('𐲐')).toBe('I');
	expect(fromOldHungarian('𐳑')).toBe('í');
	expect(fromOldHungarian('𐲑')).toBe('Í');
	expect(fromOldHungarian('𐳛')).toBe('o');
	expect(fromOldHungarian('𐲛')).toBe('O');
	expect(fromOldHungarian('𐳜')).toBe('ó');
	expect(fromOldHungarian('𐲜')).toBe('Ó');
	expect(fromOldHungarian('𐳝')).toBe('ö');
	expect(fromOldHungarian('𐲝')).toBe('Ö');
	expect(fromOldHungarian('𐳟')).toBe('ő');
	expect(fromOldHungarian('𐲟')).toBe('Ő');
	expect(fromOldHungarian('𐳪')).toBe('u');
	expect(fromOldHungarian('𐲪')).toBe('U');
	expect(fromOldHungarian('𐳫')).toBe('ú');
	expect(fromOldHungarian('𐲫')).toBe('Ú');
	expect(fromOldHungarian('𐳬')).toBe('ü');
	expect(fromOldHungarian('𐲬')).toBe('Ü');
	expect(fromOldHungarian('𐳭')).toBe('ű');
	expect(fromOldHungarian('𐲭')).toBe('Ű');
});

test('Convert single consonants from old hungarian', () => {
	expect(fromOldHungarian('𐳂')).toBe('b');
	expect(fromOldHungarian('𐲂')).toBe('B');
	expect(fromOldHungarian('𐳄')).toBe('c');
	expect(fromOldHungarian('𐲄')).toBe('C');
	expect(fromOldHungarian('𐳇')).toBe('d');
	expect(fromOldHungarian('𐲇')).toBe('D');
	expect(fromOldHungarian('𐳌')).toBe('f');
	expect(fromOldHungarian('𐲌')).toBe('F');
	expect(fromOldHungarian('𐳍')).toBe('g');
	expect(fromOldHungarian('𐲍')).toBe('G');
	expect(fromOldHungarian('𐳏')).toBe('h');
	expect(fromOldHungarian('𐲏')).toBe('H');
	expect(fromOldHungarian('𐳒')).toBe('j');
	expect(fromOldHungarian('𐲒')).toBe('J');
	expect(fromOldHungarian('𐳓')).toBe('k');
	expect(fromOldHungarian('𐲓')).toBe('K');
	expect(fromOldHungarian('𐳖')).toBe('l');
	expect(fromOldHungarian('𐲖')).toBe('L');
	expect(fromOldHungarian('𐳘')).toBe('m');
	expect(fromOldHungarian('𐲘')).toBe('M');
	expect(fromOldHungarian('𐳙')).toBe('n');
	expect(fromOldHungarian('𐲙')).toBe('N');
	expect(fromOldHungarian('𐳠')).toBe('p');
	expect(fromOldHungarian('𐲠')).toBe('P');
	expect(fromOldHungarian('𐳢')).toBe('r');
	expect(fromOldHungarian('𐲢')).toBe('R');
	expect(fromOldHungarian('𐳤')).toBe('s');
	expect(fromOldHungarian('𐲤')).toBe('S');
	expect(fromOldHungarian('𐳦')).toBe('t');
	expect(fromOldHungarian('𐲦')).toBe('T');
	expect(fromOldHungarian('𐳮')).toBe('v');
	expect(fromOldHungarian('𐲮')).toBe('V');
	expect(fromOldHungarian('𐳯')).toBe('z');
	expect(fromOldHungarian('𐲯')).toBe('Z');
});

test('Convert multi consonants from old hungarian', () => {
	expect(fromOldHungarian('𐳆')).toBe('cs');
	expect(fromOldHungarian('𐲆')).toBe('Cs');
	expect(fromOldHungarian('𐳎')).toBe('gy');
	expect(fromOldHungarian('𐲎')).toBe('Gy');
	expect(fromOldHungarian('𐳗')).toBe('ly');
	expect(fromOldHungarian('𐲗')).toBe('Ly');
	expect(fromOldHungarian('𐳚')).toBe('ny');
	expect(fromOldHungarian('𐲚')).toBe('Ny');
	expect(fromOldHungarian('𐳥')).toBe('sz');
	expect(fromOldHungarian('𐲥')).toBe('Sz');
	expect(fromOldHungarian('𐳨')).toBe('ty');
	expect(fromOldHungarian('𐲨')).toBe('Ty');
	expect(fromOldHungarian('𐳰')).toBe('zs');
	expect(fromOldHungarian('𐲰')).toBe('Zs');
});

test('Convert words from old hungarian', () => {
	expect(fromOldHungarian('𐲏𐳐')).toBe('Hi');
	expect(fromOldHungarian('𐳄𐳀𐳦')).toBe('cat');
	expect(fromOldHungarian('𐲥𐳐𐳀')).toBe('Szia');
	expect(fromOldHungarian('𐳄𐳐𐳄𐳀')).toBe('cica');
	expect(fromOldHungarian('𐲎𐳝𐳚𐳝𐳢𐳭')).toBe('Gyönyörű');
	expect(fromOldHungarian('𐳙𐳀𐳠')).toBe('nap');
	expect(fromOldHungarian('𐳂𐳉𐳀𐳪𐳦𐳐𐳌𐳪𐳖')).toBe('beautiful');
	expect(fromOldHungarian('𐲮𐳛𐳚𐳀𐳢𐳄𐳮𐳀𐳤𐳏𐳉𐳎')).toBe('Vonyarcvashegy');
});

test('Convert sentences from old hungarian', () => {
	expect(fromOldHungarian('𐲥𐳐𐳀 𐳄𐳐𐳄𐳀')).toBe('Szia cica');
	expect(fromOldHungarian('𐲎𐳝𐳚𐳝𐳢𐳭 𐳙𐳀𐳠')).toBe('Gyönyörű nap');
	expect(fromOldHungarian('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠 𐳏𐳛𐳖 𐳘𐳀𐳢𐳀𐳇')).toBe('Árvíztűrő tükörfúrógép hol marad');
	expect(fromOldHungarian('𐲐𐳙 𐳘𐳛𐳇𐳉𐳢𐳙 𐲏𐳪𐳙𐳍𐳀𐳢𐳐𐳀𐳙 𐳦𐳏𐳉 𐳤𐳄𐳢𐳐𐳠𐳦 𐳐𐳤 𐳓𐳙𐳛𐳮𐳮𐳙 𐳌𐳛𐳢𐳘𐳀𐳖𐳗 𐳀𐳤 𐲥𐳋𐳓𐳉𐳗 𐳢𐳛𐳮𐳁𐳤𐳑𐳢𐳁𐳤')).toBe('In modern Hungarian the script is known formally as Székely rovásírás');
});

test('Alternative K character', () => {
	expect(fromOldHungarian('𐳔')).toBe('k');
	expect(fromOldHungarian('𐲔')).toBe('K');
	expect(fromOldHungarian('𐳔𐳝𐳢')).toBe('kör');
	expect(fromOldHungarian('𐲔𐳁𐳔𐳀')).toBe('Káka');
	expect(fromOldHungarian('𐳔𐳉𐳦𐳦𐳟')).toBe('kettő');
	expect(fromOldHungarian('𐲔𐳋𐳔')).toBe('Kék');
});

test('Alternative O character', () => {
	expect(fromOldHungarian('𐳞')).toBe('ö');
	expect(fromOldHungarian('𐲞')).toBe('Ö');
	expect(fromOldHungarian('𐳞𐳦')).toBe('öt');
	expect(fromOldHungarian('𐲞𐳢𐳇𐳞𐳍')).toBe('Ördög');
	expect(fromOldHungarian('𐳦𐳞𐳓')).toBe('tök');
	expect(fromOldHungarian('𐲦𐳞𐳢𐳞𐳓')).toBe('Török');
});

test('Both alternative characters combined', () => {
	expect(fromOldHungarian('𐳔𐳞𐳢')).toBe('kör');
	expect(fromOldHungarian('𐲔𐳞𐳢')).toBe('Kör');
	expect(fromOldHungarian('𐳔𐳞𐳇')).toBe('köd');
	expect(fromOldHungarian('𐲔𐳞𐳦𐳋𐳖')).toBe('Kötél');
	expect(fromOldHungarian('𐳔𐳞𐳢𐳞𐳔')).toBe('körök');
	expect(fromOldHungarian('𐳔𐳞𐳔𐳋𐳚')).toBe('kökény');
});

test('Allow illegal characters by default', () => {
	expect(fromOldHungarian('𐲏𐳉𐳖𐳖𐳛 世界')).toBe('Hello 世界');
	expect(fromOldHungarian('𐳄𐳀𐳌𐳋™')).toBe('café™');
	expect(fromOldHungarian('𐲥𐳐𐳀 𐳘𐳐𐳀 😺 ⚰️')).toBe('Szia mia 😺 ⚰️');
	expect(fromOldHungarian('Привет мир')).toBe('Привет мир');
	expect(fromOldHungarian('𐳖𐳀𐳙𐳍🥚𐳉𐳍𐳍')).toBe('lang🥚egg');
	expect(fromOldHungarian('𐲦𐳉𐳤𐳦₁₂₃')).toBe('Test₁₂₃');
	expect(fromOldHungarian('𐳓𐳮𐳪𐳉𐳤𐳦𐳐𐳛𐳙𐳘𐳀𐳢𐳓?𐳓𐳮𐳪𐳉𐳤𐳦𐳐𐳛𐳙𐳘𐳀𐳢𐳓')).toBe('questionmark?questionmark');
});

test('Numbers in sentences', () => {
	expect(fromOldHungarian('𐳼𐳼𐳻𐳺𐳺 𐳂𐳁𐳢𐳁𐳚 𐳋𐳤 𐳺𐳺 𐳥𐳪𐳢𐳛𐳚')).toBe('27 bárány és 2 szurony');
	expect(fromOldHungarian('𐳺𐳺𐳺𐳺𐳿𐳻𐳾𐳽𐳼𐳻𐳺𐳺 𐳋𐳤 𐳿𐳺𐳺𐳾𐳼𐳼𐳼𐳺 𐳀𐳯 𐳻𐳿𐳻𐳺𐳺𐳾𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺')).toBe('4567 és 1231 az 5798');
	expect(fromOldHungarian('𐳿𐳿𐳿𐳿𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳻𐳺𐳺 𐳀𐳙𐳇 𐳿𐳾𐳾𐳼𐳼𐳼𐳺 𐳐𐳤 𐳿𐳿𐳿𐳿𐳿𐳾𐳾𐳾𐳾𐳾𐳾𐳾𐳽𐳼𐳼𐳼𐳼𐳻𐳺𐳺𐳺', { numberFormat: 'additive' })).toBe('4567 and 1231 is 5798');
	expect(fromOldHungarian('𐳺𐳺𐳿𐳼𐳼𐳻𐳺 𐳀𐳯 𐳀𐳓𐳦𐳪𐳁𐳖𐳐𐳤 𐳋𐳮')).toBe('2026 az aktuális év');
	expect(fromOldHungarian('𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳀𐳯 𐳀𐳓𐳦𐳪𐳁𐳖𐳐𐳤 𐳋𐳮', { numberFormat: 'additive' })).toBe('2024 az aktuális év');
});

test('Empty string input', () => {
	expect(fromOldHungarian('')).toBe('');
});

test('Non Old Hungarian characters should throw IllegalCharacterError with details', () => {
  const TestError = (text: string, illegalChar: string, position: number) => {
    try {
      fromOldHungarian(text, { strict: true });
      fail('Should have thrown an error');
    } catch (error) {
      expect(error).toBeInstanceOf(IllegalCharacterError);
      expect((error as IllegalCharacterError).illegalCharacter).toBe(illegalChar);
      expect((error as IllegalCharacterError).position).toBe(position);
      expect((error as IllegalCharacterError).message).toContain('Input contains illegal character');
    }
  };

  TestError('你好', '你', 0);
  TestError('𐲏𐳉𐳖𐳖𐳛 世界', '世', 6);
  TestError('𐳄𐳀𐳌𐳋™', '™', 4);
  TestError('Привет', 'П', 0);
  TestError('𐳀𐳤𐳇こんにちは', 'こ', 3);
  TestError('𐲥𐳐𐳀 𐳘𐳐𐳀!', '!', 7);
  TestError('𐲏?𐳐 𐲦𐳏𐳉𐳢𐳉', '?', 1);
});

test('Allow illegal characters by default', () => {
  expect(fromOldHungarian('𐲏𐳉𐳖𐳖𐳛 世界')).toBe('Hello 世界');
  expect(fromOldHungarian('𐳄𐳀𐳌𐳋™')).toBe('café™');
  expect(fromOldHungarian('𐲥𐳐𐳀 𐳘𐳐𐳀 😺 ⚰️')).toBe('Szia mia 😺 ⚰️');
  expect(fromOldHungarian('Привет мир')).toBe('Привет мир');
  expect(fromOldHungarian('𐳖𐳀𐳙𐳍🥚𐳉𐳍𐳍')).toBe('lang🥚egg');
  expect(fromOldHungarian('𐲦𐳉𐳤𐳦₁₂₃')).toBe('Test₁₂₃');
  expect(fromOldHungarian('𐳓𐳮𐳪𐳉𐳤𐳦𐳐𐳛𐳙𐳘𐳀𐳢𐳓?𐳓𐳮𐳪𐳉𐳤𐳦𐳐𐳛𐳙𐳘𐳀𐳢𐳓')).toBe('questionmark?questionmark');
});