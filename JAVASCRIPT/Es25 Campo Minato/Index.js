"use strict"

let dim=5;
let turno=0;
window.onload = function(){
    let _btn
    let _wrapper = document.getElementById("wrapper")
    for(let i = 0;i < dim;i++)
    {
        for(let j = 0;j < dim;j++)
        {
            _btn =  document.createElement("button");
            _wrapper.append(_btn)
            _btn.id = "button-" + i + "-" + j
            _btn.bomba = false
            _btn.addEventListener("click", controlla)
        }
    }

    for(let i = 0;i < dim;i++)
    {
        do{
            let r = generaNumero(0,5)
            let c = generaNumero(0,5)
            _btn = document.getElementById("button-" + r + "-" + c)
        }while(_btn.bomba==true)
        _btn.bomba=true;
    }

    function controlla() {
        let aus=this.id.split("-");
        let r=parseInt(aus[1]); // vettore di stringhe quindi devo fare  parse int
        let c=parseInt(aus[2]);
        let cont=0;
        if(this.bomba == true)
        {
           this.style.backgroundImage = "url(bomba.png)"
           alert("Hai perso")
           disabilita()
        }
        else
        {
            if(r>0)
            {
                if(document.getElementById("button-" + (r-1) + "-" + c).bomba==true)
                    cont++;
            }
            if(r<4)
            {
                if(document.getElementById("button-" + (r+1) + "-" + c).bomba==true)
                    cont++;
            }
            if(c>0)
            {
                if(document.getElementById("button-" + (r) + "-" + (c-1)).bomba==true)
                    cont++;
            }
            if(c<4)
            {
                if(document.getElementById("button-" + (r) + "-" + (c+1)).bomba==true)
                    cont++;
            }
            if(cont==0)
            {
                this.innerHTML="X";
            }
            else
            {
                this.innerHTML=cont;
                this.style.color="red";
                this.style.fontWeight="bold";
            }
            this.disabled=true;
            turno++;
            if(turno==20)
            {
                alert("Hai vinto");
                disabilita();
            }
        }
    }

    function disabilita(){
        for(let i = 0;i < dim;i++)
        {
            for(let j = 0;j < dim;j++)
            {
                let _button1 = document.getElementById("button-" + i + "-" + j)
                _button1.disabled = true
            }
        }
    }

}
function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}