function negatepredicate(num){
    if(num%2!=0)
    {
        console.log("odd");
    }
    else{
        console.log("even");
    }
}
negatepredicate(5);

function isodd(num){
    return num%2==1; //yaha return boolean results dega
}
function isnotodd(num){
    return !isodd(num); //here we are negating the function
}

function iseven(num){
    return num%2==0;
}

function isnoteven(num){
    return !iseven(num);
}

console.log(isodd(3));
isnotodd(4);
iseven(2);
isnoteven(3);