import APincel from "../../api/APincel.js"
class Lapiz extends APincel{
    pintar(canvas,x,y){
        let ctx=canvas.getContext("2d");
        ctx.fillRect(x-1, y-1, 2,2);
    }
}

class Pincel extends APincel{
    pintar(canvas,x,y,grosor){
        let ctx=canvas.getContext("2d");
        ctx.fillRect(x-grosor/2, y-grosor/2, grosor, grosor);
    }
}


export{Lapiz,Pincel}