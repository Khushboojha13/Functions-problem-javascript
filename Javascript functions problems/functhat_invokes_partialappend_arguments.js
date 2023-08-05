function hello(...params1){
     let sum=0;
     for(let i of params1){  //here we are using for of loop to access elements of params b/c we can not directly add params how we have to access its elements 
          sum=sum+i;
     }
     return sum;
}

let sums= hello(1,2,3,4,5,6);  //here all these values will get added 
console.log("Sum is "+sums);



let objjj={
    name:"ashu",
    age:13,
    color:"brown"
}

delete(objjj.name);
console.log(objjj);