"use strict";

const RIGHE=6;
const COLONNE=7;
//const GREY = "rgb(127, 127, 127)";
let trn=1;

window.onload=function(){
    let _wrapper=document.getElementById("wrapper");
    let _nextPlayer=document.getElementById("nextPlayer");

    _nextPlayer.classList.add("pedina");
    _nextPlayer.style.backgroundColor="yellow";
    for(let i=0;i<RIGHE;i++)
    {
        for(let j=0;j<COLONNE;j++)
        {
            let _div=document.createElement("div");
            _div.classList.add("pedina");
            _wrapper.appendChild(_div);
            _div.id=`div-${i}-${j}`;
            if(i==RIGHE-1)
                _div.addEventListener("click", turno);
            //_div.style.backgroundColor=GREY;
        }
    }
    
    function turno(){
        let aus=this.id.split("-");
        let r=aus[1];
        let c=aus[2];
        //let _cellaBase=document.getElementById(`div-${RIGHE-(RIGHE-r-1)}-${c}`);
        //if(r==RIGHE-1 || _cellaBase.style.backgroundColor!=GREY)
        //{
            if(trn==1)
            {
                 this.style.backgroundColor=  _nextPlayer.style.backgroundColor;
                 _nextPlayer.style.backgroundColor="red";
                 trn=2;
                
            }
            else
            {
                this.style.backgroundColor=  _nextPlayer.style.backgroundColor;
                _nextPlayer.style.backgroundColor="yellow";
                trn=1;
                //this.removeEventListener("click",turno);
                //document.getElementById(`div-${r-1}-${c}`)
            }
            this.removeEventListener("click",turno);
            document.getElementById(`div-${r-1}-${c}`).addEventListener("click",turno);
            controlloVincita(r,c); 
        //}
        
    }

    function controlloVincita(i,j)
    {
        let cnt=1, cnt1=1;
        for(let k=1;k<COLONNE;k++)
        {
            let _cella=document.getElementById(`div-${i}-${k}`);
            let _cellaPrima=document.getElementById(`div-${i}-${k-1}`);
            if(_cella.style.backgroundColor==_cellaPrima.style.backgroundColor && _cella.style.backgroundColor=="yellow")
                cnt++;
            if(_cella.style.backgroundColor==_cellaPrima.style.backgroundColor && _cella.style.backgroundColor=="red")
                cnt1++;
        }
        if(cnt>=4)
            {
                alert("yellow ha vinto");
                rimuovi();
            }
        else if(cnt1>=4)
        {
            alert("red ha vinto");
            rimuovi();
        }
        else
        {
            cnt=1;
            cnt1=1;
        }

        cnt=1, cnt1=1;
        for(let k=1;k<RIGHE;k++)
        {
            let _cella=document.getElementById(`div-${k}-${j}`);
            let _cellaPrima=document.getElementById(`div-${k-1}-${j}`);
            if(_cella.style.backgroundColor==_cellaPrima.style.backgroundColor && _cella.style.backgroundColor=="yellow")
                cnt++;
            if(_cella.style.backgroundColor==_cellaPrima.style.backgroundColor && _cella.style.backgroundColor=="red")
                cnt1++;
        }
        if(cnt>=4)
            {
                alert("yellow ha vinto");
                rimuovi();
            }
        else if(cnt1>=4)
        {
            alert("red ha vinto");
            rimuovi();
        }
        else
        {
            cnt=1;
            cnt1=1;
        }
    }

    function rimuovi(){
        for(let i=0;i<RIGHE;i++)
        {
            for(let j=0;j<COLONNE;j++)
            {
                let _cella=document.getElementById(`div-${i}-${j}`);
                _cella.removeEventListener("click",turno);
            }
        }
    }
}