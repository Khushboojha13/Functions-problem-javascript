// Sometimes, the developer may want to modify how a function works on the basis of its caller function. To find out the caller function name, we will use the Function object’s caller property.

//Function.caller.name is used it will give the name of caller function

//example 1
function foo(){
    console.log(foo.caller.name);
}

function boo(){
    foo();
}
boo();


//example 2- mutiple functions calling foo1
function foo1()
{
    console.log(foo1.caller.name);  //jo foo1 ko call karega uska name print ho jayega
}

function boo1(){
     foo1();
}
function goo(){
    foo1();
}
function poo(){
    foo1();
}
boo1();
goo();
poo();

