"use strict";


window.onload = function () {
    let _txtMatricola = document.getElementById("matricola");
    let _txtCognome = document.getElementById("cognome");
    let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
    let _lstRegione = document.getElementById("regione");
	let _chkLavoratore = document.getElementById("lavoratore");
    let _txtDescrizione = document.getElementById("descrizione");
		
	_txtMatricola.addEventListener("change", controllaMatricola)
	_txtCognome.addEventListener("change", controllaCognome)
	//_txtNome.addEventListener("change", controllaNome)
	//_lstRegione.addEventListener("change", controllaRegione)
	//_chkLavoratore.addEventListener("click", abilitaDescrizione)

	
	
	//document.querySelector("input[type=button]").addEventListener("click", validaForm)

	function controllaMatricola(){
	
		let cont=0;
		for(let i=0;i<12;i++)
		{
			if(_txtMatricola[i].value>='0' && _txtMatricola[i].value<='9')
				cont++
		}
		if(_txtMatricola.value==" " || cont!=12)
		{
			_txtMatricola.addClass("border-red");
		}
		else
			_txtMatricola.removeClass("border-red");
	}

	function controllaCognome(){

		let flag=true;
		let i=0;
		if(_txtCognome.value!=" ")
		{
			while(i<12 && flag==true)
			{
				if(_txtCognome[i].value>='a' && _txtCognome[i].value || _txtCognome[i].value>='A' && _txtCognome[i].value<='Z')
					flag=true;
				else
					flag=false;
				i++
			}
		}
		else
			flag=false;
		if(flag==false)
			_txtCognome.addClass("border-red");
		else
			_txtCognome.addClass("border-red");
	}
}



