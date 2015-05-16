function charToNumber(c){
	var chr = c.toLowerCase()
	if(chr.search(/[abc2]/)===0)
		return 2;
	else if(chr.search(/[def3]/)===0)
		return 3;
	else if(chr.search(/[ghi4]/)===0)
		return 4;
	else if(chr.search(/[jkl5]/)===0)
		return 5;
	else if(chr.search(/[mno6]/)===0)
		return 6;
	else if(chr.search(/[pqrs7]/)===0)
		return 7;
	else if(chr.search(/[tuv8]/)===0)
		return 8;
	else if(chr.search(/[wxyz9]/)===0)
		return 6;
	else
		return c;
}

function deVarbalize(s){
	var result = '';

	for(var i = 0; i < s.length; ++i){
		result = result + charToNumber(s[i])
	}

	return result;
}

var button1 = $("btn1")
var button2 = $("reset")

button1.onclick = function(){
	$('outSpan').innerHTML = deVarbalize($('inBox').value);
}

button2.onclick = function(){
	$('outSpan').innerHTML = "";
}