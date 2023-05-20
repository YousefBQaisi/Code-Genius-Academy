let btn = document.getElementById("progress-next4");
let activeUser = JSON.parse(localStorage.getItem("activeUser"));
let User = JSON.parse(localStorage.getItem("users"));
let Logout = document.getElementById("logout");
let indexOfUserActive = JSON.parse(localStorage.getItem("indexOfUserActive"));

btn.addEventListener("click", () => {
  User[indexOfUserActive] = activeUser;
  localStorage.setItem("users", JSON.stringify(User));
  location.href = "../html/homepage.html"; //to yousef's page
});

Logout.addEventListener("click", () => {
  //directs to the login/register page (Haroon)
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
  location.href = "../html/signin.html";
});
