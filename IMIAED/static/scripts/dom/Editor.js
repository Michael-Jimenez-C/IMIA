import Recursos from "./Recursos.js";
import Lapiz from "../logica/herramientas/Lapiz.js";
import Pincel from "../logica/herramientas/Pincel.js";
import PincelC from "../logica/herramientas/PincelContinuo.js";
import Borrador from "../logica/herramientas/Borrador.js";
import EGrises from "../logica/filtros/EscalaGrises.js";
/*
                Documentacion necesaria
Eventos del canvas:http://iwokloco-appweb.blogspot.com/2012/08/html5-eventos-en-el-canvas.html
canvas:http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-canvas
eventos:https://www.arkaitzgarro.com/javascript/capitulo-15.html


*/
class Editor{
    constructor(){
        this.herramienta=new Lapiz();
        this.pint=false;
        Recursos.menu();
        this.canvas=document.getElementById("lienzo");
        this.ctx=this.canvas.getContext("2d");
        this.setCanvasSize();
        this.initCanv();
        this.initVent();
    }
    setCanvasSize(x=window.innerWidth*.8, y=window.innerHeight*.7){
        this.canvas.setAttribute("width", x);
        this.canvas.setAttribute("height", y);
    }
    initCanv(){
        //*Eventos del canvas*//
        this.canvas.addEventListener('mousedown',(e)=>{
            if(e.button==0){
            this.pint=true;
            var coords=this.mouseXY(e);
            this.ctx.beginPath();
            this.ctx.moveTo(coords[0],coords[1]);
            }
        });
        this.canvas.addEventListener('mouseup',()=>{
            this.pint=false;
        });
        this.canvas.addEventListener('mousemove',this.pintar)
        this.canvas.addEventListener('mouseout',()=>{
            this.pint=false;
        })
    }
    initVent(){
        //Añadir evento a la ventanas de seleccion de archivo
        let selector=Recursos.ventana("selector");
        document.getElementById("file").addEventListener("change",this.cargarImagenes,false);
        //añadir filtros al menu de filtros
        let menuFiltros=Recursos.ventana("filtro");
        //*Botones menu superior*//
        this.initbut(menuFiltros,selector);
    }
    initbut(menuFiltros,selector){
        let buttons = ["Nuevo","Cargar","Guardar","Filtro"]
        let fn=[
            ()=>{Borrador.borra(this.ctx)},
            ()=>{
                ((selector.classList+"").includes("Voculto")!=-1)? selector.classList.remove("Voculto"):""
            },
            ()=>{print()},
            ()=>{((menuFiltros.classList+"").includes("Voculto")!=-1)? menuFiltros.classList.remove("Voculto"):""}]
        this.genButtons(document.getElementById("botones"),buttons)
        for(var i=0;i<buttons.length;i++){
            document.getElementById(buttons[i]).addEventListener("click",fn[i]);
            console.log(buttons[i]);
        }
        //*Botones menu lateral*//
        let herramientas = [new Lapiz(), new Pincel(),new PincelC(), new Borrador()];
        this.genButtons(document.getElementById("menu_botones"),herramientas,true)
        for(let b of herramientas){
            document.getElementById(b.cad()).addEventListener("click",()=>{
            this.setHerr(b)});
        }
        this.initMenuFiltros(menuFiltros);
    }
    initMenuFiltros(menuFiltros){
        let filtros=[new EGrises()];
        this.genButtons(menuFiltros.lastElementChild, filtros,true);
        for(let i of filtros){
            document.getElementById(i.cad()).addEventListener("click",()=>{
                i.gen(ed.canvas);
            });
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
        this.herramienta=Herr;
    }

    pintar(e){
        if(ed.SeEstaPulsando()){
            let slider=document.getElementById("slider");
            let color=document.getElementById("input_color");
            var coords=ed.mouseXY(e)
            ed.herramienta.pintar(ed.ctx,coords[0],coords[1],slider.value,color.value);
        }
    }
    
    mouseXY(e){
        var x=(e.pageX-ed.canvas.offsetLeft);
        var y=(e.pageY-ed.canvas.offsetTop);
        return [x,y]
    }

    cargarImagenes(e){
        var reader = new FileReader();
        reader.onload = (function() {
            return function(e) {
                var img=new Image();
                img.src=e.target.result;
                //document.body.appendChild(img);
                ed.setCanvasSize(img.width,img.height);
                ed.ctx.drawImage(img,0,0,img.width,img.height);
            };
          })(e.target.files[0])
          reader.readAsDataURL(e.target.files[0]);
    }
}
let ed=new Editor();