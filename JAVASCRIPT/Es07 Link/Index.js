"use strict"

let _lstSiti;

window.onload= function(){
    _lstSiti=document.getElementById("lstSiti");
    _lstSiti.selectedIndex=-1;
}

function visualizza(){
    let url=_lstSiti.value;
    //window.open(url, "_blank");
    //window.open(url,"_self");
    window.location.href=url;
}


function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}