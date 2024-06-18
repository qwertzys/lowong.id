const sidebar = document.querySelector('.sidebar');
// Navbar Functions

function showSideBar(){
    sidebar.classList.add('open');
}

function hideSideBar(){
    sidebar.classList.remove('open');
}

function registerSuccess(){
    confirm("Job Successfully registered!");
    window.location.href = "../homePage/homePage.html";
}

function navigateToMessage(){
    window.location.href = "../messagePage/messagePage.html";
}