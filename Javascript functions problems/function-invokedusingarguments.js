function namo(a1,b1){
    return  (a1*b1);
     
}

let a1= Number(prompt("Enter a number:"));
let b1= Number(prompt("Enter a number:"));
var returned_value= namo(a1,b1);
console.log("Multiplication is: "+a1*b1);

//yaha hame jo bhi argumnets user dega vo multiply hoga hame differnet user argumnets ke liye different function nahi banana padega ek hi funtion kam karega

//second exapmle
function even(arro){
      let reso=[];
      for(let i=0;i<arro.length;i++){
        if(arro[i]%2==0)
          reso.push(arro[i]);
      }
      return reso;
}

let arro=[1,2,4,5,6,7,8];
let return_val= even(arro);
console.log(return_val);