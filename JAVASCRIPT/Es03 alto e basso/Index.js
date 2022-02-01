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
    let numeroUtente=parseInt(_txtNumero.value);
    
    if(numeroUtente > numeroSegreto)
    {
        cont++;
        _divMessage.txtContent="numero inserito troppo grande";
    }
    else if(numeroUtente < numeroSegreto)
    {
        cont++;
        _divMessage.txtContent="numero inserito troppo piccolo"; 
    }
    else
    {
        alert("Bravissimo hai indovinato in "+(cont+1)+ " tentativi");
        _btnGioca.disable=true;
        _divMessage.txtContent="";
    }
    _divTentativi.textContent=cont;   
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;

    return ris;
}