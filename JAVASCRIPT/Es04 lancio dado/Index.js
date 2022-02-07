"use strict"
let cont=[];
let _txtLanci;
let _pMessage;

function init(){
    //accesso agli elementi della pagina
    _txtLanci=document.getElementById("txtLanci");
    _pMessage=document.getElementsByName("msg");// restituisce vettore enumerativo
    // _pMessage=document.getElementsByTagName("p");

    //inizializzazione vettore
    for(let i=0;i<6;i++)
        cont.push(0);
    console.log(cont);
}

function genera(){
    let lanci =_txtLanci.value;
   
    for(let i=0;i<6;i++)
    {
        //azzera vettore
        cont[i]=0;
    }
        
    for(let i=0;i<lanci;i++)
    {
        let n= generaNumero(1,7);
        cont[n-1]++;
    }

    //stampa vettore
    for(let j=0;j<6;j++)
        _pMessage[j].innerHTML="La faccia "+ (j+1) +" è uscita "+ cont[j];
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;
    return ris;
}