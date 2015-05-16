function timelyMsg(){
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	//converts single digit hour times to double digit strings, converts double digit hours to strings
	if (hours < 10)
		hours = "0" + hours;
	else
		hours = hours.toString();
	//converts single digit minutes to double digit minute strings
	if (minutes < 10) 
		minutes = "0" + minutes;
	else
		minutes = minutes.toString();

	var time = Number(hours + minutes);

	if (time >= 0000 && time < 1200) {
		message = "Good morning!";
	} else if (time >= 1200 && time < 1700) {
		message = "Good afternoon!";
	} else if (time <= 1700 && time < 2100) {
		message = "Good evening!";
	} else if (time <= 2100 && time <= 2359) {
		message = "Good Night!";
	}
	return (message);

}


var button1 = document.getElementById("datebutton");

button1.onclick = function(){
	document.getElementById('outheader').innerHTML = timelyMsg();
}