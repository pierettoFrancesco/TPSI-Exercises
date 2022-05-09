"use strict";
//non posso mettere una funzione in window.onload quando viene richiamata dall'html

window.onload = function()
{
    let _wrapper = document.getElementById("wrapper");
	let _btnStop = document.getElementById("btnStop");
	let _btnRestart = document.getElementById("btnRestart");
	
	// leggo le dimensioni wrapper
	// alert(_wrapper.style.width)  // stringa vuota
	let wrapper_w = getComputedStyle(_wrapper).width; //perche' proprieta' css sono scritte in file .html o .css
	let wrapper_h = getComputedStyle(_wrapper).height;
	// alert(wrapper_w) devo togliere il 'px' finale
	wrapper_w = parseInt(wrapper_w.substr(0, wrapper_w.length - 2));
	wrapper_h = parseInt(wrapper_h.substr(0, wrapper_h.length - 2));
	
	let timerID =setInterval(visualizza,50);
	_btnRestart.disabled=true;
	
	_btnStop.addEventListener("click",function(){
		console.log("stop",timerID);
		_btnRestart.disabled=false;
		_btnStop.disabled=true;
		if(timerID)
		{
			clearInterval(timerID);
		}
	})
	
	_btnRestart.addEventListener("click",function(){
		
		_wrapper.innerHTML="";
		_btnRestart.disabled=true;
		_btnStop.disabled=false;
		timerID= setInterval(visualizza,50);
		console.log("restart",timerID);
	});

	
	function visualizza(){
		//ciclo for sbaglito perche' la funzione parte ogni 50 millisecondi
		let div= document.createElement("div");
		
		//genero e assegno dimensione
		let width=generaNumero(10,101);
		let height = generaNumero(10,101);
		div.style.width=width;
		div.style.height=height;

		//genero colore
		let red=generaNumero(0,256);
		let green=generaNumero(0,256);
		let blu=generaNumero(0,256);
		div.style.backgroundColor=`rgb(${red},${green},${blu})`;

		//genero posizione 
		let top=generaNumero(0,wrapper_h-height);
		let left=generaNumero(0,wrapper_w-width);
		div.style.top=top;
		div.style.left=left;
		div.style.position="absolute";

		_wrapper.appendChild(div);

	}
}


function generaNumero(min, max){
    let rnd = Math.floor((max - min ) * Math.random()) + min;   
    return rnd;
}