function load(){
    barra(document);
}

function barra(doc){
    body =doc.getElementById("root");
    body.innerHTML=("<header><img src='../static/recursos/logo.jpeg'><H1>IMIA Editor</H1></header>")+body.innerHTML;
}