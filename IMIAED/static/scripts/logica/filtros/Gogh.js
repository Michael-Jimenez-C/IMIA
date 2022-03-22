import Afiltro from "./Afiltro.js"

export default class Gogh{

    constructor(){
        this.filtro = new Afiltro()
    }
    async gen(canvas){
        this.filtro.gen(canvas, "gogh")
    }
    cad(){
        return "gogh"
    }
    
}