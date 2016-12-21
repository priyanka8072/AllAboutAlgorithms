$(function(){
    var compare=0;
    
  $("#find").on("click",function(event) {
      $("#result").append("");
      var array = document.getElementById("array").value.split(',');
      if(array.length <= 0){
         $("#result").text("Please enter a valid array");
         $("#result").show();
         return; 
      } 
        
      var number = document.getElementById("search").value;
        if(number == "" || number == null){
            $("#result").text("Please enter a number to search");
            $("#result").show();
            return;  
        }
        
        var result = binarySearch(number, array);
        $("#result").text("Position of the element in the given array is : " + result + " Comparisons: "+compare);
        compare=0;
  });
    

    $("#linearSearch").on("click",function(event) {
      $("#linearResult").append("");
      var array = document.getElementById("lArray").value.split(',');
      if(array.length <= 0){
         $("#linearResult").text("Please enter a valid array");
         $("#linearResult").show();
         return; 
      } 
        
      var number = document.getElementById("lSearch").value;
        if(number == "" || number == null){
            $("#linearResult").text("Please enter a number to search");
            $("#linearResult").show();
            return;  
        }
        
        var result = linearSearch(array, number);
        $("#linearResult").text("Position of the element in the given array is : " + result + " Comparisons: "+compare);
        compare=0;
  });
    
//Linear Search

var linearSearch = function(list, target) {
	var result = null, value, i;
	for (i = 0; i < list.length; i++) {
		value = list[i];
        compare++;
		if (value === target) {
			result = i;
			break;
		}
	}
	return result;
};

//Binary Search
function binarySearch(key, inputArray) {
	var low = 0, high = inputArray.length - 1, mid, element;;

	while (low <= high) {
		mid = low + (high - low) / 2;
		if ((mid % 1) > 0) {
			mid = Math.ceil(mid);
		}
        element = parseInt(inputArray[mid]);
		if (element > parseInt(key)) {
            compare++;
			high = mid - 1;
		} else if (element < parseInt(key)) {
            compare++;
			low = mid + 1;
		} else {
			return mid;
		}
	}

	return null;
}
});