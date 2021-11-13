for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
/* ___________________________________________________________________ */

  function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
      }else if (i % 3 === 0){
        console.log("Fizz");
      }else if (i % 5 === 0){
        console.log("Buzz");
      }else{
        console.log(i);
      }
    }
  }

  fizzbuzz();
/* ___________________________________________________________________ */

var a = parseInt(prompt("Число 1"));
var b = parseInt(prompt("Число 2"));
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
    console.log(min(a, b));
/* ___________________________________________________________________ */

    var result = "";
for (i = 1; i <= 8; i++)
    result += "# ".repeat(4).split("")[i & 1 ? "slice" : "reverse"]().join("") + "\n";
console.log(result);

function kolvosimv(b, n) {
    var result = 0;
    for (var i = 0; i < b.length; i++) {
        if (b.charAt(i) == n) {
           result ++;
        }
    }return result;
}
var stroka = prompt("Строка");
console.log(kolvosimv(stroka, "b"));
/* ___________________________________________________________________ */

var s = prompt("Число 1 для массива");
var e = prompt("Число 2 для массива")
function create(s,e){
    var a=[];
    for(;s<=e;s++)
        a.push(s);
    return a;
}
function sum(a){
    var s=0;
    a.forEach(function($){
        s+=$;
    });
    return s;
    console.log(create(s,e));
}
    function range(start, end, step) {
        var i = start,
            arr = [];
        if (!step) {
            step = 1
        }
        if (step < 0) {
            start = end;
            end = i;
        }
        for (; i >= start && i <= end; i += step) {
            arr.push(i);
        }
        return arr;
    }

    function sum1(arr) {
        var counter = arr[0];
        for (var i = arr[0]; i < arr.length; i++) {
            counter += arr[i];
        }
        return counter
    }

    function sum2(arr) {
        var res = arr.reduce(function (sum, current) {
            return sum + current;
        }, 0);
        return res
    }
    
    console.log("Sum of Array elements v1: " + sum1(range(1, 10))); 
    console.log("Sum of Array elements v2: " + sum2(range(1, 10)));
    console.log("Array of negative sequence: [" + range(5, 2, -1) + "]");
    range(5, 2, -1);
/* ___________________________________________________________________ */

    var numbersList = new Array();    
    function reverseArray(n) {
        for (var i = n.length-1; i >= 0; i--) {
            numbersList.push(n[i]);
        }
        console.log(numbersList);
    }
    
    console.log(reverseArray(["A", "B", "C", "D"]));
