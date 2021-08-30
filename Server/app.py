from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "<h1>Welcome to our ML water !!</h1>";

@app.route("/water", methods=['POST'])
def postWater():
    tipo = request.json['tipo_algoritmo']
    data = [[
        request.json['Ph'],
        request.json['Dureza'],
        request.json['Solidos_TDS'],
        request.json['Monocloramina'],
        request.json['Sulfato'],
        request.json['Conductividad'],
        request.json['Carbon_Organico'],
        request.json['Trihalometanos'],
        request.json['Turbiedad']
    ]]
    # verificamos el tipo de algoritmo
    if tipo == 'KNN':
        prediction = joblib.load('models/KNN_MODEL')
    elif tipo == 'RL':
        prediction = joblib.load('models/RL_MODEL')
    elif tipo == 'AB':
        prediction = joblib.load('models/ADB_MODEL')
    else:
        prediction = joblib.load('models/RM_MODEL')

    # realizamos la predicción 
    result = prediction.predict(data)

    # verificamos el resultado
    if result[0]==1:
        return jsonify('1')
    else:
        return jsonify('0')

if __name__ == '__main__':
    app.run(debug=True)