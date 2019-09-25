import numpy as np
import requests
import json
from config import apiKey

random_indices = []


def get_recipe_info(user_params):

    # Get 101 recipe_ids matching form input criteria
    search_url = "https://api.spoonacular.com/recipes/complexSearch"
    first_recipe = requests.get(search_url, params=user_params).json()

    find_similar_url = f"https://api.spoonacular.com/recipes/{first_recipe['results'][0]['id']}/similar"
    similar_params = {
        "apiKey": apiKey,
        "number": 100
    }
    similar_recipes = requests.get(
        find_similar_url, params=similar_params).json()

    recipe_ids = [first_recipe['results'][0]['id']]
    for recipe in similar_recipes:
        recipe_ids.append(recipe['id'])

    # Pick a random recipe and get detailed information about it
    random_idx = random_num_gen(random_indices)
    recipe_info_url = f"https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true"

    info_params = {
        'ids': recipe_ids[random_idx],
        'apiKey': apiKey
    }
    recipe_response = requests.get(recipe_info_url, params=info_params).json()

    # Checks to make sure recipe includes instructions
    while 1:
        if recipe_response[0]["instructions"] == None:
            random_idx = random_num_gen(random_indices)
            info_params['ids'] = recipe_ids[random_idx]
            recipe_response = requests.get(
                recipe_info_url, params=info_params).json()
        else:
            break

    summary_url = f"https://api.spoonacular.com/recipes/{recipe_ids[random_idx]}/summary"
    summary_response = requests.get(
        summary_url, params={"apiKey": apiKey}).json()

    # Filter response - collect and group relevant recipe info
    categories_to_keep = ['image', 'servings', 'readyInMinutes',
                          'pricePerServing', 'weightWatcherSmartPoints',
                          'spoonacularScore', 'id', 'title', 'healthScore'
                          ]

    recipe_info = {'summary': summary_response['summary']}
    for key, value in recipe_response[0].items():
        if key == "analyzedInstructions":
            instructions = value[0]['steps']
            cooking_steps = [step['step'] for step in instructions]
            recipe_info['instructions'] = cooking_steps
        elif key == "extendedIngredients":
            ingredients = [ingredient['originalString']
                           for ingredient in value]
            recipe_info['ingredients'] = ingredients
        elif key == "nutrition":
            recipe_info['caloricBreakdown'] = value['caloricBreakdown']
            recipe_info['nutrients'] = value['nutrients']
        elif key in categories_to_keep:
            recipe_info[key] = value

    string_to_delete = "If you like this recipe"
    summary_split = recipe_info['summary'].split(string_to_delete, 2)
    recipe_info['summary'] = summary_split[0]

    return recipe_info

# generates a unique pseudo-random number which is used to select
# a random recipe_id from the list of recipe_ids generated


def random_num_gen(array):
    random_idx = np.random.randint(0, 101)
    while 1:
        if random_idx in array:
            random_idx = np.random.randint(0, 100)
        else:
            array.append(random_idx)
            break
    return random_idx
