"use strict";

const COLONNE=61;
const RIGHE=10;
const GRIGIO = "rgb(252, 252, 252)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";


window.onload=function()
{
	let jumpID
    var _wrapper = document.getElementById("wrapper");
	let pos=1

	let _txtPunti=document.getElementById("txtPunti")
	
	// creazione matrice gi gioco
    for (var i = 0; i < RIGHE; i++){
        for (var j = 0; j < COLONNE; j++)
        {
			let _div=document.createElement("div")

			_div.id=`div-${9-i}-${j}`

			_div.className="cella"

			_wrapper.appendChild(_div)
        }
	}
	
	let player1 = document.getElementById("div-0-30")

	player1.style.backgroundColor=BLU

	let cont=6

	let nOstacolo

	let spostaOstacoloId=setInterval(spostaOstacolo,400)

	function generaOstacolo(){
		nOstacolo=random(0,5)
		if(nOstacolo!=0){
			for(let i=1;i<nOstacolo+1;i++){
				let ostacolo1=document.getElementById(`div-${i}-0`)
				ostacolo1.style.backgroundColor=ROSSO
			}
		}
	}

	let punteggio=0

	function spostaOstacolo(){
		let lose=false
		cont++
		for(let i=1;i<6&&!lose;i++){
			for(let j=COLONNE-1;j>0&&!lose;j--){
				let ostacolo1=document.getElementById(`div-${i}-${j}`)
				let ostacolo2=document.getElementById(`div-${i}-${j-1}`)
				if((ostacolo2.style.backgroundColor==ROSSO&&ostacolo1.style.backgroundColor==BLU)||lose){
					//lose
					lose=true
				} else{
					if(ostacolo1.style.backgroundColor!=BLU)
					if(ostacolo2.style.backgroundColor!=BLU)
						ostacolo1.style.backgroundColor=ostacolo2.style.backgroundColor
					else
						ostacolo1.style.backgroundColor=GRIGIO
				}	
			}
		}
		//punteggio
		let p=document.getElementById(`div-${0}-${30}`)
		if(p.style.backgroundColor!=BLU)
		for(let i=1;i<5;i++){
			let ostacolo1=document.getElementById(`div-${i}-${30}`)
			if(ostacolo1.style.backgroundColor==ROSSO)
				punteggio++
		}
		_txtPunti.value=punteggio

		for(let i=1;i<6;i++){
			let ostacolo1=document.getElementById(`div-${i}-0`)
			ostacolo1.style.backgroundColor=GRIGIO
		}
		if(cont==7){
			generaOstacolo()
			cont=0
		}
		if(lose==true){
			alert("Hai perso")
			if(spostaOstacoloId) clearInterval(spostaOstacoloId)
			if(jumpID) clearTimeout(jumpID)
			_btnJump.disabled=true
		}
			
	}
	


	let _btnJump=document.getElementById("btnJump")
	_btnJump.addEventListener("click",function jump(){
		clearTimeout(jumpID)
		for(let i=0;i<6;i++){
			let player=document.getElementById(`div-${i}-30`)
			if(player.style.backgroundColor!=ROSSO)
				player.style.backgroundColor=GRIGIO
		}
		let player=document.getElementById("div-5-30")
		player.style.backgroundColor=BLU
		pos=5
		jumpID=setTimeout(spostaPlayer,2000)
	})

	function spostaPlayer(){
		for(let i=0;i<=6;i++){
			let player=document.getElementById(`div-${i}-30`)
			if(player.style.backgroundColor!=ROSSO)
				player.style.backgroundColor=GRIGIO
		}
		if(pos!=2){
		pos--
		let player=document.getElementById(`div-${pos}-30`)
		if(player.style.backgroundColor!=ROSSO){
			jumpID=setTimeout(spostaPlayer,200)
			player.style.backgroundColor=BLU
		}
		else{
			alert("Hai perso")
			if(spostaOstacoloId) clearInterval(spostaOstacoloId)
			if(jumpID) clearTimeout(jumpID)
			_btnJump.disabled=true
		}
		} else{
			let player=document.getElementById(`div-1-30`)
			player.style.backgroundColor=BLU
		}
	}
	
}

/**
In corrispondenza di ogni salto il giocatore ottiene un numero di punti pari all’altezza dell’ostacolo saltato. */

function random(a, b){
	return Math.floor((b-a)*Math.random()) +a;
	
}