myFunction = function () {
        var selectType = prompt(" 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide \n 5. Exponent \n 6. Mean \n 7. Quit", 1);
        var r = /^[1-7]$/;
        var reg = /^[0-9]*$/;
        var r1 = /^[1-4]$/;
        if (r.test(selectType)) {
                document.getElementById("errorMsg").innerHTML = "";
                if (r1.test(selectType)) {
                        while (true) {
                                f1 = prompt("Enter First No", 0);
                                if (f1 == "" || !reg.test(f1)) {
                                        alert("Please enter a valid no");
                                } else {
                                        break;
                                }
                        }
                        while (true) {
                                s1 = prompt("Enter Second No", 0);
                                if (s1 == "" || !reg.test(s1)) {
                                        alert("Please enter a valid no");
                                } else {
                                        break;
                                }
                        }
                        if (selectType == 1) {
                                document.getElementById("resultBox").value = parseInt(f1) + parseInt(s1);
                        } else if (selectType == 2) {
                                document.getElementById("resultBox").value = parseInt(f1) - parseInt(s1);
                        } else if (selectType == 3) {
                                document.getElementById("resultBox").value = parseInt(f1) * parseInt(s1);
                        } else if (selectType == 4) {
                                document.getElementById("resultBox").value = parseInt(f1) / parseInt(s1);
                        }
                } else if (selectType == 5) {
                        while (true) {
                                f2 = prompt("Enter Base value", 0);
                                if (f2 == "" || !reg.test(f2)) {
                                        alert("Please enter a valid no");
                                } else {
                                        break;
                                }
                        }
                        while (true) {
                                s2 = prompt("Enter exponent value", 0);
                                if (s2 == "" || !reg.test(s2)) {
                                        alert("Please enter a valid no");
                                } else {
                                        break;
                                }
                        }
                        document.getElementById("resultBox").value = Math.pow(parseInt(f2), parseInt(s2));
                }
                else if (selectType == 6) {
                        while (true) {
                                f3 = prompt("Enter  series of numbers", "1 2 3");
                                if (f3 == "") {
                                        alert("Please enter a valid no");
                                } else {
                                        break;
                                }
                        }
                        var a=f3.split(" ");
                       // alert(a+" "+a.length);
                        var total = 0;
                        for (var i = 0; i < a.length; i++) {
                                total = total+parseInt(a[i]);
                        }
                       // alert(total);
                        document.getElementById("resultBox").value = total / a.length;
                }
        } else {
                document.getElementById("errorMsg").innerHTML = "Please enter valid no between 1 and 7. Again click Run Calculator button.";
        }
}