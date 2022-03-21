from flask import Flask, render_template, escape
app=Flask(__name__)

@app.route("/",methods=["GET"])
def Home():
    return render_template("Home.html")

@app.route("/pages/<id>",methods=["GET"])
def Indice(id):
    return render_template(id)

@app.route("/filter/<var>",methods=["GET"])
def filtro(var):
    r=var.split('-')
    return str(r)

app.run()