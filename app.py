from flask import Flask, flash, render_template, request, jsonify, redirect, url_for, session
from flask_session import Session
from config import apiKey
import requests

app = Flask(__name__)
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
Session(app)

@app.route('/')
def home():
   session.clear()
   return render_template('index.html')

@app.route('/recipe-page')
def recipe():
    return render_template("recipe.html")

@app.route('/wine-page')
def wine():
    return render_template("wine.html")

@app.route('/general-preferences',methods = ['POST', 'GET'])
def general():

    user_input = request.form
    params = {
        "apiKey": apiKey,
        "number": 1
    }
    for key, value in user_input.items():
        if key == "excludeIngredients":
            params[key] = value.strip().replace(", ", ",")
        else:
            params[key] = value

    session['params1'] = params

    notification = "Proceed!"
    return render_template('recipe.html', notification=notification)

@app.route('/calories-macros', methods = ['POST', 'GET'])
def foodSearch1():

    user_input = request.form
    params = {}

    for key, value in user_input.items():
        params[key] = value

    session['params2'] = params

    return ('', 204)

@app.route('/ingredients', methods = ['POST', 'GET'])
def foodSearch2():

    user_input = request.form
    params = {}

    for key, value in user_input.items():
        if key == "includeIngredients":
            params[key] = value.strip().replace(", ", ",")
        else:
            params[key] = value

    session['params3'] = params

    return ('', 204)

@app.route('/description', methods = ['POST', 'GET'])
def foodSearch3():

    user_input = request.form
    params = {}

    for key, value in user_input.items():
        params[key] = value

    session['params4'] = params

    return ('', 204)


@app.route('/results', methods = ['POST', 'GET'])
def results():

    full_params = {}
    for key, value in session.items():
        if key!="_permanent" and value:
            for nested_key, nested_value in value.items():
                if nested_value:
                    full_params[nested_key] = nested_value

    session.clear()
    return jsonify(full_params)

if __name__ == '__main__':
   app.run(debug = True)