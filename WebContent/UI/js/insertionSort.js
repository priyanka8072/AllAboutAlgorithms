$(function() {

    var swaps=0;
    
 //insertion sort
 function insertionSort(unsortedList) {  
    var len = unsortedList.length;
    for (var i = 0; i < len; i++) {
        var tmp = parseInt(unsortedList[i]);
        for (var j = i - 1; j >= 0 && (parseInt(unsortedList[j]) > tmp); j--) {
            swaps++;
            unsortedList[j + 1] = unsortedList[j];
        } 
        unsortedList[j + 1] = tmp;
    }
 }

  $("result").hide();
    
  $("#exmpl").on("keydown",function(event) {
    if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      var start = window.performance.now();
      insertionSort(array,0,array.length-1);
      var end = window.performance.now();
      var dur = end - start; 
      $("#result").text("Result is: " + array.join(',') + " | Swaps: " + swaps+ " | Time taken: "+dur);
      $("#result").show();
   }
      swaps=0;
  });

});
