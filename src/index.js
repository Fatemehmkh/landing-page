// HamburgerMenu & SideBar //
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const menuBar = document.querySelector("#menuBar");
const overlay = document.querySelector("#overlay");
console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  menuBar.classList.remove("-right-64");
  menuBar.classList.add("right-0");
  overlay.classList.remove("opacity-0", "pointer-events-none");
});

closeBtn.addEventListener("click", () => {
  menuBar.classList.remove("right-0");
  menuBar.classList.add("-right-64");
  overlay.classList.add("opacity-0", "pointer-events-none");
});

// dark mode & light mode //

const btnLight = document.getElementById("btn-light");
const btnDark = document.getElementById("btn-dark");
const html = document.documentElement;

btnDark.addEventListener("click", () => {
  btnLight.classList.remove("bg-white");
  html.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

btnLight.addEventListener("click", () => {
  btnLight.classList.add("bg-white");
  html.classList.remove("dark");
  localStorage.setItem("theme", "light");
});

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}
