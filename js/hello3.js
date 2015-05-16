//Define a simple function. Does not return a value.

var hello3 = function(){
	var name = prompt("Enter your name", "Anon.");
	alert("Hello, " + name + "!");
	document.write("Hello, " + name + "!");
}

window.onload = hello3;