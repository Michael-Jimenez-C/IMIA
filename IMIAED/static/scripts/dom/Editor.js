import Recursos from "./Recursos.js";
import {Lapiz,Pincel} from "../logica/herramientas/Lapiz.js"
/*
                Documentacion necesaria
Eventos del canvas:http://iwokloco-appweb.blogspot.com/2012/08/html5-eventos-en-el-canvas.html
canvas:http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-canvas
paint en html:https://www.lawebdelprogramador.com/codigo/JavaScript/v4444-Paint-en-Canvas-JS.html
evetnos:https://www.arkaitzgarro.com/javascript/capitulo-15.html


*/
class Editor{
    constructor(){
        this.herramienta=new Pincel();
        this.pint=false;
        Recursos.menuConTransicion(); 
        this.canvas=document.getElementById("lienzo");
        this.setCanvasSize();
        this.initCom();
        this.agregarBotones();
        this.agregarHerramientas();
    }
    setCanvasSize(x=window.innerWidth*.8, y=window.innerHeight*.7){
        this.canvas.setAttribute("width", x);
        this.canvas.setAttribute("height", y);
    }
    initCom(){
        
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
    }
    SeEstaPulsando(){
        return this.pint;
    }
    agregarBotones(){
        let buttons_div = document.getElementById("botones");
        let buttons = ["nuevo","cargar","guardar","limpiar","cargar_filtro"]
        for(let b of buttons){
            buttons_div.innerHTML += `<button class="button" id= "${(b)}">${(b)}</button>`;
        }
        for(let b of buttons){
            document.getElementById(b).addEventListener("click",()=>{
            });
        }
    }
    agregarHerramientas(){
        let menu_lateral = document.getElementById("menu_lateral");
        let herramientas = ["lapiz","pincel","borrador"];
        for(let b of herramientas){
            menu_lateral.innerHTML += `<button class="button" id= "${(b)}">${(b)}</button>`;
        }
        for(let b of herramientas){
            document.getElementById(b).addEventListener("click",()=>{
            this.setHerr(b)});
        }
        
    }
    setHerr(Herr){
        console.log("ok!");
    }
    pintar(e){
        if(ed.SeEstaPulsando()){
            let canvas=document.getElementById("lienzo");
            var x=(e.pageX-canvas.offsetLeft);
            var y=(e.pageY-canvas.offsetTop);
            ed.herramienta.pintar(canvas,x,y,10);
        }
    }
}
let ed=new Editor();