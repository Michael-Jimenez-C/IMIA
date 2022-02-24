from flask import Flask, render_template, escape
app=Flask(__name__)

@app.route("/",methods=["GET"])
def Home():
    return render_template("Home.html")

@app.route("/pages/<id>",methods=["GET"])
def Indice(id):
    return None;

@app.route("/imia/<carpeta>/<objeto>",methods=["GET"])
def Recurso(carpeta, objeto):
    return open("./IMIAED/imia/"+carpeta+"/"+objeto,"r").read()

@app.route("/imia/<carpeta1>/<carpeta2>/<objeto>",methods=["GET"])
def RecursoScript(carpeta1,carpeta2, objeto):
    return open("./IMIAED/imia/"+carpeta1+"/"+carpeta2+"/"+objeto,"r").read()

app.run()