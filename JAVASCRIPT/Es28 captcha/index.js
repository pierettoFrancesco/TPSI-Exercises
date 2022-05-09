"use strict"

var matrice = [
				["0", "1", "2", "3", "4", "5"],   
				["6", "7", "8", "9", "A", "B"], 
				["C", "D", "E", "F", "G", "H"], 
				["I", "J", "K", "L", "M", "N"],
				["O", "P", "Q", "R", "S", "T"],
				["U", "V", "W", "X", "Y", "Z"]   ];


// vettori dove salvare i 5 numeri generati 
var nSegreti = new Array(5);       

window.onload = function(){
	
	let _txtUser = document.getElementById("txtUser");
	let _txtPwd = document.getElementById("txtPwd");
	let _txtCaptcha = document.getElementById("txtCaptcha");
	let _divsCaptcha =  document.getElementsByClassName("captcha");
	
	let _btnControllaCaptcha = document.getElementById("btnControllaCaptcha")
	let _btnGeneraCaptcha = document.getElementById("btnGeneraCaptcha")
	let _btnInvia = document.getElementById("btnInvia")
	let _img=document.getElementById("imgOk");

	generaCaptcha();
	_txtUser.addEventListener("change",user);
	_txtPwd.addEventListener("change",password);
	_btnGeneraCaptcha.addEventListener("click",generaCaptcha);
	_btnControllaCaptcha.addEventListener("click",nonSonoUnRobot);
	_btnInvia.addEventListener("click",finale);

	_btnControllaCaptcha.disabled=false;
	_btnGeneraCaptcha.disabled=false;


	function finale() {
		if(_img.src==`img/ok.png` && _txtUser.style.borderColor!="red" && _txtPwd.style.borderColor!="red")
			window.location.href = "pagina2.html"
	}

	function nonSonoUnRobot(){
		let cnt=0;
		for(let i=0;i<_divsCaptcha.length;i++){
			let aus=_divsCaptcha[i].id.split("-");
			let r=parseInt(aus[1]);
			let c=parseInt(aus[2]);
			if(matrice[c][r] == _txtCaptcha.value.substr(i,1))
				cnt++;
		}
		
		if(cnt==5)
			_img.src="img/ok.png";
		else
			_img.src="img/nok.png";
		_btnControllaCaptcha.disabled=true;
		_btnGeneraCaptcha.disabled=true;
	}

	function generaCaptcha() {
		for(let i = 0; i < 5; i++)
		{
			let riga = generaNumero(0, 6);
			let colonna = generaNumero(0, 6);
			_divsCaptcha[i].style.backgroundPosition = -50*riga + "px " + -50*colonna + "px";
			_divsCaptcha[i].id=`coor-${riga}-${colonna}`;
		}	
	}

	function user(){
		if(_txtUser.value.length < 8)
			_txtUser.classList.add("bordoRosso");
		else
			_txtUser.classList.remove("bordoRosso");
	}

	function password(){
		let cntMas=0, cntMin=0, cntNum=0;
		if(_txtPwd.value.length < 8)
			_txtPwd.classList.add("bordoRosso");
		else
			_txtPwd.classList.remove("bordoRosso");

		for(let i=0;i<_txtPwd.value.length;i++){
			let car=_txtPwd.value.charCodeAt(i);
			if(car >=97 && car<=122)
				cntMin++;
			if(car>=65 && car<=90)
				cntMas++;
			if(car>=48 && car<=57)
				cntNum++;
		}
		if(cntMas==0 || cntMin==0 || cntNum==0)
			_txtPwd.classList.add("bordoRosso");
		else
			_txtPwd.classList.remove("bordoRosso");
	}


}


function generaNumero(min,max){
    let rnd = Math.floor((max - min) * Math.random()) + min;
    return rnd;
}