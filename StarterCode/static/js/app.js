//Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Make sure you have a column for date/time, 
//city, state, country, shape, and comment at 
//the very least.

// from data.js
var tableData = data;

console.log(data)
// YOUR CODE HERE!
// select tbody 
tbody = d3.select("tbody")

// loop through!
function ufotable(input){
    tbody.html("");
    input.foreach((row)=>{
        const tablerow = tbody.append("tr");
        Object.values(row).foreach((value) => {
            let cell = tablerow.append("td");
            cell.text(value);
        } )

    })

}
//Make buttons happen
var button = d3.select('#filter-btn');
var input1 = d3.select('#datetime')

//make another function for the buttons to show stuff
button.on('click', filts);
function filts(){
    //prevent page from refreshing
    d3.event.preventDefault();
    tbody.html("");
    //filter date and time for search!
    var filteredData = data.filter(data => data.datetime === input1);

    console.log(input1);
}


