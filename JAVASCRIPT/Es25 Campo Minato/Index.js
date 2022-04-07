"use strict"

let dim=5;
window.onload = function(){
    let _button
    let _wrapper = document.getElementById("wrapper")
    for(let i = 0;i < dim;i++)
    {
        for(let j = 0;j < dim;j++)
        {
            _button =  document.createElement("button");
            _wrapper.append(_button)
            _button.id = "button-" + i + "-" + j
            _button.bomba = false
            _button.addEventListener("click", controlla)
        }
    }

    for(let i = 0;i < dim;i++)
    {
        let r = generaNumero(0,5)
        let c = generaNumero(0,5)
        _button = document.getElementById("button-" + r + "-" + c)
        if(_button.bomba == false)
            _button.bomba = true
        else
            i--
    }

    function controlla() {
        let aus=this.id.split("-");
        let r=aus[1];
        let c=aus[2];
        if(this.bomba == true)
        {
           this.style.backgroundImage = "url(bomba.png)"
           alert("Hai perso")
           disabilita()
        }
        else
        {
            
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