var form = document.getElementsByName("form");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var birthdate = document.getElementById("birthdate");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
var city = document.getElementById("city");
var country = document.getElementById("country");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
var address = document.getElementById("address");


function checkInputs(){
    if (firstname.value == ''){
        alert("First name must be filled!");
    } else if (lastname.value == ''){
        alert("Last name must be filled!");
    } else if (birthdate.value == ''){
        alert("Birth date must be filled!");
    } else if (email.value == ''){
        alert("Email must be filled!");
    } else if (!email.contains('@gmail.com')){
        alert("Email must contian '@gmail.com'!");
    } else if (phone.value == ''){
        alert("Phone number must be filled!");
    } else if (password.value == ''){
        alert("Last name must be filled!");
    } else if (confirmpassword.value == ''){
        alert("Last name must be filled!");
    } else if (confirmpassword.value != password){
        alert("Confirm password is not the same as the password!");
    } else if (country.value == ''){
        alert("Country must be filled!");
    } else if (state.value == ''){
        alert("State must be filled!");
    } else if (city.value == ''){
        alert("City must be filled!");
    } else if (zip.value == ''){
        alert("Zip must be filled!")
    } else if (address.value == ''){
        alert("Address must be filled!");
    } else {
        confirm("Success! Your registration is complete!");
        window.location.href = "../loginPage/loginPage.html";
    }
}