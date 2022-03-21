import Aherr from "../../api/Aherr.js";
export default class PincelContinuo extends Aherr{
    pintar(ctx,x,y,grosor,color){
        ctx.lineWidth=grosor;
        ctx.strokeStyle=color;
        ctx.lineTo(x,y);
        ctx.stroke();
        
    }
    cad(){
        return "PincelC";
    }
}