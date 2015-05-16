var toWord = function(n){
	//make sure n is a number
	n = Number(n);
	//pronounce the number n
	if(n === 1)
		return "one";
	else if(n === 2)
		return "two";
	else if(n === 3)
		return "three";
	else if(n === 4)
		return "four";
	else if (n < 1)
		return "too small"
	else if (n > 4)
		return "too large"

}

      var button1 = document.getElementById("btn1");

      //register the handler
button1.onclick = function(){
	//console.log('Calling isEven.');
	document.getElementById('outputDiv').innerHTML =
	   toWord(document.getElementById('inputBox').value);
}