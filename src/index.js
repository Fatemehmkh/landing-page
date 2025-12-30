// HamburgerMenu & SideBar //
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const menuBar = document.querySelector("#menuBar");
const overlay = document.querySelector("#overlay");
console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  menuBar.classList.remove("-right-72");
  menuBar.classList.add("right-0");
  overlay.classList.remove("opacity-0", "pointer-events-none");
});

closeBtn.addEventListener("click", () => {
  menuBar.classList.remove("right-0");
  menuBar.classList.add("-right-72");
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

// Shamsi Date
const today = new Date();

const weekday = today.toLocaleDateString("fa-IR-u-ca-persian", {
  weekday: "long",
});

const date = today.toLocaleDateString("fa-IR-u-ca-persian", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

document.getElementById("todayDate").innerText = `امروز، ${weekday}، ${date}`;
document.getElementById("todayDate-1").innerText = `امروز، ${weekday}، ${date}`;


// Active State
const menuItems = document.querySelectorAll("#menuBar .flex.items-center");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) =>
      i.classList.remove("bg-[#F5FAFF]", "text-[#007BFF]")
    );
    item.classList.add("bg-[#F5FAFF]", "text-[#007BFF]");
  });
});

// Add Tasks

const AddTasks = document.querySelector("#add-tsk");
const OpenTaskMenu = document.querySelector("#open-tsk-menu");
const NoTask = document.querySelector("#No-Tsk");
const CloseTasksMenu = document.querySelector("#cls-addtsk");
console.log(AddTasks);

OpenTaskMenu.addEventListener("click", () => {
  AddTasks.classList.remove("hidden");
  requestAnimationFrame(() => {
    AddTasks.classList.remove(
      "opacity-0",
      "-translate-y-4",
      "pointer-events-none"
    );
    AddTasks.classList.add("opacity-100", "translate-y-0", "flex");
  });
  NoTask.classList.add("hidden");
  OpenTaskMenu.classList.add("hidden");
});

CloseTasksMenu.addEventListener("click", () => {
  AddTasks.classList.add(
    "opacity-0",
    "-translate-y-4",
    "pointer-events-none",
    "hidden"
  );
  AddTasks.classList.remove("opacity-100", "translate-y-0", "flex");
  NoTask.classList.remove("hidden");
  OpenTaskMenu.classList.remove("hidden");
});

// Add Tags

const CloseTags = document.querySelector("#Close-tags");
const AddTags = document.querySelector("#Tags");
const CloseTagsBtn = document.querySelector("#close-tg-btn");

AddTags.addEventListener("click", () => {
  CloseTags.classList.remove("hidden");
  requestAnimationFrame(() => {
    CloseTags.classList.remove(
      "opacity-0",
      "-translate-y-4",
      "pointer-events-none"
    );
  });
  AddTags.classList.add("hidden");
});

CloseTagsBtn.addEventListener("click", () => {
  CloseTags.classList.add(
    "opacity-0",
    "-translate-y-4",
    "pointer-events-none",
    "hidden"
  );
  AddTags.classList.remove("hidden");
  DisplayTg.classList.add("hidden");
});
