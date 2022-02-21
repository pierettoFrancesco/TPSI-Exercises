"use strict"

let _lstCifra1;
let _lstCifra2;
let _lstFattore;
let _lstTolleranza;
let colori=["Argento","Oro","Nero","Marrone","Rosso","Arancio","Giallo","Verde","Blu","Viola","Grigio","Bianco"];
   

window.onload= function(){
    _lstCifra1=document.getElementById("lstCifra1");
    _lstCifra2=document.getElementById("lstCifra2");
    _lstFattore=document.getElementById("lstFattore");
    _lstTolleranza=document.getElementById("lstTolleranza");

    for(let i=2;i<colori,length;i++){
        let html="<option value='"+ (i-2) + "'>"+colori[i]+"</option>";
        _lstCifra1.innerHTML+=html;
        _lstCifra2.innerHTML+=html;
    }
    _lstCifra1.selectedIndex=-1;
    _lstCifra2.selectedIndex=-1;

    for(let i=0;i<colori.length-2;)
    {
        //let html="<option value='"+ (i-2) + "'>"+colori[i]+"</option>";
        let html=`<option value='${(i-2)}'>${colori[i]}</option>`;
        _lstFattore.innerHTML+=html;
    }
    _lstFattore.selectedIndex=-1;

    let tolleranze=[]

}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;

    return ris;
}