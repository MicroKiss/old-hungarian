import { 
  toOldHungarian, 
  fromOldHungarian,
  validateLatinInput,
  findIllegalLatinCharacter,
  validateOldHungarianInput,
  findIllegalOldHungarianCharacter,
  ToOldHungarianOptions,
  FromOldHungarianOptions 
} from '../src/index.js';

const tests: Array<{ input: string; expected?: string; shouldThrow?: boolean; options?: ToOldHungarianOptions; desc?: string }> = [
  // Basic examples from API.md
  { input: 'hello', expected: '𐳏𐳉𐳖𐳖𐳛', options: undefined },
  { input: 'Gyönyörű', expected: '𐲎𐳝𐳚𐳝𐳢𐳭', options: undefined },
  { input: 'Szia cica', expected: '𐲥𐳐𐳀 𐳄𐳐𐳄𐳀', options: undefined },
  
  // Strict mode examples
  { input: 'Hello 世界', expected: '𐲏𐳉𐳖𐳖𐳛 世界', options: undefined, desc: 'Default - allows illegal chars' },
  { input: 'Hello 世界', shouldThrow: true, options: { strict: true }, desc: 'Strict mode - throws error' },
  { input: 'Szia 😊', expected: '𐲥𐳐𐳀 😊', options: undefined },
  { input: 'Hello!', expected: '𐲏𐳉𐳖𐳖𐳛!', options: undefined },
  
  // Number examples - multiplicative (default)
  { input: '456', expected: '𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺', options: undefined },
  { input: '2024', expected: '𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺', options: undefined },
  { input: '237', expected: '𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺', options: undefined },
  
  // Number examples - additive
  { input: '456', expected: '𐳾𐳾𐳾𐳾𐳽𐳻𐳺', options: { numberFormat: 'additive' } },
  { input: '2024', expected: '𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺', options: { numberFormat: 'additive' } },
  { input: '23', expected: '𐳼𐳼𐳺𐳺𐳺', options: { numberFormat: 'additive' } },
  
  // Numbers in context
  { input: 'Budapest 2024', expected: '𐲂𐳪𐳇𐳀𐳠𐳉𐳤𐳦 𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺', options: undefined },
  { input: 'I have 5 cats', expected: '𐲐 𐳏𐳀𐳮𐳉 𐳻 𐳄𐳀𐳦𐳤', options: { numberFormat: 'additive' } },
  
  // Alternative K
  { input: 'kék', expected: '𐳓𐳋𐳓', options: undefined },
  { input: 'kék', expected: '𐳔𐳋𐳔', options: { alternativeK: true } },
  { input: 'Káka', expected: '𐲔𐳁𐳔𐳀', options: { alternativeK: true } },
  { input: 'kettő', expected: '𐳔𐳉𐳦𐳦𐳟', options: { alternativeK: true } },
  
  // Alternative O
  { input: 'tök', expected: '𐳦𐳝𐳓', options: undefined },
  { input: 'tök', expected: '𐳦𐳞𐳓', options: { alternativeO: true } },
  { input: 'Ördög', expected: '𐲞𐳢𐳇𐳞𐳍', options: { alternativeO: true } },
  { input: 'öt', expected: '𐳞𐳦', options: { alternativeO: true } },
  
  // Combined options
  { input: 'kör 123', expected: '𐳔𐳞𐳢 𐳾𐳼𐳼𐳺𐳺𐳺', options: { alternativeK: true, alternativeO: true, numberFormat: 'additive' } },
  { input: 'kör 456', expected: '𐳔𐳞𐳢 𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺', options: { alternativeK: true, alternativeO: true, numberFormat: 'multiplicative' } },
  
  // From CHARACTER_MAPPINGS.md
  { input: 'csaba', expected: '𐳆𐳀𐳂𐳀', options: undefined },
  { input: 'gyula', expected: '𐳎𐳪𐳖𐳀', options: undefined },
  { input: 'magyar', expected: '𐳘𐳀𐳎𐳀𐳢', options: undefined },
  { input: 'szép', expected: '𐳥𐳋𐳠', options: undefined },
  { input: 'Magyarország', expected: '𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍', options: undefined },
  { input: 'kökény', expected: '𐳓𐳝𐳓𐳋𐳚', options: undefined },
  { input: 'kökény', expected: '𐳔𐳞𐳔𐳋𐳚', options: { alternativeK: true, alternativeO: true } },
  
  // From README.md
  { input: 'Szia', expected: '𐲥𐳐𐳀', options: undefined },
  { input: 'kör 456', expected: '𐳔𐳞𐳢 𐳾𐳾𐳾𐳾𐳽𐳻𐳺', options: { alternativeK: true, alternativeO: true, numberFormat: 'additive' } },
];

test('Check documentation examples', () => {

let failed = 0;

console.log('Testing documentation examples...\n');

for (const test of tests) {
  try {
    const result = toOldHungarian(test.input, test.options);
    
    if (test.shouldThrow) {
      console.log(`❌ FAIL: "${test.input}" should throw error but returned "${result}"`);
      if (test.desc) console.log(`   Description: ${test.desc}`);
      failed++;
    } else if (result === test.expected) {
      // Passed - no output
    } else {
      console.log(`❌ FAIL: "${test.input}"`);
      console.log(`   Expected: "${test.expected}"`);
      console.log(`   Got:      "${result}"`);
      if (test.desc) console.log(`   Description: ${test.desc}`);
      failed++;
    }
  } catch (error) {
    if (test.shouldThrow) {
      // Passed - no output
    } else {
      const message = error instanceof Error ? error.message : String(error);
      console.log(`❌ FAIL: "${test.input}" threw unexpected error: ${message}`);
      if (test.desc) console.log(`   Description: ${test.desc}`);
      failed++;
    }
  }
}
  expect(failed).toBe(0);

});

test('Check fromOldHungarian documentation examples', () => {
  const fromTests: Array<{ input: string; expected?: string; shouldThrow?: boolean; options?: FromOldHungarianOptions; desc?: string }> = [
    // Basic examples from API.md - fromOldHungarian
    { input: '𐳏𐳉𐳖𐳖𐳛', expected: 'hello', options: undefined },
    { input: '𐲎𐳝𐳚𐳝𐳢𐳭', expected: 'Gyönyörű', options: undefined },
    { input: '𐲥𐳐𐳀 𐳄𐳐𐳄𐳀', expected: 'Szia cica', options: undefined },
    
    // Strict mode examples
    { input: '𐳏𐳉𐳖𐳖𐳛 世界', expected: 'hello 世界', options: undefined, desc: 'Default - allows illegal chars' },
    { input: '𐳏𐳉𐳖𐳖𐳛 世界', shouldThrow: true, options: { strict: true }, desc: 'Strict mode - throws error' },
    
    // Number examples - multiplicative (default)
    { input: '𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺', expected: '456', options: undefined },
    { input: '𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺', expected: '2024', options: undefined },
    { input: '𐳺𐳺𐳾𐳼𐳼𐳼𐳻𐳺𐳺', expected: '237', options: undefined },
    
    // Number examples - additive
    { input: '𐳾𐳾𐳾𐳾𐳽𐳻𐳺', expected: '456', options: { numberFormat: 'additive' } },
    { input: '𐳿𐳿𐳼𐳼𐳺𐳺𐳺𐳺', expected: '2024', options: { numberFormat: 'additive' } },
    { input: '𐳼𐳼𐳺𐳺𐳺', expected: '23', options: { numberFormat: 'additive' } },
    
    // Numbers in context
    { input: '𐲂𐳪𐳇𐳀𐳠𐳉𐳤𐳦 𐳺𐳺𐳿𐳼𐳼𐳺𐳺𐳺𐳺', expected: 'Budapest 2024', options: undefined },
    { input: '𐲐 𐳏𐳀𐳮𐳉 𐳻 𐳄𐳀𐳦𐳤', expected: 'I have 5 cats', options: { numberFormat: 'additive' } },
    
    // Combined options
    { input: '𐳔𐳞𐳢 𐳾𐳼𐳼𐳺𐳺𐳺', expected: 'kör 123', options: { numberFormat: 'additive' } },
    { input: '𐳔𐳞𐳢 𐳺𐳺𐳺𐳺𐳾𐳽𐳻𐳺', expected: 'kör 456', options: { numberFormat: 'multiplicative' } },
    
    // From CHARACTER_MAPPINGS.md
    { input: '𐳆𐳀𐳂𐳀', expected: 'csaba', options: undefined },
    { input: '𐳎𐳪𐳖𐳀', expected: 'gyula', options: undefined },
    { input: '𐳘𐳀𐳎𐳀𐳢', expected: 'magyar', options: undefined },
    { input: '𐳥𐳋𐳠', expected: 'szép', options: undefined },
    { input: '𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍', expected: 'Magyarország', options: undefined },
    
    // Alternative characters - both variants should convert the same way
    { input: '𐳓𐳝𐳓𐳋𐳚', expected: 'kökény', options: undefined },
    { input: '𐳔𐳞𐳔𐳋𐳚', expected: 'kökény', options: undefined },
    
    // From README.md
    { input: '𐲥𐳐𐳀', expected: 'Szia', options: undefined },
    { input: '𐲘𐳀𐳎𐳀𐳢𐳛𐳢𐳥𐳁𐳍', expected: 'Magyarország', options: undefined },
  ];

  let failed = 0;

  console.log('Testing fromOldHungarian documentation examples...\n');

  for (const test of fromTests) {
    try {
      const result = fromOldHungarian(test.input, test.options);
      
      if (test.shouldThrow) {
        console.log(`❌ FAIL: "${test.input}" should throw error but returned "${result}"`);
        if (test.desc) console.log(`   Description: ${test.desc}`);
        failed++;
      } else if (result === test.expected) {
        // Passed - no output
      } else {
        console.log(`❌ FAIL: "${test.input}"`);
        console.log(`   Expected: "${test.expected}"`);
        console.log(`   Got:      "${result}"`);
        if (test.desc) console.log(`   Description: ${test.desc}`);
        failed++;
      }
    } catch (error) {
      if (test.shouldThrow) {
        // Passed - no output
      } else {
        const message = error instanceof Error ? error.message : String(error);
        console.log(`❌ FAIL: "${test.input}" threw unexpected error: ${message}`);
        if (test.desc) console.log(`   Description: ${test.desc}`);
        failed++;
      }
    }
  }

  expect(failed).toBe(0);
});

test('Check validation function documentation examples', () => {
  let failed = 0;

  console.log('Testing validation function documentation examples...\n');

  // validateLatinInput tests from API.md
  const latinValidationTests = [
    { input: 'Szia', expected: true },
    { input: 'Hello 123', expected: true },
    { input: 'Magyarország', expected: true },
    { input: 'Hello 世界', expected: false },
    { input: 'café™', expected: false },
  ];

  for (const test of latinValidationTests) {
    const result = validateLatinInput(test.input);
    if (result !== test.expected) {
      console.log(`❌ FAIL: validateLatinInput("${test.input}")`);
      console.log(`   Expected: ${test.expected}`);
      console.log(`   Got:      ${result}`);
      failed++;
    }
  }

  // validateOldHungarianInput tests from API.md
  const oldHungarianValidationTests = [
    { input: '𐲥𐳐𐳀', expected: true },
    { input: '𐳏𐳉𐳖𐳖𐳛 𐳺𐳺𐳺', expected: true },
    { input: '𐲘𐳀𐳍𐳀𐳢𐳛𐳢𐳤𐳰𐳁𐳍', expected: true },
    { input: '𐳏𐳉𐳖𐳖𐳛 世界', expected: false },
    { input: 'test', expected: false },
  ];

  for (const test of oldHungarianValidationTests) {
    const result = validateOldHungarianInput(test.input);
    if (result !== test.expected) {
      console.log(`❌ FAIL: validateOldHungarianInput("${test.input}")`);
      console.log(`   Expected: ${test.expected}`);
      console.log(`   Got:      ${result}`);
      failed++;
    }
  }

  // findIllegalLatinCharacter tests from API.md
  const findIllegalLatinTests = [
    { input: 'Szia', expectedChar: null },
    { input: 'Hello 世界', expectedChar: '世', expectedPos: 6 },
    { input: 'café™', expectedChar: '™', expectedPos: 4 },
    { input: 'test™', expectedChar: '™', expectedPos: 4 },
  ];

  for (const test of findIllegalLatinTests) {
    const result = findIllegalLatinCharacter(test.input);
    if (test.expectedChar === null) {
      if (result !== null) {
        console.log(`❌ FAIL: findIllegalLatinCharacter("${test.input}")`);
        console.log(`   Expected: null`);
        console.log(`   Got:      ${JSON.stringify(result)}`);
        failed++;
      }
    } else {
      if (!result || result.character !== test.expectedChar || result.position !== test.expectedPos) {
        console.log(`❌ FAIL: findIllegalLatinCharacter("${test.input}")`);
        console.log(`   Expected: { character: '${test.expectedChar}', position: ${test.expectedPos} }`);
        console.log(`   Got:      ${JSON.stringify(result)}`);
        failed++;
      }
    }
  }

  // findIllegalOldHungarianCharacter tests from API.md
  const findIllegalTests = [
    { input: '𐲥𐳐𐳀', expectedChar: null },
    { input: '𐳏𐳉𐳖𐳖𐳛 世界', expectedChar: '世', expectedPos: 6 },
    { input: '𐳏𐳉𐳖𐳖𐳛™', expectedChar: '™', expectedPos: 5 },
    { input: '𐲥𐳐𐳀™', expectedChar: '™', expectedPos: 3 },
  ];

  for (const test of findIllegalTests) {
    const result = findIllegalOldHungarianCharacter(test.input);
    if (test.expectedChar === null) {
      if (result !== null) {
        console.log(`❌ FAIL: findIllegalOldHungarianCharacter("${test.input}")`);
        console.log(`   Expected: null`);
        console.log(`   Got:      ${JSON.stringify(result)}`);
        failed++;
      }
    } else {
      if (!result || result.character !== test.expectedChar || result.position !== test.expectedPos) {
        console.log(`❌ FAIL: findIllegalOldHungarianCharacter("${test.input}")`);
        console.log(`   Expected: { character: '${test.expectedChar}', position: ${test.expectedPos} }`);
        console.log(`   Got:      ${JSON.stringify(result)}`);
        failed++;
      }
    }
  }

  expect(failed).toBe(0);
});