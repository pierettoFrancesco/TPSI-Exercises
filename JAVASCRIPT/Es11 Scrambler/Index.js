"use strict"

let _txt1;
let _txt2;
let vet1= [];
let vet2= [];
let aus=[];

window.onload=function(){

    _txt1=this.document.getElementById("txt1");
    _txt2=this.document.getElementById("txt2");

    for(let i=65;i<90;i++)
    {
        let char =String.fromCharCode(i);
        vet1[i-65]=char;
        aus[i-65]=char;
    }
    this.console.log(vet1);
    this.console.log(aus);

    for(let i=0;i<vet1.length;i++){
        let pos=generaNumero(0,aus.length);
        vet2[i]=aus[pos];
        aus.splice(pos,1);
    }
    this.console.log(vet2);
}

function scrambler(){
    _txt2.value="";
    for(let i=0;i<_txt1.value.length;i++)
    {
        _txt2.value+=_txt1
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}
