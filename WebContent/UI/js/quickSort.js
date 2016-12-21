$(function() {

    var swaps=0,compare=0;
    
	//Quick Sort
    function quickSort(arr, left, right){
      var len = arr.length, pivot, partitionIndex;

      if(left < right){
           pivot = right;
           partitionIndex = partition(arr, pivot, left, right);
           quickSort(arr, left, partitionIndex - 1);
           quickSort(arr, partitionIndex + 1, right);
      }
      return arr;
    }

    function partition(arr, pivot, left, right){
       var pivotValue = arr[pivot],
           partitionIndex = left;

       for(var i = left; i < right; i++){
        compare++;
        if(parseInt(arr[i]) < parseInt(pivotValue)){
          swap(arr, i, partitionIndex);
          partitionIndex++;
        }
      }
      swap(arr, right, partitionIndex);
      return partitionIndex;
    }

    function swap(arr, i, j){
       var temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       swaps++;
    }

    
  $("result").hide();
    
  $("#exmpl").on("keydown",function(event) {
    if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      var start = window.performance.now();
      quickSort(array,0,array.length-1);
      var end = window.performance.now();
      var dur = end - start; 
      
      $("#result").text("Result is: " + array.join(',') + " | Comparisons: "+compare + " | Swaps: " + swaps+ " | Time taken: "+dur);
      $("#result").show();
   }
      swaps=0,compare=0;
  });

});
