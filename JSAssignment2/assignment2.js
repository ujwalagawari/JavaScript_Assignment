//creates one object of amitabh
var amitabh={
    fname : "Amitabh",
    lname : "Bachchan",
    age : 50,
    skills : ["Acting", "Dancing"],
    address : {city : "Navi Mumbai", pincode : 400501},
    dateOfBirth : new Date('1970-05-12'),
    married : true,
    profession : "Actor"
}
console.log(amitabh);

//inherited amitabh object in abhishek
var abhishek=Object.create(amitabh);
abhishek.fname="abhishek"; //fname is not common so change. Same for other
abhishek.age=30;
abhishek.dateOfBirth=new Date('1980-05-12');
console.log(abhishek);
console.log("First Name: "+abhishek.lname+" Last Name: "+abhishek.skills);



