"use strict"

const dim=3;
let cont=0;

window.onload=function(){

    let _table=document.getElementsByTagName("table")[0];
    let _ris=document.getElementById("divRisultato");

    for(let i=0;i<dim;i++)
    {
        let _tr=document.createElement("tr");
        for(let j=0;j<dim;j++)
        {
            let _td=document.createElement("td");
            let _img=document.createElement("img");
            //_img.classList.add("img");
            _img.id="img-"+i+"-"+j;
            _img.innerHTML="&nbsp";
            _tr.appendChild(_td);
            _td.appendChild(_img);
            _img.src="img/vuota.png";
            _img.addEventListener("click", visual);
            
        }
        _table.appendChild(_tr);
    }

    function visual(){
        let aus=this.id.split("-");
        let r=parseInt(aus[1]);
        let c=parseInt(aus[2]);

        if(cont%2==0)
        {
            this.src="img/croce.png";
            cont++;
        }
        else
        {
            this.src="img/cerchio.png";
            cont++;
        }
        this.removeEventListener("click",visual);
        controllaVincita(r,c);
        if(cont==9)
            _ris.innerHTML="PAREGGIO";
    }

    function controllaVincita(i,j){
        let cont = 0;
		let cont1 = 0;
		for(let k = 0;k < 3;k++)
		{
			let immagine = document.getElementById(`img-${k}-${j}`)
			if(immagine.src.includes("croce"))
			   cont++;
			else if(immagine.src.includes("cerchio"))
				cont1++;
		}
		if(cont == 3)
		   _ris.textContent = "Ha vinto il giocatore 1"
		else if(cont1 == 3)
		   _ris.textContent = "Ha vinto il giocatore 2"
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		for(let k = 0;k < 3;k++)
		{
			let immagine = document.getElementById(`img-${i}-${k}`)
			if(immagine.src.includes("croce"))
			   cont++;
			else if(immagine.src.includes("cerchio"))
			   cont1++;
		}
		if(cont == 3)
		   _ris.textContent = "Ha vinto il giocatore 1"
		else if(cont1 == 3)
		   _ris.textContent = "Ha vinto il giocatore 2"
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		for(let k = 0;k < 3;k++)
		{
			let immagine = document.getElementById(`img-${k}-${k}`)
			if(immagine.src.includes("croce"))
			   cont++;
			else if(immagine.src.includes("cerchio"))
			   cont1++;
		}
		if(cont == 3)
		   _ris.textContent = "Ha vinto il giocatore 1"
		else if(cont1 == 3)
		   _ris.textContent = "Ha vinto il giocatore 2"
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		for(let k = 0;k < 3;k++)
		{
			for(let m = 0;m < 3;m++)
			{
				if(k + m == 2)
				{
					let immagine = document.getElementById(`img-${k}-${m}`)
			        if(immagine.src.includes("croce"))
			           cont++;
			        else if(immagine.src.includes("cerchio"))
			           cont1++;
				}

			}
		}
		if(cont == 3)
		   _ris.textContent = "Ha vinto il giocatore 1"
		else if(cont1 == 3)
		   _ris.textContent = "Ha vinto il giocatore 2"
		else
	    {
			cont = 0;
			cont1 = 0;
		}
    }   
        
}
function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}