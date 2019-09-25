// var temp = d3.select("#spoonacular-equipment-vis-grid");
// temp.append("div").html('<div style="float:left"><div class="spoonacular-equipment"><div class="spoonacular-image-wrapper"><img src="https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png" title="hand mixer" alt="hand mixer"/></div><div class="spoonacular-name t12">hand mixer</div></div></div>')
// temp.append("div").html('<div style="float:left"><div class="spoonacular-equipment"><div class="spoonacular-image-wrapper"><img src="https://spoonacular.com/cdn/equipment_100x100/potato-masher.jpg" title="potato masher" alt="potato masher"/></div><div class="spoonacular-name t10">potato masher</div></div></div>')

// temp.append("div").html('<div class="spoonacular-equipment-list"><div style="float:left"><div class="spoonacular-image-wrapper" style="height:80px"><img src="https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png" title="hand mixer" alt="hand mixer"/></div></div><div class="spoonacular-name">hand mixer</div><div style="clear:both"></div></div>')
// temp.append("div").html('<div class="spoonacular-equipment-list"><div style="float:left"><div class="spoonacular-image-wrapper" style="height:80px"><img src="https://spoonacular.com/cdn/equipment_100x100/potato-masher.jpg" title="potato masher" alt="potato masher"/></div></div><div class="spoonacular-name">potato masher</div><div style="clear:both"></div></div>')

// var button = d3.select("#spoonacularEquipmentView")

// 'var display = d3.select("#spoonacular-equipment-vis");
// d3.select(".spoonacular-ingredients-menu").selectAll("input").on("change", function () {
//     var selection = this.value;
//     display.html("")

//     if (selection === "grid") {
//         display.append("div").html('<div style="float:left"><div class="spoonacular-equipment">' +
//             '<div class="spoonacular-image-wrapper">' +
//             '<img src="https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png"' +
//             'title="hand mixer" alt="hand mixer"/></div><div class="spoonacular-name t12">' +
//             'hand mixer</div></div></div>')
//         display.append("div").html('<div style="float:left"><div class="spoonacular-equipment"><div class="spoonacular-image-wrapper"><img src="https://spoonacular.com/cdn/equipment_100x100/potato-masher.jpg" title="potato masher" alt="potato masher"/></div><div class="spoonacular-name t10">potato masher</div></div></div>')
//     }
//     else {
//         display.append("div").html('<div class="spoonacular-equipment-list"><div style="float:left"><div class="spoonacular-image-wrapper" style="height:80px"><img src="https://spoonacular.com/cdn/equipment_100x100/hand-mixer.png" title="hand mixer" alt="hand mixer"/></div></div><div class="spoonacular-name">hand mixer</div><div style="clear:both"></div></div>')
//         display.append("div").html('<div class="spoonacular-equipment-list"><div style="float:left"><div class="spoonacular-image-wrapper" style="height:80px"><img src="https://spoonacular.com/cdn/equipment_100x100/potato-masher.jpg" title="potato masher" alt="potato masher"/></div></div><div class="spoonacular-name">potato masher</div><div style="clear:both"></div></div>')
//     }
// })'


// var button = d3.select("#first-btn");
// var recipe = d3.select("#meal-btn");
// var params = ["hello"];
// button.on("click", function () {
//     d3.event.preventDefault();

//     var inputs = d3.selectAll(".form-control");
//     var inputData = inputs.data("value")._groups[0];
//     var inputValues = inputData.map(inD => inD.value);
//     while (inputValues.length > 3) { inputValues.pop() };
//     inputValues.forEach(element => {
//         params.push(element)
//     });

//     recipe.on("click", function () {
//         d3.event.preventDefault();

//         var inputs = d3.selectAll(".form-control");
//         var inputData = inputs.data("value")._groups[0];
//         var inputValues = inputData.map(inD => inD.value);
//         while (inputValues.length > 3) { inputValues.pop() };
//         inputValues.forEach(element => {
//             params.push(element)
//         });
//         console.log(params)
//     });

//     console.log(params)
// });

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

d3.select("#diet-list").select("tbody")
  .selectAll("tr")
  .data(diet_dicts)
  .enter()
  .append("tr")
  .html(function (d) {
    return `<td>${d.col1}</td><td>${d.col2}</td>`
  });

var cuisines = ["African", "American", "British", "Cajun", "Caribbean",
  "Chinese", "Eastern European", "European", "French", "German",
  "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish",
  "Korean", "Latin American", "Mediterranean", "Mexican",
  "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese", ""];

var cuisine_dicts = [];
for (var i = 0; i < cuisines.length; i = i + 3) {
  var dictionary = {
    col1: cuisines[i],
    col2: cuisines[i + 1],
    col3: cuisines[i + 2]
  }
  cuisine_dicts.push(dictionary);
};

d3.select("#cuisine-list").select("tbody")
  .selectAll("tr")
  .data(cuisine_dicts)
  .enter()
  .append("tr")
  .html(function (d) {
    return `<td>${d.col1}</td><td>${d.col2}</td><td>${d.col3}</td>`
  });

  
