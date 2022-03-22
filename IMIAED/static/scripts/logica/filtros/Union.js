export default class FUnion{
    constructor(){
    
    }
    async gen(canvas){
        let ctx=canvas.getContext("2d");
        let img=ctx.getImageData(0,0,canvas.width,canvas.height).data;
        var s=[];
        for(var i=0;i<img.length;i+=4){
            for(var k=0; k<3; k++){
                s.push(img[i+k])
            }
        }
        var data = {"pixeles": s, "ancho": canvas.width, "alto":canvas.height};
        let response = await fetch(`http://127.0.0.1:5000/filter/a`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        if (response.ok) {
            let json = await response.json();
            console.log(json)
        }

    }
    cad(){
        return "FUnion"
    }
    
}