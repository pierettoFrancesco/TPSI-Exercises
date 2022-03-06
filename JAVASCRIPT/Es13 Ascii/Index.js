"use strict"

let _txtNum;
let _txtAscii;
let _chkRis;
let _voci;
let _btnControlla;

window.onload=function(){
    _txtNum=document.getElementsByName("txtNum");
    _txtAscii=document.getElementsByName("txtAscii");
    _chkRis=document.getElementsByName("chkRis");
    _voci=document.getElementById("voci");
    _btnControlla=document.getElementById("btnControlla");
    
    _voci.selectedIndex=-1;

    for(let i=0;i<_txtAscii.length;i++){
        _txtAscii[i].maxLength=1;
    }

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

    for(let i=0;i<_txtAscii.length;i++){
        _txtAscii[i].value="";
        _chkRis[i].checked=false;
    }
    _btnControlla.disabled=true;

}

function check(){
    
   let cont=0;
   for(let i=0;i<_txtAscii.length;i++){
       if(_txtAscii[i].value!="")
            cont++;
   }
   if(cont==_txtAscii.length)
        _btnControlla.disabled=false;
    else
        _btnControlla.disabled=true;
   
}

function controllaN(){
    let cont=0;

    for(let i=0;i<_txtAscii.length;i++){
        if(String.fromCharCode(_txtNum[i].value)==_txtAscii[i].value){
            _chkRis[i].checked=true;
            cont++;
        }
    }
    if(cont==_txtAscii.length)
        alert("Bravissimo");
    else if(cont==0)
        alert("Risultato pessimo");
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}