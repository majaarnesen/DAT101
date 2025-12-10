"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [];
for (let i = 1; i <= 20; i++) {
    numbers.push(i);
}
for (let i = 0; i < numbers.length; i++) {
    printOut(numbers[i].toString());
}

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(" - "));
printOut(newLine);
//ble på to linjer, hvordan kan jeg gjøre denne på kun en linje?

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hei på deg, hvordan har du det?";
const cleaned = text.replace(/[^\p{L}\s]/gu, ""); // fjern tegnsetting
const words = cleaned.split(/\s+/);
for (let i = 0; i < words.length; i++) {
    printOut("Word " + (i + 1) + " (index " + i + "): " + words[i]);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const names = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina",
    "Maria", "Elisabeth", "Kristin"
];

function removeElement(arr, text) {
    const idx = arr.indexOf(text);
    if (idx === -1) {
        printOut(text + " finnes ikke i arrayet.");
        return false;
    }
    arr.splice(idx, 1);
    printOut(text + " ble fjernet fra arrayet.");
    return true;
}

// Eksempelbruk:
printOut("Før fjerning: " + names.join(", "));
removeElement(names, "Kari");      // eksisterer
removeElement(names, "Ola");       // finnes ikke
printOut("Etter fjerning: " + names.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias",
    "Liam", "Håkon", "Theodor", "Magnus"
];
// merge girl names (names) and boy names into a new array
const allNames = names.concat(boys);
printOut(allNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(aTitle, aAuthor, aISBN) {
        this.title = aTitle;
        this.author = aAuthor;
        this.isbn = aISBN;
    }
    toString() {
        return this.title + " av " + this.author + ", ISBN: " + this.isbn;
    }
}

const books = [
    new TBook("Sult", "Knut Hamsun", "9788203296602"),
    new TBook("Naiv.Super.", "Erlend Loe", "9788205380376"),
    new TBook("Mysterier", "Knut Hamsun", "9788203296619")
];

for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Eweekdays = {
    weekday1: { value: 0x01, name: "Mandag" },
    weekday2: { value: 0x02, name: "Tirsdag" },
    weekday3: { value: 0x04, name: "Onsdag" },
    weekday4: { value: 0x08, name: "Torsdag" },
    weekday5: { value: 0x10, name: "Fredag" },
    weekday6: { value: 0x20, name: "Lørdag" },
    weekday7: { value: 0x40, name: "Søndag" },

    workdays: { value: 0x01 | 0x02 | 0x04 | 0x08 | 0x10, name: "Arbeidsdager" },
    weekends: { value: 0x20 | 0x40, name: "Helgedager" }
};

printOut("Weekdays:");
for (let key in Eweekdays) {
    const item = Eweekdays[key];
    printOut(key + " -> " + item.name + ", value: 0x" + item.value.toString(16).toUpperCase());
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Create array with 35 random numbers between 1 and 20 */
const randomNumbers = [];

for (let i = 0; i < 35; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

printOut("Original array:");
printOut(randomNumbers.join(", "));

/* Sort ascending using a callback */
const ascSorted = [...randomNumbers].sort(function(a, b) {
    return a - b;  // ascending order
});

printOut("\nAscending:");
printOut(ascSorted.join(", "));

/* Sort descending using a callback */
const descSorted = [...randomNumbers].sort(function(a, b) {
    return b - a;  // descending order
});

printOut("\nDescending:");
printOut(descSorted.join(", "));
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

/* We assume randomNumbers from part 8 already exists */

/* Step 1: Count frequencies */
const freq = {};

for (let n of randomNumbers) {
    if (!freq[n]) {
        freq[n] = 0;
    }
    freq[n]++;
}

/* Step 2: Print numbers and their frequencies (sorted by number ASC) */
printOut("Number → Frequency:");
const sortedNumbers = Object.keys(freq).map(Number).sort((a, b) => a - b);

for (let num of sortedNumbers) {
    printOut(num + " occurs " + freq[num] + " times");
}

printOut("\n");

/* Step 3: Convert frequency object into an array for sorting */
const freqArray = [];

for (let num in freq) {
    freqArray.push({
        number: Number(num),
        count: freq[num]
    });
}

/* Step 4: Sort by:
   1. Highest frequency first
   2. If same frequency → smallest number first
*/
freqArray.sort(function(a, b) {
    if (b.count !== a.count) {
        return b.count - a.count; // highest first
    }
    return a.number - b.number;   // lowest number first
});

printOut("Frequency → Numbers:");
for (let entry of freqArray) {
    printOut(entry.count + " occurrences: " + entry.number);
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/* Create an empty 2D array (5 rows, 9 columns) */
const grid = [];

for (let row = 0; row < 5; row++) {
    grid[row] = []; // create row

    for (let col = 0; col < 9; col++) {
        grid[row][col] = "Row " + row + ", Col " + col;
    }
}

/* Print the array row by row */
printOut("Printing grid (row by row):");

for (let row = 0; row < grid.length; row++) {
    let line = "";

    for (let col = 0; col < grid[row].length; col++) {
        line += grid[row][col] + " | ";
    }

    printOut(line);
}

printOut("\n");

/* Print each cell individually */
printOut("Printing each cell individually:");

for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        printOut("Cell [" + row + "][" + col + "]: " + grid[row][col]);
    }
}

printOut(newLine);
