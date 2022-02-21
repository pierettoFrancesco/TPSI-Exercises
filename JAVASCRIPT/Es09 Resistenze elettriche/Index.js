"use strict"

let _lstCifra1;
let _lstCifra2;
let _lstFattore;
let _lstTolleranza;
let _txtRisultato;
let colori=["Argento","Oro","Nero","Marrone","Rosso","Arancione","Giallo","Verde","Blu","Viola","Grigio","Bianco"];

window.onload = function() {
    _lstCifra1=document.getElementById("lstCifra1");
    _lstCifra2=document.getElementById("lstCifra2");
    _lstFattore=document.getElementById("lstFattore");
    _lstTolleranza=document.getElementById("lstTolleranza");
	_txtRisultato=document.getElementById("txtRisultato");

	// Carico prima e seconda cifra
    for(let i=2; i<colori.length; i++)
    {
        let html="<option value='" + (i-2) + "'>" + colori[i] + "</option>";
        _lstCifra1.innerHTML+=html;
        _lstCifra2.innerHTML+=html;
    }
    _lstCifra1.selectedIndex=-1;
    _lstCifra2.selectedIndex=-1;

	// Carico esponente del fattore moltiplicativo
    for(let i=0; i<colori.length-2; i++)
    {
        //let html="<option value='" + (i-2) + "'>" + colori[i] + "</option>";
        let html=`<option value='${(i-2)}'> ${colori[i]} </option>`;
        _lstFattore.innerHTML+=html;
    }
    _lstFattore.selectedIndex=-1;
	
	// Carico tolleranze
	let tolleranze=["±10 %","±5 %","","±1 %","±2 %","","","±0,5 %","±0,25 %","±0,1 %","",""];
    for(let i=0; i<colori.length; i++)
    {
		if(i != 2 && i != 5 && i != 6)
		{
			let html=`<option value='${tolleranze[i]}'> ${colori[i]} </option>`;
			_lstTolleranza.innerHTML+=html;
		}
    }
    _lstTolleranza.selectedIndex=-1;
}

function calcola() {
	let cifre=_lstCifra1.value+_lstCifra2.value;
	console.log("Cifre --> ", cifre);
	let fatmolt=Math.pow(10,_lstFattore.value);
	console.log("Fattore moltiplicativo --> ", fatmolt);
	console.log("Tolleranza --> ", _lstTolleranza.value);
	let resistenza= (cifre*fatmolt)+" ohm "+_lstTolleranza.value;
	_txtRisultato.innerHTML="Il risultato è <b>"+resistenza+"</b>";
}