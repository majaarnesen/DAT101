"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8; //Prøvde med 6 og 8 i tillegg, med 6 får jeg god tid til skolen, mens med 8 blir jeg for sen.//
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
}
else if (wakeUpTime === 8){ 
  printOut ("I can take the train to school. ");
}
else {
  printOut("I have to take the car to school. ");
} 
if (wakeUpTime < 7) {
  printOut ("I have plenty of time to get to school. ");
}
if (wakeUpTime > 7) {
  printOut (" I will be too late for school. ");
}

printOut(newLine); 

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 5; //Prøvde med 5, -5 og 0.//
if (number > 0) {
  printOut("Positive");
}
else if (number < 0){
  printOut("Negative");
} else {
  printOut("Zero");
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSizeMP = Math.floor(Math.random() * 8) + 1; //Tilfedldig tall mellom 1 og 8//
printOut("Uploaded image size: " + imageSizeMP + "MP" ); //Skriver ut størrelsen på bildet//

if (imageSizeMP >= 6) { //hvis bildet er 6MP eller større//
  printOut("Image is too large!"); 
} else if (imageSizeMP >= 4) {
  printOut("Thank you!");
} else {
  printOut("The image is too small!");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const noOfMonth = monthList.length;
const monthIndex = Math.floor(Math.random() * noOfMonth);
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut ("Month: " + monthName);

if (monthName.toLowerCase().includes("r")) {
  printOut("You must take vitamin D! >:(");
} else {
  printOut("No need for vitamin D! :)");
}

printOut("Number of days in " + monthName + ": " + daysInMonth[monthIndex]);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "Mars" || monthName === "Mai") { // || betyr "eller"//
  printOut("The gallery is closed for refurbishment. "); //Mars og Mai er månedene galleriet er stengt//
} else if (monthName === "April") { //April er måneden galleriet er åpent i midlertidige lokaler//
  printOut("The gallere is open in temporary premises next door."); //Skriver ut at galleriet er åpent i midlertidige lokaler//
} else { //Hvis ingen av de andre månedene//
  printOut("The gallery is open as usual."); //Skriver ut at galleriet er åpent som vanlig//
}

printOut(newLine); 
