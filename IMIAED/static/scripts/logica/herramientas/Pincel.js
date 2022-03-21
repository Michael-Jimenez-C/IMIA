import Aherr from "../../api/Aherr.js";
export default class Pincel extends Aherr{
    pintar(ctx,x,y,grosor,color){
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