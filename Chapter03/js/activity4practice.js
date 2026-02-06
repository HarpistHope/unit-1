//Example 3.1...
//define fetch request
function jsAjax(){
    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){

    //tasks using the data go here
    console.log(response)

}

window.onload = jsAjax();

//Example 3.5...
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            //check the data - the data can be accessed here because the code runs within the function wehre myData is assigned the value of the response
            console.log(myData)
        }) 

    // The data cannot be accessed here because the fetch request is asynchronous. The console.log will run before the data is assigned to myData.
    console.log(myData)
};