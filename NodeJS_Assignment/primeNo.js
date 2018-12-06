function myFunction(){
    var first_number=11;//declaration of number
    var count=0;
    for(var i=first_number; i>=1; i--){
        if(Number.isInteger(first_number/i)){
            //console.log("a/i="+i);
            count++;   
        }
       // console.log(count);
    }
    if(count==2){
        console.log("This is a prime number");
    }else{
        console.log("This is not a prime number");
    }
}
myFunction();