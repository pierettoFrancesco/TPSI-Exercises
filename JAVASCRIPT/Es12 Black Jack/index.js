"use strict"

let _txtBanco;
let _chkNum;
let _txtNum;
let _txtUser;
let _btnBanco;
let puntiGiocatore=0;


window.onload=function() {
    _txtBanco=document.getElementById("txtBanco");
    _chkNum=document.getElementsByName("chkNum");
    _txtNum=document.getElementsByName("txtNum");
    _txtUser=document.getElementById("txtUser");
    _btnBanco=document.getElementById("btnBanco");

    let numero=generaNumero(1,11);
    _txtBanco.value=numero;
}

function visualizza(pos) {
    _chkNum[pos].disabled=true;
    let numero=generaNumero(1,11);
    _txtNum[pos].value=numero;
    puntiGiocatore+=numero;
    _txtUser.value=puntiGiocatore;
    if(puntiGiocatore > 21)
    {
        alert("Hai perso. Il tuo punteggio è maggiore di 21.")
        termina();
    }
}

function banco() {
    let carta=generaNumero(1,11);
    _txtBanco.value=parseInt(_txtBanco.value)+carta;
    for(let i=0; i<_chkNum.length; i++)
        _chkNum[i].disabled=true;
    let puntiBanco=parseInt(_txtBanco.value);
    if(puntiBanco > 21)
    {
        alert("Il banco ha perso. Vince il giocatore.")
        termina();
    }
    else if(puntiBanco >= 17 && puntiBanco <= 21)
    {
        if(puntiGiocatore > puntiBanco)
            alert("Vince il giocatore.")
        else
            alert("Vince il banco.")
        termina();
    }
}

function termina() {
    _btnBanco.disabled=true;
    for(let i=0; i<_chkNum.length; i++)
        _chkNum[i].disabled=true;
}

function generaNumero(a,b) {
    /* con questa formula si genera un numero random tra a e b con estremo a incluso e estremo b escluso */
    let ris=Math.floor((b-a)*Math.random())+a;
    return ris;
}