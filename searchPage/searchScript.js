const sidebar = document.querySelector('.sidebar');
// Navbar Functions

function showSideBar(){
    sidebar.classList.add('open');
}

function hideSideBar(){
    sidebar.classList.remove('open');
}

let products = {
    data: [
        {
            jobName: "Accounting",
            location: "Indonesia, Jakarta",
            rating: "4.5",
            salary: "Rp. 5,000,000 - Rp. 7,250,000 per Month",
            image: "../searchPage/jobImage/job1.jpg",
        },

        {
            jobName: "Education",
            location: "Japan, Hokkaido",
            rating: "4.5",
            salary: "Rp. 8,000,000 - Rp. 11,250,000 per Month",
            image: "../searchPage/jobImage/job2.jpg",
        },

        {
            jobName: "Marketing",
            location: "Europe, Finland",
            rating: "4.9",
            salary: "Rp. 7,250,000 - 10,000,000 per Month",
            image: "../searchPage/jobImage/job3.jpg",
        },
    ],
};

for (let i of products.data){
    // Create Card
    let card = document.createElement("div");
    // Cards have salary
    card.classList.add("card", "i.salary");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // // job name
    let name = document.createElement("h5"); /* ? */
    name.classList.add("job-name");
    name.innerText = i.jobName.toUpperCase();
    container.appendChild(name);
    // // rating
    let rating = document.createElement("h6");
    rating.innerText = i.rating + " Rating";
    container.appendChild(rating)
    // Salary
    let salary = document.createElement("h6");
    salary.innerText = i.salary;
    container.appendChild(salary);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value){
    let buttons = document.querySelector(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

        let elements = document.querySelector(".card");
        elements.forEach((element) => {
            if (value == "all") {
                element.classList.remove("hide");
            } else {
                if (element.classList.cotains(value)){
                    element.classList.remove("hide");
                } else {
                    element.classList.add("hide");
                }
            }
        })
    })
}

// search function
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".jobName");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

window.onload = () => {
    filterProduct("all");
};

function navigateToJobs(){
    window.location.href = "../searchPage/jobPage/jobPage.html";
}

document.getElementById("products").addEventListener("click", () => {
    window.location.href = "../searchPage/jobPage/jobPage.html";
});