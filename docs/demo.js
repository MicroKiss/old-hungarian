// This file will need to be built with your library bundled
// For now, this is a template that shows how to use the library

// Import functions (these will be bundled)
import {
    toOldHungarian,
    fromOldHungarian,
    oldHungarianCharacters,
    oldHungarianNumbers
} from './dist/index.js';
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeCharacterReference();
});

// Convert Latin to Old Hungarian
window.convertToOldHungarian = function () {
    const latinInput = document.getElementById('latin-input');
    const oldHungarianInput = document.getElementById('old-hungarian-input');
    const strict = document.getElementById('strict').checked;
    const numberFormat = document.getElementById('number-format').value;

    try {
        const result = toOldHungarian(latinInput.value, {
            strict,
            numberFormat
        });
        oldHungarianInput.value = result;
        updateCharCount('latin', latinInput.value.length);
        updateCharCount('old-hungarian', [...result].length);
    } catch (error) {
        if (!error.message.includes('illegal character')) {
            console.error('Conversion error:', error);
        }
        oldHungarianInput.value = `Error: ${error.message}`;
    }
};

// Convert Old Hungarian to Latin
window.convertToLatin = function () {
    const latinInput = document.getElementById('latin-input');
    const oldHungarianInput = document.getElementById('old-hungarian-input');
    const strict = document.getElementById('strict').checked;
    const numberFormat = document.getElementById('number-format').value;

    try {
        const result = fromOldHungarian(oldHungarianInput.value, {
            strict,
            numberFormat
        });
        latinInput.value = result;
        updateCharCount('latin', result.length);
        updateCharCount('old-hungarian', [...oldHungarianInput.value].length);
    } catch (error) {
        console.error('Conversion error:', error);
        latinInput.value = `Error: ${error.message}`;
    }
};

// Update character count
function updateCharCount(type, count) {
    const countElement = document.getElementById(`${type}-count`);
    if (countElement) {
        countElement.textContent = `${count} character${count !== 1 ? 's' : ''}`;
    }
}

// Clear input
window.clearInput = function (type) {
    if (type === 'latin') {
        document.getElementById('latin-input').value = '';
        document.getElementById('old-hungarian-input').value = '';
    } else {
        document.getElementById('old-hungarian-input').value = '';
        document.getElementById('latin-input').value = '';
    }
    updateCharCount('latin', 0);
    updateCharCount('old-hungarian', 0);
};

// Reconvert based on which field has content
window.reconvert = function () {
    const latinInput = document.getElementById('latin-input');
    const oldHungarianInput = document.getElementById('old-hungarian-input');

    // If both have content, prefer reconverting from Latin
    if (latinInput.value) {
        convertToOldHungarian();
    } else if (oldHungarianInput.value) {
        convertToLatin();
    }
};

// Load example
window.loadExample = function (str) {
    const latinInput = document.getElementById('latin-input');
    latinInput.value = str;
    convertToOldHungarian();
};

// Convert numbers
window.convertNumber = function (direction) {
    if (direction === 'toOldHungarian') {
        const input = document.getElementById('arabic-number').value;
        const output = document.getElementById('number-old-hungarian');

        if (input === '') {
            output.textContent = '';
            return;
        }

        try {
            const number = parseInt(input);
            if (isNaN(number) || number < 0) {
                output.textContent = 'Invalid number';
                return;
            }
            // Convert using the library's number conversion
            const result = toOldHungarian(number.toString());
            output.textContent = result;
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    } else {
        const input = document.getElementById('old-hungarian-number').value;
        const output = document.getElementById('number-arabic');

        if (input === '') {
            output.textContent = '';
            return;
        }

        try {
            const result = fromOldHungarian(input);
            output.textContent = result;
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    }
};

// Initialize character reference table
function initializeCharacterReference() {
    const table = document.getElementById('character-table');

    // Add character cards
    oldHungarianCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="old-hungarian">${char.small}</div>
            <div class="latin">${char.latin}</div>
        `;
        card.title = `${char.latin} → ${char.small} (small), ${char.large} (large)`;
        card.onclick = () => {
            const latinInput = document.getElementById('latin-input');
            latinInput.value += char.latin;
            convertToOldHungarian();
        };
        table.appendChild(card);
    });
}