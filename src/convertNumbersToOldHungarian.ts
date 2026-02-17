import { oldHungarianNumbers } from "./characterMap.js";

function convertNumbersAdditively(number: number): string {
	let result = '';
	for (const { value, oldHungarian } of oldHungarianNumbers.descending) {
		while (number >= value) {
			result += oldHungarian;
			number -= value;
		}
	}
	return result;
}

//above hundreds we write the number in multiplicative format, below we write it in additive format
function convertNumbersMultiplicatively(number: number): string {
	let result = '';
	
	// Handle thousands recursively
	if (number >= 1000) {
		const thousands = Math.floor(number / 1000);
		if (thousands > 1) {
			result += convertNumbersMultiplicatively(thousands) + oldHungarianNumbers['1000'];
		} else {
			result += oldHungarianNumbers['1000'];
		}
		number = number % 1000;
	}
	
	// Handle hundreds
	if (number >= 100) {
		const hundreds = Math.floor(number / 100);
		if (hundreds > 1) {
			result += convertNumbersAdditively(hundreds) + oldHungarianNumbers['100'];
		} else {
			result += oldHungarianNumbers['100'];
		}
		number = number % 100;
	}
	
	// Handle remainder additively
	if (number > 0) {
		result += convertNumbersAdditively(number);
	}
	
	return result;
}

export function convertNumbersToOldHungarian(text: string, format: 'additive' | 'multiplicative'): string {
	return text.replace(/\d+/g, (match) => {
		const number = parseInt(match, 10);
		return format === 'additive' 
			? convertNumbersAdditively(number)
			: convertNumbersMultiplicatively(number);
	});
}