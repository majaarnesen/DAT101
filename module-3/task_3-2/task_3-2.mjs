"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtLine1 = "";
let txtLine2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
    txtLine1 += " " + i.toString();
    txtLine2 += " " + j.toString();
    }

printOut(txtLine1 + newLine);
printOut(txtLine2 + newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const valgtNummer = 24726; //Velger et tall som skal gjettes//
let gjettetNummer = 0; 
let antallForsok = 0;
const startTid = Date.now(); //Dette starter tidtakingen//

while (gjettetNummer !== valgtNummer) {
    gjettetNummer = Math.floor(Math.random() * 1000000) + 1; //Tilfeldig tall mellom 1 og 1000000//
    antallForsok++;
}
const sluttTid = Date.now(); //Dette stopper tidtakingen//
const tidBrukt = sluttTid - startTid;

printOut("Gjettet nummer: " + gjettetNummer); //Skriver ut det gjetta nummeret//
printOut("Antall forsøk: " + antallForsok); //Skriver ut antall forsøk//
printOut("Tid brukt (ms): " + tidBrukt); //Skriver ut tid brukt i millisekunder//
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primtall = "";
for (let num = 2; num < 200; num++) {
    let erPrimtall = true;
    let divisor = 2;
    while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) {
            erPrimtall = false;
            break;
        }
        divisor++;
    }
    if (erPrimtall) {
        primtall += num + " ";
    }
}
printOut("Primtall mellom 2 og 199: ");
printOut(primtall);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    printOut(line.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getGrade(score) {
    const prosent = (score / 236) * 100;
    if (prosent >= 89) return "A";
    if (prosent >= 77) return "B";
    if (prosent >= 65) return "C";
    if (prosent >= 53) return "D";
    if (prosent >= 41) return "E";
    return "F";
}

//Dette generer 5 karakterer//
let s1 = Math.floor(Math.random() * 236) +1;
let s2 = Math.floor(Math.random() * 236) +1;
let s3 = Math.floor(Math.random() * 236) +1;
let s4 = Math.floor(Math.random() * 236) +1;
let s5 = Math.floor(Math.random() * 236) +1;

printOut("Studentenes resultater: ");
printOut("Student nr1: " + s1 + " (" +getGrade(s1) + ")");
printOut("Student nr2: " + s2 + " (" +getGrade(s2) + ")");
printOut("Student nr3: " + s3 + " (" +getGrade(s3) + ")");
printOut("Student nr4: " + s4 + " (" +getGrade(s4) + ")");
printOut("Student nr5: " + s5 + " (" +getGrade(s5) + ")");
printOut(newLine);

//Nå kommer karakterene sortert, og skrevet ut i synkende rekkefølge uten Array//
let a = s1, b = s2, c = s3, d = s4, e = s5;
printOut("Karakterene sortert i synkende rekkefølge: ");
for (let i = 0; i < 5; i++) {
    let max = a;
    let idx = 1;
    if (b > max) { max = b; idx = 2; }
    if (c > max) { max = c; idx = 3; }
    if (d > max) { max = d; idx = 4; }
    if (e > max) { max = e; idx = 5; }
    printOut("Student " + idx + ": " + max + " (" + getGrade(max) + ")");
    //sett brukt verdi til -1 for å ikke velge den igjen//
    if (idx === 1) a = -1;
if (idx === 2) b = -1;
if (idx === 3) c = -1;
if (idx === 4) d = -1;
if (idx === 5) e = -1;
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollDice() {
    let dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
}

//straight (1-6)//
function isStraight(dice) {
    dice.sort();
    for (let i = 0; i < 6; i++) {
        if (dice[i] !== i + 1) return false;
    }
    return true;
}

//tre par//
function isThreePairs(dice) {
    let counts = {};
    for (let d of dice) counts[d] = (counts[d] || 0) + 1;
    let pairs = 0;
    for (let v of Object.values(counts)) {
        if (v === 2) pairs++;
    }
    return pairs === 3;
}

//tårn, 2 like og 4 like//
function isTower(dice) {
    let counts = {};
    for (let d of dice) counts[d] = (counts[d] || 0) + 1;
    let found2 = false, found4 = false;
    for (let v of Object.values(counts)) {
        if (v === 2) found2 = true;
        if (v === 4) found4 = true;
    }
    return found2 && found4;
}

//Yahtzee//
function isYahtzee(dice) {
    return dice.every(d => d === dice[0]);
}

//simuler og tell kast for hver kombinasjon//
function throwsToGet(checkFunc) {
    let throws = 0; 
    while (true) {
        throws++;
        let dice = rollDice(); 
        if (checkFunc(dice)) return throws;
    }
}

printOut("Kast for å få straight: " + throwsToGet(isStraight));
printOut("Kast for å få tre par: " + throwsToGet(isThreePairs));
printOut("Kast for å få tårn (2 like og 4 like): " + throwsToGet(isTower));
printOut("Kast for å få Yahtzee: " + throwsToGet(isYahtzee));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);