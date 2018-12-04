function myFunction() {
    var reg = /^\d+$/;
    while (true) {
        var ast1 = prompt("Please enter 1st Number", "0");
        if (ast1 == "" || ast1 < 1 || ast1 > 30 || !reg.test(ast1)) {
            alert("Please enter a valid no between 1 and 30.");
        } else {
            for (var i = 1; i <= ast1; i++) {
                var a = document.getElementById("writeAst0");
                a.innerHTML += '*';
            }
            break;
        }
    }
    while (true) {
        var ast2 = prompt("Please enter 2nd Number", "0");
        if (ast2 == "" || ast2 < 1 || ast2 > 30 || !reg.test(ast2)) {
            alert("Please enter a valid no between 1 and 30.");
        } else {
            for (var i = 1; i <= ast2; i++) {
                var a = document.getElementById("writeAst1");
                a.innerHTML += '*';
            }
            break;
        }
    }
    while (true) {
        var ast3 = prompt("Please enter 3rd Number", "0");
        if (ast3 == "" || ast3 < 1 || ast3 > 31 || !reg.test(ast3)) {
            alert("Please enter a valid no between 1 and 30.");
        } else {
            for (var i = 1; i <= ast3; i++) {
                var a = document.getElementById("writeAst2");
                a.innerHTML += '*';
            }
            break;
        }
    }
}



// if (ast=="" || ast<1 || ast>30) {
//     alert("Please enter a valid no between 1 and 30.");
// }else {
//     for(var j=0; j<splitAst.length; j++){
//         for(var i=1; i<=splitAst[j]; i++){
//             var a=document.getElementById("writeAst"+j);
//             a.innerHTML +='*';
//          }
//     }

// }






 // if(){
            //     for(var i=1; i<=ast; i++){
            //         var a=document.getElementById("writeAst");
            //         a.innerHTML +='*';
            //      }
            // }else if(){
            //     for(var i=1; i<=ast; i++){
            //         var a=document.getElementById("writeAst");
            //         a.innerHTML +='*';
            //      }
            // }else if(){
            //     for(var i=1; i<=ast; i++){
            //         var a=document.getElementById("writeAst");
            //         a.innerHTML +='*';
            //      }
            // }