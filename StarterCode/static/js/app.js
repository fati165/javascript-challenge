//Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Make sure you have a column for date/time, 
//city, state, country, shape, and comment at 
//the very least.

//the input needs to 
// from data.js
var tableData = data;

console.log(data)
// YOUR CODE HERE!
// select tbody 
tbody = d3.select("tbody")

// loop through!
function ufotable(input){
    tbody.html("");
    input.forEach((row)=>{
        const tablerow = tbody.append("tr");
        Object.values(row).forEach((value) => {
            let cell = tablerow.append("td");
            cell.text(value);
        } )

    })

}
ufotable(tableData);
//Use a date form in your HTML document and write JavaScript 
//code that will listen for events and search through the date/time column to find rows that match user input.
//Make buttons happen
//use if statement?

var button = d3.select('#filter-btn');
//make another function for the buttons to show stuff
button.on('click', filts);
function filts(){
    //prevent page from refreshing

    d3.event.preventDefault();

    tbody.html("");
    var data = tableData;

    //filter date and time for search!
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    //data=>data not reelated to data.filter
    var filteredData = data.filter(data => data.datetime === inputValue);
    ufotable(filteredData);
    console.log(filteredData);
}


