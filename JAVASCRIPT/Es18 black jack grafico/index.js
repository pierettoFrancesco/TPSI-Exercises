"use strict";

let vet = []

window.onload=function(){
    let _btnG=document.getElementsByClassName("card")[0]
    let _cartaG=document.getElementsByClassName("card")[1]
    let _btnB=document.getElementsByClassName("card")[2]
    let _cartaB=document.getElementsByClassName("card")[3]
	let _puntiG = document.getElementsByTagName("span")[0]
	let _puntiB = document.getElementsByTagName("span")[1]	
    let _assoG=document.getElementsByClassName("msgAsso")[0]
    let _assoB=document.getElementsByClassName("msgAsso")[1]
    let _chkG=_assoG.children[0];
    let _chkB=_assoB.children[0];

    _puntiG.innerHTML=0;
    _puntiB.innerHTML=0;
    _assoG.style.display="none";
    _assoB.style.display="none";
    _btnG.style.backgroundImage="url('img/dorso.gif')";
    _btnB.style.backgroundImage="url('img/dorso.gif')";
    _btnB.style.opacity="0.5";
    _btnG.style.opacity="0.5";
    _btnB.addEventListener("mouseover",MouseHover1);
    _btnB.addEventListener("mouseout",MouseOut1);
    _btnG.addEventListener("mouseover",MouseHover2);
    _btnG.addEventListener("mouseout",MouseOut2);
    _btnG.addEventListener("click",mazzoG);
    _btnB.addEventListener("click",mazzoB);


    function mazzoG(){
        let seme=generaNumero(0,4);
        let num=generaNumero(1,14);
        let lett=97;
        lett+=seme;
        lett=String.fromCharCode(lett);
        console.log(seme);
        console.log("url('img/"+lett+num+".gif')");
        _cartaG.style.backgroundImage="url('img/"+lett+num+".gif')";
        if(num>=10)
        {
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+9;
            _assoG.style.display="none";
        }
        else if(num==1)
        {
            _assoG.style.display="inline-block";
        }
        else
        {
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+(num-1);
            _assoG.style.display="none";
        }
        if(_chkG.checked==true)
        {
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+10;
            _chkG.checked=false;
        }
        else
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+1;
        if(_puntiG.innerHTML>21)
        {
            alert("HAI SFORATO");   
            _btnB.removeEventListener("mouseover",MouseHover1);
            _btnB.removeEventListener("mouseout",MouseOut1);
            _btnG.removeEventListener("mouseover",MouseHover2);
            _btnG.removeEventListener("mouseout",MouseOut2);
            _btnG.removeEventListener("click",mazzoG);
            _btnB.removeEventListener("click",mazzoB); 
            _puntiG.innerHTML=0;
        }
           
        console.log(_puntiG.innerHTML);
    }

    function mazzoB(){
        _btnG.removeEventListener("mouseover",MouseHover2);
        _btnG.removeEventListener("mouseout",MouseOut2);
        _btnG.removeEventListener("click",mazzoG);
        _assoB.style.display="inline-block";
        let seme=generaNumero(0,4);
        let num=generaNumero(1,14);
        let lett=97;
        lett+=seme;
        lett=String.fromCharCode(lett);
        console.log(seme);
        console.log("url('img/"+lett+num+".gif')");
        _cartaB.style.backgroundImage="url('img/"+lett+num+".gif')";
        if(_puntiB.innerHTML<17)
        {
            if(num>10)
            {
                _puntiB.innerHTML=parseInt(_puntiG.innerHTML)+10;
                _assoB.style.display="none";
            }
            else if(num==1)
            {
                _assoB.style.display="inline-block";
                if(_chkB.checked==true)
                {
                    _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+11;
                    _chkB.checked=false;
                }
                else
                    _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+1;
            }
            else
            {
                _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+num;
                _assoB.style.display="none";
            }

        }
        else if(_puntiB.innerHTML>21)
            alert("Il banco ha perso");
        else if(_puntiB.innerHTML==21)
            alert("Il banco ha vinto");
        else{
            if((21-_puntiG.innerHTML)<(21-_puntiB.innerHTML))
                alert("Il giocatore ha vinto");
            else
                alert("Il banco ha vinto");
        }
    }
    

    function MouseHover1(){
        _btnB.style.opacity="1";
    }
    function MouseHover2(){
        _btnG.style.opacity="1";
    }
    function MouseOut1(){
        _btnB.style.opacity="0.5";
    }
    function MouseOut2(){
        _btnG.style.opacity="0.5";
    }
    /*_btnB.addEventListener("mouseover", function() { _btnB.style.opacity = "100%"; });
    _btnB.addEventListener("mouseout", function() { _btnB.style.opacity = "50%"; });
    _btnG.addEventListener("mouseover", function() { _btnG.style.opacity = "100%"; });
    _btnG.addEventListener("mouseout", function() { _btnG.style.opacity = "50%"; });*/

    
}
function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a;
}

