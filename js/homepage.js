//HOME PAGE CODE

let personalInfo = document.getElementById("personalInfo");
let englishTest = document.getElementById("englishTest");
let technicalTest = document.getElementById("technicalTest");
let submitBtn = document.getElementById("submitBtn");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let appstat = document.getElementById("appstat");
let Progress = document.getElementById("Progress");
let Progress1 = document.getElementById("Progress1");
let Progress2 = document.getElementById("Progress2");
let activeUser = JSON.parse(localStorage.getItem("activeUser"));
let Logout = document.getElementById("Logout");

if (
  activeUser.personalDetails.firstName != "" &&
  activeUser.personalDetails.lastName != "" &&
  activeUser.personalDetails.phoneNumber != "" &&
  activeUser.personalDetails.education != "" &&
  activeUser.personalDetails.gender != "" &&
  activeUser.personalDetails.birthDate != ""
) {
  Progress.textContent = "Completed";
  Progress.style.color = "limegreen";
} else {
  personalInfo.addEventListener("click", (e) => {
    {
      //direct to the personal details section(شهرزاد)
      location.href = "../html/personal-info1.html";
    }
  });
}
if (activeUser.englishTest != "") {
  Progress1.textContent = "Completed";
  Progress1.style.color = "limegreen";
} else {
  englishTest.addEventListener("click", (e) => {
    // direct to the english test (شهرزاد|| abdullah)
    location.href = "../html/english.html";
  });
}

if (activeUser.technicalTest != "") {
  Progress2.textContent = "Completed";
  Progress2.style.color = "limegreen";
} else {
  technicalTest.addEventListener("click", (e) => {
    // direct to technical test (abdullah)
    location.href = "../html/technical.html";
  });
}

if (
  Progress.textContent == "Completed" &&
  Progress1.textContent == "Completed" &&
  Progress2.textContent == "Completed"
) {
  submitBtn.disabled = false;
}

submitBtn.addEventListener("click", () => {
  {
    location.href = "../html/report.html";
  }
});

Name.textContent = `Welcome  ${activeUser.userName}!`;

email.textContent = `${activeUser.email}`;

if (activeUser.personalDetails.phoneNumber == "") {
  mobile.textContent = "**********";
} else {
  mobile.textContent = `${activeUser.personalDetails.phoneNumber}`;
}

if (
  Progress.textContent == "Completed" &&
  Progress1.textContent == "Completed" &&
  Progress2.textContent == "Completed"
) {
  appstat.textContent = "Pending";
}

Logout.addEventListener("click", () => {
  //directs to the login/register page (Haroon)
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
  location.href = "../html/signin.html";
});
