// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableBody = d3.select('tbody');

// Put empty rows into HTML page

tableData.forEach(function(displayData) {
    // console.log(displayData);
    var row = tableBody.append("tr");
    Object.entries(displayData).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the emtpy date field and filter date button
var dateInputText = d3.select('#datetime');
var button = d3.select('#filter-btn');

function dataDisplayed(filterTable) {
    // console.log(displayData);
    filterTable.forEach(function(filterTable){
    var row = tableBody.append("tr");
    Object.entries(filterTable).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  })})};

function clickButton(){
    d3.event.preventDefault();
    var filterTable = tableData.filter(filteredData => filteredData.datetime === dateInputText.property('value'));
    console.log(filterTable);
    // clear original page
    d3.select("tbody").selectAll("tr").remove();
    dataDisplayed(filterTable);
    d3.select("#datetime").node().value = "";
}

button.on('click', clickButton);