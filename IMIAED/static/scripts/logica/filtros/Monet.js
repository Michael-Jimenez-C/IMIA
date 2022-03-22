import Afiltro from "./Afiltro.js"

export default class Monet{

    constructor(){
        this.filtro = new Afiltro()
    }
    async gen(canvas){
        this.filtro.gen(canvas, "monet")
    }
    cad(){
        return "monet"
    }
    
}