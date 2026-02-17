import {oldHungarianNumbers} from './characterMap.js'

function convertNumbersAdditively(match: string): string {
	let num = 0;
	for (const char of match) {
		const value = oldHungarianNumbers.descending.find(n => n.oldHungarian === char)?.value;
		if (value) {
			num += value;
		}
	}
	return num.toString();
}

function convertNumbersMultiplicatively(match: string): string {
	let num = 0;

	const partsRegex = new RegExp(`([${oldHungarianNumbers['100']}${oldHungarianNumbers['1000']}])`, 'u');
	//                             ^ capturing group                                             ^

	let partSum = 0;

	match.split(partsRegex).forEach(part => {
		if (part === oldHungarianNumbers['1000']) {
			if (num === 0 && partSum === 0) {
				num = 1000;
			} else {
				num = num*1000 + (partSum) * 1000;
				partSum = 0;
			}
		} else if (part === oldHungarianNumbers['100']) {
			num += (partSum || 1) * 100;
			partSum = 0;
		} else{
			partSum +=  Number(convertNumbersAdditively(part));
		}
	});

	num += partSum;

	return num.toString();
}

export function convertNumbersFromOldHungarian(text: string, format: 'additive' | 'multiplicative'): string {

	const numberPattern = new RegExp(`[${oldHungarianNumbers.descending.map(n => n.oldHungarian).join('')}]+`, 'gu');

	return text.replace(numberPattern, (match) => {
		if (format === 'additive') {
			return convertNumbersAdditively(match);
		} else {
			return convertNumbersMultiplicatively(match);
		}

	});
}