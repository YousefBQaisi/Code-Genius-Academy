let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let gender = document.getElementById("gender");
let birthDate = document.getElementById("Date-Of-Birth");
let phoneNumber = document.getElementById("phone-number");
let btn1 = document.getElementById("progress-next1");
let Logout = document.getElementById("logout");
let activeUser = JSON.parse(localStorage.getItem("activeUser"));

btn1.addEventListener("click", () => {
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    gender.value != "" &&
    birthDate.value != ""
  ) {
    activeUser.personalDetails.firstName = `${firstName.value}`;
    activeUser.personalDetails.lastName = `${lastName.value}`;
    activeUser.personalDetails.gender = `${gender.value}`;
    activeUser.personalDetails.birthDate = `${birthDate.value}`;
    activeUser.personalDetails.phoneNumber = `${phoneNumber.value}`;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }
});

Logout.addEventListener("click", () => {
  //directs to the login/register page (Haroon)
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
  location.href = "../html/signin.html";
});
