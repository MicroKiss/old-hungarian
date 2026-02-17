import { toOldHungarian } from '../../src/toOldHungarian.js';
import { fromOldHungarian } from '../../src/fromOldHungarian.js';

describe('Round-trip conversion: Latin -> Old Hungarian -> Latin', () => {
	test('Single vowels', () => {
		expect(fromOldHungarian(toOldHungarian('a'))).toBe('a');
		expect(fromOldHungarian(toOldHungarian('A'))).toBe('A');
		expect(fromOldHungarian(toOldHungarian('á'))).toBe('á');
		expect(fromOldHungarian(toOldHungarian('Á'))).toBe('Á');
		expect(fromOldHungarian(toOldHungarian('e'))).toBe('e');
		expect(fromOldHungarian(toOldHungarian('E'))).toBe('E');
		expect(fromOldHungarian(toOldHungarian('é'))).toBe('é');
		expect(fromOldHungarian(toOldHungarian('É'))).toBe('É');
		expect(fromOldHungarian(toOldHungarian('i'))).toBe('i');
		expect(fromOldHungarian(toOldHungarian('I'))).toBe('I');
		expect(fromOldHungarian(toOldHungarian('í'))).toBe('í');
		expect(fromOldHungarian(toOldHungarian('Í'))).toBe('Í');
		expect(fromOldHungarian(toOldHungarian('o'))).toBe('o');
		expect(fromOldHungarian(toOldHungarian('O'))).toBe('O');
		expect(fromOldHungarian(toOldHungarian('ó'))).toBe('ó');
		expect(fromOldHungarian(toOldHungarian('Ó'))).toBe('Ó');
		expect(fromOldHungarian(toOldHungarian('ö'))).toBe('ö');
		expect(fromOldHungarian(toOldHungarian('Ö'))).toBe('Ö');
		expect(fromOldHungarian(toOldHungarian('ő'))).toBe('ő');
		expect(fromOldHungarian(toOldHungarian('Ő'))).toBe('Ő');
		expect(fromOldHungarian(toOldHungarian('u'))).toBe('u');
		expect(fromOldHungarian(toOldHungarian('U'))).toBe('U');
		expect(fromOldHungarian(toOldHungarian('ú'))).toBe('ú');
		expect(fromOldHungarian(toOldHungarian('Ú'))).toBe('Ú');
		expect(fromOldHungarian(toOldHungarian('ü'))).toBe('ü');
		expect(fromOldHungarian(toOldHungarian('Ü'))).toBe('Ü');
		expect(fromOldHungarian(toOldHungarian('ű'))).toBe('ű');
		expect(fromOldHungarian(toOldHungarian('Ű'))).toBe('Ű');
	});

	test('Single consonants', () => {
		expect(fromOldHungarian(toOldHungarian('b'))).toBe('b');
		expect(fromOldHungarian(toOldHungarian('B'))).toBe('B');
		expect(fromOldHungarian(toOldHungarian('c'))).toBe('c');
		expect(fromOldHungarian(toOldHungarian('C'))).toBe('C');
		expect(fromOldHungarian(toOldHungarian('d'))).toBe('d');
		expect(fromOldHungarian(toOldHungarian('D'))).toBe('D');
		expect(fromOldHungarian(toOldHungarian('f'))).toBe('f');
		expect(fromOldHungarian(toOldHungarian('F'))).toBe('F');
		expect(fromOldHungarian(toOldHungarian('g'))).toBe('g');
		expect(fromOldHungarian(toOldHungarian('G'))).toBe('G');
		expect(fromOldHungarian(toOldHungarian('h'))).toBe('h');
		expect(fromOldHungarian(toOldHungarian('H'))).toBe('H');
		expect(fromOldHungarian(toOldHungarian('j'))).toBe('j');
		expect(fromOldHungarian(toOldHungarian('J'))).toBe('J');
		expect(fromOldHungarian(toOldHungarian('k'))).toBe('k');
		expect(fromOldHungarian(toOldHungarian('K'))).toBe('K');
		expect(fromOldHungarian(toOldHungarian('l'))).toBe('l');
		expect(fromOldHungarian(toOldHungarian('L'))).toBe('L');
		expect(fromOldHungarian(toOldHungarian('m'))).toBe('m');
		expect(fromOldHungarian(toOldHungarian('M'))).toBe('M');
		expect(fromOldHungarian(toOldHungarian('n'))).toBe('n');
		expect(fromOldHungarian(toOldHungarian('N'))).toBe('N');
		expect(fromOldHungarian(toOldHungarian('p'))).toBe('p');
		expect(fromOldHungarian(toOldHungarian('P'))).toBe('P');
		expect(fromOldHungarian(toOldHungarian('r'))).toBe('r');
		expect(fromOldHungarian(toOldHungarian('R'))).toBe('R');
		expect(fromOldHungarian(toOldHungarian('s'))).toBe('s');
		expect(fromOldHungarian(toOldHungarian('S'))).toBe('S');
		expect(fromOldHungarian(toOldHungarian('t'))).toBe('t');
		expect(fromOldHungarian(toOldHungarian('T'))).toBe('T');
		expect(fromOldHungarian(toOldHungarian('v'))).toBe('v');
		expect(fromOldHungarian(toOldHungarian('V'))).toBe('V');
		expect(fromOldHungarian(toOldHungarian('z'))).toBe('z');
		expect(fromOldHungarian(toOldHungarian('Z'))).toBe('Z');
	});

	test('Multi-character consonants (digraphs)', () => {
		expect(fromOldHungarian(toOldHungarian('cs'))).toBe('cs');
		expect(fromOldHungarian(toOldHungarian('Cs'))).toBe('Cs');
		expect(fromOldHungarian(toOldHungarian('gy'))).toBe('gy');
		expect(fromOldHungarian(toOldHungarian('Gy'))).toBe('Gy');
		expect(fromOldHungarian(toOldHungarian('ly'))).toBe('ly');
		expect(fromOldHungarian(toOldHungarian('Ly'))).toBe('Ly');
		expect(fromOldHungarian(toOldHungarian('ny'))).toBe('ny');
		expect(fromOldHungarian(toOldHungarian('Ny'))).toBe('Ny');
		expect(fromOldHungarian(toOldHungarian('sz'))).toBe('sz');
		expect(fromOldHungarian(toOldHungarian('Sz'))).toBe('Sz');
		expect(fromOldHungarian(toOldHungarian('ty'))).toBe('ty');
		expect(fromOldHungarian(toOldHungarian('Ty'))).toBe('Ty');
		expect(fromOldHungarian(toOldHungarian('zs'))).toBe('zs');
		expect(fromOldHungarian(toOldHungarian('Zs'))).toBe('Zs');
	});

	test('Latin characters that map to combinations', () => {
		expect(fromOldHungarian(toOldHungarian('q'))).toBe('q');
		expect(fromOldHungarian(toOldHungarian('Q'))).toBe('Q');
		expect(fromOldHungarian(toOldHungarian('w'))).toBe('w');
		expect(fromOldHungarian(toOldHungarian('W'))).toBe('W');
		expect(fromOldHungarian(toOldHungarian('x'))).toBe('x');
		expect(fromOldHungarian(toOldHungarian('X'))).toBe('X');
		expect(fromOldHungarian(toOldHungarian('y'))).toBe('y');
		expect(fromOldHungarian(toOldHungarian('Y'))).toBe('Y');
	});

	test('Simple Hungarian words', () => {
		expect(fromOldHungarian(toOldHungarian('alma'))).toBe('alma');
		expect(fromOldHungarian(toOldHungarian('Alma'))).toBe('Alma');
		expect(fromOldHungarian(toOldHungarian('nap'))).toBe('nap');
		expect(fromOldHungarian(toOldHungarian('Nap'))).toBe('Nap');
		expect(fromOldHungarian(toOldHungarian('cica'))).toBe('cica');
		expect(fromOldHungarian(toOldHungarian('Cica'))).toBe('Cica');
		expect(fromOldHungarian(toOldHungarian('ház'))).toBe('ház');
		expect(fromOldHungarian(toOldHungarian('Ház'))).toBe('Ház');
		expect(fromOldHungarian(toOldHungarian('ember'))).toBe('ember');
		expect(fromOldHungarian(toOldHungarian('Ember'))).toBe('Ember');
	});

	test('Hungarian words with special characters', () => {
		expect(fromOldHungarian(toOldHungarian('időjárás'))).toBe('időjárás');
		expect(fromOldHungarian(toOldHungarian('körte'))).toBe('körte');
		expect(fromOldHungarian(toOldHungarian('gyümölcs'))).toBe('gyümölcs');
		expect(fromOldHungarian(toOldHungarian('tükör'))).toBe('tükör');
		expect(fromOldHungarian(toOldHungarian('gyönyörű'))).toBe('gyönyörű');
		expect(fromOldHungarian(toOldHungarian('Gyönyörű'))).toBe('Gyönyörű');
		expect(fromOldHungarian(toOldHungarian('szív'))).toBe('szív');
		expect(fromOldHungarian(toOldHungarian('László'))).toBe('László');
	});

	test('Complete Hungarian sentences', () => {
		expect(fromOldHungarian(toOldHungarian('Szia cica'))).toBe('Szia cica');
		expect(fromOldHungarian(toOldHungarian('Gyönyörű nap'))).toBe('Gyönyörű nap');
		expect(fromOldHungarian(toOldHungarian('Jó reggelt kívánok'))).toBe('Jó reggelt kívánok');
		expect(fromOldHungarian(toOldHungarian('Árvíztűrő tükörfúrógép'))).toBe('Árvíztűrő tükörfúrógép');
		expect(fromOldHungarian(toOldHungarian('Magyar nyelv szép nyelv'))).toBe('Magyar nyelv szép nyelv');
	});

	test('English pangram', () => {
		expect(fromOldHungarian(toOldHungarian('The quick brown fox jumps over the lazy dog'))).toBe('The quick brown fox jumps over the lazy dog');
	});

	test('Mixed text with numbers', () => {
		expect(fromOldHungarian(toOldHungarian('A szám 42 volt'))).toBe('A szám 42 volt');
		expect(fromOldHungarian(toOldHungarian('2024 év'))).toBe('2024 év');
		expect(fromOldHungarian(toOldHungarian('123 alma'))).toBe('123 alma');
	});

	test('Spaces and multiple words', () => {
		expect(fromOldHungarian(toOldHungarian('egy kettő három'))).toBe('egy kettő három');
		expect(fromOldHungarian(toOldHungarian('a b c d e'))).toBe('a b c d e');
		expect(fromOldHungarian(toOldHungarian('   '))).toBe('   ');
	});

	test('Empty string', () => {
		expect(fromOldHungarian(toOldHungarian(''))).toBe('');
	});

	test('Long Hungarian text', () => {
		const text = 'A Székely rovásírás a magyar nyelv egyik ősi írásrendszere';
		expect(fromOldHungarian(toOldHungarian(text))).toBe(text);
	});
});

describe('Round-trip conversion: Old Hungarian -> Latin -> Old Hungarian', () => {
	test('Single vowels', () => {
		expect(toOldHungarian(fromOldHungarian('𐳀'))).toBe('𐳀');
		expect(toOldHungarian(fromOldHungarian('𐲀'))).toBe('𐲀');
		expect(toOldHungarian(fromOldHungarian('𐳁'))).toBe('𐳁');
		expect(toOldHungarian(fromOldHungarian('𐲁'))).toBe('𐲁');
		expect(toOldHungarian(fromOldHungarian('𐳉'))).toBe('𐳉');
		expect(toOldHungarian(fromOldHungarian('𐲉'))).toBe('𐲉');
		expect(toOldHungarian(fromOldHungarian('𐳋'))).toBe('𐳋');
		expect(toOldHungarian(fromOldHungarian('𐲋'))).toBe('𐲋');
		expect(toOldHungarian(fromOldHungarian('𐳐'))).toBe('𐳐');
		expect(toOldHungarian(fromOldHungarian('𐲐'))).toBe('𐲐');
		expect(toOldHungarian(fromOldHungarian('𐳑'))).toBe('𐳑');
		expect(toOldHungarian(fromOldHungarian('𐲑'))).toBe('𐲑');
		expect(toOldHungarian(fromOldHungarian('𐳛'))).toBe('𐳛');
		expect(toOldHungarian(fromOldHungarian('𐲛'))).toBe('𐲛');
		expect(toOldHungarian(fromOldHungarian('𐳜'))).toBe('𐳜');
		expect(toOldHungarian(fromOldHungarian('𐲜'))).toBe('𐲜');
		expect(toOldHungarian(fromOldHungarian('𐳝'))).toBe('𐳝');
		expect(toOldHungarian(fromOldHungarian('𐲝'))).toBe('𐲝');
		expect(toOldHungarian(fromOldHungarian('𐳟'))).toBe('𐳟');
		expect(toOldHungarian(fromOldHungarian('𐲟'))).toBe('𐲟');
		expect(toOldHungarian(fromOldHungarian('𐳪'))).toBe('𐳪');
		expect(toOldHungarian(fromOldHungarian('𐲪'))).toBe('𐲪');
		expect(toOldHungarian(fromOldHungarian('𐳫'))).toBe('𐳫');
		expect(toOldHungarian(fromOldHungarian('𐲫'))).toBe('𐲫');
		expect(toOldHungarian(fromOldHungarian('𐳬'))).toBe('𐳬');
		expect(toOldHungarian(fromOldHungarian('𐲬'))).toBe('𐲬');
		expect(toOldHungarian(fromOldHungarian('𐳭'))).toBe('𐳭');
		expect(toOldHungarian(fromOldHungarian('𐲭'))).toBe('𐲭');
	});

	test('Single consonants', () => {
		expect(toOldHungarian(fromOldHungarian('𐳂'))).toBe('𐳂');
		expect(toOldHungarian(fromOldHungarian('𐲂'))).toBe('𐲂');
		expect(toOldHungarian(fromOldHungarian('𐳄'))).toBe('𐳄');
		expect(toOldHungarian(fromOldHungarian('𐲄'))).toBe('𐲄');
		expect(toOldHungarian(fromOldHungarian('𐳇'))).toBe('𐳇');
		expect(toOldHungarian(fromOldHungarian('𐲇'))).toBe('𐲇');
		expect(toOldHungarian(fromOldHungarian('𐳌'))).toBe('𐳌');
		expect(toOldHungarian(fromOldHungarian('𐲌'))).toBe('𐲌');
		expect(toOldHungarian(fromOldHungarian('𐳍'))).toBe('𐳍');
		expect(toOldHungarian(fromOldHungarian('𐲍'))).toBe('𐲍');
		expect(toOldHungarian(fromOldHungarian('𐳏'))).toBe('𐳏');
		expect(toOldHungarian(fromOldHungarian('𐲏'))).toBe('𐲏');
		expect(toOldHungarian(fromOldHungarian('𐳒'))).toBe('𐳒');
		expect(toOldHungarian(fromOldHungarian('𐲒'))).toBe('𐲒');
		expect(toOldHungarian(fromOldHungarian('𐳓'))).toBe('𐳓');
		expect(toOldHungarian(fromOldHungarian('𐲓'))).toBe('𐲓');
		expect(toOldHungarian(fromOldHungarian('𐳖'))).toBe('𐳖');
		expect(toOldHungarian(fromOldHungarian('𐲖'))).toBe('𐲖');
		expect(toOldHungarian(fromOldHungarian('𐳘'))).toBe('𐳘');
		expect(toOldHungarian(fromOldHungarian('𐲘'))).toBe('𐲘');
		expect(toOldHungarian(fromOldHungarian('𐳙'))).toBe('𐳙');
		expect(toOldHungarian(fromOldHungarian('𐲙'))).toBe('𐲙');
		expect(toOldHungarian(fromOldHungarian('𐳠'))).toBe('𐳠');
		expect(toOldHungarian(fromOldHungarian('𐲠'))).toBe('𐲠');
		expect(toOldHungarian(fromOldHungarian('𐳢'))).toBe('𐳢');
		expect(toOldHungarian(fromOldHungarian('𐲢'))).toBe('𐲢');
		expect(toOldHungarian(fromOldHungarian('𐳤'))).toBe('𐳤');
		expect(toOldHungarian(fromOldHungarian('𐲤'))).toBe('𐲤');
		expect(toOldHungarian(fromOldHungarian('𐳦'))).toBe('𐳦');
		expect(toOldHungarian(fromOldHungarian('𐲦'))).toBe('𐲦');
		expect(toOldHungarian(fromOldHungarian('𐳮'))).toBe('𐳮');
		expect(toOldHungarian(fromOldHungarian('𐲮'))).toBe('𐲮');
		expect(toOldHungarian(fromOldHungarian('𐳯'))).toBe('𐳯');
		expect(toOldHungarian(fromOldHungarian('𐲯'))).toBe('𐲯');
	});

	test('Multi-character consonants (digraphs)', () => {
		expect(toOldHungarian(fromOldHungarian('𐳆'))).toBe('𐳆');
		expect(toOldHungarian(fromOldHungarian('𐲆'))).toBe('𐲆');
		expect(toOldHungarian(fromOldHungarian('𐳎'))).toBe('𐳎');
		expect(toOldHungarian(fromOldHungarian('𐲎'))).toBe('𐲎');
		expect(toOldHungarian(fromOldHungarian('𐳗'))).toBe('𐳗');
		expect(toOldHungarian(fromOldHungarian('𐲗'))).toBe('𐲗');
		expect(toOldHungarian(fromOldHungarian('𐳚'))).toBe('𐳚');
		expect(toOldHungarian(fromOldHungarian('𐲚'))).toBe('𐲚');
		expect(toOldHungarian(fromOldHungarian('𐳥'))).toBe('𐳥');
		expect(toOldHungarian(fromOldHungarian('𐲥'))).toBe('𐲥');
		expect(toOldHungarian(fromOldHungarian('𐳨'))).toBe('𐳨');
		expect(toOldHungarian(fromOldHungarian('𐲨'))).toBe('𐲨');
		expect(toOldHungarian(fromOldHungarian('𐳰'))).toBe('𐳰');
		expect(toOldHungarian(fromOldHungarian('𐲰'))).toBe('𐲰');
	});

	test('Simple Old Hungarian words', () => {
		expect(toOldHungarian(fromOldHungarian('𐳀𐳖𐳘𐳀'))).toBe('𐳀𐳖𐳘𐳀');
		expect(toOldHungarian(fromOldHungarian('𐲀𐳖𐳘𐳀'))).toBe('𐲀𐳖𐳘𐳀');
		expect(toOldHungarian(fromOldHungarian('𐳙𐳀𐳠'))).toBe('𐳙𐳀𐳠');
		expect(toOldHungarian(fromOldHungarian('𐲙𐳀𐳠'))).toBe('𐲙𐳀𐳠');
		expect(toOldHungarian(fromOldHungarian('𐳄𐳐𐳄𐳀'))).toBe('𐳄𐳐𐳄𐳀');
		expect(toOldHungarian(fromOldHungarian('𐲄𐳐𐳄𐳀'))).toBe('𐲄𐳐𐳄𐳀');
		expect(toOldHungarian(fromOldHungarian('𐳏𐳁𐳯'))).toBe('𐳏𐳁𐳯');
		expect(toOldHungarian(fromOldHungarian('𐲏𐳁𐳯'))).toBe('𐲏𐳁𐳯');
	});

	test('Complex Old Hungarian words', () => {
		expect(toOldHungarian(fromOldHungarian('𐳐𐳇𐳟𐳒𐳁𐳢𐳁𐳤'))).toBe('𐳐𐳇𐳟𐳒𐳁𐳢𐳁𐳤');
		expect(toOldHungarian(fromOldHungarian('𐳓𐳝𐳢𐳦𐳉'))).toBe('𐳓𐳝𐳢𐳦𐳉');
		expect(toOldHungarian(fromOldHungarian('𐳎𐳬𐳘𐳝𐳖𐳆'))).toBe('𐳎𐳬𐳘𐳝𐳖𐳆');
		expect(toOldHungarian(fromOldHungarian('𐳦𐳬𐳓𐳝𐳢'))).toBe('𐳦𐳬𐳓𐳝𐳢');
		expect(toOldHungarian(fromOldHungarian('𐳎𐳝𐳚𐳝𐳢𐳭'))).toBe('𐳎𐳝𐳚𐳝𐳢𐳭');
		expect(toOldHungarian(fromOldHungarian('𐲎𐳝𐳚𐳝𐳢𐳭'))).toBe('𐲎𐳝𐳚𐳝𐳢𐳭');
		expect(toOldHungarian(fromOldHungarian('𐳥𐳑𐳮'))).toBe('𐳥𐳑𐳮');
		expect(toOldHungarian(fromOldHungarian('𐲖𐳁𐳥𐳯𐳖𐳜'))).toBe('𐲖𐳁𐳥𐳯𐳖𐳜');
	});

	test('Old Hungarian sentences', () => {
		expect(toOldHungarian(fromOldHungarian('𐲥𐳐𐳀 𐳄𐳐𐳄𐳀'))).toBe('𐲥𐳐𐳀 𐳄𐳐𐳄𐳀');
		expect(toOldHungarian(fromOldHungarian('𐲎𐳝𐳚𐳝𐳢𐳭 𐳙𐳀𐳠'))).toBe('𐲎𐳝𐳚𐳝𐳢𐳭 𐳙𐳀𐳠');
		expect(toOldHungarian(fromOldHungarian('𐲒𐳜 𐳢𐳉𐳍𐳍𐳉𐳖𐳦 𐳓𐳑𐳮𐳁𐳙𐳛𐳓'))).toBe('𐲒𐳜 𐳢𐳉𐳍𐳍𐳉𐳖𐳦 𐳓𐳑𐳮𐳁𐳙𐳛𐳓');
		expect(toOldHungarian(fromOldHungarian('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠'))).toBe('𐲁𐳢𐳮𐳑𐳯𐳦𐳭𐳢𐳟 𐳦𐳬𐳓𐳝𐳢𐳌𐳫𐳢𐳜𐳍𐳋𐳠');
		expect(toOldHungarian(fromOldHungarian('𐲘𐳀𐳍𐳐𐳀𐳢 𐳙𐳐𐳉𐳖𐳮 𐳥𐳋𐳠 𐳙𐳐𐳉𐳖𐳮'))).toBe('𐲘𐳀𐳍𐳐𐳀𐳢 𐳙𐳐𐳉𐳖𐳮 𐳥𐳋𐳠 𐳙𐳐𐳉𐳖𐳮');
	});

	test('Old Hungarian with numbers', () => {
		expect(toOldHungarian(fromOldHungarian('𐲀 𐳥𐳁𐳘 𐳼𐳼𐳺𐳺 𐳮𐳛𐳖𐳦'))).toBe('𐲀 𐳥𐳁𐳘 𐳼𐳼𐳺𐳺 𐳮𐳛𐳖𐳦');
		expect(toOldHungarian(fromOldHungarian('𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳋𐳮'))).toBe('𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺 𐳋𐳮');
	});

	test('Empty string', () => {
		expect(toOldHungarian(fromOldHungarian(''))).toBe('');
	});

	test('Alternative K character', () => {
		expect(toOldHungarian(fromOldHungarian('𐳔𐳝𐳢'))).toBe('𐳓𐳝𐳢');
		expect(toOldHungarian(fromOldHungarian('𐲔𐳁𐳔𐳀'))).toBe('𐲓𐳁𐳓𐳀');
		expect(toOldHungarian(fromOldHungarian('𐳔𐳉𐳦𐳦𐳟'))).toBe('𐳓𐳉𐳦𐳦𐳟');
	});

	test('Alternative O character', () => {
		expect(toOldHungarian(fromOldHungarian('𐳞𐳦'))).toBe('𐳝𐳦');
		expect(toOldHungarian(fromOldHungarian('𐲞𐳢𐳇𐳞𐳍'))).toBe('𐲝𐳢𐳇𐳝𐳍');
		expect(toOldHungarian(fromOldHungarian('𐳦𐳞𐳓'))).toBe('𐳦𐳝𐳓');
	});

	test('Mixed alternative characters', () => {
		expect(toOldHungarian(fromOldHungarian('𐳔𐳞𐳢'))).toBe('𐳓𐳝𐳢');
		expect(toOldHungarian(fromOldHungarian('𐲔𐳞𐳢'))).toBe('𐲓𐳝𐳢');
		expect(toOldHungarian(fromOldHungarian('𐳔𐳞𐳇'))).toBe('𐳓𐳝𐳇');
		expect(toOldHungarian(fromOldHungarian('𐲔𐳞𐳦𐳋𐳖'))).toBe('𐲓𐳝𐳦𐳋𐳖');
	});
});