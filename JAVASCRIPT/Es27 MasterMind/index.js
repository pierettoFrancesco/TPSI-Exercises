"use strict"

const GRIGIO = "rgb(120, 120, 120)"
const ROSSO = "rgb(255, 0, 0)"
const GIALLO = "rgb(255, 255, 0)"
const VERDE = "rgb(0, 220, 0)"
const BLU = "rgb(0, 0, 220)"
const VIOLA = "rgb(135, 38, 165)"

const BIANCO = "rgb(236, 236, 236)"
const NERO = "rgb(0, 0, 0)"

let numSegreti = new Array(4); //sintassi importante
let numUtente = new Array(4);
let trn=1;
let j=0;

let rigaCorrente = 0;
	
window.onload=function(){

	let _table=document.getElementsByTagName("table")[0];
	let _tr=document.createElement("tr");
	let _td=document.createElement("td");
	let _btn;

	_table.appendChild(_tr);
	_tr.appendChild(_td);
	_td.innerHTML=j;
	_td=document.createElement("td");
	_tr.appendChild(_td);
	for(let i=0;i<4;i++){
		let _img=document.createElement("img");
		_img.id=`img-${j}-${i}`;
		_td.appendChild(_img);
		_img.classList.add("pedina");
		_img.style.backgroundColor="rgb(120, 120, 120)";
		_img.addEventListener("click",turno);
		if(i==3)
		{
			_btn=document.createElement("button");
			_td.appendChild(_btn);
			_btn.innerHTML="INVIA";
			_btn.addEventListener("click",controllaVincita);
		}
	}
	
	_td=document.createElement("td");
	_tr.appendChild(_td)
	for(let i=0;i<4;i++){
		let _img=document.createElement("img");
		_img.id=`ris-${j}-${i}`;
		_td.appendChild(_img);
		_img.classList.add("pedina");
		_img.style.backgroundColor="rgb(236, 236, 236)";
	}

	for(let i=0;i<numSegreti.length;i++)
	{
		let ns=generaNumero(0,5);
		numSegreti[i]=trovaColore(ns);
	}
	console.log(numSegreti);

	function turno(){
		let aus=this.id.split("-");
		let r=parseInt(aus[1]);
		let c=parseInt(aus[2]);

		switch(trn){
			case 0: 
				this.style.backgroundColor="rgb(120, 120, 120)";
				trn++;
			break;
			case 1:
				this.style.backgroundColor="rgb(255, 0, 0)";
				trn++;
			break;
			case 2:
				this.style.backgroundColor="rgb(255, 255, 0)";
				trn++;
			break;
			case 3: 
				this.style.backgroundColor="rgb(0, 220, 0)";
				trn++;
			break;
			case 4:
				this.style.backgroundColor="rgb(0, 0, 220)";
				trn++;
			break;
			case 5: 
				this.style.backgroundColor="rgb(135, 38, 165)";
				trn=0;
			break;
		}
	}

	function controllaVincita(){
		let cnt=0
		for(let i=0;i<4;i++)
		{
			document.getElementById(`img-${j}-${i}`).removeEventListener("click",turno);
		}
		_btn.removeEventListener("click",controllaVincita);
		_btn.style.display="none";

		for(let i=0;i<4;i++)
		{
			if(document.getElementById(`img-${j}-${i}`).style.backgroundColor==numSegreti[i])
			{
				document.getElementById(`ris-${j}-${i}`).style.backgroundColor="rgb(0, 0, 0)";
				cnt++;
			}
			else
				document.getElementById(`ris-${j}-${i}`).style.backgroundColor="rgb(255, 255, 255)";
		}
		j++

		if(cnt==4)
		{
			alert("HAI VINTO");
		}
		else
		{
			//creazione nuova riga
			_td=document.createElement("td")
			_tr=document.createElement("tr");
			_table.appendChild(_tr);
			_tr.appendChild(_td);
			_td.innerHTML=j;
			_td=document.createElement("td");
			_tr.appendChild(_td);
			for(let i=0;i<4;i++){
				let _img=document.createElement("img");
				_img.id=`img-${j}-${i}`;
				_td.appendChild(_img);
				_img.classList.add("pedina");
				_img.style.backgroundColor="rgb(120, 120, 120)";
				_img.addEventListener("click",turno);
				if(i==3)
				{
					_btn=document.createElement("button");
					_td.appendChild(_btn);
					_btn.innerHTML="INVIA";
					_btn.addEventListener("click",controllaVincita);
				}
			}
	
			_td=document.createElement("td");
			_tr.appendChild(_td)
			for(let i=0;i<4;i++){
				let _img=document.createElement("img");
				_img.id=`ris-${j}-${i}`;
				_td.appendChild(_img);
				_img.classList.add("pedina");
				_img.style.backgroundColor="rgb(236, 236, 236)";
			}
		}
	}
}			



function trovaColore(n){
	let colore =""
	switch (n){
		case 0: colore=GRIGIO; break;
		case 1: colore=ROSSO; break;
		case 2: colore=GIALLO; break;
		case 3: colore=VERDE; break;
		case 4: colore=BLU; break;
		case 5: colore=VIOLA; break;
	}
	return colore;
}

function generaNumero(min, max){
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;   
    return rnd;
}
