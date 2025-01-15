var firstNameLabel = document.createElement("label")
firstNameLabel.setAttribute("for", "firstName")
firstNameLabel.innerHTML = "First Name"
var firstNameInput = document.createElement("input")
firstNameInput.type = "text"
firstNameInput.id = "firstName"
var firstNamebr = document.createElement("br")
var middleNameLabel = document.createElement("label")
middleNameLabel.setAttribute("for", "middleName")
middleNameLabel.innerHTML = "Middle Name"
var middleNameInput = document.createElement("input")
middleNameInput.type = "text"
middleNameInput.id = "middleName"
var middleNamebr = document.createElement("br")
var lastNameLabel = document.createElement("label")
firstNameLabel.setAttribute("for", "lastName")
lastNameLabel.innerHTML = "Last Name"
var lastNameInput = document.createElement("input")
lastNameInput.type = "text"
lastNameInput.id = "lastName"
var lastNamebr = document.createElement("br")
var emailLabel = document.createElement("label")
emailLabel.setAttribute("for", "email")
emailLabel.innerHTML = "Email"
var emailInput = document.createElement("input")
emailInput.type = "email"
emailInput.id = "email"
var emailbr = document.createElement("br")
var buttonTag = document.createElement("button")
buttonTag.type = "button"
buttonTag.setAttribute("onclick", "displayUserEnteredValues()")
buttonTag.innerHTML = "Click Me"

document.body.append(firstNameLabel, firstNameInput, firstNamebr, middleNameLabel, middleNameInput, middleNamebr, lastNameLabel, lastNameInput, lastNamebr, emailLabel, emailInput, emailbr, buttonTag)


function displayUserEnteredValues(){
    var firstName = document.getElementById("firstName").value
    var middleName = document.getElementById("middleName").value
    var lastName = document.getElementById("lastName").value
    var email = document.getElementById("email").value
    console.log("First Name: ", firstName, "Middle Name: ", middleName, "Last Name: ", lastName, "Email: ", email)
}
