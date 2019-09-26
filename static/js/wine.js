// create a variable for data.js
var tableData = data;
// console.log the data from data.js
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");
// Loop through data and console.log each nasa data object
data.forEach(function (winedata) {
    console.log(winedata)
    var row = tbody.append("tr");
    Object.entries(winedata).forEach(function ([key, value]) {
        console.log(key, value);
        //  var cell = row.append("td");
        //  cell.text(value);

    });
});

//select the input botton

var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", function () {
    filteredData = tableData;
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element For multiple table columns and get the raw HTML node
    var inputElement = d3.select("#foodtype");
    // Get the value property of the input element for all table columns 
    var inputValue = inputElement.property("value").toLowerCase();
    console.log(inputValue);
    //filter the data if user gives any user input
    if (inputValue != "") {
        filteredData = filteredData.filter(winedata => winedata.food === inputValue);
    }
    else {
        filteredData = filteredData.filter(winedata => winedata.food === "steak");
    }
    console.log(filteredData);


    //Display the filtered data by removing the old table
    tbody.text("")
    var row = tbody.append("tr");
    var cell = row.append("td");
    cell.text("Food");
    var cell = row.append("td");
    cell.text("Paired Wine");
    var cell = row.append("td");
    cell.text("Pairing Text");
    filteredData.forEach(function (winedata) {
        console.log(winedata)
        var row = tbody.append("tr");
        Object.entries(winedata).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});


function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#food_trivia");

    // Use the list of sample names to populate the select options
    selector.on("click", function () {
        //filteredData = tableData;
        // Prevent the page from refreshing
        d3.event.preventDefault();

        //Display the filtered data by removing the old table
        d3.json("/trivia").then((triviaData) => {
            console.log(triviaData);
            //});
            tbody.text("");
            var row = tbody.append("tr");
            var cell = row.append("td");
            cell.text(triviaData.text);

        });
    });
}
init();

function showDiv() {
    tbody.text("");
    document.getElementById('food_trivia').style.display = "block";
    document.getElementById('loadingGif').style.display = "block";
    setTimeout(function () {
        document.getElementById('loadingGif').style.display = "none";
        document.getElementById('showme').style.display = "block";
    }, 6000);

}