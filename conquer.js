
/*
var rellax = new Rellax('.rellax');

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
*/
//add event listener for mouse scroll

/*console.log(5);

function diamond(n){

  var diam="";
  var numSpaces=Math.floor(n/2), decreasing=true;
  var numStars=1, increasing=true;
  
  if (!(n>0) || n%2==0) { console.log("Output= "+n); return null; }
  for (var line = 1; line<=n; line++) { 
    
    for(var sp=numSpaces; sp>0; sp--) {
      diam+=" ";
    }
    if (numSpaces==0) { decreasing=false }
    decreasing ? numSpaces-- : numSpaces++;
    
    
    for (var st=numStars; st>0; st--) {
      diam+="*";
    }
    increasing ? numStars+=2 : numStars-=2;
    if (numStars>=n) { numStars=n; increasing=false }
    
    diam+="\n"
  }
  return diam;
}

var x=1;
setInterval(ha,200);

function ha() {
	x+=2;
	console.log(diamond(x));
}*/


var data = " 89.9 104.0 93.7 94.4 86.0 115.8 95.3 90.7 88.0 121.8 97.4 95.2 101.4 98.2 97.5 111.4 101.6 103.3 97.1 78.7 85.7 75.0 107.5 106.6 103.0 111.5 99.8 104.4 97.3 100.9";
var dataArr = [];
var regex = /\S+/;
var sum;
var numElements;
var mean;

function getMean() {
  sum = 0;
  numElements = 0;
  while (data.match(regex)) {
  	//console.log("Scanning " + data.match(regex));
    dataArr.push(data.match(regex));
    sum += parseFloat(data.match(regex));
    numElements++;
    data = data.replace(regex, "");
  }
  console.log("scanned " + numElements + " elements.");
  console.log("Sum: " + sum);
  console.log("Mean is " + (sum / numElements));
  mean = sum / numElements;
}

function getMedian() {
  var arr = [];
  var temp;
  var numSwaps = 0;
  var i = 1;

  // push into array
  while (data.match(regex)) {
    arr.push(parseFloat(data.match(regex)));
    data = data.replace(regex,"");
  }
  
  // bubble sort
  while (true) {
    if (arr[i - 1] > arr[i]) { // if previous less than current index, swap elements
      temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
      numSwaps++;
    }
    if (i >= arr.length - 1) {  // if last element reached
      if (numSwaps > 0) {         // if anything was swapped
        i = 1;                      // reset index
        numSwaps = 0;               // reset num of swaps
      }
      else {                      // if nothing swapped
        console.log("End of sorting"); //exit
        break;
      }
    }
    else { i++; }               // if not last element, increment index
  }
  console.log("Sorted nums: ");
  arr.forEach((e)=>{
  	console.log(e);
  })

  // if array size even, find average of middle two
  if (arr.length % 2 == 0) {
    console.log("(Even) Median is: " + ( arr[ (arr.length/2) - 1] + arr[arr.length / 2] ) / 2 ); 
  }
  // If odd, find middle element
  else {
    console.log("(Odd) Median is: " + ( arr[Math.floor(arr.length/2)]));
  }
}



getMedian();
//getMean();
//getSD();

// Must call mean function first
function getSD() {
  var numeratorSum = 0;
  var variance = 0;

  // loop through original data
  for (var i = 0; i < dataArr.length; i++) {
    numeratorSum += Math.pow(dataArr[i] - mean, 2);             // subtract mean from each data element, square the result
    console.log("numeratorSum: " + numeratorSum);
  }
  variance = numeratorSum / (numElements - 1);                  // divide by num of elements
  console.log("Standard Deviation = " + Math.sqrt(variance));   // take square root
}

