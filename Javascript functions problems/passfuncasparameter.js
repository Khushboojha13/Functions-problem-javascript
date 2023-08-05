//here we are passing an inner function into an outer function
function outerfunc(innerfunc){
    console.log("hey  am outer function");
}

function innerfunc(){
    console.log("hello I am inner function");
}
outerfunc(innerfunc());  //this is possible in javascript



//passing and argument both into another function
function outer(a,inner){
    console.log(inner(a));
}
function inner(a){
    return "hello"+a;
}
outer("khusho",inner);

