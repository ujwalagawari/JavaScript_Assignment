var amitabh={
    fname : "Amitabh",
    lname : "Bachchan",
    age : 50,
    skills : ["Acting", "Dancing"],
    address : {city : "Navi Mumbai", pincode : 400501},
    dateOfBirth : new Date('1970-05-12'),
    married : 'true',
    profession : "Actor"
}
console.log(amitabh);

var abhishek=Object.create(amitabh);
abhishek.fname="Abhishek";
abhishek.age=30;
abhishek.dateOfBirth=new Date('1980-05-12');
console.log(abhishek);
console.log("First Name: "+abhishek.fname+" Last Name: "+abhishek.lname+" age: "+abhishek.age);

//inherited abhishek object in aaradhya. Aaradhya will get all properties of Abhishek and amitabh
var aaradhya=Object.create(abhishek);
aaradhya.fname="Aaradhya";//fname is not common so change. Same for other
aaradhya.age=8;
aaradhya.dateOfBirth=new Date('2010-05-12');
aaradhya.skills=["Drawing","Dancing"];
aaradhya.married="false";
aaradhya.profession="Student";
console.log(aaradhya);
console.log("Aaradhya's First Name: "+aaradhya.fname+" Last Name: "+aaradhya.lname+
" skills: "+aaradhya.skills+" address:"+aaradhya.address.city+
" profession: "+aaradhya.profession+" married: "+aaradhya.married);
