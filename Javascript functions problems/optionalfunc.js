//using logical or operator
function check(a,b){
    b=b||0;  //yaha hamne option de diya agar b ki value kuch nahi hai to 0 set kar do
    console.log("value of a is "+a+ " and "+" value of b is "+b);
}

check(4,5);
check(12);


//using assignment operator 

function check1(a,b=0){ //same b ki value kuch nahi hogi to 0 set ho jayega
    console.log("value of a is "+a+ " and "+" value of b is "+b);
}

check(4,8);
check(10);
