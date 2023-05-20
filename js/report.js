//Retrieve user data and test results from local storage
let userData = JSON.parse(localStorage.getItem("activeUser"));

// Retrieve HTML elements
const NameSpan = document.getElementById("name");
const emailSpan = document.getElementById("email");
const phoneSpan = document.getElementById("phone");
const addressSpan = document.getElementById("age");
const englishScoreSpan = document.getElementById("english-score");
const technicalScoreSpan = document.getElementById("technical-score");
const overallScoreSpan = document.getElementById("Final-score");

// Display user data and test results
NameSpan.textContent = `${userData.personalDetails.firstName}${userData.personalDetails.lastName} `;
emailSpan.textContent = `${userData.email}`;
addressSpan.textContent = `${userData.personalDetails.birthDate}`;
phoneSpan.textContent = `${userData.personalDetails.phoneNumber}`;
englishScoreSpan.textContent = `${userData.englishTest}`;
technicalScoreSpan.textContent = `${userData.technicalTest}`;
overallScoreSpan.textContent =
  JSON.parse(`${userData.englishTest}`) +
    JSON.parse(`${userData.technicalTest}`) >=
  13
    ? "pass"
    : "fail";

let logoutButton = document.getElementById("logbtn");
logoutButton.addEventListener("click", () => {
  //directs to the login/register page (Haroon)
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
  location.href = "../html/signin.html";
});
