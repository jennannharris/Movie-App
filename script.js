const movieData = {//Object. This is the key
	"You've Got Mail": {//Object. "You've got mail" (key):object is the value; curly brace here to line 26
		price: 8,//value(a number)
		seats: [//value; both of the You've Got Mail object. seats is also one array composed of the two seat arrays
			[//array
				{ occupied: true },
				{ occupied: false, selected: true },
				{ occupied: false },
				{ occupied: false },
				{ occupied: true },
				{ occupied: true },
				{ occupied: false },
				{ occupied: false },
			],
			[//array- the whole array is a row. These two rows are in the array 'seats'.
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: false },
				{ occupied: true },
				{ occupied: true },
				{ occupied: true },//these are all key:value pairs. they are objects representing a single seat.
			],
		],
	},
};

let selectedMovieSeats;

console.log(movieData["You've Got Mail"].seats[1][4].occupied);

const updateHTML = () => {
	let generatedHTML = "";
	for (const [rowIndex, row] of selectedMovieSeats.entries()) {//we go to one of the indexes aka a row[0] or [1]
		generatedHTML += "<div>";// the string is a row
		for (const [colIndex, seat] of row.entries()) {//index of the seat [0]through [7] and then the actual seat


			if (seat.occupied === true) { //If the seat.occupied is equal to 'true', .if it's true then do the below code block. this is testing to see if the seat is occupied
				//the seat turns red per the css. 
				generatedHTML +=
					'<span class="material-symbols-outlined occupied"> chair </span>';
			} 
			

			else if (seat.selected === true) { //if the first 'if' isn't true, this tests to see if the seat.selected is equal to true. if so, the code block below is run.
				generatedHTML +=
					'<span class="material-symbols-outlined selected"> chair </span>';
			} 
			
			else { 
				generatedHTML += `<span 
					onclick="seatClicked(event)" //when something gets clicked, do this function.
					data-rowIndex="${rowIndex}" //it's data associated with each rowIndex and each colIndex
					data-colIndex="${colIndex}" 
					class="material-symbols-outlined"> 
					chair 
					</span>`;//if the seat isn't occupied or selected, the seat goes to it's default color (black)/value.
			}
		}
		//The seats have been looped through in a row to find out what's what. The process starts again for the next row.
		generatedHTML += "</div>";
	}

	console.log(generatedHTML);
	document.getElementById("seats").innerHTML = generatedHTML;
};

document.getElementById("movieSelector").onchange = (evt) => {
	console.log(evt.target.value);//evt=value of the movieSelector. the event happened to the movieSelector.
	selectedMovieSeats = movieData[evt.target.value].seats;//sMS are all of the seats for the movie. seats is now put into sMS(it's symbol)
	updateHTML(); //
};

const seatClicked = (event) => {
	const rowIndex = event.target.getAttribute("data-rowIndex");
	const colIndex = event.target.getAttribute("data-colIndex");
	selectedMovieSeats[rowIndex][colIndex].selected = true;
	updateHTML();
};
