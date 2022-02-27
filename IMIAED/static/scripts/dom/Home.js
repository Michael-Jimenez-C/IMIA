import Recursos from './Recursos.js'
class Home{
    constructor(){
        Recursos.menu();
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
    actualizar(){
        /*setTimeout('slider()',5000);*/
    }

    }
new Home();