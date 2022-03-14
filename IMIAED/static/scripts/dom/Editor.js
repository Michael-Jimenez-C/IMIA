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
    }
    initCom(){
        let canvas=document.getElementById("lienzo");
        let ctx=canvas.getContext("2d");
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
    pintar(e){
        if(ed.SeEstaPulsando()){
            let canvas=document.getElementById("lienzo");
            let ctx=canvas.getContext("2d");
            var x=parseInt(((e.pageX)/window.innerWidth)*(window.innerWidth*0.8)-50);
            var y=e.pageY-110;
            console.log(x,y)
            let grosor=50;
            ctx.fillRect(x, y, grosor, grosor);
        }
    }
}

let ed=new Editor();