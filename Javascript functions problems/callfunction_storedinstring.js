//approach 1-Method 1: Using the window object.

//The window object in HTML 5 references the current window and all items contained in it. Hence we can use it to run a function in a string along with parameters to the function. 

function gogo(name){
     console.log("gogo ka nick name hai "+name);
}

stringfunc= "gogo";  //here we are storing gogo function into a string variable 
parameters="yee";
window[stringfunc](parameters);  //this is the syntax for calling function through window



//approach 2- eval(function) method -  this approach is not supported by various browsers so we use window

function gogo1(name){
    console.log("gogo ka nick name hai "+name);
}

stringfunc1= "gogo1('yee')" ;
eval(stringfunc1);//this is the syntax for calling function through eval




