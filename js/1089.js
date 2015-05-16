function driver(){
	var sequence = String($("inBox").value);
	var reverse = String(reverseN(sequence));
	var difference = String(Number(reverse)-Number(sequence));
	$('h1').innerHTML = "The reverse of " + sequence + " is " + reverse;
	$('h2').innerHTML = "The difference between " + sequence + " and " + reverse + " is " + difference;
	$('h3').innerHTML = "The reverse difference is " + reverseN(difference);
	$('h4').innerHTML = "The sum of the difference and reverse difference is ...(Drum roll, please ;-)";
	$('h5').innerHTML = String(Number(difference)+Number(reverseN(difference)));

}

var button1 = $("btn1");
button1.onclick = driver;