"use strict"

let citta=[
	"Londra", "Liverpool", "Manchester", "Cambridge",
	"Amsterdam", "Rotterdam", "Maastricht",
	"Lisbona", "Oporto", "Braga",
	"Stoccolma", "Goteborg",
	"Kiev", "Leopoli", "Odessa",
	"Berna", "Lugano", "Zurigo", 
	"Madrid", "Barcellona"
]

let nazioni=[
	"Inghilterra", "Inghilterra", "Inghilterra", "Inghilterra", 
	"Olanda", "Olanda", "Olanda",
	"Portogallo", "Portogallo", "Portogallo",
	"Svezia", "Svezia",
	"Ucraina", "Ucraina", "Ucraina",
	"Svizzera", "Svizzera", "Svizzera",
	"Spagna", "Spagna"]

let aus=[], aus2=[], aus3=[];
let elencoUnivocoNazioni = [];
let _chkCitta;
let _txtCitta;
let _bandiera;
let _txtNazione;
let _img;
let _btnControlla;
let _cnt;
let cont=0, giuste=0;
let vitt=0;
let Vcont=[];

window.onload= function(){
	
	_chkCitta=document.getElementsByName("chkCitta");
	_txtCitta=document.getElementsByName("txtCitta");
	_bandiera=document.getElementById("bandiera");
	_txtNazione=document.getElementById("nazione");
	_img=document.getElementsByClassName("img");
	_btnControlla=document.getElementById("btncontrolla");
	_cnt=document.getElementById("cnt");

	let j=1;
	let k=0;

	for(let i=0;i<7;i++)
		Vcont[i]=0;
	elencoUnivocoNazioni[0]=nazioni[0];
	for(let i=1;i<nazioni.length;i++)
	{
		Vcont[k]++;
		if(nazioni[i]!=nazioni[i-1]){
			elencoUnivocoNazioni[j++]=nazioni[i];
			k++;
		}
	}
	Vcont[k]++;
	for(let i=0;i<elencoUnivocoNazioni.length;i++)
	{
		aus[i]=elencoUnivocoNazioni[i];
	}
	console.log(nazioni);
	console.log(citta);
	console.log(elencoUnivocoNazioni);
	console.log(Vcont);

	let pos=0;
	pos=generaNumero(0,elencoUnivocoNazioni.length);
	_txtNazione.innerHTML=elencoUnivocoNazioni[pos];
	_bandiera.src="img/"+_txtNazione.innerHTML+".png";

	for(let i=0;i<citta.length;i++)
	{
		aus2[i]=citta[i];
		aus3[i]=nazioni[i];
	}
	for(let i=0; i<citta.length; i++)
	{
		let pos=generaNumero(0,aus2.length);
		_txtCitta[i].value=aus2[pos];
		_txtCitta[i].masked=aus3[pos];
		aus2.splice(pos,1);
		aus3.splice(pos,1);
	}
}

function controlla(){
	giuste=0;
	cont++;
	_cnt.innerHTML=cont;
	for(let i=0;i<_txtCitta.length;i++)
	{
		if(_chkCitta[i].checked==true && _txtCitta[i].masked==_txtNazione.innerHTML)
		{
			_chkCitta[i].disabled=true;
			_txtCitta[i].disabled=true;
			_img[i].src="img/"+_txtNazione.innerHTML+".png";
			giuste++;
		}
		else if(_chkCitta[i].checked==true && _txtCitta[i].masked!=_txtNazione.innerHTML)
		{
			_chkCitta[i].checked=false;
		}
	}
	let indice=aus.indexOf(_txtNazione.innerHTML,0);
	console.log("indice "+indice);
	console.log("Vcont[indice] "+Vcont[indice]);
	console.log("giuste "+giuste);
	console.log(Vcont);
	/*let trovato=false
	for(let citta of _txtCitta)
	{
		if( citta.masked==nazione.innerHTML && citta.disabled==false)
			trovato=true
	} 
	if(!trovato)
	generare nazione*/
	if(giuste==Vcont[indice])
	{
		let posFin= elencoUnivocoNazioni.indexOf(_txtNazione.innerHTML,0);
		elencoUnivocoNazioni.splice(posFin,1);
		console.log(elencoUnivocoNazioni);
		let pos=generaNumero(0,elencoUnivocoNazioni.length);
		_txtNazione.innerHTML=elencoUnivocoNazioni[pos];
		_bandiera.src="img/"+_txtNazione.innerHTML+".png";
		giuste=0;
	}
	for(let i=0;i<_txtCitta.length;i++)
	{
		if(_txtCitta[i].disabled==true)
			vitt++;
	}
	if(vitt==_txtCitta.length){
		alert("HAI VINTO");
		_btnControlla.disabled=true;
	}
		
	vitt=0;
}

function generaNumero(a,b) {
    
    let ris=Math.floor((b-a)*Math.random())+a;
    return ris;
}

