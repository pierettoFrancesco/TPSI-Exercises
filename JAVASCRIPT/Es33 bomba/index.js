'use strict'
const DIM = 10;
const GRIGIO = "rgb(127, 127, 127)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";

var x;
var y;
let cnt=0;

window.onload=function(){
    let _wrapper= document.getElementById("wrapper");

    for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            let button=document.createElement("button");
            button.innerHTML="&nbsp";
            button.id=`btn-${i}-${j}`;
            button.classList.add("puls");
            button.style.backgroundColor=GRIGIO;
            button.addEventListener("click",visualMuro);
            _wrapper.appendChild(button);
        }
    }

    x=generaNumero(0,DIM);
    y=generaNumero(0,DIM);
    let _posBomba=document.getElementById(`btn-${x}-${y}`);
    _posBomba.style.backgroundImage="url(bomba.png)";
    
    let timerId=setInterval(visualBomba,150);

    function visualBomba(){
        cnt++;
        let oldX=x;
        let oldY=y;

        //step 1
        //_posBomba.style.backgroundImage="";
        //step 2
        let direzione=generaNumero(0,4);
        switch(direzione){
            case 0:
                if(x>0)
                    x--;
                break;
            case 1:
                if(x<9)
                     x++;
                break;
            case 2:
                if(y>0)
                    y--;
            break;
            case 3:
                if(y<9)
                    y++;
            break;
        }
        //step 3
        _posBomba=document.getElementById(`btn-${x}-${y}`);
        if(_posBomba.style.backgroundColor != BLU){
            let _oldBomba=document.getElementById(`btn-${oldX}-${oldY}`)
            _oldBomba.style.backgroundImage="";
            _posBomba.style.backgroundImage="url(bomba.png)";
            cnt=0;
        }
        else
        {
            x=oldX;
            y=oldY;
        }
        if(cnt==20)
        {
            alert("HAI VINTO");
            clearInterval(timerId);
            reset();
        }
            
            
    }

    function visualMuro(){
        //CASO 1 diventa blu
        if(this.style.backgroundImage!="")
        {
            alert("HAI PERSO");
            clearInterval(timerId);
            reset();
        }
        else if(this.style.backgroundColor== GRIGIO)
            this.style.backgroundColor=BLU;
        else if(this.style.backgroundColor== BLU)
            this.style.backgroundColor=GRIGIO;
       

    }

    function reset(){
        for(let i=0;i<DIM;i++)
        {
            for(let j=0;j<DIM;j++){
                let btn=document.getElementById(`btn-${i}-${j}`);
                //btn.removeEventListener("click",visualMuro);
                btn.disabled=true;
            }
        }
    }

}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}

