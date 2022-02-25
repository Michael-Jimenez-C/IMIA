function load(){
    body=document.getElementById("root");
    body.innerHTML+=lorem;
    Modulos.barra(doc);
}

class Modulos{
    barra(doc){
        body =doc.getElementById("root");
        body.innerHTML+="<img src='../static/recursos/logo.jpeg'>";
    }
}