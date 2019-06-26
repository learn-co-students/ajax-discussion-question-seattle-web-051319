const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const date_of_birth = document.getElementById("date_of_birth");


console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?




document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function getRequest() {
  fetch("https://randomuser.me/api/")
  .then(resp => resp.json() )
  .then(json => {

    let results = json.results["0"]
    fullname.innerText = `${results.name.title} ${results.name.first} ${results.name.last}`
    email.innerText = `${results.email}`
    street.innerText = `${results.location.street}`
    city.innerText = `${results.location.city}`
    state.innerText = `${results.location.state}`
    postcode.innerText = `${results.location.postcode}`
    phone.innerText = `${results.phone}`
    cell.innerText = `${results.cell}`
    date_of_birth.innerText = `${results.dob.date}`

})
}

const button = document.querySelector(".btn");
button.addEventListener("click", getRequest);
