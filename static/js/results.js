var myRecipe = JSON.parse(document.getElementById("myRecipe").dataset.recipe);
console.log(myRecipe);

function recipe_results_page(recipe) {
    quick_info_plot(recipe);
    nutrition_plot(recipe);
    ingredients_list(recipe);
    instructions_list(recipe);
    recipe_summary(recipe);
}
function quick_info_plot(recipe) {
    var nutrition = recipe['nutrients'];
    var amount = nutrition.map(item => item.amount);
    var healthScore = recipe['healthScore'];

    var quick_info = [{
        cal: `${Math.round(amount[0])} Calories`,
        fat: `${Math.round(amount[2])}g Total Fat`,
        carb: `${Math.round(amount[4])}g Carbs`,
        protein: `${Math.round(amount[7])}g Protein`,
        hScore: `${Math.round(healthScore)}% Health Score`
    }];

    d3.select("#quick-info").select("thead")
        .selectAll("tr")
        .data(quick_info)
        .enter()
        .append("tr")
        .html(function (d) {
            return `<th>${d.cal}</th><th>${d.fat}</th><th>${d.carb}</th><th>${d.protein}</th><th>${d.hScore}</th>`
        })
}

function nutrition_plot(recipe) {
    var names = recipe['nutrients'].map(item => item.title);
    var percentage = recipe['nutrients'].map(item => item.percentOfDailyNeeds);

    var labels = []
    percentage.forEach(percent => {
        labels.push(`${Math.round(percent)}%`)
    })
    var trace1 = {
        x: percentage.slice(0, 7),
        y: names.slice(0, 7),
        type: 'bar',
        orientation: 'h',
        text: labels.slice(0, 7),
        textposition: 'auto',
        marker: {
            color: "#EE6363"
        },
        name: "Limit These"
    };
    var trace2 = {
        x: percentage.slice(7, (percentage.length - 1)),
        y: names.slice(7, (names.length - 1)),
        type: 'bar',
        orientation: 'h',
        text: labels.slice(7, (names.length - 1)),
        textposition: 'auto',
        marker: {
            color: "#79CDCD"
        },
        name: "Get Enough of These"
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
            title: { text: 'Percent of Daily Needs' }
        }
    };

    Plotly.newPlot("nutrition-plot", data, layout)
}

function ingredients_list(recipe) {
    var ingredients = recipe['ingredients'];

    d3.select('#ingredients').select("ul")
        .selectAll("li")
        .data(ingredients)
        .enter()
        .append("li")
        .html(function (d) {
            return `<em>${d}</em>`
        });
}

function instructions_list(recipe) {
    var instructions = recipe['instructions'];

    d3.select('#instructions').select("ul")
        .selectAll("li")
        .data(instructions)
        .enter()
        .append("li")
        .html(function (d) {
            return `<em>${d}</em><b>`
        })
}

function recipe_summary(recipe) {
    var summary = [String(recipe['summary'])];

    d3.select("#recipe_summary")
        .select("p")
        .data(summary)
        .html(function (d) {
            return d
        })
}

recipe_results_page(myRecipe)