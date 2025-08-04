function submit(){
        debugger
var Fullname=document.getElementById('Fullname')
Fullnameregex=/^[a-zA-Z]+$/.test(Fullname.value);
if(Fullnameregex){
        console.log(Fullname.value);
                document.getElementById("hiddenName").style.display="none"
}
else{
                document.getElementById("hiddenName").style.display="block"
}

var Fathername=document.getElementById('Fathername')
Fathernameregex=/^[a-zA-Z]+$/.test(Fathername.value);
if(Fathernameregex){
        console.log(Fathername.value);
                document.getElementById("hiddenFathername").style.display="none"
}
else{
                document.getElementById("hiddenFathername").style.display="block"
}

var Mothername=document.getElementById('Mothername')
Mothernameregex=/^[a-zA-Z]+$/.test(Mothername.value);
if(Mothernameregex){
        console.log(Mothername.value);
                document.getElementById("hiddenMothername").style.display="none"
}
else{
                document.getElementById("hiddenMothername").style.display="block"
}

var Age=document.getElementById('Age')
Ageregex=/^[0-9]{2,}$/.test(Age.value);
if(Ageregex){
        console.log(Age.value);
                document.getElementById("hiddenAge").style.display="none"
}
else{
                document.getElementById("hiddenAge").style.display="block"
}

var Dob=document.getElementById('Dob')
console.log(Dob.value);

var selectedgender = "";
    var selectedgenderRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedgenderRadio) {
        selectedgender = selectedgenderRadio.value;
    }

    console.log("Selected gender :", selectedgender);
    document.getElementById('selectedValue')?.remove();

    var Email=document.getElementById('Email')
Emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z 0-9_]+\.[a-zA-Z].{2,}$/.test(Email.value);
if(Emailregex){
        console.log(Email.value);
                document.getElementById("hiddenEmail").style.display="none"
}
else{
                document.getElementById("hiddenEmail").style.display="block"
}

    var Address=document.getElementById('Address')
Addressregex=/^[#.0-9a-zA-Z\s,-]+$/.test(Address.value);
if(Addressregex){
        console.log(Address.value);
                document.getElementById("hiddenAddress").style.display="none"
}
else{
                document.getElementById("hiddenAddress").style.display="block"
}

var Phno=document.getElementById('Phno')
Phnoregex=/^[0-9]{10}$/.test(Phno.value);
if(Phnoregex){
        console.log(Phno.value);
                document.getElementById("hiddenPhno").style.display="none"
}
else{
                document.getElementById("hiddenPhno").style.display="block"
}

var course=document.getElementById('course')   
 console.log(course.value);

 var Bloodgroup=document.getElementById('Bloodgroup')   
 console.log(Bloodgroup.value);


}