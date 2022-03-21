import Aherr from "../../api/Aherr.js";
export default class Lapiz extends Aherr{
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