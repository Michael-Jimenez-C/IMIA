from flask import Flask, render_template, escape
import packages.Imagen as Imagen
import packages.style as st
app=Flask(__name__)

@app.route("/",methods=["GET"])
def Home():
    return render_template("Home.html")

@app.route("/pages/<id>",methods=["GET"])
def Indice(id):
    return render_template(id)

@app.route("/filter/<var>",methods=["GET"])
def filtro(var):
    ##filtro-imagen-ancho-alto-img2
    r=var.split('-')
    img=Imagen(r[1],r[2],r[3])
    st.filtro(img,"")
    return None

app.run()