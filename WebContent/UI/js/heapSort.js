$(function() {

    var swaps=0, compare=0;
    
//HeapSort
var arrayLength;

function buildHeap(input) {
    arrayLength = input.length;

    for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
        heapify(input, i);
    }
}

function heapify(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;
    compare++;

    if (left < arrayLength && parseInt(input[left]) > parseInt(input[largest])) {
        largest = left;
    }

    if (right < arrayLength && parseInt(input[right]) > parseInt(input[largest])) {
        largest = right;      
    }

    if (largest != i) {
        swap(input, i, largest);
        heapify(input, largest);
    }
}

function swap(input, index_A, index_B) {
    swaps++;
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    buildHeap(input);

    for (var i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        arrayLength--;
        heapify(input, 0);
    }
}

  $("result").hide();
    
  $("#exmpl").on("keydown",function(event) {
    if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      var start = window.performance.now();
      heapSort(array);
      var end = window.performance.now();
      var dur = end - start;
      $("#result").text("Result is: " + array.join(',') + " | Comparisons: " + compare + " | Swaps: " + swaps+ " | Time taken: "+dur);
      $("#result").show();
   }
      swaps=0,compare=0;
  });

});
