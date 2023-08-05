//approach 1
let btn= document.querySelector("button");
btn.addEventListener("click",countwords);

function countwords(){
    let text= document.getElementById("inputfield").value; //yaha value text ka texrarea ka value dega
    let count=0;
    //console.log("hello");
    for(let i=0;i<=text.length;i++){
        if(text[i]==" ")
        {
            count++;
        }
        }
    
    console.log("Words are");
    console.log(count+1);
    document.querySelector("span").textContent= count+1;
    //or document.getelemntById("show").innerHTML= count+1;

}
//there is a problem with this approach that is when we press space two times then it counts that as word- so if we have 4 words and 4 spaces then it will give count as 5



//approach 2- using split() method- here we will split the each word on reaching space

function countword2(){
    var text1= document.getElementById("inputfield1").value;
    var count1=0;
    var splitword= text1.split(' ');
    for(var i=0;i< splitword.length;i++){
        if(splitword[i]!=""){
        count1++;
        }
    }
   // document.querySelector("span").textContent= count1;

   document.getelemntById("show").innerHTML= count1;
 
}  
