export default class Recursos{
    static menu(){
        /*Añade la hoja de estilos automaticamente*/
        document.head.innerHTML+='<link rel="stylesheet" type="text/css" href="../static/estilos/menu.css">';
        /*Añade el menu al body*/
        let body=document.body;
        body.innerHTML="<header id='header'><img src='../static/recursos/Logo.svg'><nav><ul class='menu'> <li><div class='desplegable'><a>Comenzar</a><img src='../static/recursos/flecha.svg'></div><ul class='subMenu oculto'><li><a href='/pages/Editor.html'>Nuevo lienzo</a></li><li><a>Prueba 2</a></li><li><a>Prueba 3</a></li></ul></li><li><a>Prueba 2</a></li><li><a>Prueba 3</a></li></ul></nav></header>"+body.innerHTML;
        /*Se añade a este menu un eventlistener*/
        this.subMenus=document.querySelectorAll(".desplegable");
        this.subMenus.forEach(i=>{
            i.addEventListener('click',()=>{
                i.classList.toggle('desplegado');
                let menu=i.nextElementSibling;
                menu.classList.toggle('oculto');
                menu.classList.toggle('mostrando');
                
            });
        });
        window.onscroll = function() {
            var y = window.scrollY;
            let header=document.getElementById("header");
            console.log(y)
            if (y>15){
                header.classList.add('top')
            }else{
                header.classList.remove('top')
            }
        };
    }
}