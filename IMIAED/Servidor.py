from flask import Flask, render_template, request, jsonify
import packages.Imagen as Imagen
import os
#import packages.style as st
app=Flask(__name__)

app.config['UPLOAD_FOLDER'] = './Archivos'

@app.route("/",methods=["GET"])
def Home():
    return render_template("Home.html")

@app.route("/pages/<id>",methods=["GET"])
def Indice(id):
    return render_template(id)

@app.route("/filter/<var>",methods=["GET","POST"])
def filtro(var):
    ##var:nombre del filtro
    if request.method == 'POST':
        imgdata=request.get_json()
        print(type(imgdata['pixeles']))
        img=Imagen.Imagen(imgdata['pixeles'],imgdata['ancho'],imgdata['alto'])
        return jsonify(img.color)

@app.route("/hola",methods=["GET","POST"])
def hola():
    return jsonify({"h":"hola"})
app.run()