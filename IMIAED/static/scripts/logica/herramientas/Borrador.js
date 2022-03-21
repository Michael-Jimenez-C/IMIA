import Aherr from "../../api/Aherr.js";
export default class Borrador extends Aherr{
    pintar(ctx,x,y,grosor){
        ctx.clearRect(x-grosor/2, y-grosor/2, grosor, grosor);
    }
    static borra(ctx){
        ctx.clearRect(0,0, 1.5*window.innerWidth,1.5*window.innerHeight);
    }
    cad(){
        return "Borrador";
    }
}