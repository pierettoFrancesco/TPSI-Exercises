"use strict"

const dim=3;
let cont;

window.onload=function(){

    let _table=document.getElementsByTagName("table")[0];
    let _ris=document.getElementById("divRisultato");
    cont=0;

    for(let i=0;i<dim;i++)
    {
        let _tr=document.createElement("tr");
        for(let j=0;j<dim;j++)
        {
            let _td=document.createElement("td");
            let _img=document.createElement("img");
            _img.classList.add("img");
            _img.id="img-"+i+"-"+j;
            _img.innerHTML="&nbsp";
            _td.appendChild(_img);
            _img.src="img/vuota.png";
            _img.addEventListener("click", imgClick);
            _tr.appendChild(_td);
            console.log(_img);
        }
        _table.appendChild(_tr);
    }

    function imgClick(){
        
        if(cont%2==0)
        {
            if(this.src=="img/vuota.png")
            {
                this.src="img/croce.png";
                cont++;
            }
        }
        else
        {
            if(this.src=="img/vuota.png")
            {
                this.src="img/cerchio.png";
                cont++;
            }
        }
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