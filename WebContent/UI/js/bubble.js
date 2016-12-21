$(function(){
    
  $("#result").hide();
    
 $("#exmpl").on("keydown",function(event) {
  if (event.which == 13) {
      var array = document.getElementById("exmpl").value.split(',');
      result(array);
      $("#result").append(array.join(','));
      $("#result").show();
  }
 });
  
//Bubble Sort
var result = function bubbleSort(arr) {
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(parseInt(arr[j-1])>parseInt(arr[j])){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

///Animation
var comparisons = 0, swaps = 0, endIndex = 0, offset = 0,stop=false;
var listItems = $( "li" ).toArray();
    
$("#run").click(function runAnimation() {
		comparisons = 0,
			swaps = 0, stop=false;
		endIndex = listItems.length - 1;
		startInterval();
});
    
function startInterval() {
		var intervalCount = 0,
			interval = setInterval(function() { 
            doSwap(intervalCount);
            intervalCount++; 
            if(intervalCount >= endIndex) displaySummary(interval);
            }, 500);
}

function doSwap(index) {
        if(stop)
            return;
		if (index > 0) {
			listItems[index - 1].className = listItems[index - 1].className.replace("selected", "");
		}
		listItems[index].className = listItems[index].className + " selected";
			
        if (endIndex > 0) {
        	comparisons++;	
        	document.getElementById("comparisons").innerText = "Comparisons: " + comparisons;
        
        	if (parseInt(listItems[index].innerText) > parseInt(listItems[index + 1].innerText)) {
				var swappingValue = listItems[index].innerText,
					swappingClassName = listItems[index].className;
				listItems[index].innerText = listItems[index + 1].innerText;
				listItems[index + 1].innerText = swappingValue;
				listItems[index].className = listItems[index + 1].className;
				listItems[index + 1].className = swappingClassName;
				swaps++;
				document.getElementById("swaps").innerText = "Swaps: " + swaps;
			}
        }
}

function displaySummary(interval) {
        if(stop)
            return;
		clearInterval(interval)
		if (endIndex > 0) {
			startInterval();
		} 
		var runningValue = document.getElementById("offset").innerText.replace("Offset: ", "");
		runningValue = parseInt(listItems.length - endIndex) + parseInt(runningValue);
		document.getElementById("offset").innerText = "Offset: " +  runningValue;
		endIndex--;
}

$("#reset").click(function reset() {
        stop=true;
		document.getElementById("comparisons").innerText = "Comparisons: 0";
		document.getElementById("swaps").innerText = "Swaps: 0"; 
		document.getElementById("offset").innerText = "Offset: 0";
		document.getElementById("blocks").innerHTML = '<li class="yellow">23</li><li class="white">07</li><li class="red">10</li><li class="pink">5</li><li class="green">9</li><li class="brown">13</li><li class="blue">2</li><li class="black">19</li>'
});

});