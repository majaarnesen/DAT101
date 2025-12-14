"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];


//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function cmbTask1CalculateClick() { // Calculate area and perimeter of a rectangle
  const txtTask1Output = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const width = parseInt(txtRectWidth.value);
  const height = parseInt(txtRectHeight.value);
  const area = width * height;
  const perimeter = 2 * (width + height);
  txtTask1Output.innerHTML = `width: ${width}, height: ${height}`; // Clear previous output
  txtTask1Output.innerHTML += `<br/>Circumference = ${perimeter}, Area = ${area}`;
}

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");  // Get the button element
cmbTask1Calculate.onclick = cmbTask1CalculateClick;

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function txtTask2WordKeyPress(aEvent) { 
  const txtTask2Output = document.getElementById("txtTask2Output"); // Get output element
  //txtTask2Output.innerHTML = `You pressed the key: ${aEvent.key}`;
  if (aEvent.key === "Enter") {
    const word = txtTask2Word.value; // Get the word from input field
    task2Words.push(word); // Add the word to the array
    txtTask2Output.innerHTML = `You have entered ${task2Words.length} words: <br/>`; // Show number of words
    txtTask2Output.innerHTML += task2Words.join(", "); // Show all words
    txtTask2Word.value = ""; // Clear the input field
  }
}

const txtTask2Word = document.getElementById("txtTask2Word"); // Get the input element
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress); // Add event listener for keypress
const task2Words = [];

// Add the event listener
document.getElementById("txtTask2Word") 
        .addEventListener("keypress", txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");
function cmbTask3CheckAnswerClick() { // Check which checkboxes are checked
  txtTask3Output.innerHTML = "";
  for (let i = 0; i < chkTask3.length; i++) {
    const chkBox = chkTask3[i];
    const text = `chkTask3[${i}].checked =  ${chkBox.checked}`;
    txtTask3Output.innerHTML += text + "<br/>"; // Display the status of each checkbox
  }
}
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/


function rdbCarNameSelect(aEvent){ // Handle radio button selection
  const txtTask4Output = document.getElementById("txtTask4Output");
  txtTask4Output.innerHTML =
    `User select car type number: ${aEvent.target.value}`
  ;
} 

const divTask4Cars = document.getElementById("divTask4Cars");
for(let i = 0; i < CarTypes.length; i++){ // Create radio buttons for each car type
  const car = CarTypes[i];
  const inpRadio = document.createElement("input"); // Create radio input element
  inpRadio.type = "radio";
  inpRadio.name = "rdbCarName";
  inpRadio.value = car.value;
  inpRadio.id = "rdbCarName" + i.toString();
  inpRadio.addEventListener("change", rdbCarNameSelect); // Add event listener for change event
  const lblCaption = document.createElement("label");
  lblCaption.for = inpRadio.id;
  lblCaption.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendChild(inpRadio);
  divTask4Cars.appendChild(lblCaption);
  divTask4Cars.appendChild(document.createElement("br"));

  console.log(`CarTypes[${i}].value = ${car.value}, CarTypes[${i}].caption = ${car.caption}`)
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function SelectTask5AnimalsChange(){
  const animalValue = selectTask5Animals.value;
  txtTask5Output.innerHTML = "User selected animal num:#" + animalValue;
}
selectTask5Animals.addEventListener("change", SelectTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls"); // Get the select element
const txtTask6Output = document.getElementById("txtTask6Output"); // Get the output element
 
for(let i = 0; i < GirlsNames.length; i++){
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(GirlsNames[i])); // Set the option text
  selectTask6Girls.appendChild(option);
}
function SelectGirlsChange(){
  const value = parseInt(selectTask6Girls.value); // Get selected value
  const name = GirlsNames[value]; // Get the selected name
  txtTask6Output.innerHTML = `You selected: ${value}, ${name}`; // Display selected
}
selectTask6Girls.addEventListener("change", SelectGirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRating = document.getElementById("txtMovieRating");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

// Fyll selectMovieGenre med data fra MovieGenre array
for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(MovieGenre[i]));
  selectMovieGenre.appendChild(option);
}

// Legg til film til tabellen når brukeren klikker knappen
function cmbAddMovieClick() {
  const title = txtMovieTitle.value;
  const genre = MovieGenre[parseInt(selectMovieGenre.value)];
  const director = txtMovieDirector.value;
  const rating = txtMovieRating.value;

  if (title === "" || director === "" || rating === "") {
    alert("Please fill in all fields!");
    return;
  }

  // Lager en ny rad i tabellen
  const row = tblMovies.insertRow();
  row.insertCell(0).appendChild(document.createTextNode(title));
  row.insertCell(1).appendChild(document.createTextNode(genre));
  row.insertCell(2).appendChild(document.createTextNode(director));
  row.insertCell(3).appendChild(document.createTextNode(rating));

  // Tøm input-feltene
  txtMovieTitle.value = "";
  txtMovieDirector.value = "";
  txtMovieRating.value = "";
  selectMovieGenre.value = "0";
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);