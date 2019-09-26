// List of supported diets
var diets = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian',
  'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal',
  'Whole30'];

var diet_dicts = [];
for (var i = 0; i < diets.length; i = i + 2) {
  var dictionary = {
    col1: diets[i],
    col2: diets[i + 1],
  }
  diet_dicts.push(dictionary);
};

// Pupulate diets list 
d3.select("#diet-list").select("tbody")
  .selectAll("tr")
  .data(diet_dicts)
  .enter()
  .append("tr")
  .html(function (d) {
    return `<td>${d.col1}</td><td>${d.col2}</td>`
  });

// List of supported cuisines
var cuisines = ["African", "American", "British", "Cajun", "Caribbean",
  "Chinese", "Eastern European", "European", "French", "German",
  "Greek", "Indian", "Irish", "Italian", "Japanese", "Korean", 
  "Latin American", "Mediterranean", "Mexican",
  "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese", "", ""];

var cuisine_dicts = [];
for (var i = 0; i < cuisines.length; i = i + 3) {
  var dictionary = {
    col1: cuisines[i],
    col2: cuisines[i + 1],
    col3: cuisines[i + 2]
  }
  cuisine_dicts.push(dictionary);
};

// Populate cuisines list
d3.select("#cuisine-list").select("tbody")
  .selectAll("tr")
  .data(cuisine_dicts)
  .enter()
  .append("tr")
  .html(function (d) {
    return `<td>${d.col1}</td><td>${d.col2}</td><td>${d.col3}</td>`
  });

  
