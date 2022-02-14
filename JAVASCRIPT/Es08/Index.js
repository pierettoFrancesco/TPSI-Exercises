"use strict"

let vet=["Italia","Pizzeria","Calcio","Automobilismo","Lamborghini","Lavagna","Lasagna","Lampadario","Trucebaldazzi"]
let parolaSegreta;
let punti=100;
let _txtPunti;
let _txtCar;
let _chkRis;
let _btnInvia;
let _btnRisposta;

function inizializza(){

    let pos=generaNumero(0., vet.length);
    parolaSegreta=vet[pos];
    parolaSegreta=parolaSegreta.toUpperCase();

    _txtPunti=document.getElementById("txtPunti");
    _txtPunti.value=punti;  //conversione stringa fatta in automatico
    _txtCar=document.getElementsByName("txtCar");
    _chkRis=document.getElementsByName("chkRis");
    _btnInvia=document.getElementById("btnInvia");
    _btnRisposta=document.getElementById("btnRisposta");

    for(let i=0;i<_txtCar.length;i++)
    {
        _txtCar[i].readOnly=true;
        _chkRis[i].disabled=true;
        _chkRis[i].checked=false;

        if(i< parolaSegreta.length)
            _txtCar[i].value="*";
        else
            _txtCar[i].value="";
    }
    _btnInvia.disabled=false;
    _btnRisposta.disabled=false;

}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}