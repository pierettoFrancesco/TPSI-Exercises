"use strict"


let _txtCitta;
let _optCitta;
let _optNazioni;
let _txtNazioni;
let _txtRisposte;
let _btnSeleziona;
let _btnRispondi;
let vit=0;

let nazioni=["Inghilterra","Francia","Italia","Irlanda","Germania","Ucraina","Croazia","Spagna"];

window.onload=function(){
    _txtCitta=document.getElementsByName("txtCitta");
    _optCitta=document.getElementsByName("optCitta");
    _optNazioni=document.getElementsByName("optNazioni");
    _txtNazioni=document.getElementsByName("txtNazioni");
    _txtRisposte=document.getElementsByName("txtRisposte");
    _btnSeleziona=document.getElementById("btnSeleziona");
    _btnRispondi=document.getElementById("btnRispondi");

    for(let i=0;i<_txtCitta.length;i++)
    {
        _txtCitta[i].readOnly=true;
        _txtNazioni[i].readOnly=true;
        _txtRisposte[i].readOnly=true;
        _optCitta[i].disabled=true;
        _optNazioni[i].disabled=true;
        _txtCitta[i].nazione=nazioni[i];
    }

    for(let i=0;i<_txtNazioni.length;i++)
    {
        let pos=generaNumero(0,nazioni.length)
        _txtNazioni[i].value=nazioni[pos];
        nazioni.splice(pos,1);
    }
}

function seleziona(){
    for(let i=0;i<_txtCitta.length;i++)
        _optNazioni[i].disabled=false;
	let pos=generaNumero(0,_txtCitta.length);
    if(_txtCitta[pos].disabled==false)
        _optCitta[pos].checked=true;
}

function controlla(){
    let contN=0
    let contC=0;
    for(let i=0;i<_txtNazioni.length;i++)
    {
        if(_optNazioni[i].checked==true)
            contN++;
        if(_optCitta[i].checked==true)
            contC++;
    }
    if(contC==0 || contN==0)
        alert("Selezionare una città e una nazione");
    else
    {
        for(let i=0;i<_txtCitta.length;i++)
        {
            if(_optCitta[i].checked==true)
            {
                for(let j=0;j<_txtNazioni.length;j++)
                {
                    if(_optNazioni[j].checked==true)
                    {
                        if(_txtCitta[i].nazione!=_txtNazioni[j].value)
                            alert("Risposta sbagliata");
                        else
                        {
                            _optNazioni[j].checked=false;
                            _optCitta[i].checked=false;
                            _txtRisposte[j].value=_txtCitta[i].value;
                            _txtCitta[i].value="";
                            _txtCitta[i].disabled=true;
                            _optNazioni[j].disabled=true;
                            _txtNazioni[j].disabled=true;
                            vit++;
                        }

                    }
                }
            }
        }
    }
    if(vit==_txtRisposte.length)
    {
        alert("Hai vinto");
        _btnRispondi.disabled=true;
        _btnSeleziona.disabled=true;
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}