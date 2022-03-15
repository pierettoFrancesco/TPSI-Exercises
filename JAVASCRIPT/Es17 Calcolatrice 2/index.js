"use strict"

let primoNumero = 0;
let Operatore = "";
let cancella = false;

let _btnNum;
let _btnOperatore;
let _btnCalcola;
let _btnClear;
let _txtDisplay;

window.onload=function() {
    _btnNum = document.getElementsByName("btnNum");
    _btnOperatore = document.getElementsByName("btnOperatore");
    _btnCalcola = document.getElementById("btnCalcola");
    _btnClear = document.getElementById("btnClear");
    _txtDisplay = document.getElementById("txtDisplay");

    for(let i=0; i<_btnNum.length; i++)
    {
        _btnNum[i].addEventListener("click", visualizza);
    }
    for(let i=0; i<_btnOperatore.length; i++)
    {
        _btnOperatore[i].addEventListener("click", esegui);
    }
    _btnCalcola.addEventListener("click", calcola);
    _btnClear.addEventListener("click", pulisci);
}

function visualizza() {
    if(cancella)
    {
        _txtDisplay.value = "";
        cancella = false;
    }
    let num = this.value;
    _txtDisplay.value += num;
}

function esegui() {
    Operatore = this.value;
    if(_txtDisplay.value == "")
        _txtDisplay.value = "0";
    primoNumero = _txtDisplay.value;
    cancella = true;
}

function calcola() {
    switch(Operatore)
    {
        case '+':
            _txtDisplay.value = primoNumero + parseFloat(_txtDisplay.value);
            break;
        case '-':
            _txtDisplay.value = primoNumero - parseFloat(_txtDisplay.value);
            break;
        case '*':
            _txtDisplay.value = primoNumero * parseFloat(_txtDisplay.value);
            break;
        case '/':
            _txtDisplay.value = primoNumero / parseFloat(_txtDisplay.value);
            break;
    }
}

function pulisci() {
    primoNumero = 0;
    Operatore = "";
    _txtDisplay.value = "";
}