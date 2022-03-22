from flask import Flask, render_template, request
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
'''
@app.route("/filter/<var>",methods=["GET","POST"])
def filtro(var):
    ##var:nombre del filtro
    if request.method == 'POST':
        img=Imagen.Imagen(request.form['pixeles'],request.form['ancho'],request.form['alto'])
    return "<h1>ok</h1>"
'''
app.run()