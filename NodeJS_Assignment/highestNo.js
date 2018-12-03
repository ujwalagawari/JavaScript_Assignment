function myFunction(){
    var a=parseInt(document.getElementById("firstNo").value);
    var b=parseInt(document.getElementById("secondNo").value);
    var c=parseInt(document.getElementById("thirdNo").value);
    var maxNo = Math.max(a, b, c);
    document.getElementById("p1").innerHTML = maxNo;
}