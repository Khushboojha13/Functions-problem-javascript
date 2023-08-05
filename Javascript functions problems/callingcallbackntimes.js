let num=5;
function factor(number){  //here factor is a callback function
    let j=1;
    for(let i=number;i>0;i--){
        j=j*i;
    }
    console.log("Factorial of "+number+" is "+j);
}

function test(n,callback){
     if(n==0)
     {
        console.log("invalid number");
     }
     for(let i=n;i>0;i--){
        callback(i); //here we calling callback function n times
     }
}

test(num,factor);  //in js we can pass a function inside a function, here factor is a callback function b/c we are passing it as an argument

/* function factor(number){  //here factor is a callback function
     if(n<=0){
           
     }
     let string="";
     for(let i=number;i>=0;i--){
        str= `${i}`;
     }
     console.log(str);
     return n-1;
}

function test(n,callback){
     if(n==0)
     {
        console.log("invalid number");
     }
     for(let i=n;i>0;i--){
        callback(i); //here we calling callback function n times
     }
}
 */