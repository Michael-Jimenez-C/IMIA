from flask import Flask, render_template, escape
app=Flask(__name__)

@app.route("/",methods=["GET"])
def Home():
    return render_template("Home.html")

@app.route("/pages/<id>",methods=["GET"])
def Indice(id):
    return render_template(id)

@app.route("/filter/<filtro>/<img1>")
def filtro(flitro, img1):
    return None

@app.route("/filter/<filtro>/<img1>/<img2>")
def filtroP2(flitro, img1, img2):
    return None

app.run()