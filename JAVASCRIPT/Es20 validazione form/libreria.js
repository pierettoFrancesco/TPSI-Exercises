
function generaNumero(a, b){
	return Math.floor((b-a+1)*Math.random()) + a;
}

function isDigit(s){
	let esci=false;
	let i=0;
	while(i<s.length && !esci)
	{
	    if(!(s[i]>="0" &&  s[i]<="9"))
		   esci=true;
		i++;
    }
	return !esci;   
}

function isLetter(s){
    for(i=0; i<s.length; i++){
	   if(!(s[i]>="a" &&  s[i]<="z" || s[i]>="A" &&  s[i]<="Z" || s[i]==' '))
		   return false
    }
	return true;      
}

