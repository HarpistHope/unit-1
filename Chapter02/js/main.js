//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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
]

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

    document.querySelector("#myDiv").appendChild(table);
};

//call the initialize function when the DOM has loaded
document.addEventListener('DOMContentLoaded',initialize)










// everything below is the first edition of fixed main_with_debug.js 

// //initialize function called when the script loads; cities and addColumns have cityPop as their parameter
// function initialize(){
//     cities(cityPop);
// 	addColumns(cityPop);
// 	addEvents();
// };

// // Define cityPop once globally outside the functions so it can be used in both the cities and addColumns functions
// var cityPop = [
// 	{ 
// 		city: 'Madison',
// 		population: 233209
// 	},
// 	{
// 		city: 'Milwaukee',
// 		population: 594833
// 	},
// 	{
// 		city: 'Green Bay',
// 		population: 104057
// 	},
// 	{
// 		city: 'Superior',
// 		population: 27244
// 	}
// ];

// //function to create a table with cities and their populations
// function cities(cityPop){
//     // //define an array cityPop where each object has two properties, city and population
// 	// var cityPop = [
// 	// 	{ 
// 	// 		city: 'Madison',
// 	// 		population: 233209
// 	// 	},
// 	// 	{
// 	// 		city: 'Milwaukee',
// 	// 		population: 594833
// 	// 	},
// 	// 	{
// 	// 		city: 'Green Bay',
// 	// 		population: 104057
// 	// 	},
// 	// 	{
// 	// 		city: 'Superior',
// 	// 		population: 27244
// 	// 	}
// 	// ];

//     //create the table element
//     var table = document.createElement("table");

//     //create a header row
//     var headerRow = document.createElement("tr");

//     //add the "City" and "Population" columns to the header row
//     headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

//     //add the row to the table
//     table.appendChild(headerRow);

//     //loop to add a new row for each city
//     for (var i = 0; i < cityPop.length; i++){
//         //assign longer html strings to a variable
//         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//         //add the row's html string to the table
//         table.insertAdjacentHTML('beforeend',rowHtml);
//     };

//     document.querySelector("#myDiv").appendChild(table);
// };

// //call the initialize function when the DOM has loaded
// document.addEventListener('DOMContentLoaded',initialize);

// // log 'Testing, testing #' to the console to test the flow; this one works 
// console.log('Testing, testing 1'); 


// // // // Define cityPop outside the cities function so it can be used in the addColumns function?
// // var cityPop = [
// // 	{ 
// // 		city: 'Madison',
// // 		population: 233209
// // 	},
// // 	{
// // 		city: 'Milwaukee',
// // 		population: 594833
// // 	},
// // 	{
// // 		city: 'Green Bay',
// // 		population: 104057
// // 	},
// // 	{
// // 		city: 'Superior',
// // 		population: 27244
// // 	}
// // ];

// // log 'Testing, testing #' to the console to test the flow; this one works
// console.log('Testing, testing 2'); 

// // design function 'addColumns' to modify the table created by function 'cities', set cityPop as the parameter
// function addColumns(cityPop){

//     // log 'Testing, testing #' to the console to test the flow; this works
// 	console.log('Testing, testing 3'); 

//     document.querySelectorAll("tr").forEach(function(row, i){
//     	// log 'Testing, testing #' to the console to test the flow; this works now
// 		console.log('Testing, testing 4'); 
    	
// 		// this if statement inserts the header 'City Size' during the first iteration of the loop
// 		if (i === 0){

//     		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');

//     	} else { // this else statement populates the table/adds columns to the table with the extra words
// 			// setting up an undefined variable 'citySize'
//     		var citySize;
// 			// defining citySize depending on the populations of cityPop
//     		if (cityPop[i-1].population < 100000){
//     			citySize = 'Small';

//     		} else if (cityPop[i-1].population < 500000){
//     			citySize = 'Medium';

//     		} else {
//     			citySize = 'Large';
//     		};
// 			// insert citySize into the HTML, defined depending on which if/else statement fits
// 			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
//     	};
//     });
// };




// // define function addEvents() 
// function addEvents(){
//     // log 'Testing, testing #' to the console to test the flow; this works
// 	console.log('testing, testing 5')

// 	document.querySelector("table").addEventListener("mouseover", function(){
// 		// log 'Testing, testing #' to the console to test the flow; this works
// 		console.log('testing, testing 6')

// 		var color = "rgb(";

// 		for (var i=0; i<3; i++){

// 			var random = Math.round(Math.random() * 255);

// 			color += random;

// 			if (i<2){
// 				color += ",";
			
// 			} else {
// 				color += ")";
// 		};
// 		};

// 		document.querySelector("table").style.color = color;
// 	});

// 	function clickme(){

// 		alert('Hey, you clicked me!');
// 	};

// 	document.querySelector("table").addEventListener("click", clickme)
// };

