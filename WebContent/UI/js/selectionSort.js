$(function() {

    var swap=0,compare=0;
	// Selection Sort
	function selectionSort(arr) {
		var minIdx, temp, len = arr.length;
		for (var i = 0; i < len; i++) {
			minIdx = i;
			for (var j = i + 1; j < len; j++) {
                compare++;
				if (parseInt(arr[j]) < parseInt(arr[minIdx])) {
					minIdx = j;  
				}
			}
			temp = arr[i];
			arr[i] = arr[minIdx];
			arr[minIdx] = temp;
            swap++;
		}
		return arr;
	}
    
  $("result").hide();
    
  $("#exmpl").on("keydown",function(event) {
    if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      var start = window.performance.now();
      selectionSort(array);
      var end = window.performance.now();
      var dur = end - start; 
      $("#result").text("Result is: " + array.join(',') + " | Comparisons: "+compare + " | Swaps: " + swap + " | Time taken: "+dur);
      $("#result").show();
   }
      swap=0,compare=0;
  });

});
