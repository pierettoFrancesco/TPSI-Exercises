"use strict"

let numeroSegreto;
let _divMessage;
let _txtNumero;
let _btnGioca;
let _divTentativi;
let cont=0;

function init(){
    _txtNumero=document.getElementById("txtNumero");
    _divMessage=document.getElementById("divMessage");
    _btnGioca=document.getElementById("btnGioca");
    _divTentativi=document.getElementById("divTentativi");
     numeroSegreto=generaNumero(1,101);
     console.log("numero segreto",numeroSegreto);
}

function gioca(){
    if(_txtNumero.value=="")
        alert("Inserire un numero");
    else{
        let numeroUtente=parseInt(_txtNumero.value);  
        let vinto = false;
    
        if(numeroUtente > numeroSegreto)
        {
            /* con text.Content si accetta solo testo non HTML, per usare tag HTML uso innerHTML */
            _divMessage.innerHTML+="numero " + numeroUtente +" troppo grande <br>";
            cont++;
        }
        else if(numeroUtente < numeroSegreto)
        {
            _divMessage.innerHTML+="numero " + numeroUtente +" troppo piccolo <br>"; 
            cont++;
        }
        else
        {
            alert("Bravissimo hai indovinato in "+(cont+1)+ " tentativi");
            vinto=true;
            _btnGioca.disabled=true;
        }
        _divTentativi.textContent=cont;   
        if(cont==10 && !vinto)
        {
            alert("Tentativi esauriti, hai perso");
            _btnGioca.disabled=true;
    
        }
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;

    return ris;
}