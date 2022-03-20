import Aherr from "../../api/Aherr.js";
class Lapiz extends Aherr{
    pintar(ctx,x,y,grosor,color){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.rect(x-grosor/2, y-grosor/2, grosor, grosor);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
    cad(){
        return "Lapiz";
    }
}

class Pincel extends Aherr{
    pintar(ctx,x,y,grosor,color){
        // ctx.fillRect(x-grosor/2, y-grosor/2, grosor, grosor);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.arc(x, y, grosor/2, 0,2*Math.PI);
        
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
    cad(){
        return "Pincel";
    }
}

class Borrador extends Aherr{
    pintar(ctx,x,y,grosor){
        ctx.clearRect(x-grosor/2, y-grosor/2, grosor, grosor);
    }
    static borra(ctx){
        ctx.clearRect(0,0, window.innerWidth,window.innerHeight);
    }
    cad(){
        return "Borrador";
    }
}


export{Lapiz,Pincel,Borrador}