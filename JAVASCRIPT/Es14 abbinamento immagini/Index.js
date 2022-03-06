"use strict"

const img1=["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"];
const img2=["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"];

let _img;
let _txt;
let _imgRisposta;
let _txtRisposta;
let _optRisposta;
let _txtCorrette;
let _txtErrate;
let pos;
let vit, erra;

window.onload=function(){
    _img=document.getElementById("img");
    _txt=document.getElementById("txt");
    _txtCorrette=document.getElementById("txtCorrette");
    _txtErrate=document.getElementById("txtErrate");
    _imgRisposta=document.getElementsByClassName("imgRisposta");
    _txtRisposta=document.getElementsByClassName("txtRisposta");
    _optRisposta=document.getElementsByName("optRisposta");
    console.log(img);

    pos=0;
    pos=generaNumero(1,11);
    //console.log( _img.src="img/img"+(pos)+" "+img1[pos-1]+".png");
    _img.src="img/img"+(pos)+" "+img1[pos-1]+".jpg";
    _txt.value=img1[pos-1];

    for(let i=0;i<img1.length;i++){
        _imgRisposta[i].src="img/img"+(i+1)+" "+img2[i]+".jpg"
    }



}

function controlla(){

    let i=0;
    vit=0,erra=0;

    while(i<img1.length && _optRisposta[i].checked==false){
            i++;
    }
    if(i==_optRisposta.length)
        alert("Scegli un'opzione");
    else
    {
        _txtRisposta[i].value=_txtRisposta[i].value.toLowerCase();
        if(_txtRisposta[i].value==img2[pos-1])
        {
            vit++;
            cancella();
            pos=pos=generaNumero(1,11);
            _img.src="img/img"+(pos)+" "+img1[pos-1]+".jpg";
            _txt.value=img1[pos-1];
            for(let i=0;i<img1.length;i++){
                _imgRisposta[i].src="img/img"+(i+1)+" "+img2[i]+".jpg";
            }
        }
        else
            erra++;
    }
    _txtCorrette.innerHTML="Risposte corrette: "+ vit;
    _txtErrate.innerHTML="Risposte errate: "+ erra;
}

function cancella(){
    
    for(let i=0;i<img1.length;i++)
        _txtRisposta[i].value="";
}

function generaNumero(a,b){
    /* estremo superiore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;
    return ris;
}