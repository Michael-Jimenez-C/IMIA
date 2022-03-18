import Recursos from "./Recursos.js";
/*
                Documentacion necesaria
Eventos del canvas:http://iwokloco-appweb.blogspot.com/2012/08/html5-eventos-en-el-canvas.html
canvas:http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-canvas
paint en html:https://www.lawebdelprogramador.com/codigo/JavaScript/v4444-Paint-en-Canvas-JS.html
evetnos:https://www.arkaitzgarro.com/javascript/capitulo-15.html


*/
class Editor{
    constructor(){
        this.pint=false;
        Recursos.menuConTransicion(); 
        this.initCom();
        this.agregarBotones();
    }
    initCom(){
        let canvas=document.getElementById("lienzo");
        canvas.setAttribute("width", window.innerWidth*.9);
        canvas.setAttribute("height", window.innerHeight*.8);
        canvas.addEventListener('mousedown',()=>{
            this.pint=true;
        });
        canvas.addEventListener('mouseup',()=>{
            this.pint=false;
        });
        canvas.addEventListener('mousemove',this.pintar)
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
            let ctx=canvas.getContext("2d");
            var x=(e.pageX-canvas.offsetLeft);
            var y=(e.pageY-canvas.offsetTop);
            console.log(x,y)
            let grosor=2;
            ctx.fillRect(x, y, grosor, grosor);
            for (var i=0; i<window.innerWidth*.9;i+=100){
                for (var j=0; j<window.innerHeight;j+=100){
                    ctx.fillRect(i,j, grosor, grosor);
                }
            }
        }
    }
}
let ed=new Editor();