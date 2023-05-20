let users = [];
// create object contractor
function UsersObj(
  userName,
  email,
  password,
  personalDetails,
  englishTest,
  technicalTest,
  statusOfExam
) {
  (this.userName = userName),
    (this.email = email),
    (this.password = password),
    (this.personalDetails = personalDetails);
  this.englishTest = englishTest;
  this.technicalTest = technicalTest;
  this.statusOfExam = statusOfExam;
}
// -------
// ------ this for validation
let passwordRegx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
let emailRegx = /^\S+@\S+\.\S+$/;
let userNameRegx = /^\S+$/;
let upper = /^(?=.*?[A-Z])/;
let lower = /^(?=.*?[a-z])/;
let numbers = /^(?=.*?[0-9])/;
let symbols = /^(?=.*?[#?!@$%^&*-])/;
let length = /^.{8,}$/;
// ---------------
// here iam select html by dom (id)
let userNameUp = document.getElementById("user-name");
let emailUp = document.getElementById("email-up");
let passwordUp = document.getElementById("password-up");
let checkbox = document.getElementById("checkbox");
let submitUp = document.getElementById("submit-up");
let eye = document.getElementById("eye");
// ------
// here if found any data in local storage concat with (users array of obj )
// and this do to store a new data without rewrite over old data
users = users.concat(JSON.parse(localStorage.getItem("users")) || []);
// --------
// in this part i will check if password ,username and email is compatible with my regx
passwordUp.addEventListener("keyup", (e) => {
  if (upper.test(passwordUp.value)) {
    document.getElementById("1").style.color = "green";
  } else {
    document.getElementById("1").style.color = "red";
  }
  if (lower.test(passwordUp.value)) {
    document.getElementById("2").style.color = "green";
  } else {
    document.getElementById("2").style.color = "red";
  }
  if (numbers.test(passwordUp.value)) {
    document.getElementById("3").style.color = "green";
  } else {
    document.getElementById("3").style.color = "red";
  }
  if (symbols.test(passwordUp.value)) {
    document.getElementById("4").style.color = "green";
  } else {
    document.getElementById("4").style.color = "red";
  }
  if (length.test(passwordUp.value)) {
    document.getElementById("5").style.color = "green";
  } else {
    document.getElementById("5").style.color = "red";
  }
});

userNameUp.addEventListener("keyup", () => {
  if (userNameRegx.test(userNameUp.value)) {
    document.getElementById("alert-user-name").style.display = "none";
  } else {
    document.getElementById("alert-user-name").style.display = "block";
  }
});
emailUp.addEventListener("keyup", () => {
  if (emailRegx.test(emailUp.value)) {
    document.getElementById("alert-email-upp").style.display = "none";
  } else {
    document.getElementById("alert-email-upp").style.display = "block";
  }
});
// ------------------

// in this part if click in button this function will start in first will check if email is already reg before ,,,*-
submitUp.addEventListener("click", (e) => {
  try {
    users.forEach((ele) => {
      if (ele.email == emailUp.value) {
        // document.getElementById("alert-email-up").style.display = "block";
        throw error("stop loop");
      } else {
        document.getElementById("alert-email-up").style.display = "none";
      }
    });
  } catch {
    document.getElementById("alert-email-up").style.display = "block";
    return;
  }
  //  here will check if all input is compatible with my regx before store in local storage
  if (
    !userNameRegx.test(userNameUp.value) ||
    !emailRegx.test(emailUp.value) ||
    !passwordRegx.test(passwordUp.value) ||
    checkbox.checked == false
  ) {
    return;
  }
  // here if all input will check and 100%
  //  i will store in object before transfer to local storage
  let personalDetails = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      education: "",
      gender: "",
      birthDate: "",
    },
    englishTest = "",
    technicalTest = "",
    statusOfExam = "";
  let singleUsers = new UsersObj(
    userNameUp.value,
    emailUp.value,
    passwordUp.value,
    personalDetails,
    englishTest,
    technicalTest,
    statusOfExam
  );

  // here i will push data in local storage
  users.push(singleUsers);
  localStorage.setItem("users", JSON.stringify(users));
  location.href = "html/signin.html";
});
// this for show eye
eye.style.display = "none";
passwordUp.addEventListener("keyup", () => {
  if (passwordUp.value == "") {
    eye.style.display = "none";
  } else {
    eye.style.display = "inline-block";
  }
});
// this for show password
eye.addEventListener("mouseenter", () => {
  eye.classList.toggle("fa-eye");
  passwordUp.setAttribute("type", "text");
});
eye.addEventListener("mouseout", () => {
  eye.classList.toggle("fa-eye");
  passwordUp.setAttribute("type", "password");
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

let btn = document.getElementById("login-btn");
btn.addEventListener("click", () => {
  location.href = "html/signin.html";
});
