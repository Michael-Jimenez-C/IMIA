import Aherr from "../../api/Aherr.js"
class Lapiz extends Aherr{
    pintar(canvas,x,y){
        let ctx=canvas.getContext("2d");
        ctx.fillRect(x-1, y-1, 2,2);
    }
    cad(){
        return "Lapiz";
    }
}

class Pincel extends Aherr{
    pintar(canvas,x,y,grosor){
        let ctx=canvas.getContext("2d");
        // ctx.fillRect(x-grosor/2, y-grosor/2, grosor, grosor);
        ctx.beginPath();
        ctx.arc(x, y, grosor/2, 0,2*Math.PI);
        
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
    }
    cad(){
        return "Pincel";
    }
}

class Borrador extends Aherr{
    pintar(canvas,x,y,grosor){
        let ctx=canvas.getContext("2d");
        ctx.clearRect(x-grosor/2, y-grosor/2, grosor, grosor);
    }
    cad(){
        return "Borrador";
    }
}
export{Lapiz,Pincel,Borrador}