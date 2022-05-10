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
	
}	

function visualizza(){
    reset();
    for(let i=0;i<DIM-livello;i++){
        let cella1=document.getElementById(`div-${livello}-${i}`);
        let cella2=document.getElementById(`div-${i}-${livello}`);

        cella1.style.backgroundColor="red";
        cella2.style.backgroundColor="red";
    }
    livello++;
}

function reset(){
    for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            let cella1=document.getElementById(`div-${livello}-${i}`);
            cella1.classList.add("cella");
        }
    }
}

function generaNumero(min, max){
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;   
    return rnd;
}