"use strict"

let _btnColore;
let _titolo;
let _btnDimensione;
let _txtSize;
let _btnSfondo;
let _body;
let _btnBordo;

window.onload=function(){
    _btnColore=document.getElementById("btnColore");
    _btnColore.addEventListener("click",cambiaColore);
    _titolo=document.getElementById("titolo");
    _btnDimensione=document.getElementById("btnDimensione");
    _btnDimensione.addEventListener("click",cambiaDimensione);
    _txtSize=document.getElementById("txtSize");
    _btnSfondo=document.getElementById("btnSfondo");
    _btnSfondo.addEventListener("click",cambiaSfondo);
    _body=document.getElementsByTagName("body")[0];
    _btnBordo=document.getElementById("btnBordo");
    _btnBordo.addEventListener("click",cambiaBordo);
}

function cambiaBordo(){

}

function cambiaSfondo()
{
    if(_body.style.backgroundImage=="")
        _body.style.background= "#eaeaea url(img/bg.gif) center repeat-y" ;
    else
        _body.style.backgroundImage==""; 
}

function cambiaColore(){
    if(getComputedStyle(_titolo).backgroundColor=="rgb(0, 0, 255)")
    {
        _titolo.style.backgroundColor="yellow";
        _titolo.style.color="blue";
    }
    else
    {
        _titolo.style.backgroundColor="blue";
        _titolo.style.color="yellow";
    }
}

function cambiaDimensione(){
    let size=_txtSize.value;
    if(size<=23 && size>5)
        _titolo.style.fontSize= size+"pt";
    else
        alert("dimensione non valida");
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}