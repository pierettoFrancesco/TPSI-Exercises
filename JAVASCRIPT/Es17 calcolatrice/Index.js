"use strict"

let _btnNum;
let _btnOperatore;
let _txtDisplay;
let _btnClear;
let _btnRis;
let num1=0;
let op="";

window.onload=function(){
    _btnNum=document.getElementsByName("btnNum");
    _btnOperatore=document.getElementsByName("btnOperatore");
    _txtDisplay=document.getElementById("txtDisplay");
    _btnClear=document.getElementById("btnClear");
    _btnRis=document.getElementById("btnRis");
    
    for(let i=0;i<_btnNum.length;i++)
        _btnNum[i].addEventListener("click",Digita);
    for(let i=0;i<_btnOperatore.length;i++)
        _btnOperatore[i].addEventListener("click",Operatore);
    _btnRis.addEventListener("click",Risultato);
    _btnClear.addEventListener("click",Cancella);
}

function Digita(){
    let num=this.value;
    _txtDisplay.value+=num;
}

function Operatore(){
    op=this.value;
    num1=_txtDisplay.value;
    _txtDisplay.value="";
}

function Risultato(){
    switch(op){
        case '+':
            _txtDisplay.value=num1+parseFloat(_txtDisplay.value);
        break;
        case '-':
            _txtDisplay.value=num1-_txtDisplay.value;
        break;
        case '*':
            _txtDisplay.value=num1*_txtDisplay.value;
        break;
        case '/':
            _txtDisplay.value=num1/_txtDisplay.value;
        break;
    }      
}

function Cancella(){
    num1=0;
    _txtDisplay.value="";
    op="";
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}