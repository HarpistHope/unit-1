console.log('Note: when checking the console, a favicon.ico error may appear; this is unrelated to code/script/browser functionality and can be ignored (per Google recommendations).');

// initialize function called when the script loads; cities and addColumns have cityPop as their parameter
function initialize(){
    cities(cityPop);
	addColumns(cityPop);
	addEvents();
};

// Define variable cityPop once globally outside the functions so it can be used in both the cities and addColumns functions
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//function to create a table with cities and their populations
function cities(cityPop){

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    };

	//add the table to the div with id "myDiv" in index.html
    document.querySelector("#myDiv").appendChild(table);

// log 'Testing, testing #' to the console to test the flow; this one works 
console.log('Testing, testing 2'); 
};

// log 'Testing, testing #' to the console to test the flow; this one works (and is logged first per script flow)
console.log('Testing, testing 1'); 

// design function 'addColumns' to modify the table created by function 'cities', set cityPop as the parameter (though it might be redundant because - after some trial and error - I defined cityPop globally?)
function addColumns(cityPop){

    // log 'Testing, testing #' to the console to test the flow; this works
	console.log('Testing, testing 3'); 

	// select and loop through each table row
    document.querySelectorAll("tr").forEach(function(row, i){
    	// log 'Testing, testing #' to the console to test the flow; this works now
		console.log('Testing, testing 4'); 
    	
		// this if statement inserts the header 'City Size' during the first iteration through the rows
		if (i === 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');

    	} else { // this else statement populates the table/adds columns to the table with the extra words
			
			// setting up an undefined variable 'citySize'
    		var citySize;
			
			// defining citySize depending on the populations of cityPop
			// note: i-1 is used because the first row is the header row, so the data starts from index 0 at row 1
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			// insert citySize into the HTML, defined depending on which if/else statement fits
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	};
    });
};


// define function addEvents() 
function addEvents(){
    
	// log 'Testing, testing #' to the console to test the flow; this works
	console.log('Testing, testing 5')

	// add event listener for mouseover action on the table
	document.querySelector("table").addEventListener("mouseover", function(){
		
		// log 'Testing, testing #' to the console to test the flow; this works
		console.log('Testing, testing 6')

		// generate a random color for the text in the table during the mouseover event
		var color = "rgb(";

		// loop to create three random numbers for RGB color values
		for (var i=0; i<3; i++){

			// generate a random number between 0 and 255
			var random = Math.round(Math.random() * 255);

			// append the random number to the color string
			color += random;

			// add a comma between the numbers, except after the last one
			if (i<2){
				color += ",";

			// close the RGB color string
			} else {
				color += ")";
		};
		};

		// apply the generated random color to the table text during mouseover
		document.querySelector("table").style.color = color;
	});

	// define the clickme function to show an alert when the table is clicked
	function clickme(){

		alert('Hey, you clicked me!');
	};

	// add event listener for click action on the table to trigger the clickme function
	document.querySelector("table").addEventListener("click", clickme)
};

//call the initialize function when the DOM has loaded
document.addEventListener('DOMContentLoaded',initialize);
