const sidebar = document.querySelector('.sidebar');

function showSideBar(){
    sidebar.classList.add('open');
}

function hideSideBar(){
    sidebar.classList.remove('open');
}

function navigateToSearch(){
    window.location.href = "../searchPage/searchPage.html"
}