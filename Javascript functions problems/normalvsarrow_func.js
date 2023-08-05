let normalfunc= function(){
    console.log("Normal function");
}
normalfunc();

let arrowfunc= ()=>{
    console.log("arrow function");
}
arrowfunc();

//by using arrow functions we can write our code in short lines
let a=1;
let b=2;
//let arroefunc1=(a,b)=>{ return(a+b)}
let arroefunc1=(a,b)=>a+b; //here we can skip curly braces and return keyword

console.log(arroefunc1(a,b));


//now let's see the differnce between normal function and arrow function

//1st difference- Unlike regular functions, arrow functions do not have their own this. 

let objfun={
    name:"khusho",
    func1: function(){
        console.log("my name is"+this.name);
    }
}

objfun.func1();

//arrow function
let objfunc2={
    name:"khusho",
    func2: ()=>{
        console.log("My name is"+this.name);
    }
}
objfunc2.func2();


//2 differnce-  Availability of arguments objects: Arguments objects are not available in arrow functions, but are available in regular functions. Example using regular (): 

let objfunc3={
    name:"ashu",
       func3:function(a,b,c,d,e){
        console.log(arguments); //arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
       }
    }
objfunc3.func3(1,2,3,4,5);


let objfunc4={
    func4:(a,b,c)=>{
      // console.log(arguments); -error
    }
}
objfunc4.func4(1,2,3);


//3rd differnce- Using new keyword: Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow function using the new keyword.


let objfunc5= function(){
    console.log(arguments);
}

objfunc5(1,2,3,4);


let objfunc6= ()=>{
   // console.log(arguments); -error
}
objfunc6(1,2,3,4); 



//making constructor using normal function
class fruitss{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    fruit1(){
        console.log("fruit is " + this.name + " and color is " + this.color);
    }
    fruit2(){
        console.log(this.name+" "+this.color);
    }
}
let fruit1func= new fruitss("apple","red");
let fruit2fun= new fruitss("mango","yellow");
fruit1func.fruit1();
fruit2fun.fruit2();


//using arrow function

class vechicles{
  /*  constructor=(name,brand)=>{  //this will give error b/c arrow functions cannot be used as a constructor
        this.name=name;
        this.brand=brand
    } */
    vech1(){
        console.log("Vechicle name is "+this.name+" and brand is "+this.brand);
    }
}
let vechicle1= new vechicles("Maruti","aone");
vechicle1.vech1(); 