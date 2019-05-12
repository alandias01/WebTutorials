/* c:\>node array.js */

//Simplify outputting to log
var c = x => {if(x === undefined){x="";} console.log(x)};

var arr = ['Alan','Sybil','Mike','Ophelia'];  //var arr = []; arr.push('Alan');

c("Output all array values");
arr.forEach(x=>c(x+":"+x.length));

c();
c("Arr Filtered for length <5");
var arrFiltered = arr.filter(x=>x.length<5)
arrFiltered.forEach(x => c(x));

c();
c("Arr Find length = 4  Only returns first found value")
var arrFind = arr.find(x=>x.length==4);
c("Arr Find: " + arrFind);

c();
c("Arr Every checks if every item satisfies the condition")

var arrEvery = arr.every(x=>x.length<8);
c("Length<8: " + arrEvery);

var arrEvery = arr.every(x=>x.length<5);
c("Length<5: " +arrEvery);

c();
c("Arr Join creates a string from array with a delimiter");
c(arr.join('-'));

c();
c("Arr Map runs a function on each arr item and returns a new array");
var arrMap = arr.map(x => x + "X");
c(arrMap);

c();
c("Arr Some checks if at least 1 element in the array passes the test");

c("Length = 5: " + arr.some(x=>x.length==5));
c("Length = 6: " + arr.some(x=>x.length==6));

c();
c("Arr to remove item Mike");
var arrRemove = arr.slice();

var index = arrRemove.indexOf('Mike');
if(index>-1) {arrRemove.splice(index,1)}
c(arrRemove);

c();
c("We can add items between 2 items" );
arrRemove.splice(1,0,"Ben");
c(arrRemove);

c();
c("We can replace 2 items for 1 item" );
arrRemove.splice(0,2,"Jesse");
c(arrRemove);

c();
c("Arr ");