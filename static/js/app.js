// create a variable for data.js
var tableData = data;
// console.log the data from data.js
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");
// Loop through data and console.log each nasa data object
data.forEach(function (winedata){
  console.log(winedata)
  var row = tbody.append("tr");
  Object.entries(winedata).forEach(function([key,value]){
     console.log(key,value);
     var cell = row.append("td");
     cell.text(value);

  });
});
