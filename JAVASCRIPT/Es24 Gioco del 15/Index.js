"use strict"

const dim=4
window.onload=function(){

    let _wrapper=document.getElementById("wrapper");
    let vet=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    console.log(vet);

    for(let i=0;i<dim;i++)
    {
        for(let j=0;j<dim;j++)
        {
            let _div=document.createElement("div");
            _div.classList.add("pedina");
            _wrapper.appendChild(_div);
            _div.id=`div-${i}-${j}`;
            if(i!=3 || j!=3)
            {
                _div.innerHTML=generaVal();
                _div.style.backgroundColor="blue";
            }
            _div.addEventListener("click",spostaPedina);
        }
    }

    function spostaPedina(){
        let aus=this.id.split("-");
        let r=parseInt(aus[1]);
        let c=parseInt(aus[2]);
        //sopra
        if(! r==0)
        {
            let _cella=document.getElementById(`div-${r-1}-${c}`)
            if(_cella.innerHTML=="")
                swap(this,_cella);
            
        }
        //sinistra
        if(! c==0)
        {
            let _cella=document.getElementById(`div-${r}-${c-1}`)
            if(_cella.innerHTML=="")
                swap(this,_cella);
            
        }
        //sotto
        if(r<3)
        {
            let _cella=document.getElementById(`div-${r+1}-${c}`)
            if(_cella.innerHTML=="")
                swap(this,_cella);
            
        }
        //destra
        if(c<3)
        {
            let _cella=document.getElementById(`div-${r}-${c+1}`)
            if(_cella.innerHTML=="")
                swap(this,_cella);
            
        }
        
        function swap(_cella1,_cella2){
            _cella2.innerHTML=_cella1.innerHTML;
            _cella1.style.backgroundColor="#CCC";
            _cella2.style.backgroundColor="blue";
            _cella1.innerHTML="";

            controllaVincita();
        }

        function controllaVincita(){
            let cnt=1;
            for(let i=0;i<dim;i++)
            {
                for(let j=0;j<dim;j++)
                {
                    if(i!=3 || j!=3)
                    {
                        let _cella=document.getElementById(`div-${i}-${j}`)
                        if(cnt==_cella.innerHTML)
                            cnt++;
                    }
                    
                }
            }
            if(cnt==15)
                    alert("Hai vinto");
        }
        
    }

    function generaVal(){
        let pos=generaNumero(0,vet.length);
        let val=vet[pos];
        vet.splice(pos,1);

        return val;
    }
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;

    return ris;
}

