export default class EGrises{
    constructor(){
    
    }
    gen(canvas){
        let ctx=canvas.getContext("2d");
        let img=ctx.getImageData(0,0,canvas.width,canvas.height);
        for(var i=0;i<img.data.length;i+=4){
            for(var k; i<3;i++){
                img.data[i+k]=/2;
            }
        }
        ctx.putImageData(img,0,0);
    }
    cad(){
        return "Escala_de_grises"
    }
    
}