const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const dateOfBirth = document.getElementById("date_of_birth");
const fullname = document.getElementById("fullname");



console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});



function getResponse() {
  fetch("https://randomuser.me/api/")
  .then(resp => resp.json())
  .then(json => {
    let info = json.results["0"];
    getEmail(info);
    getStreet(info);
    getCity(info);
    getState(info);
    getPostCode(info);
    getPhone(info);
    getCell(info);
    getDob(info);
    getFullName(info);
    
  })
}

function getEmail(object){
  email.innerText = object.email
}

function getStreet(object){
  street.innerText = object.location.street
}

function getCity(object){
  city.innerText = object.location.city
}

function getState(object){
  state.innerText = object.location.state
}

function getPostCode(object){
  postcode.innerText = object.location.postcode
}

function getPhone(object){
  phone.innerText = object.phone
}

function getCell(object){
  cell.innerText = object.cell
}

function getDob(object){
  dateOfBirth.innerText = object.dob.date
}

function getFullName(object){
  let firstName = object.name.first;
  let lastName = object.name.last;
  let title = object.name.title;

  fullname.innerText = `${title} ${firstName} ${lastName}`
}

let button = document.getElementById("submit-button")

button.addEventListener("click", () => {
  getResponse();
})


getResponse();


