function submit() {
    debugger;
    var fname = document.getElementById('fname');
    console.log(fname.value);

    var Email = document.getElementById('Email');
    console.log(Email.value);

    var Phonenumber = document.getElementById('Phonenumber');
    console.log(Phonenumber.value);

    var selectedtshirts = "";
    var selectedtshirtsRadio = document.querySelector('input[name="tshirts"]:checked');
    if (selectedtshirtsRadio) {
        selectedtshirts = selectedtshirtsRadio.value;
    }
    console.log("Selected tshirts :", selectedtshirts);
    document.getElementById('selectedValue')?.remove(); 


    var selectedgender = "";
    var selectedgenderRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedgenderRadio) {
        selectedgender = selectedgenderRadio.value;
    }
    console.log("Selected gender :", selectedgender);
    document.getElementById('selectedValue')?.remove(); 
    
    // Get selected food preference
    var selectedfood = "";
    var selectedfoodRadio = document.querySelector('input[name="food"]:checked');
    if (selectedfoodRadio) {
        selectedfood = selectedfoodRadio.value;
    }
    console.log("Selected food Preference:", selectedfood);
    document.getElementById('selectedValue')?.remove();

  }
