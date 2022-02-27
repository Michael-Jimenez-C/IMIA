export default class Recursos{
    static menu(){
        /*Añade la hoja de estilos automaticamente*/
        document.head.innerHTML+='<link rel="stylesheet" type="text/css" href="../static/estilos/menu.css">';
        /*Añade el menu al body*/
        let body=document.getElementById("root");
        body.innerHTML="<header><img src='../static/recursos/Logo.svg'><nav><ul class='menu'> <li><div class='desplegable'><a>Prueba 1</a><img src='../static/recursos/flecha.svg'></div><ul class='subMenu oculto'><li><a>Prueba 1</a></li><li><a>Prueba 2</a></li><li><a>Prueba 3</a></li></ul></li><li><a>Prueba 2</a></li><li><a>Prueba 3</a></li></ul></nav></header>"+body.innerHTML;
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
    }
}