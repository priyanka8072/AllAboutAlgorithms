$(function() {

   var split=0;
    
	//Merge Sort
function merge(left, right, array){
    if (left.length == 0 && right.length == 0) {
        return array;
    } else if (left.length == 0) {
        return array.concat(right);
    } else if (right.length == 0) {
        return array.concat(left);
    } else if (parseInt(left[0]) <= parseInt(right[0])) {
        array.push(left.shift());
    } else if (parseInt(left[0]) >= parseInt(right[0])) {
        array.push(right.shift());
    } else {
        array.push(left.shift());
        right.shift();
    }
    return merge(left, right, array);
}
    
function mergeSort(array){
    if (array.length > 1) {
        split++;
        return merge(mergeSort(array.slice(0, Math.ceil(array.length/2))),
            mergeSort(array.slice(Math.ceil(array.length/2))), []);
    } else {
        return array;
    }
}

  $("result").hide();
    
  $("#exmpl").on("keydown",function(event) {
    if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      var start = window.performance.now();
      mergeSort(array);
      var end = window.performance.now();
      var dur = end - start; 
      $("#result").text("Result is: " + mergeSort(array) + " |  Splits: "+ split+ " | Time taken: "+dur);//Merges: " + merges + " |
      $("#result").show();
   }
      merges=0,split=0;
  });

});
