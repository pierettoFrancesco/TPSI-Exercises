"use strict"

let vet=["Italia","Pizzeria","Calcio","Automobilismo","Lamborghini","Lavagna","Lasagna","Lampadario","Trucebaldazzi"]
let parolaSegreta;
let punti=100;
let _txtPunti;
let _txtCar;
let _chkRis;
let _btnInvia;
let _btnRisposta;
let _txtIns;

function inizializza(){

    let pos=generaNumero(0., vet.length);
    parolaSegreta=vet[pos];
    parolaSegreta=parolaSegreta.toUpperCase();
    console.log(parolaSegreta);

    _txtPunti=document.getElementById("txtPunti");
    _txtPunti.value=punti;  //conversione stringa fatta in automatico
    _txtCar=document.getElementsByName("txtCar");
    _chkRis=document.getElementsByName("chkRis");
    _btnInvia=document.getElementById("btnInvia");
    _btnRisposta=document.getElementById("btnRisposta");
    _txtIns=document.getElementById("txtIns");

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

function confronta(){

    let i=0;
    let carattere=_txtIns.value;
    if(carattere.length==1)
    {
       
        carattere=carattere.toUpperCase();
        for(i=0;i<parolaSegreta.length;i++)
        {
            if(carattere==parolaSegreta[i])
            {
                _txtCar[i].value=carattere;
                _chkRis[i].checked=true;
            }
        }
        punti-=5;
        _txtPunti.value=punti;
        while(i<parolaSegreta.length && _chkRis[i].checked==true)
            i++;
        if(i==parolaSegreta.length && punti>0)
        {
            alert("Hai vinto");
            _btnInvia.disabled=true;
            _btnRisposta.disabled=true;
        }
        else if(punti<=0)
        {
            alert("Hai perso");
            _btnInvia.disabled=true;
            _btnRisposta.disabled=true;
        }
            
    }
    else
    {
        alert("METTI UN FORMATO VALIDO ")
        _txtIns.value="";
    }
}

function rispondi(){

    let parola=_txtIns.value;

    if(parola!="")
    {
        parola=parola.toUpperCase();

        if(parola==parolaSegreta && punti>0)
        {
            for(let i=0;i<parolaSegreta.length;i++){
                _txtCar[i].value=parola[i];
                _chkRis[i].checked=true;
            }
            alert("Hai vinto");
            _btnInvia.disabled=true;
            _btnRisposta.disabled=true;
        }
        else 
        {
            alert("riprovare");
             punti-=20;
             _txtPunti.value=punti;
        }
        if(punti<=0){
            alert("Hai perso");
            _btnInvia.disabled=true;
            _btnRisposta.disabled=true;
        }
    }
    else
    {
        alert("METTI UN FORMATO VALIDO ")
        _txtIns.value="";
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}