function reinicio(){
    var ver = document.getElementById('verresul');
    var resul; 
    var objeto = document.getElementById('piedra');
    var nave = document.getElementById('mobil');
    var formulav1 = document.getElementById('formulav1');
    var formulav2 = document.getElementById('formulav2');
    
    piedra.style.visibility = 'hidden';
    mobil.style.visibility = 'hidden';
    formulav1.style.visibility = 'hidden';
    formulav2.style.visibility = 'hidden';
    ver.style.visibility='hidden';


}

function velocidad(){
var form = document.forms['parameters'];
var resultado = document.getElementById("results");
var ver = document.getElementById('verresul');
var resul; 
var objeto = document.getElementById('piedra');
var nave = document.getElementById('mobil');
var formulav1 = document.getElementById('formulav1');
var formulav2 = document.getElementById('formulav2');
//copiamos valores
var v1 = form['vlcuno'].value;
var v2 = form['vlcdos'].value;
var v = form['vlc'].value;
var marco2 = form['mrcdos'].value;
var evento = form['evnt'].value;

//no hay parámetros repetidos
if ( marco2 == 'objt' && evento == 'objt' ){
    alert('Favor de no repetir parametros');
    return false;
}
if ( marco2 == 'nv' && evento == 'nv' ){
    alert('Favor de no repetir parametros');
    return false;
}

//calcular 
if (v === "ask"){
    //v
    resul = Math.abs(v1 -v2);
ver.style.visibility='visible';
resultado.innerHTML = `<h3>v<sub>1</sub> - v<sub>2</sub> = <span>${resul.toFixed(5)}</span></h3>`
}

if ( evento === "objt") {
    piedra.style.visibility = 'visible';
    piedra.innerHTML = 'Evento';
    mobil.style.visibility = 'visible';
    mobil.innerHTML = 'Marco 2';
    if(v1 === "ask"){
        //v1
        resul= (parseFloat(v2) + parseFloat(v))/(1 + (v2*v));
        formulav1.style.visibility = 'visible';
        formulav2.style.visibility = 'hidden';
        ver.style.visibility='visible';
        resultado.innerHTML = `<h3> v1 = <span>${resul.toFixed(5)}</span></h3>`
    } if(v2 === "ask"){
        //v2
        resul= (parseFloat(v1) + parseFloat(v))/(1 - (v1*v));
        formulav2.style.visibility = 'visible';
        formulav1.style.visibility = 'hidden';
        ver.style.visibility='visible';
        resultado.innerHTML = `<h3> v2= <span>${resul.toFixed(5)}</span>  </h3>`
}
}
if(evento === "nv"){
    piedra.style.visibility = 'visible';
    piedra.innerHTML = 'Marco 2';
    mobil.style.visibility = 'visible';
    mobil.innerHTML = 'Evento';
        if(v1 === "ask"){
            //v1
            resul= (parseFloat(v2) + parseFloat(v))/(1 + (v2*v));
            formulav1.style.visibility = 'visible';
            formulav2.style.visibility = 'hidden';
            ver.style.visibility='visible';
            resultado.innerHTML = `<h3> v1 = <span>${resul.toFixed(5)}</span></h3>`
        } if(v2 === "ask"){
            //v2
            resul= (parseFloat(v1) + parseFloat(v))/(1 - (v1*v));
            formulav2.style.visibility = 'visible';
            formulav1.style.visibility = 'hidden';
            ver.style.visibility='visible';
            resultado.innerHTML = `<h3> v2= <span>${resul.toFixed(5)}</span>  </h3>`
    }
}




return false;
}