"use strict";


window.onload = function () {
    let _txtMatricola = document.getElementById("matricola");
    let _txtCognome = document.getElementById("cognome");
    let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
    let _lstRegione = document.getElementById("regione");
	let _chkLavoratore = document.getElementById("lavoratore");
    let _txtDescrizione = document.getElementById("descrizione");
	let _errori= document.getElementById("errori");
	
	//eventi textbox sono change e input
	_txtMatricola.addEventListener("change", controllaMatricola)
	_txtCognome.addEventListener("change", controllaCognome)
	_txtNome.addEventListener("change", controllaNome)
	_lstRegione.addEventListener("change", controllaRegione)
	_chkLavoratore.addEventListener("click", abilitaDescrizione)

	_lstRegione.selectedIndex=-1;

	document.querySelector("input[type=button]").addEventListener("click", validaForm)

	function controllaMatricola(){
		if(isDigit(_txtMatricola.value)==false || _txtMatricola.value.length != 12)
		{
			_txtMatricola.classList.add("red-border");
			return false;
		}
		else
		{
			_txtMatricola.classList.remove("red-border");
			return true;
		}
			
		
	}

	function controllaCognome(){
		if(_txtCognome.value== "" || isLetter(_txtCognome.value)==false)
		{
			_txtCognome.classList.add("red-border");
			return false;
		}
		else
		{
			_txtCognome.classList.remove("red-border");
			return true;
		}
			
	}

	function controllaNome(){
		if(_txtNome.value== "" || isLetter(_txtNome.value)==false)
		{
			_txtNome.classList.add("red-border");
			return false;
		}
		else
		{
			_txtNome.classList.remove("red-border");
			return true;
		}
			
	}

	function controllaRegione(){
		if(_lstRegione.value!= "")
			return true;
		else
			return false;
	}

	function abilitaDescrizione(){
		if(_chkLavoratore.checked==true)
		{
			_txtDescrizione.disabled=false;
			return true;
		}	
		else
		{
			_txtDescrizione.disabled=true;
			return false;
		}		
	}

	function validaForm(){
		let genere =false;
		let msg="";
		for(let i=0;i<_optGenere.length;i++)
		{
			if(_optGenere[i].checked==true)
				genere=true;
		}
		let aus=true;
		if(abilitaDescrizione())
		{
			if(_txtDescrizione.value=="")
				aus=false;
		}

		if(!controllaMatricola())
			msg+="la matricola inserita non è corretta<br>";
		if(!controllaCognome())
			msg+="Il cognome inserito non è corretto<br>";
		if(!controllaNome())
			msg+="Il nome inserito non è corretto<br>";
		if(!genere)
			msg+="Non hai selezionato il genere<br>";
		if(controllaRegione()==false)
			msg+="Non hai selezionato nessuna regione<br>";
		if(aus==false)
			msg+="Non hai scritto niente nella descrizione del lavoro";
		if(msg=="")
			alert("Non hai fatto errori");
		else
			_errori.innerHTML = msg;

	}
}



