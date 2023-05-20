let usersO = JSON.parse(localStorage.getItem("users"));
let userActive = [];
let emailIn = document.getElementById("email-in");
let passwordIn = document.getElementById("password-in");
let login = document.getElementById("submit-in");
login.addEventListener("click", (e) => {
  for (let i = 0; i < usersO.length; i++) {
    if (emailIn.value == usersO[i].email) {
      document.getElementById("alert-email-in").style.display = "none";
      if (passwordIn.value == usersO[i].password) {
        localStorage.setItem("activeUser", JSON.stringify(usersO[i]));
        localStorage.setItem("indexOfUserActive", i);
        location.href = "../html/homepage.html";
        break;
      } else if (
        i == usersO.length - 1 ||
        passwordIn.value != usersO[i].password
      ) {
        document.getElementById("alert-password-in").style.display = "block";

        break;
      }
    } else if (i == usersO.length - 1) {
      document.getElementById("alert-email-in").style.display = "block";
    }
  }
});
// this for show eye
eye.style.display = "none";
passwordIn.addEventListener("keyup", () => {
  if (passwordIn.value == "") {
    eye.style.display = "none";
  } else {
    eye.style.display = "inline-block";
  }
});

// this for show password
eye.addEventListener("mouseenter", () => {
  eye.classList.toggle("fa-eye");
  passwordIn.setAttribute("type", "text");
});
eye.addEventListener("mouseout", () => {
  eye.classList.toggle("fa-eye");
  passwordIn.setAttribute("type", "password");
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
