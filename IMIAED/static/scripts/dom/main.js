const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
function load(){
    body=document.getElementById("root");
    head=document.getElementById("head");
    head+='<script type="text/javascript" src="../static/scripts/dom/barra.js"></script>'
    head+='<script type="text/javascript" src="../static/scripts/api/docprop.js"></script>'
    barra=Barra(document);
    body.innerHTML+=lorem;
}