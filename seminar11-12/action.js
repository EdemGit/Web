// task 1
var city1 = {};
city1.name = "ГородN";
city1.population = "10млн";
console.log(city1.name)

//task 2
let city2 = {
    name: "ГородM",
    population: 1e6
};
console.log(city2.population)

//task 3
function getName() { return this.name; }
city1.getName = getName;
city2.getName = getName;
console.log(city1.getName())

//task 4
function exportStr() { return `name=${this.name}\npopulation=${this.population}\n`; }
city1.exportStr = exportStr;
city2.exportStr = exportStr;
console.log(city1.exportStr());

//task 5
function getObj() { return this; }
function getCity() { return getObj.apply(this).getName(); }
 
city1.getCity = getCity;
city2.getCity = getCity;
console.log(city1.getCity());
console.log(city2.getCity());

//task 7

d1 = [45, 78, 10, 3]
d1[7] = 100
console.log(d1)
console.log(`d1[6] = ${d1[6]}, d1[7] = ${d1[7]}`)

//task 8
var d2 = [45, 78, 10, 3]
function Calc(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
Calc(d2);

//task 9
let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum4 = 0;
for(let a in d3){
    sum4 += d3[a];
} 
console.log(sum4);

//task 10 
let d4 = [45, 78, 10, 3];
function my(a,b) {
  return b-a;
}
console.log(d4.sort(my));

// task12
console.log("Задание 12")

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
console.log(new Vector(3, 4).length)

// task14
function logFive(obj) {
    newArr = obj.slice(0, Math.min(5, obj.length));
    newArr.map(function(element){
            console.log(element);
    });
}

function ArraySeq(arr) {
        return arr;
}

function RangeSeq(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
   return arr;
}

logFive(ArraySeq([1, 2]));
logFive(RangeSeq(100, 1000));

//task 15
let c1 = "Екатеринбург и Москва";
c1 = c1.split(" и ");
let Card = new Object();
Card.from = c1[0];
Card.to = c1[1];
Card.road = function() {
    return Card.from + " to " + Card.to;
}
console.log(Card.road());

//task 16
class Human {
    constructor (name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    getInfo() {
        return `${this.name},${this.age},${this.height}`
    }

    get firstname(){
        return this.name;
    }
}

humans = [
    new Human("Коля",23,180),
    new Human("Даша",19,170),
    new Human("Ваня",18,192),
    new Human("Петя",45,178),
    new Human("Вася",34,197),
    new Human("Джони",37,160),
    new Human("Катя",37,160),
    new Human("Петя",37,160),
    new Human("Соня", 21,172),
    new Human("Женя",25,175)
]
for (let i of humans)
    console.log(i.getInfo())
console.log(humans[1].getInfo());
console.log(humans[2].firstname);

//task 18
let dt1 = new Date('2045-01-01T00:00:00');
console.log(dt1)

//task 19
function second1970() {
  let now = new Date();

  let today = new Date('1970-01-01T00:00:00');

  let diff = now - today;
  return Math.round(diff / 1000);
}

console.log(second1970());



