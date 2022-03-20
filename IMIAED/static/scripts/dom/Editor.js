import Recursos from "./Recursos.js";
import {Lapiz,Pincel,Borrador} from "../logica/herramientas/herramientas.js";
import * as tf from "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js";
/*
                Documentacion necesaria
Eventos del canvas:http://iwokloco-appweb.blogspot.com/2012/08/html5-eventos-en-el-canvas.html
canvas:http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-canvas
evetnos:https://www.arkaitzgarro.com/javascript/capitulo-15.html


*/
class Editor{
    constructor(){
        this.herramienta=new Lapiz();
        this.pint=false;
        Recursos.menuConTransicion();
        this.canvas=document.getElementById("lienzo");
        this.ctx=this.canvas.getContext("2d");
        this.setCanvasSize();
        this.initCom();
    }
    setCanvasSize(x=window.innerWidth*.8, y=window.innerHeight*.7){
        this.canvas.setAttribute("width", x);
        this.canvas.setAttribute("height", y);
    }
    initCom(){
        //*Eventos del canvas*//
        this.canvas.addEventListener('mousedown',()=>{
            this.pint=true;
        });
        this.canvas.addEventListener('mouseup',()=>{
            this.pint=false;
        });
        this.canvas.addEventListener('mousemove',this.pintar)
        this.canvas.addEventListener('mouseout',()=>{
            this.pint=false;
        })
        //Añadir eventos a las ventanas de seleccion
        let selector=Recursos.ventana("selector");

        //*Botones menu superior*//
        let buttons = ["Nuevo","Cargar","Guardar","Filtro"]
        let fn=[
            ()=>{Borrador.borra(this.ctx)},
            ()=>{
                ((selector.classList+"").includes("Voculto")!=-1)? selector.classList.remove("Voculto"):""
            },
            ()=>{},
            ()=>{}]
        this.genButtons(document.getElementById("botones"),buttons)
        for(var i=0;i<buttons.length;i++){
            document.getElementById(buttons[i]).addEventListener("click",fn[i]);
            console.log(buttons[i]);
        }


        //*Botones menu lateral*//
        let herramientas = [new Lapiz(), new Pincel(), new Borrador()];
        this.genButtons(document.getElementById("menu_botones"),herramientas,true)
        for(let b of herramientas){
            document.getElementById(b.cad()).addEventListener("click",()=>{
            this.setHerr(b)});
        }
    }
    genButtons(contenedor, nombres,obj=false){
        var s=[]
        if (obj){
            for(let i of nombres){
                s.push(i.cad())
            }
        }else{
            s=nombres
        }
        for(let b of s){
            contenedor.innerHTML += `<button class="button" id= "${(b)}"><img src="../static/recursos/botones/${(b)}.svg"/></button>`;
        }
    }
    SeEstaPulsando(){
        return this.pint;
    }
    setHerr(Herr){
        this.herramienta=Herr
    }
    pintar(e){
        if(ed.SeEstaPulsando()){
            let slider=document.getElementById("slider");
            let color=document.getElementById("input_color");
            var coords=ed.mouseXY(e,ed.canvas)
            ed.herramienta.pintar(ed.ctx,coords[0],coords[1],slider.value,color.value);
        }
    }
    mouseXY(e,canvas){
        var x=(e.pageX-canvas.offsetLeft);
        var y=(e.pageY-canvas.offsetTop);
        return [x,y]
    }
}
let ed=new Editor();