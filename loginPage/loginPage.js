var email = document.getElementById("email")
var password = document.getElementById("password")

function checkInputs(){
    if (email.value == ''){
        alert("Email must be filled!");
    } else if (!email.contains('@gmail.com')){
        alert("Email must contain '@gmail.com'");
    } else if (password.value == ''){
        alert("Password must be filled!");
    } else {
        window.location.href = "../homePage/homePage.html";
    }
}