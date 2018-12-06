//Create person object
var person={
    fname : "Ujwala",
    lname : "Gawari",
    age : 24,
    skills : ["Java", "js", "html"],
    address : {city : "Navi Mumbai", pincode : 400501},
    dateOfBirth : new Date('1993-04-09'),
    married : 'true',
    profession : "Analyst"
}

console.log(person);
//Create two more object and called by global print method
var person1={
    fname : "Atul",
    lname : "Tawhare",
    age : 24,
    skills : ["Java", "js", "html"],
    address : {city : "Navi Mumbai", pincode : 400501},
    dateOfBirth : new Date('1990-04-09'),
    married : 'true',
    profession : "Analyst"
}

//console.log(person1);

var person2={
    fname : "Ram",
    lname : "Raj",
    age : 24,
    skills : ["Java", "js", "html"],
    address : {city : "Navi Mumbai", pincode : 400501},
    dateOfBirth : new Date('1995-04-09'),
    married : 'false',
    profession : "Analyst"
}

//console.log(person2);
print=function(){ //global method
    console.log(person);
    console.log(person1);
    console.log(person2);
}

print();
// print=function(fname,lname,age,skills,address,city,pincode,dateOfBirth,married,profession){
//     this. = ;
//     this. = ;
//     this. = ;
//     this. = ;
//     this. = ;
//     this. = ;
//     this. = ;
// }




