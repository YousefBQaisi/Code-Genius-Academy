let btn2 = document.getElementById("progress-next2");
let education = document.getElementById("education");
let activeUser = JSON.parse(localStorage.getItem("activeUser"));
let Logout = document.getElementById("logout");

btn2.addEventListener("click", () => {
  if (education.value != "") {
    activeUser.personalDetails.education = education.value;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }
});

Logout.addEventListener("click", () => {
  //directs to the login/register page (Haroon)
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
  location.href = "../html/signin.html";
});
