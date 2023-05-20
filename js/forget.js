let usersO = JSON.parse(localStorage.getItem("users"));
let userActive = [];
let passwordRest = document.getElementById("rest-password");
let emailIn = document.getElementById("email-pas");
let userIn = document.getElementById("user-pas");
let login = document.getElementById("submit-pas");
login.addEventListener("click", (e) => {
  for (let i = 0; i < usersO.length; i++) {
    if (emailIn.value == usersO[i].email) {
      document.getElementById("alert-email-pas").style.display = "none";
      if (userIn.value == usersO[i].userName) {
        passwordRest.style.color = "green";
        passwordRest.textContent = `${usersO[i].password}`;
        document.getElementById("alert-user-pas").style.display = "none";
        break;
      } else if (i == usersO.length - 1 || userIn.value != usersO[i].userName) {
        document.getElementById("alert-user-pas").style.display = "block";
        passwordRest.textContent = `not found`;
        passwordRest.style.color = "red";
        break;
      }
    } else if (i == usersO.length - 1) {
      document.getElementById("alert-email-pas").style.display = "block";
      passwordRest.style.color = "red";
      passwordRest.textContent = `not found`;
    }
  }
});

// image slider
const images = document.querySelectorAll(".image-container img");

let o = 0;

setInterval(function () {
  images.forEach((img, o) => {
    img.style.display = "none";
  });

  if (o == images.length) {
    o = 0;
  }

  images[o].style.display = "block";

  o++;
}, 2000);

// this for register button
let btn = document.getElementById("register-btn");
btn.addEventListener("click", () => {
  location.href = "../index.html";
});
let btn1 = document.getElementById("login-btn");
btn1.addEventListener("click", () => {
  location.href = "../html/signin.html";
});
