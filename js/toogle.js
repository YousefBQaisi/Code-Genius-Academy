let themeToggler = document.querySelector(".theme-toggler");
let moonCover = document.querySelector(".moon-cover");

let x = localStorage.getItem("theme");
themeToggler.addEventListener("click", () => {
  if (x == "dark") {
    x = "light";
    localStorage.setItem("theme", x);
  } else {
    x = "dark";
    localStorage.setItem("theme", x);
  }
  if (x == "light") {
    themeToggler.style.backgroundColor = "yellow";
    moonCover.style.backgroundColor = "yellow";
    themeToggler.style.boxShadow = "0px 0px 20px yellow";
    themeToggler.style.transform = "rotate(0deg)";
    document.documentElement.style.setProperty("--deep-blue", "#3700b3");
    document.documentElement.style.setProperty("--light-blue", "#6200ee");
    document.documentElement.style.setProperty("--dm-purple", "#bb86fc");
    moonCover.style.display = "none";
  } else {
    themeToggler.style.backgroundColor = "white";
    moonCover.style.backgroundColor = "var(--deep-blue)";
    themeToggler.style.boxShadow = "0px 0px 30px white";
    themeToggler.style.transform = "rotate(-180deg)";
    document.documentElement.style.setProperty("--deep-blue", "#000000");
    document.documentElement.style.setProperty("--light-blue", "#4d4d4d");
    document.documentElement.style.setProperty("--dm-purple", "#6200ee");
    moonCover.style.display = "flex";
  }
});
if (x == "dark") {
  themeToggler.style.backgroundColor = "white";
  moonCover.style.backgroundColor = "var(--deep-blue)";
  themeToggler.style.boxShadow = "0px 0px 30px white";
  themeToggler.style.transform = "rotate(-180deg)";
  document.documentElement.style.setProperty("--deep-blue", "#000000");
  document.documentElement.style.setProperty("--light-blue", "#4d4d4d");
  document.documentElement.style.setProperty("--dm-purple", "#6200ee");
  moonCover.style.display = "flex";
} else {
  themeToggler.style.backgroundColor = "yellow";
  moonCover.style.backgroundColor = "yellow";
  themeToggler.style.boxShadow = "0px 0px 20px yellow";
  themeToggler.style.transform = "rotate(0deg)";
  document.documentElement.style.setProperty("--deep-blue", "#3700b3");
  document.documentElement.style.setProperty("--light-blue", "#6200ee");
  document.documentElement.style.setProperty("--dm-purple", "#bb86fc");
  moonCover.style.display = "none";
}
