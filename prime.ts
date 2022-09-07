let n:number=15;
let flag:boolean=true;
for(let i=2;i<n;i++){
    if(n%i==0){
    flag=false;
    break;
    }
}
if(flag==true){
    console.log("It is prime number");
}
else{
    console.log("It is not a prime number");
}