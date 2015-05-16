var waterStates = function(temp){
	if(temp<=32)
		return "solid";
	else if((32<temp) && (temp<212))
		return "liquid";
	else if((212<=temp) && (temp<21140.6))
		return "gas";
	else if(21140.6<=temp)
		return "plasma";
}