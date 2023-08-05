let func =[hello,hello1,hello2];
let execution=[];
for(let i of func){
    let start1= performance.now();
    console.log(i);
    i();
    let end1= performance.now();
    let timetaken= end1-start1;
    execution.push(timetaken);
}
console.log(execution);
console.log("minmum time taken by");
console.log(Math.min(execution[0],execution[1],execution[2])); //Math.min() ke inside we have to pass arguments usme jo minimum hoga vo return hoga

console.log("Index");
let min=execution[0];
let ans;
for(let i=0;i<execution.length;i++){
    if(execution[i]<min){
     ans=i;
    }
}
console.log("Fatest execution index is "+ans);

function hello(){
    for(let i;i<100;i++)
    {
        console.log("hello");
    }
}

function hello1(){
    for(let i;i<1000;i++)
    {
        console.log("hello1");
    }
}

function hello2(){
    for(let i;i<10000;i++)
    {
        console.log("hello2");
    }
}





//example 2- functions performing calculations

// 1st function
function fac(n) {
    let fact = 1;
    for (let i = 1; i <= 4; i++)
    fact *= i;
    console.log("Factorial of 4 is:", fact);
}
  
// 2nd function
function fibo() {
    let fab = 0;
    let j = 1;
    for (let i = 2; i <= 6; i++) {
    let temp = fab;
    fab += j;
    j = temp;
    }
    console.log("6th fibonacci no is:", fab);
}
  
// 3rd function
function binpow() {
    let j = 2;
    let k = 22;
    for (let i = 0; i < k; i++)
    j = ((j * j) % 1e9) + 7;
    console.log(
    "Power 2 to 22 mod 1e9+7 is:", j
    );
}
  
// Function to check time required
// by each function
function findTime(f) {
  
    // Storing initial time in start
    var start = performance.now();
  
    // Calling the function
    f();
  
    // Storing time after running the function
    var end = performance.now();
  
    // Return time taken by function
    return end - start;
}
  
function findMinTime() {
  
    // Initializing array of functions
    var fun = [fac, fibo, binpow];
  
    // Initialising array of time
    // taken by function
    var ans = [];
  
    // Iterating over all the functions
    // and storing time taken by them
    for (var i = 0; i < 3; i++) {
    var n = findTime(fun[i]);
    ans[i] = n;
    console.log(ans[i]);
    }
  
    // Finding the minimum time in array
    var answer = Math.min.apply(null, ans);
    c = ans.indexOf(answer);
  
    // Return index of fastest array
    return c;
}
  
var minTime = findMinTime();
console.log("Index of fastest function:",
            minTime);