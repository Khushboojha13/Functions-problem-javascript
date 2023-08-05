//Method 1: Using the performance.now() method.

//The now() method of the performance interface returns a high-resolution timestamp whenever it is called during the program. The time can be measured by getting the starting time before the function and the ending time after the function and then subtracting both of them. This gives the time elapsed for the function. 

console.log("Calculating functions performance");
let start= performance.now();
console.log(start);
functionji();
let end= performance.now();
console.log(end);
let time= end-start;
console.log(time);

function functionji(){
    for(let i=0;i<100;i++)
    console.log("hello");
}



//approach 2- Method 2: Using the console.time() method.

//The time() and timeEnd() methods of the Console object could be used as a timer to measure the time taken between these two methods. It takes a label parameter that could be used to distinguish between multiple timers. Whenever the timeEnd() method is called, the timer is stopped and the time output is given to the console. 

console.time('fun');  //here fun is a label which we have to pass inside theis not necessary fun it can be any word
functionkhao();
console.timeEnd('fun');

function functionkhao(){
    for(let i=0;i<100;i++)
    console.log("hello");
}


