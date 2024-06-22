import os
import math
from flask import Flask, request, send_file,render_template

app = Flask(__name__)

@app.route("/")
def index():
    return send_file('src/index.html')

@app.get("/form")
def form():
    return render_template('form.html')

@app.post("/cuadratic")
def cuadratic():
    data = request.get_json()
    a = data['a']
    b = data['b']
    c = data['c']
    discriminant = b**2 - 4*a*c

    if discriminant > 0:
        root1 = (-b + math.sqrt(discriminant)) / (2 * a)
        root2 = (-b - math.sqrt(discriminant)) / (2 * a)
        return {"root1": root1, "root2": root2}
    elif discriminant == 0:
        root = -b / (2 * a)
        return {"root1": root, "root2": root}
    else:
        return {"error": "No hay soluciones reales para esta ecuación"},400

def main():
    app.run(port=int(os.environ.get('PORT', 80)))

if __name__ == "__main__":
    main()
