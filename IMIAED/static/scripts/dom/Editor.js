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
        this.herramienta=new Lapiz();
        this.pint=false;
        Recursos.menuConTransicion(); 
        this.canvas=document.getElementById("lienzo");
        this.setCanvasSize();
        this.initCom();
        this.agregarBotones();
    }
    setCanvasSize(x=window.innerWidth*.9, y=window.innerHeight*.8){
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
    }
    SeEstaPulsando(){
        return this.pint;
    }
    agregarBotones(){
        let buttons_div = document.getElementById("botones");
        let n_botones = 100;
        for(let i = 0; i < n_botones ; i++){
            buttons_div.innerHTML += `<button class="button" id= "boton-${(i+1)}">${(i+1)}</button>`;
        }
    }
    pintar(e){
        if(ed.SeEstaPulsando()){
            let canvas=document.getElementById("lienzo");
            var x=(e.pageX-canvas.offsetLeft);
            var y=(e.pageY-canvas.offsetTop);
            ed.herramienta.pintar(canvas,x,y,100);
        }
    }
}
let ed=new Editor();