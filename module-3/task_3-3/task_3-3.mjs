"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printNorwegianDate() {
    const today = new Date();
    const dateString = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(dateString);
}

printNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getNorwegianDate() {
    const today = new Date();
    const dateString = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut("Dagens dato: " + dateString);
    return today;
}

// Funksjon som regner ut dager til 2XKO-lansering
function daysUntil2XKO(todayDate) {
    const releaseDate = new Date(2025, 4, 14); // Mai er måned 4 (0-indeksert)
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffMs = releaseDate - todayDate;
    const diffDays = Math.ceil(diffMs / msPerDay);
    return diffDays;
}

// Kombiner funksjonene og skriv ut med litt flair!
const todayObj = getNorwegianDate();
const daysLeft = daysUntil2XKO(todayObj);

printOut("🎮 2XKO lanseres om " + daysLeft + " dager! 🚀");
printOut("Er du klar for kamp i League of Legends-universet?");
printOut(newLine);

/*I denne oppgaven laget jeg en funksjon som skriver ut dagens dato på norsk
 ved hjelp av toLocaleDateString med språkinnstillingen "no-NB". Funksjonen 
 henter systemets dato, formaterer den med ukedag, måned, dag og år, og skriver 
 den ut med printOut. Dette gir en tilpasset visning av datoen, 
 og viser hvordan man kan bruke innebygde JavaScript-funksjoner for å håndtere 
 og formatere datoer på en brukervennlig måte.*/

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printCircleInfo(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference.toFixed(2))
    printOut("Area: " + area.toFixed(2));
}

//Eksempel på bruk av funksjonen//

printCircleInfo(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleInfo(rect) {
    const circumference = 2 * (rect.width + rect.height);
    const area = rect.width * rect.height;
    printOut("Circumference: " + circumference);
    printOut("Area: " + area);
}

// Eksempel på bruk:
printRectangleInfo({ width: 8, height: 5 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
    let c, f, k;
    if (type === "C") {
        c = value;
        k = Math.round(c + 273.15);
        f = Math.round((c * 9/5) + 32);
    } else if (type === "F") {
        f = value;
        c = Math.round((f - 32) * 5/9);
        k = Math.round((f - 32) * 5/9 + 273.15);
    } else if (type === "K") {
        k = value;
        c = Math.round(k - 273.15);
        f = Math.round((k - 273.15) * 9/5 + 32);
    } else {
        printOut("Ugyldig temperaturtype!");
        return;
    }
    printOut("Celsius: " + c);
    printOut("Fahrenheit: " + f);
    printOut("Kelvin: " + k);
}

// Eksempel på bruk:
convertTemperature(25, "C");
convertTemperature(77, "F");
convertTemperature(300, "K");
printOut(newLine);
/*Tror det er en annen måte å løse denne på, 
 fordi jeg vet ikke helt om svaret ble riktig i 
 nettleseren, gi gjerne tilbakemelding på hva som kunne vært endret*/

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function prisUtenVAT(gross, vatGroup) {
    let vat;
    const group = vatGroup.toLowerCase();
    if (group === "normal") {
        vat = 25;
    } else if (group === "food") {
        vat = 15;
    } else if (group === "hotel" || group === "transport" || group === "cinema") {
        vat = 10;
    } else {
        printOut("Ugyldig VAT-gruppe!");
        return NaN;
    }
    const net = (100 * gross) / (vat + 100);
    printOut("Net price for group '" + vatGroup + "': " + net.toFixed(2));
    return net;
    }

    prisUtenVAT(1000, "normal");
    prisUtenVAT(1000, "food");
    prisUtenVAT(1000, "hotel");
    prisUtenVAT(1000, "goblins")
    printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeed(distance, time, speed) {
    // Sjekk hvor mange mangler
    let missing = 0;
    if (distance == null) missing++;
    if (time == null) missing++;
    if (speed == null) missing++;

    if (missing > 1) {
        return NaN;
    }

    if (speed == null) {
        // Speed mangler
        return distance / time;
    } else if (time == null) {
        // Time mangler
        return distance / speed;
    } else if (distance == null) {
        // Distance mangler
        return speed * time;
 } else {
        // Ingenting mangler
        return NaN;
    }
}

// Eksempel på bruk:
printOut("Speed: " + calculateSpeed(100, 2, null));      // 50
printOut("Time: " + calculateSpeed(100, null, 50));      // 2
printOut("Distance: " + calculateSpeed(null, 2, 50));    // 100
printOut("NaN: " + calculateSpeed(null, null, 50));      // NaN
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Hjelpefunksjon som bygger opp padded tekst uten å printe
function buildPadded(text, maxSize, padChar, insertBefore) {
    const str = String(text);
    const size = Number(maxSize);
    const ch = String(padChar || " ");
    if (isNaN(size) || size <= 0) return str;
    if (str.length >= size) return str;
    const needed = size - str.length;
    const pad = ch.repeat(Math.ceil(needed / ch.length)).slice(0, needed);
    return insertBefore ? pad + str : str + pad;
}

const baseText = "This is a text";
const rightPadded = buildPadded(baseText, 25, " ", false); // tekst + spaces
const leftPadded  = buildPadded(baseText, 25, " ", true);  // spaces + tekst

// Skriv ut begge versjoner på én linje i samme format som eksempelet
printOut('"' + rightPadded + '"' + "     " + '"' + leftPadded + '"');
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathPattern(lines) { // Function to test the math pattern
    let current = 1; // Start from 1
    for (let line = 1; line <= lines; line++) {
        const leftCount = line + 1;
        const rightCount = line;

        let leftSum = 0;
        for (let i = 0; i < leftCount; i++) {
            leftSum += current;
            current++;
        }

        let rightSum = 0;
        for (let i = 0; i < rightCount; i++) { // Fix: Use current before incrementing
            rightSum += current; // Use current before incrementing
                        current++; // Increment current after using it
        }

        if (leftSum !== rightSum) { // Check for mismatch
            printOut("Mismatch on line " + line + ": leftSum=" + leftSum + ", rightSum=" + rightSum);
            return false;
        }
    }

    printOut("Maths fun!");
    return true; // All lines matched
}

testMathPattern(200);
printOut(newLine);
//Jeg  klarer ikke få det til slik som det ser ut som på løsningsforslaget, så gjerne gi 
// meg innspill til det, har prøvd lenge på akkurat denne delen av oppgaven.//

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Recursive factorial function */
function factorial(n) {
    if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
        return NaN;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Skriv kun factorial(9) i ønsket format
const n = 9;
const factN = factorial(n);
printOut("factorial(" + n + ") is " + factN);
printOut(newLine);