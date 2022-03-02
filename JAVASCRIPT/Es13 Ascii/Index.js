"use strict"

let _txtNum;
let _txtAscii;
let _chkRis;
let _voci;

window.onload=function(){
    _txtNum=document.getElementsByName("txtNum");
    _txtAscii=document.getElementsByName("txtAscii");
    _chkRis=document.getElementsByName("chkRis");
    _voci=document.getElementById("voci");
    
    _voci.selectedIndex=-1;

}

function genera(){
    
    let valore=0;
    valore=_voci.selectedIndex;

    if(valore==0){
        for(let i=0;i<_txtNum.length;i++)
            _txtNum[i].value=generaNumero(65,91);
    }
    else if(valore==1){
        for(let i=0;i<_txtNum.length;i++)
            _txtNum[i].value=generaNumero(97,123);
    }
    else{
         for(let i=0;i<_txtNum.length;i++)
            _txtNum[i].value=generaNumero(48,58);
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}