function calculateTip(){
	var amount = parseFloat(document.getElementById('amountBox').value);
	var tipPct = parseFloat(document.getElementById('tipBox').value);
    var tip = amount * (tipPct/100);
    document.getElementById('outputDiv').innerHTML='You should tip $' + tip.toFixed(2);
}

var button1 = document.getElementById("btn1");
button1.onclick = calculateTip;