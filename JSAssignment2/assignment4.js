//creates bank account is one function which contain common properties and common get current balance function
function BankAccount(accountNumber,accountHolderName,accountBalance){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accountBalance=accountBalance;
    this.getCurrentBalance=function(){
       var currentBalance=this.accountBalance;
        console.log("Your current Balance is : "+currentBalance);
        //return this.accountBalance;
    }
}

//create saving object with extra keys
var savings=new BankAccount(3333,"Amitabh",500);
savings.isSalary=true;
savings.withdraw=function(amount){ //create withdraw funtion to withdraw ammount from saving account 
    balance=this.accountBalance-amount;
    if(balance<0){//checking account balance should not be less than 0
        console.log("You have insufficient balance.");
    }else{
        this.accountBalance=balance;
        console.log("Your current balance is : "+balance);
    }
}
//console.log(savings);

var current=new BankAccount(4444,"Abhishek",1000);
current.odLimit=500;
current.withdraw=function(amount){  //create withdraw funtion to withdraw ammount from current account 
    balance=this.accountBalance-amount;
    if(balance<0){//checking account balance should not be less than odLimit
            odBalance=(current.odLimit+this.accountBalance)-amount;
             if(odBalance<0){//checking for odlimit should not negative
                console.log("You have insufficient balance.");
             }else{
                this.accountBalance=balance;
                console.log("Your current balance is : "+balance);
             }
    }else{
        this.accountBalance=balance;
        console.log("Your current balance is : "+balance);
    }
    //console.log(balance);
}
//console.log(current);
savings.withdraw(400);
savings.getCurrentBalance();
current.withdraw(900);
current.getCurrentBalance();

