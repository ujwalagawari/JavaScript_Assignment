function myFunction(){
    var a=parseInt(document.getElementById("number").value);
    var count=0;
    for(var i=a; i>=1; i--){
        if(Number.isInteger(a/i)){
            //console.log("a/i="+i);
            count++;   
        }
       // console.log(count);
    }
    if(count==2){
        document.getElementById("p1").innerHTML = "This is a prime number";
    }else{
        document.getElementById("p1").innerHTML = "This is not a prime number";
    }
    
}