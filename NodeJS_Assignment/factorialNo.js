function myFunction(){
    //Factorial of given numbers
    var number=3; //declaration of number
    for(var i=number-1; i>1; i--){
        number=number*i;
    }
    console.log("Factorial of 3 is : "+number);
}
myFunction();