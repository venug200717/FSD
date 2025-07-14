function submit(){
    debugger
    var fname=document.getElementById('fname')
    var lname=document.getElementById('lname')
    var fullname=fname.value+" "+lname.value
    var Email=document.getElementById('Email')
    var Password=document.getElementById('Password')
    var Address=document.getElementById('Address')
    console.log(fullname) 
    console.log(fname.value) 
    console.log(lname.value) 
    console.log(Email.value)
    console.log(Password.value)
    console.log(Address.value)
    }