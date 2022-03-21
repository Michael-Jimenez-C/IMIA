export default class Union{
    constructor(){
    
    }
    gen(canvas){
        let ctx=canvas.getContext("2d");
        let img=ctx.getImageData(0,0,canvas.width,canvas.height).data;
        var s=[];
        for(var i=0;i<400000;i++){
            s.push(img[i])
        }
        console.log(s.length)
        fetch(`http://127.0.0.1:5000/filter/EGris-${s}-${"none"}`)
        .then(response => response)
        .then(data => console.log(data));
    }
    cad(){
        return "union"
    }
    
}