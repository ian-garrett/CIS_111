//create an acronym from phrase
function acronym(phrase){ //PARAMETER IS THE VARIABLE IN A FUNCTION!!!!!
    //split phrase around spaces, tabs, and/or commas
	var words = phrase.split(/[ \t,]+/); 
	var result = ''; //this is what we will return
	var i = 0;  //loop control variable
	var w;   //holds word from phrase
	
	//console.log(words[]);
	
    //extract initial char of each word in the array words
	while(i < words.length ){
	   w = words[i];
	   result = result + w[0].toUpperCase();
	   ++i;
	}
    //console.log(result);
	return result;
}

//grab the button
var button1 = $("btn1");
//console.log(document.getElementById("btn1"));

//register the onclick handler
button1.onclick = function(){
	$('outBox').value =  acronym($('strBox').value);
};
