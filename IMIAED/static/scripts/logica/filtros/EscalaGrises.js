export default class EGrises{
    constructor(){
    
    }
    gen(canvas){
        let ctx=canvas.getContext("2d");
        let img=ctx.getImageData(0,0,canvas.width,canvas.height);
        for(var i=0;i<img.data.length;i+=4){
            var p=0
            for(var k=0; k<3;k++){
                p+=img.data[i+k];
            }
            p/=3;
            for(var k=0; k<3;k++){
                img.data[i+k]=p;
            }
        }
        ctx.putImageData(img,0,0);
    }
    cad(){
        return "Escala_de_grises"
    }
    
}