const DIM = 10;
let livello = 0;

window.onload= function(){
	let _wrapper = document.getElementById("wrapper");
	
    for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            let div=document.createElement("div");
            div.classList.add("cella");
            div.id=`div-${i}-${j}`;    
            _wrapper.appendChild(div);
        }
    }

    let timerID =setInterval(visualizza,500);
	
    function visualizza(){
        reset();
        //struttura a cornice
        for(let i=livello;i<DIM-livello;i++){
            
            let cella1=document.getElementById(`div-${livello}-${i}`);
            let cella2=document.getElementById(`div-${i}-${livello}`);
            let cella3=document.getElementById(`div-${DIM-1-livello}-${i}`);
            let cella4=document.getElementById(`div-${i}-${DIM-1-livello}`);
    
            cella1.style.backgroundColor="red";
            cella2.style.backgroundColor="red";
            cella3.style.backgroundColor="red";
            cella4.style.backgroundColor="red";
        }
        livello++;
        if(livello==5) //perche' arriva al centro
        {
            clearInterval(timerID);
            timerID=setInterval(visualizza,500);
            livello=0;
        }
    }

    function reset(){
        for(let i=0;i<DIM;i++){
            for(let j=0;j<DIM;j++){
                let cella=document.getElementById(`div-${i}-${j}`);
                cella.style.backgroundColor="#CCC";
            }
        }
    }
}	





function generaNumero(min, max){
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;   
    return rnd;
}