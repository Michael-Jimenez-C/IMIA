export default class FUnion{
    constructor(){
    
    }
    gen(canvas){/*
        let ctx=canvas.getContext("2d");
        let img=ctx.getImageData(0,0,canvas.width,canvas.height).data;
        var s=[];
        for(var i=0;i<img.length;i+=4){
            for(var k=0; i<3; i++){
                s.push(img[i+k])
            }
        }
        console.log(s.length)
        var data = {username: 'example'};
        fetch(`http://127.0.0.1:5000/filter/a`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                "pixeles":(s+""),
                "ancho":canvas.width,
                "alto":canvas.height
            }
        })
        .then(response => response)
        .then(data => console.log(data));*/
        
    }
    cad(){
        return "FUnion"
    }
    
}