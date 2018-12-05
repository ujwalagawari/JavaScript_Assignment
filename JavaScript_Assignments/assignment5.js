
submitForm = function () {
    if (validateCName() && validateEmail() &&  validateAddress() && validateToppings()) {
        $("#summary").attr('disabled', false);
        return true;
    } else {
        return false;
    }
}

function validateCName() {
    var value = document.getElementById("cName").value;
    var r = /^[a-zA-Z]*$/;
    if (!r.test(value) || value == "") {
      //  alert(1);
        document.getElementById("cNameError").innerHTML = "Name should not contain no,special char or empty";
        return false;
    } else {
       // alert(2);
        document.getElementById("cNameError").innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var value = document.getElementById("email").value;
    var r = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (r.test(value)) {
      //  alert(3);
        document.getElementById("emailError").innerHTML = "";
        return true;
    } else {
       // alert(4);
        document.getElementById("emailError").innerHTML = "Email should not be in proper format and not empty";
        return false;
    }
}

function validateToppings() {
    var value = document.getElementsByClassName("toppings");
    var hasChecked = false;
    for (var i = 0; i < value.length; i++) {
        if (value[i].checked) {
           // alert(5);
            document.getElementById("toppingsError").innerHTML = "";
            hasChecked = true;
            break;
        }
    }
    if (hasChecked == false) {
       // alert(6);
        document.getElementById("toppingsError").innerHTML = "Please select at least one.";
        return false;
    }else{
        return true;
    }
}

function validateAddress(){
    var address1=document.getElementById("address1").value;
    //alert(address1);
    if(address1!=""){
       // alert(7);
        document.getElementById("addressError").innerHTML="";
        return true;
    }else{
        //alert(8);
        document.getElementById("addressError").innerHTML="Address should not be empty.";
        return false;
    }
}

        // && validateDelivery() && validateTip()
// function validateDelivery(){
//     var value=document.getElementById("cName").value;
//     if(){
//         document.getElementById("").innerHTML="";
//         return true;
//     }else{
//         document.getElementById("").innerHTML="";
//         return false;
//     }
// }
// function validateTip(){
//     var value=document.getElementById("cName").value;
//     if(){
//         document.getElementById("").innerHTML="";
//         return true;
//     }else{
//         document.getElementById("").innerHTML="";
//         return false;
//     }
// }


