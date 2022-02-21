"use strict";

const nomi =
        ["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti", 
		 "Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];
const MAX_TENTATIVI=5;
let parolaSegreta;
let _txtParola;
let _txtLettera;
let _img;
let _button;
let cont=0;

window.onload=function() {
	let pos=generaNumero(0, nomi.length);
	parolaSegreta=nomi[pos].toUpperCase();
	console.log(parolaSegreta);
	
	_txtParola=document.getElementById("txtParola");
	_txtLettera=document.getElementById("txtLettera");
	_img=document.getElementsByTagName("img")[0]; // mi interessa solo cella 0;
	_button=document.getElementsByTagName("button")[0];

	// LETTER SPACING IN JS
	_txtParola.style.letterSpacing="10px";

	for(let i=0; i<parolaSegreta.length; i++)
	{
		_txtParola.value+="*";
	}
}

function elabora() {
	
	let trovato = false;
	let carattere=_txtLettera.value.toUpperCase();
	let aus=_txtParola.value;
	_txtParola.value="";
	for(let i=0; i<parolaSegreta.length; i++)
	{
		if(parolaSegreta[i] == carattere)
		{
			// Soluzione non percorribile perchè le stringhe sono invariabili
			//_txtParola.value[i]=carattere;
			_txtParola.value+=carattere;
			trovato=true;
		}
		else
			_txtParola.value+=aus[i];
	}
	if(!trovato)
		{
			cont++;
			_img.src=`img/Fig${cont}.png`;
			if(cont==MAX_TENTATIVI)
			{
				_button.disabled=true;
				alert("HAI PERSO");
			}		
		}
		else
		{
			if(!_txtParola.value.includes("*"))
				alert("Hai vinto");
		}
}

function generaNumero(a, b){
	return Math.floor((b-a)*Math.random()) + a;
}