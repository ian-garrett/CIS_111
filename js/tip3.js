function calculateTip(amt,pct){
    var tip = amt * (pct/100);
    return tip;
}

var button1 = document.getElementById("btn1");
button1.onclick = function(){
	console.log('Calling calculateTip')
	document.getElementById('outputDiv').innerHTML=
		'You should tip $' + (calculateTip(parseFloat(document.getElementById('amountBox').value),parseFloat(document.getElementById('tipBox').value))).toFixed(2);