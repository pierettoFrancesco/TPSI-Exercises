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
    _cartaB.style.visibility="hidden";
    _cartaG.style.visibility="hidden";
    _btnG.style.backgroundImage="url('img/dorso.gif')";
    _btnB.style.backgroundImage="url('img/dorso.gif')";
    _btnB.style.opacity="0.5";
    _btnG.style.opacity="0.5";
    _btnB.addEventListener("mouseover",MouseHover);        
    _btnB.addEventListener("mouseout",MouseOut);
    _btnG.addEventListener("mouseover",MouseHover);
    _btnG.addEventListener("mouseout",MouseOut);
    /*_btnB.addEventListener("mouseover", function() { _btnB.style.opacity = "100%"; });
     _btnB.addEventListener("mouseout", function() { _btnB.style.opacity = "50%"; });
     _btnG.addEventListener("mouseover", function() { _btnG.style.opacity = "100%"; });
     _btnG.addEventListener("mouseout", function() { _btnG.style.opacity = "50%"; });*/
    _btnG.addEventListener("click",mazzoG);
    _btnB.addEventListener("click",mazzoB);
    _chkG.addEventListener("click",checkG);
    _chkB.addEventListener("click",checkB);


    function mazzoG(){
        _cartaG.style.visibility="visible";
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
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+10;
            _assoG.style.display="none";
        }
        else if(num==1)
        {
            _assoG.style.display="inline-block";
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+1;
        }
        else
        {
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+num;
            _assoG.style.display="none";
        }
        /*if(_chkG.checked==true)
        {
            _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+10;
            _chkG.checked=false;
        }*/
        if(_puntiG.innerHTML>21)
        {
            alert("HAI SFORATO");   
            _btnB.removeEventListener("mouseover",MouseHover);
            _btnB.removeEventListener("mouseout",MouseOut);
            _btnG.removeEventListener("mouseover",MouseHover);
            _btnG.removeEventListener("mouseout",MouseOut);
            _btnG.removeEventListener("click",mazzoG);
            _btnB.removeEventListener("click",mazzoB); 
        }
           
        console.log(_puntiG.innerHTML);
    }

    function mazzoB(){
        _cartaB.style.visibility="visible";
         _assoB.style.display="none";
        _btnG.removeEventListener("mouseover",MouseHover);
        _btnG.removeEventListener("mouseout",MouseOut);
        _btnG.removeEventListener("click",mazzoG);
        _assoB.style.display="none";
        let seme=generaNumero(0,4);
        let num=generaNumero(1,14);
        let lett=97;
        lett+=seme;
        lett=String.fromCharCode(lett);
        console.log(seme);
        console.log("url('img/"+lett+num+".gif')");
        _cartaB.style.backgroundImage="url('img/"+lett+num+".gif')";
        if(_puntiB.innerHTML<=17)
        {
            if(num>=10)
            {
                _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+10;
               
            }
            else if(num==1)
            {
                _assoB.style.display="inline-block";
                _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+1;
            }
            else
            {
                _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+num;
                
            }
            /*if(_chkB.checked==true)
            {
                _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+10;
                _chkB.checked=false;
            }*/
             

        }
        if(_puntiB.innerHTML > 17)
        {
            if(_puntiB.innerHTML == 21 || _puntiB.innerHTML > 21)
            {
                if(_puntiB.innerHTML > 21)
                    alert("Ha vinto il giocatore, il banco ha sforato");
                else
                    alert("Ha vinto il banco, ha fatto 21 punti");
            }
            else if(_puntiB.innerHTML > _puntiG.innerHTML)
                alert("Ha vinto il banco, ha fatto piu' punti del giocatore");
            else if(_puntiB.innerHTML < _puntiG.innerHTML)
                alert("Ha vinto il giocatore, ha fatto piu' punti del banco");
        }
    }
    function MouseHover(){
        this.style.opacity="1";
    }
    function MouseOut(){
        this.style.opacity="0.5";
    }
    
    function checkG(){
        _puntiG.innerHTML=parseInt(_puntiG.innerHTML)+10;
        _assoG.style.display="none";
    }

    function checkB(){
        _puntiB.innerHTML=parseInt(_puntiB.innerHTML)+10;
        _assoB.style.display="none";
    }
    
    
}
function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a;
}

