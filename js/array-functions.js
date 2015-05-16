

var arr1 = [2,6,4];
var arr2 = [7,7,7];

var arrAvg = function(arr){
	var sum = 0
	for (var i = 0; i < arr.length; ++i){
		sum  = sum + arr[i];
	}

	return sum/arr.length;
}


var arr1 = [2,6,4];

var arrMax = function(arr){
	var maxsofar = arr[0]
	for (var i = 1; i < arr.length; ++i){
		if (arr[i] > maxsofar)
			maxsofar = arr[i]
	}

	return maxsofar;
}


var arr1 = [2,6,4];

var arrHasOneEven = function(arr){
	for (var i = 0; i < arr.length; ++i){
		if  (arr[i] % 2 === 0);
			 return true;
	}

	return false;
}


