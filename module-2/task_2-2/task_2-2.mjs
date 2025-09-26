"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const regnestykke = 2 + 3 * (2 - 4) * 6
printOut(regnestykke);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const inches = 25.4
const mtilmm = 25 / 1000
const cmtilmm = 34 / 10
const mogcmtilmm = mtilmm + cmtilmm
const totalmmtilinches = mogcmtilmm / inches
const todesimaler = totalmmtilinches.toFixed(2);

printOut("Inches : " +todesimaler);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dagtilminutter = 3 * 24 * 60
const timertilmin = 12 * 60
const mintilmin = 14
const sektilmin = 45 / 60
const totalminutter = dagtilminutter + timertilmin + 
mintilmin + sektilmin

printOut("antall minutter: " +totalminutter);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const startminutter = 6322.52
const mintildag = startminutter / 24 / 60 
const heledager = mintildag.toFixed(0)
const desimaldager = mintildag - heledager 
const dagertiltimer = desimaldager * 24
const heletimer = dagertiltimer.toFixed(0)
const desimaltimer = dagertiltimer - heletimer
const timertilminutter = desimaltimer * 60
const heleminutter = timertilminutter.toFixed(0)
const desimalminutter = timertilminutter - heleminutter
const minuttertilsekunder = desimalminutter * 60
const sekunder = minuttertilsekunder.toFixed(0)
//Kunne brukt Math.floor og fått riktig sekunder, men løste med to.Fixed og fikk derfor minus sekunder.//

printOut("dager : " +heledager + "timer : " +heletimer + "minutter : " +heleminutter + "sekunder : " +sekunder)
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nok = 76
const usd = 8.6
const antallusd = 54
const usdtilnok = antallusd * usd
const svarutendesimaler = usdtilnok.toFixed(0)

printOut("54 USD til NOK : " +svarutendesimaler);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Text = "There is much between heaven and earth that we do not understand."
const antallbokstaver = Text.length; //finner lengden på tekseten//
console.log(antallbokstaver); //finner antall bokstaver i teksten//
const bokstaven = Text.charAt(19); //finner bokstaven på index 19//
console.log(bokstaven);
const startIndex = 35; 
const endIndex = 43;
const earthIndex = Text.indexOf("earth"); //finner indexen til ordet earth//
const substring = Text.substring(startIndex, endIndex); //finner substring mellom index 35 og 43//
console.log(substring); //bruker console.log for å sjekke at koden fungerer//
printOut("Antall Bokstaver i teksten : " +antallbokstaver + " Bokstaven på index 19 : " +bokstaven + " Substring mellom index 35 og 43 : " +substring + " Index til ordet earth : " +earthIndex

);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pastand1 = (5 > 3);
const pastand2 = (7 >= 7);
const pastand3 = ("a" > "b");
const pastand4 = (1 < "a");
const pastand5 = (2500 < "a");
const pastand6 = ("arne" != "thomas");
const pastand7 = (2 == 5);
const pastand8 = ("abcd" > "bcd");

printOut("5 is greater than 3 = " +pastand1 + newLine + "7 is greater than or equal to 7 = " +pastand2 + newLine + "a is greater than b = " +pastand3 + newLine + "1 is less than a = " +pastand4 + newLine + "2500 is less than a = " +pastand5 + newLine + "arne is not equal to thomas = " +pastand6 + newLine + "2 is equal to 5 = " +pastand7 + newLine + "abcd is greater than bcd = " +pastand8);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const teksttilnr1 = "254";
const teksttilnr2 = "57.23";
const teksttilnr3 = "25 kroner";
const nummer1 = Number(teksttilnr1);
const nummer2 = Number(teksttilnr2);
const nummer3 = Number(teksttilnr3); //gir NaN fordi teksten inneholder bokstaver//
const nummer3fixed = parseInt(teksttilnr3); //bruker parseInt for å få ut tallet 25, gir tallet fordi parseInt stopper ved første bokstav//
printOut("Tekst til nummer 1 : " +nummer1 + newLine + "Tekst til nummer 2 : " +nummer2 + newLine + "Tekst til nummer 3 : " +nummer3fixed);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1; //tilfeldig tall mellom 1 og 360//
printOut("Tilfeldig nummer mellom 1 og 360 : " +r); //bruker Math.floor for å få heltall//
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antalluker = Math.floor(131 / 7); //hele uker
const resterendedager = 131 % 7; // resterende dager
printOut("Uker i løpet av 131 dager : " +antalluker + " uker og " +resterendedager + " dager");
printOut(newLine);