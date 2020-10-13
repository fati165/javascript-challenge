//Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.


// from data.js
var tableData = data;

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