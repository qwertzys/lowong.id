var email = document.getElementById("email")
var password = document.getElementById("password")

function checkInputs(){
    if (email.value == ''){
        alert("Email must be filled!");
    } else if (!email.value.endsWith('@gmail.com') && !email.value.endsWith('@binus.ac.id')){
        alert("Email must contain email address!");
    } else if (password.value == ''){
        alert("Password must be filled!");
    } else {
        window.location.href = "../homePage/homePage.html";
    }
}