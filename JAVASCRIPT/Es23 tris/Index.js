"use strict"

const dim=3;
let i;
let j;

window.onload=function(){

    let _table=document.getElementsByTagName("table")[0];
    let _ris=document.getElementById("divRisultato");
    let cont=0;

    for(i=0;i<dim;i++)
    {
        let _tr=document.createElement("tr");
        for(j=0;j<dim;j++)
        {
            let _td=document.createElement("td");
            let _img=document.createElement("img");
            _img.classList.add("img");
            _img.id="img-"+i+"-"+j;
            _img.innerHTML="&nbsp";
            _td.appendChild(_img);
            _img.addEventListener("click", imgClick);
            _tr.appendChild(_td);
            _img.src="img/vuota.png";
        }
        _table.appendChild(_tr);
    }

    function imgClick(){
        
        let aus = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        if(cont%2==0)
        {
            this.src="img/croce.png";
            cont++;
            aus[i,j]=1;
        }
        else
        {
            this.src="img/cerchio.png";
            cont++;
            aus[i,j]=2;
        }
        this.disabled=true;
        if(aus[0,0]==1 && aus[0,1]==1 && aus[0,2]==1)
            _ris.innerHTML="giocatore 1";
        else if(aus[0,0]==2 && aus[0,1]==2 && aus[0,2]==2)
            _ris.innerHTML="giocatore 2";
        
        if(cont==9){
            _ris.innerHTML="PAREGGIO";
        }
    }
}
function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}