import Afiltro from "./Afiltro.js"

export default class Ola{

    constructor(){
        this.filtro = new Afiltro()
    }
    async gen(canvas){
        this.filtro.gen(canvas, "ola")
    }
    cad(){
        return "ola"
    }
    
}