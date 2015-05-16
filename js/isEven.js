//"classic" function-- accepts an argument, returns a value
function isEven(n){
	console.log('In isEven.');
    if(n % 2 == 0)
    	return true;
    else
    	return false;
}

//select the button
var button1 = document.getElementById("btn1");

//Problem: 
//  a function reference offers no way to pass an argument to the function.
//This won't work:
//button1.onclick = isEven;

//Solution: register onclick handler with a function literal
button1.onclick = function(){
	console.log('Calling isEven.');
	document.getElementById('outputDiv').innerHTML = 
	   isEven(document.getElementById('inputBox').value);
};