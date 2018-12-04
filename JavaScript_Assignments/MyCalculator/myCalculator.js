myFunction=function(){
        var selectType = prompt("1. Add 2. Subtract 3. Multiply 4. Divide 5. Exponent 6. Mean 7. Quit", 1);
        var r=/^[1-7]$/;
        if(r.test(selectType)){
                document.getElementById("errorMsg").innerHTML="";
        }else{
                document.getElementById("errorMsg").innerHTML="Please enter valid no between 1 and 7. Again click Run Calculator button.";             
        }
}