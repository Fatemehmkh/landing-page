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



// Add Tasks

const AddTasks = document.querySelector("#add-tsk")
const OpenTaskMenu = document.querySelector("#open-tsk-menu")
const NoTask = document.querySelector("#No-Tsk")
const CloseTasksMenu = document.querySelector("#cls-addtsk")
console.log(AddTasks)

OpenTaskMenu.addEventListener("click" , () => {
  AddTasks.classList.remove('hidden')
  requestAnimationFrame(() => {
    AddTasks.classList.remove('opacity-0','-translate-y-4','pointer-events-none')
    AddTasks.classList.add('opacity-100','translate-y-0','flex')
  })
  NoTask.classList.add('hidden')
  OpenTaskMenu.classList.add('hidden')
  
})


CloseTasksMenu.addEventListener("click" , () => {
  AddTasks.classList.add('opacity-0','-translate-y-4','pointer-events-none','hidden')
  AddTasks.classList.remove('opacity-100','translate-y-0','flex')
  NoTask.classList.remove('hidden')
  OpenTaskMenu.classList.remove('hidden')


})


// Add Tags

const CloseTags = document.querySelector("#Close-tags")
const AddTags = document.querySelector("#Tags")
const CloseTagsBtn = document.querySelector("#close-tg-btn")

AddTags.addEventListener("click" , () => {
  CloseTags.classList.remove('hidden')
  requestAnimationFrame(() => {
    CloseTags.classList.remove('opacity-0','-translate-y-4','pointer-events-none')

  })
  AddTags.classList.add('hidden')
})

CloseTagsBtn.addEventListener("click" , () => {
  CloseTags.classList.add('opacity-0','-translate-y-4','pointer-events-none','hidden')
  AddTags.classList.remove('hidden')
})
// disable add button
const Taskname = document.querySelector("#task-name")
const Taskinfo = document.querySelector("#task-info")
const Button = document.querySelector("#btn-dsble")

function checkinputs() {
  Button.disabled =
  Taskname.value.trim() === "" || Taskinfo.value.trim() === "" || SelectedTag === null ;
}

Taskname.addEventListener("input" , checkinputs);
Taskinfo.addEventListener("input" , checkinputs);

// selected tag
let SelectedTag = null;
let BorderTag = null;

const RedTag = document.querySelector("#red-tag")
const YellowTag = document.querySelector("#ylw-tag")
const GreenTag = document.querySelector("#green-tag")
const AddRed = document.querySelector("#add-red")
const AddYellow = document.querySelector("#add-ylw")
const AddGreen = document.querySelector("#add-green")

RedTag.addEventListener("click" , () => {
CloseTags.classList.add('hidden')
AddRed.classList.remove('hidden')
AddRed.classList.add('flex')
SelectedTag = {text: "بالا" , class : "bg-red-300 text-red-500"}
BorderTag = {class :"border-r-4 border-red-500"}
checkinputs()
})
YellowTag.addEventListener("click" , () => {
CloseTags.classList.add('hidden')
AddYellow.classList.remove('hidden')
AddYellow.classList.add('flex')
SelectedTag = {text: "متوسط" , class : "bg-yellow-200 text-yellow-500"}
BorderTag = {class :"border-r-4 border-yellow-500"}
checkinputs()
})
GreenTag.addEventListener("click" , () => {
CloseTags.classList.add('hidden')
AddGreen.classList.remove('hidden')
AddGreen.classList.add('flex')
SelectedTag = {text: "پایین" , class : "bg-green-200 text-green-500"}
BorderTag = {class :"border-r-4 border-green-500"}
checkinputs()
})

AddRed.addEventListener("click" , () => {
  CloseTags.classList.remove('hidden')
  AddRed.classList.add('hidden')
})

AddYellow.addEventListener("click" , () => {
  CloseTags.classList.remove('hidden')
  AddYellow.classList.add('hidden')
})

AddGreen.addEventListener("click" , () => {
  CloseTags.classList.remove('hidden')
  AddGreen.classList.add('hidden')
})
// Add task list + count task + reset menu

// Count tasks
const TaskCounter = document.querySelector("#task-counter")
function Counter(count) {
  if (count === 0) {
    TaskCounter.textContent = "تسکی برای امروز نداری!"
  } else {
    TaskCounter.textContent = `${count} تسک را باید انجام دهید`
  }
}

const TaskList = document.querySelector("#task-list")
// Create tasks
document.addEventListener("DOMContentLoaded" , () => {
  let WriteTask = []
  function renderlist(list) {
    TaskList.innerHTML = list.map((task) =>
      `<li class="relative bg-white border border-gray-300 rounded-lg shadow-sm">
        <div class = "absolute ${task.bodertags.class} -right-10 rounded-l-lg">
        </div>
        <button class = "absolute top-3 left-5"><img class = "cursor-pointer" src="../assets/icons/Frame 33317.svg" alt="icon"></button>
        <div class="lg:flex lg:flex-row">
          <div class="flex justify-start items-center gap-5 m-3!">
             <input class="size-5" type="checkbox" name="check">
             <strong class="text-xl">${task.title}</strong>
          </div>
          <span class="inline-block mr-10! mb-3! mt-1! px-3 py-1 lg:mr-5! lg:mt-4! max-w-full rounded-lg text-sm ${task.tag.class}"> ${task.tag.text} </span>
          </div>
          <p class="text-gray-500 m-3! max-w-full text-ellipsis">${task.paragraph}</p>
        </li>`
  ).join("")
  }
  renderlist(WriteTask);
  
  
  Button.addEventListener("click" , () => {
    const TaskTitle = Taskname.value
    const TaskInformation = Taskinfo.value
    
    const newlist = {
      id: new Date().toISOString()
     , title : TaskTitle
     , paragraph : TaskInformation
     , tag : SelectedTag
      , bodertags : BorderTag
    } 

    //reset task's menu
  function resetAddTaskMenu() {
  
  Taskname.value = "";
  Taskinfo.value = "";
  Button.disabled = true;

  SelectedTag = null;
  BorderTag = null;

  AddRed.classList.add("hidden");
  AddYellow.classList.add("hidden");
  AddGreen.classList.add("hidden");
  CloseTags.classList.add("hidden");
  AddTags.classList.remove("hidden");
}
    
    TaskList.before(AddTasks)
    WriteTask = [...WriteTask , newlist]
    renderlist(WriteTask)
    Counter(WriteTask.length)
    resetAddTaskMenu()

  //reset menu page and show task list
  AddTasks.classList.add('opacity-0','-translate-y-4','pointer-events-none','hidden')
  AddTasks.classList.remove('opacity-100','translate-y-0','flex')
  NoTask.classList.add('hidden')
  OpenTaskMenu.classList.remove('hidden')
  Taskname.addEventListener("input" , checkinputs);
  Taskinfo.addEventListener("input" , checkinputs);
 })
});
