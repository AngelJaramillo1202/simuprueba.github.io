function cerrar(){
    var instrucciones = document.getElementById("mostrar1");
    var controles = document.getElementById('mostrar2');
    var label1 = document.getElementById('label1')
    instrucciones.style.visibility = 'hidden';
   // controles.style.visibility = 'visible'; 
    //label1.style.visibility = 'visible';
}
function abrir(){
    var instrucciones = document.getElementById("mostrar1");
    var controles = document.getElementById('mostrar2');
    var label1 = document.getElementById('label1')
    instrucciones.style.visibility = 'visible';
   // controles.style.visibility = 'hidden'; 
    label1.style.visibility = 'hidden';
}