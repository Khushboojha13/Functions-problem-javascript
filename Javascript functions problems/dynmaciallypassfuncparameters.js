// JavaScript program to get the function
// name/values dynamically

function getparams(func){
        let str= func.toString(); //it has converted function into a string
       // console.log(str); 
       str= str.replace(/\/\*[\s\S]*?\*\//g, '')
       .replace(/\/\/(.)*/g, '')
       .replace(/{[\s\S]*}/, '')
       .replace(/=>/g, '')  //here replace has removed {} and => keyword
       .trim();
   // console.log(str);   

       let start= str.indexOf("(")+1;  
    console.log(start);
       let end= str.indexOf(")");
    console.log(end);

    let substrings= str.substring(start,end);
   // console.log(substrings);  //yaha hame substring without brackets mil jayenge

   //yaha ham substring me first index include karte hai but second index exclude karte hai

     let result= substrings.split(",");
    //  console.log(result);  //her we will get result as an array 
       
    let params=[];
    result.forEach((element)=>{ //yaha elment array ke har ke lement ko refer kar raha hai
            element= element.replace(/=[\s\S]*/g, '').trim();
           
            if(element.length>0)  //yaha ho sakta hai ki koi bhi element na bache repace and trim karke to uski length 0 hogi length 1 se start  hota hai count hona its not index
            params.push(element);
    })
    return params;
}
        


function func1(a){};

function func2(a=5*3,b){};

 let func3=((a,b,c)=>{});

console.log("First function is:");
console.log(getparams(func1));

console.log("Second function is:");
console.log(getparams(func2));

console.log("Third function is:");
console.log(getparams(func3));
