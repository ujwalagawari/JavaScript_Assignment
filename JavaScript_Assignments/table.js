function myFunction() {
    var rows = window.prompt("Please enter Number of rows", "0");
    var columns = window.prompt("Please enter Number of columns", "0");
    var r=document.getElementById("tableId");
    var reg = /^\d+$/;
        if((rows != "" && rows>0) && (columns != "" && columns>0) && reg.test(rows) && reg.test(columns)){
        for(var j=0; j<parseInt(rows,10); j++){
                var x=r.insertRow(j);
                //console.log(i);
                for(var i=0; i<parseInt(columns,10); i++){
                    var y=x.insertCell(i);
                    y.innerHTML="Row-"+j+" Column-"+i;
                }
        }
        }else{
            alert("Enter Valid Number");
        }
}