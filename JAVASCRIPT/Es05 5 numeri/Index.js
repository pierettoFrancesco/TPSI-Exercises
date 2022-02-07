"use strict"

let _nbr=document.getElementsByName("txtNum");
let _chkbox=document.getElementsByName("chkNum");
let cont=[];

function init(){

    cont[0]=generaNumero(0,6);
    for(let i=1;i<6;i++)
    {
        cont[i]=generaNumero(0,6);
        while()
    }
        
    console.log(cont);


}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}