$(function() {
    
//Counting Sort
var countingSort = function sort(array) {
  var buckets = new Array(maxValue + 1);
  var sortedIndex = 0;
  var i;

  for (i = 0; i < array.length; i++) {
    if (!buckets[array[i]]) {
      buckets[array[i]] = 0;
    }
    buckets[array[i]]++;
  }

  for (i = 0; i < buckets.length; i++) {
    while (buckets[i] > 0) {
      array[sortedIndex++] = i;
      buckets[i]--;
    }
  }

  return array;
}

var maxValue = function findmax(array){
    return Math.max.apply( Math, array );
}



  $("result").hide();
    
  $("#exmpl").on("keydown",function(event) {
    if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      var start = window.performance.now();
      var result= countingSort(array);
      var end = window.performance.now();
      var dur = end - start;
      $("#result").text("Result is: " + result + " | Time taken: "+dur);//Merges: " + merges + " |
      $("#result").show();
   }
  });

});
