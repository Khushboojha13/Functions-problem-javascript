let obj={
    name:"kushi",
    age:21,
    color:"white"
}
let key= Object.keys(obj);
console.log(key);
 let res= key.map(function(x){
        return obj[x];  //yaha iska matlab hai obj[name]= "khushi" and so on
 })
console.log(res);


//array push method
let key1= Object.keys(obj);
let arr=[];
console.log(key);
 let res1= key.map(function(x){
      arr.push(obj[x]);  
 });
 console.log("New array");
 console.log(arr);




 //object.hasOwnProperty and push method

 let arr1=[];
 for(let i in obj){
    if(obj.hasOwnProperty(i))
    {
        arr1.push(obj[i]);
    }
 }

 console.log("ME one");
 console.log(arr1);