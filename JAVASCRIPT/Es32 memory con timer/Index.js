"use strict"
let vet =[];
let cella;
let value;
window.onload = function(){
    let _wrapper=document.getElementById("wrapper");
    let _select=document.getElementsByTagName("select")[0];
    let min=document.getElementById("minuti");
    let sec=document.getElementById("secondi");
    let cnt=0;

    _select.selectedIndex=-1;
    let opt5=document.getElementsByTagName("option")[1];
    opt5.disabled=true;
    _select.addEventListener("change",creazione);

    setInterval(orologio,1000);

    function orologio(){
        sec.innerHTML= parseInt(sec.innerHTML) +1;
        sec.innerHTML=pad(sec.innerHTML);
        if(sec.innerHTML == "60")
        {
            min.innerHTML= parseInt(min.innerHTML)+1;
            min.innerHTML=pad(min.innerHTML);
            sec.innerHTML= 0;
            sec.innerHTML=pad(sec.innerHTML);
        }
    }

    function pad(number) {
        return (number < 10 ? '0' : '') + number
        }
     
    function creazione(){
        _wrapper.innerHTML="";
        //let opt=document.getElementsByTagName("option") [_select.selectedIndex];
        value = this.value;
        if(value == "4")
            _wrapper.style.width =  "216px";
        else
            _wrapper.style.width = "324px";
        
        vet.length=value*value;
        
        for(let i=0;i<vet.length;i++)
            vet[i]=0;
        
        vet[0]=1;
        for(let i=1;i<vet.length;i++)
        {
            vet[i]=vet[i-1];
            if(i%2==0)
                vet[i]++;
                
        }
        
        for(let i=0; i < value;i++){
            for(let j=0;j< value;j++){
                let btn=document.createElement("button");
                let ns=generaNumero(0,vet.length);
                btn.innerHTML=vet[ns];
                vet.splice(ns,1);
                btn.id=`btn-${i}-${j}`;
                btn.addEventListener("click",gioca);
                _wrapper.appendChild(btn);
            }
        }
        
        function gioca(){
            if(cnt==0)
            {
                this.style.backgroundColor="red";
            }
            else if(cnt==1)
            {
                cella=this;
                let timerID=setInterval(visualizza,500);
            }
            cnt++;   
        }

         function visualizza(){
            cella.style.backgroundColor="red";
            for(let i=0;i< value;i++)
            {
                for(let j=0;j<value;j++)
                {
                    let cell=document.getElementById(`btn-${i}-${j}`);
                    cell.disabled=true;
                }
            }    
        }
    }

    

    
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;

    return ris;
}