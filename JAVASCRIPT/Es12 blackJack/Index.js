"use strict"

let _txtBanco;
let _chkNum;
let _txtNum;
let _txtUser;
let puntiGiocatore;
let _btnBanco;

window.onload=function()
{
    _txtBanco=document.getElementById("txtBanco");
    _chkNum=document.getElementsByName("chkNum");
    _txtNum=document.getElementsByName("txtNum");
    _txtUser=document.getElementById("txtUser");
    _btnBanco=document.getElementById("btnBanco");

    let numero=generaNumero(1,11);
    _txtBanco.value=numero;
}

function visualizza(pos){
    _chkNum[pos].disabled=true;
    let numero=generaNumero(1,11);
    _txtNum[pos].value=numero;
    puntiGiocatore+=numero;
    _txtUser.value=puntiGiocatore;
    if(puntiGiocatore>21)
    {
        alert("hai perso");
        termina();
    }
}

function termina(){
    _btnBanco.disabled=true;
    for(let i=0;i<_chkNum.length;i++)
        _chkNum[i].disabled=true;
}

function banco(){
    let carta=generaNumero(1,11);
    _txtBanco.value=parseInt(_txtBanco.value)+carta;
   
    for(let i=0;i<_chkNum.length;i++)
        _chkNum[i].disabled=true;
    let puntiBanco=parseInt(_txtBanco.value);
    if(puntiBanco>21)
    {
        alert("Il banco ha perso ");
        termina();
    }
    else if(puntiBanco >=17 && puntiBanco<=21)
    {
        if(puntiGiocatore>puntiBanco)
            alert("Vince il giocatore");
        else
            alert("vince il banco");
        termina();
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;

    return ris;
}