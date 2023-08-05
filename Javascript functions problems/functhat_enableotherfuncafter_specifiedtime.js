//approach 1 

function call_after(delay,func,a,b){
         setTimeout(()=>{
              add(a,b); 
         },delay)
}
function add(a,b){
    console.log("hello");
     alert("Sum is: "+ a+b);
}

call_after(2000,add,3,4);


//Approach 2: Using an anonymous function.

//Example: In some cases, you may want to pass a function with arguments, but not want it to be called until the callback is invoked. In this case, you could wrap it in an anonymous function.

function callafter(delay,func1){
   setTimeout(()=>{
       func1(); 
   },delay)
}

function addd(a,b){
    alert("Sum iss "+a+b);
}
callafter(5000,function(){
    add(5,6);
})


//approach 3- Approach 3: Using a Prototype in JavaScript: In this approach, we can add a method to the function constructor’s prototype object. This will allow us to use the callAfter() with any function.

Function.prototype.callAfter =
        function(delay, ...params) { //ham a,b is jagah ...params bhi likh sakte hai
            setTimeout(() =>
             this(...params), delay);
             console.log("Params are:")
             console.log(...params);
        };
      
    function add(a, b) {
        alert("The sum is : " + (a + b));
    }
      
    add.callAfter(2000, 4, 7);