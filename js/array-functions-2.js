var arr1 = [1,2,3,6,9,23,21]
var arr2 = [3,7,9]

function allOdd(arr){
	for (var i = 0; i < arr.length; ++i){
		if (Number(arr[i]) % 2 == 0)
			return false;
	}

	return true;
}