const fullname = document.getElementById("fullname");
const email = document.getElementById("email")
const street = document.getElementById("street")
const city = document.getElementById("city")
const state = document.getElementById("state")
const postCode = document.getElementById("postcode")
const phone = document.getElementById("phone")
const cell = document.getElementById("cell")
const dateOfBirth = document.getElementById("date_of_birth")
const button = document.getElementsByTagName("button")[0];
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  button.addEventListener("click", () => {
    addNewUser()
  }
)
});

function addNewUser(){
  fetch("https://randomuser.me/api/")
  .then(response => {
    return response.json()
  })
  .then(json => {
    // console.log(json)
    let info = json.results[0]
    addName(info.name)
    addEmail(info.email)
    addStreet(info.location)
    addCity(info.location)
    addState(info.location)
    addPostCode(info.location)
    addPhone(info.phone)
    addCell(info.cell)
    addDateOfBirth(info.dob)
  })
}

function addName(object){
  let name = `${object.title} ${object.first} ${object.last}`
  fullname.textContent = name
}

function addEmail(string){
  email.textContent = string
}

function addStreet(object) {
  let newStreet = object.street
  street.textContent = newStreet
}

function addCity(object) {
  let newCity = object.city
  city.textContent = newCity
}

function addState(object) {
  let newState = object.state
  state.textContent = newState
}

function addPostCode(object) {
  let newPostCode = object.postcode
  postCode.textContent = newPostCode
}

function addPhone(string) {
  phone.textContent = string
}

function addCell(string) {
  cell.textContent = string
}

function addDateOfBirth(object) {
  let newDateOfBirth = object.date
  dateOfBirth.textContent = newDateOfBirth
}
