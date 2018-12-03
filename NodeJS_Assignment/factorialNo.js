function myFunction(){
    var a=parseInt(document.getElementById("number").value);
    for(var i=a-1; i>1; i--){
        a=a*i;
    }
    document.getElementById("p1").innerHTML = a;
}