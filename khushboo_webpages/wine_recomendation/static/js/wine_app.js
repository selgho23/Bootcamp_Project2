// create a variable for data.js
var tableData = data;
// console.log the data from data.js
var titles = data.map(d => d.title);
var descriptions = data.map(d => d.Description);
var image_urls = data.map(d => d.url);
var ratings = data.map(d => d.avg_rating);
var prices = data.map(d => d.price);
console.log(titles);
console.log(descriptions);
console.log(image_urls);
console.log(ratings);
console.log(prices);

var wine_table = d3.select('#food-table').select('thead');
console.log("here")
wine_table.html("");
console.log("here")


wine_table.selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function (d) {
    return `<th><img src=${d.url}></th><th>${d.title}</th><th>${d.Description}</th>`
  });
  console.log("here")





// // Get a reference to the table body
// var tbody = d3.select("tbody");
// // var image = d3.select('#recipe-image').select("img");
// // image.attr("src", recipe.image);
// // Loop through data and console.log each  data object
// data.forEach(function (wine_recommendation_data) {
//   console.log(wine_recommendation_data)
//   var row = tbody.append("tr");
//   Object.entries(wine_recommendation_data).forEach(function ([key, value]) {
//     console.log(key, value);
//     //  var cell = row.append("td");
//     //  cell.text(value);

//   });
// });



//select the input botton

// select the input botton

var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", function () {
  filteredData = tableData;
  // Prevent the page from refreshing
  d3.event.preventDefault();


  // Select the input element For multiple table columns and get the raw HTML node
  var inputElement = d3.select("#winetype");
  // Get the value property of the input element for all table columns 
  var inputValue = inputElement.property("value").toLowerCase();
  console.log(inputValue);
  //filter the data if user gives any user input
  if (inputValue != "") {
    filteredData = filteredData.filter(wine_recommendation_data => wine_recommendation_data.Name === inputValue);
  }
  else {
    filteredData = filteredData.filter(wine_recommendation_data => wine_recommendation_data.Name === "merlot");
  }


  console.log(filteredData);
  wine_table.text("")
  wine_table.selectAll("tr")
  .data(filteredData)
  .enter()
  .append("tr")
  .html(function (d) {
    return `<th><img src=${d.url}></th><th>${d.title}</th><th>${d.Description}</th>`
  });
  console.log("here")


});

// function buildPlot(data) {
// var ratings = data.map(d => d.avg_rating);
// var prices = data.map(d => d.price);
// var titles = data.map(d => d.title);
// console.log(titles);
// var trace1 = {
//   type: "scatter",
//   mode: "lines",
//   name: name,
//   x: titles,
//   y: prices,
//   line: {
//     color: "#17BECF"
//   }

// };


// // Candlestick Trace
// var trace2 = {
//   type: "candlestick",
//   x: titles,
//   y: ratings
// };

// var data = [trace1, trace2];

//     var layout = {
//       title: `price and rating`,
//       // xaxis: {
//       //   // range: [startDate, endDate],
//       //   type: "date"
//       // },
//       // yaxis: {
//       //   autorange: true,
//       //   type: "linear"
//       // }
//     };

//     Plotly.newPlot("plot", data, layout);
  
// }
// buildPlot(data);
// // Add event listener for submit button
// // d3.select("#more_info").on("click",buildPlot );

// Submit Button handler
function handleSubmit() {
  wine_table.html("");
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clear the input value
  d3.select("#more_info").node().value = "";
// Build the plot with the new stock
  buildPlot(data);
}

function buildPlot(data) {
var ratings = data.map(d => d.avg_rating);
var prices = data.map(d => d.price);
var titles = data.map(d => d.title);
console.log(titles);

var trace1 = {
  x: prices,
  y: titles,
  type: 'bar',
  orientation: 'h',
  // text: prices,
  textposition: 'auto',
  marker: {
      color: "#EE6363"
  },
  name: "prices"
};
var trace2 = {
  x:ratings ,
  y: titles,
  type: 'bar',
  orientation: 'h',
  //text: ratings,
  textposition: 'auto',
  marker: {
      color: "#79CDCD"
  },
  name: "Ratings"
};
var data = [trace2, trace1,];

var layout = {
  paper_bgcolor: "#FDF2E9",
  plot_bgcolor: "#FDF2E9",
  width: 'auto',
  height: 600,
  margin: {
      l: 100,
      r: 30,
      t: 10,
      b: 50
  
  },
 
  yaxis: {
      ticklen: 6,
  },
  xaxis: {
      title: { text: 'Name of the wines' }
  }

 
};

Plotly.newPlot("plot", data, layout)
}
//  buildPlot(data);
d3.select("#more_info").on("click",handleSubmit);


