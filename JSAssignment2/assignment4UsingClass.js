class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    getCurrentBalance() {
        var currentBalance = this.accountBalance;
        console.log("Your current Balance is : " + currentBalance);
    }
}

class Savings extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
    }
    withdraw(amount) { //create withdraw funtion to withdraw ammount from saving account 
        var balance = this.accountBalance - amount;
        if (balance < 0) {//checking account balance should not be less than 0
            console.log("You have insufficient balance.");
        } else {
            this.accountBalance = balance;
            console.log("Your current balance is : " + balance);
        }
    }
}

class Current extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }
    withdraw(amount) {
        var balance = this.accountBalance - amount;
        if (balance < 0) {//checking account balance should not be less than odLimit
           var odBalance = (this.odLimit + this.accountBalance) - amount;
            if (odBalance < 0) {//checking for odlimit should not negative
                console.log("You have insufficient balance.");
            } else {
                this.accountBalance = balance;
                console.log("Your current balance is : " + balance);
            }
        } else {
            this.accountBalance = balance;
            console.log("Your current balance is : " + balance);
        }
    }
}
var amitabh = new Savings(4444,"Amitabh",1000,true);
amitabh.withdraw(400);
console.log(amitabh);
var abhishek = new Current(4444, "Abhishek", 1000, 700);
abhishek.withdraw(1700);
console.log(abhishek);