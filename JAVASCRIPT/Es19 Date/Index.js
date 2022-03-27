"use strict"

window.onload=function(){
    let _txtPartecipanti=this.document.getElementById("txtNPartecipanti");
    let _txtDataInizio=this.document.getElementById("txtDataInizio");
    let _txtDataFine=this.document.getElementById("txtDataFine");
    let _btnCalcola=this.document.getElementById("btnCalcola");
    let _risultato=this.document.getElementById("risultato");
    let _imgSconto=this.document.getElementById("imgSconto");

    let today= new Date();
    _txtDataInizio.min=today.toISOString().substr(0,10);
    _txtDataFine.disabled=false;
    let sconto=0;
    _txtDataInizio.addEventListener("change", function(){
        let dataInizio=_txtDataInizio.value;
        console.log(dataInizio);
        dataInizio=new Date(dataInizio);
        if(dataInizio.getMonth()==5)
        {
            _imgSconto.src="img/sconto20.jpg";
            sconto=20
        }
        else if(dataInizio.getMonth()==6)
        {
            _imgSconto.src="img/sconto15.jpg";
            sconto=15;
        }
        else if(dataInizio.getMonth()==7)
        {
            _imgSconto.src="img/sconto10.jpg";
            sconto=10;
        } 
        else
            _imgSconto.src="";
        let dataFineMin= dataInizio.getTime()+(24*3600*1000);
        dataFineMin=new Date(dataFineMin);
        _txtDataFine.min=dataFineMin.toISOString().substr(0,10);
        console.log(dataFineMin);
        _txtDataFine.disabled=false;
    });
    let importoUnirtario=200;

    _btnCalcola.addEventListener("click", function(){
        let nPersone=_txtPartecipanti.value;
        if(nPersone=="" || nPersone<1 || nPersone>9)
            alert("Numero participanti non valido");
        else if(_txtDataInizio.value == "" || _txtDataFine.value=="")
            alert("Inserire data inizio o data fine");
        else
        {
            let msec=new Date(_txtDataFine.value)- new Date(_txtDataInizio.value);
            let giorni= msec/(24*3600*1000);
            let importo=0;
            let dataInizio = _txtDataInizio.value;
            dataInizio= new Date(dataInizio);

            if(giorni==1)
                importo=giorni*importoUnirtario*nPersone;
            else if (giorni>=2 && giorni <=5)
                importo=(1*importoUnirtario*nPersone) + ((giorni-1)*(importoUnirtario-50)*nPersone);
            else
                importo=(1*importoUnirtario*nPersone) + (4*(importoUnirtario-50)*nPersone)+((giorni-5)*(importoUnirtario-80)*nPersone)
            
            if(dataInizio.getMonth()==5)
                importo=importo-(importo*(sconto/100));
            else if(dataInizio.getMonth()==6)
                importo=importo-(importo*(sconto/100));
            else if(dataInizio.getMonth()==7)
                importo=importo-(importo*(sconto/100));
            _risultato.innerHTML= importo.toString()+ "€";
        }

    });
}

function generaNumero(a,b){
    /* estremo sueriore escluso*/
    let ris=Math.floor((b-a)*Math.random())+a;


    return ris;
}