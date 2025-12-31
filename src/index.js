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
BorderTag = {class :"before:absolute before:right-0 before:top-[10%] before:h-[80%] before:w-[4px] before:bg-red-500 before:rounded-l-2xl"}
checkinputs()
})
YellowTag.addEventListener("click" , () => {
CloseTags.classList.add('hidden')
AddYellow.classList.remove('hidden')
AddYellow.classList.add('flex')
SelectedTag = {text: "متوسط" , class : "bg-yellow-200 text-yellow-500"}
BorderTag = {class :"before:absolute before:right-0 before:top-[10%] before:h-[80%] before:w-[4px] before:bg-yellow-500 before:rounded-l-2xl"}
checkinputs()
})
GreenTag.addEventListener("click" , () => {
CloseTags.classList.add('hidden')
AddGreen.classList.remove('hidden')
AddGreen.classList.add('flex')
SelectedTag = {text: "پایین" , class : "bg-green-200 text-green-500"}
BorderTag = {class :"before:absolute before:right-0 before:top-[10%] before:h-[80%] before:w-[4px] before:bg-green-600 before:rounded-l-2xl"}
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
// Create tasks and save in local storage
document.addEventListener("DOMContentLoaded" , () => {
  let WriteTask = JSON.parse(localStorage.getItem("task's-list")) || []
  function renderlist(list) {
    TaskList.innerHTML = list.map((task) =>
      `<li data-id=${task.id} class="relative bg-white border border-gray-300 rounded-lg shadow-sm">
        <div class = "${task.bodertags.class}">
        </div>
        <button  class = "open-edit absolute top-3 left-5"><img class = "cursor-pointer" src="../assets/icons/Frame 33317.svg" alt="icon"></button>

        <div class="edit-del hidden border border-gray-300 shadow-md top-10 left-5 rounded-lg ">
        <div class="flex flex-row">
        <button class = "edit-btn p-3 top-10 left-5 hover:bg-gray-200 transition-colors duration-300 rounded-r-md"><img class = "cursor-pointer" src="../assets/icons/tabler_edit.svg" alt="icon"></button>
        <div class="border-l border-gray-300"></div>
          <button class = "delete-btn p-3  top-10 left-10 hover:bg-gray-300 transition-colors duration-300 rounded-l-md"><img class = "cursor-pointer" src="../assets/icons/tabler_trash-x.svg" alt="icon"></button>
          </div>
         </div>

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

  localStorage.setItem("task's-list" ,JSON.stringify(list));

  }
  renderlist(WriteTask);
  Counter(WriteTask.length)
    if (WriteTask.length != 0) {
      NoTask.classList.add('hidden')
    }
  
    // delete list
  TaskList.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn")
  if (!deleteBtn) return

  const li = deleteBtn.closest("li")
  const id = li.dataset.id

  WriteTask = WriteTask.filter(task => task.id !== id)

  renderlist(WriteTask)
  Counter(WriteTask.length)

  if (WriteTask.length === 0) {
    NoTask.classList.remove("hidden")
  }
})
  
  // Edit list

  let currentEditId = null
  TaskList.addEventListener("click", (e) => {
  const Editbtn = e.target.closest(".edit-btn")
  if (!Editbtn) return
  
  const li = Editbtn.closest("li")
  const id = li.dataset.id;
  const taskToEdit = WriteTask.find(task => task.id === id);
})


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

 TaskList.before(AddTasks)
// Open delete and edit menu
TaskList.addEventListener("click", (e) => {
  if (e.target.closest(".open-edit")) {
    const editMenu = e.target.closest("li").querySelector(".edit-del")
    editMenu.classList.remove("hidden")
    editMenu.classList.add("absolute")
  }
})


//add task

const todayTasksList = document.querySelector("#task-list");
const completedTasksContainer = document.querySelector("#Carts");
const remainingText = document.querySelector("#EndTask p");
const emptyTasksMessage = document.querySelector("#No-Tsk");
const addTaskButton = document.querySelector("#open-tsk-menu");

// آرایه برای نگهداری اطلاعات کامل تسک‌های انجام‌شده
let completedTasks = [];

// Task counter
const ShowCounter = document.getElementById("Counter");
const Carts = document.getElementById("Carts");
const tdTaskDiv = document.getElementById("td-task");



function updateCounter() {
  const CounterLength = Carts.children.length;
  ShowCounter.textContent = `${CounterLength} تسک انجام شده است `;
}




// جلوگیری از تکرار تسک‌های انجام‌شده بعد از رندر دوباره توسط کد اصلی
const preventDuplicateObserver = new MutationObserver(() => {
  todayTasksList.querySelectorAll("li").forEach(li => {
    const title = li.querySelector("strong")?.textContent?.trim();
    const paragraph = li.querySelector("p.text-gray-500")?.textContent?.trim() || "";

    if (completedTasks.some(t => t.title === title && t.paragraph === paragraph)) {
      li.remove();
    }
  });
updateCounter();
});
preventDuplicateObserver.observe(todayTasksList, { childList: true, subtree: true });

// رویداد اصلی - با event delegation روی document (همیشه کار می‌کنه حتی بعد از چندین بار جابه‌جایی)
document.addEventListener("change", (e) => {
  if (e.target.type !== "checkbox") return;

  const checkbox = e.target;
  const taskItem = checkbox.closest("li") || checkbox.closest("div.relative");
  if (!taskItem) return;

  const isInToday = checkbox.closest("#task-list") !== null;
  const isInCompleted = checkbox.closest("#Carts") !== null;

  // استخراج عنوان و توضیحات
  const title = taskItem.querySelector("strong")?.textContent?.trim() ||
                taskItem.querySelector("p.font-semibold")?.textContent?.trim() || "";

  const paragraph = taskItem.querySelector("p.text-gray-500")?.textContent?.trim() || "";

  // پیدا کردن اطلاعات ذخیره‌شده (اگر وجود داشته باشه)
  const savedTask = completedTasks.find(t => t.title === title && t.paragraph === paragraph);

  let tag = savedTask ? savedTask.tag : null;
  let bodertagsClass = savedTask ? savedTask.bodertagsClass : "";

  // اگر تسک از لیست امروز داره میره پایین، اطلاعات رو از DOM بگیر
  if (isInToday && checkbox.checked) {
    const tagSpan = taskItem.querySelector("span[class*='bg-']");
    if (tagSpan) {
      tag = {
        text: tagSpan.textContent.trim(),
        class: tagSpan.className
      };
    }

    const borderDiv = taskItem.querySelector("div[class*='before:bg-']");
    if (borderDiv) {
      bodertagsClass = borderDiv.className;
    }
  }

  if (checkbox.checked && isInToday) {
    // → رفتن به انجام‌شده
    let doneBorder = "before:bg-green-700";
    if (bodertagsClass.includes("red")) doneBorder = "before:bg-red-500";
    else if (bodertagsClass.includes("yellow")) doneBorder = "before:bg-yellow-500";
    else if (bodertagsClass.includes("green")) doneBorder = "before:bg-green-500";

    const doneHTML = `
      <div class="relative dark:bg-[#091120] dark:border-0 w-full min-h-20 p-3 border items-center flex border-[#E9E9E9] bg-white rounded-xl overflow-hidden before:content-[''] before:absolute before:right-0 before:top-50% before:h-[80%] before:w-[4px] ${doneBorder} before:rounded-l-2xl">
        <input class="bg-[#007BFF] text-[#007BFF] accent-[#007BFF] cursor-pointer w-5 h-5" type="checkbox" checked>
        <div class="pt-3 pb-3 flex-1 flex flex-row">
          <p class="font-semibold dark:text-[#FFFFFF] text-sm px-3.5 line-through">${title}</p>
        </div>
        <button type="button" class="cursor-pointer h-5 w-1">
          <img class="h-5 w-1" src="../assets/icons/Frame 33317.svg" alt="Edit">
        </button>
      </div>
    `;
    completedTasksContainer.insertAdjacentHTML("beforeend", doneHTML);

    // ذخیره اطلاعات کامل
    completedTasks.push({
      title,
      paragraph,
      tag,
      bodertagsClass
    });

    taskItem.remove();
    Counter(todayTasksList.querySelectorAll("li").length);
  JavaScript} else if (!checkbox.checked && isInCompleted) {
  // ← برگشت به لیست امروز

  // پیدا کردن تسک در آرایه completedTasks فقط بر اساس title (کافیه چون عنوان منحصر به فرد فرض می‌شه)
  const savedTask = completedTasks.find(t => t.title === title);

  if (!savedTask) return; // ایمنی

  const { tag, bodertagsClass, paragraph } = savedTask;

  const todayHTML = `
    <li class="relative bg-white border border-gray-300 rounded-lg shadow-sm">
      <div class="${bodertagsClass || ''}"></div>
      <button class="absolute top-3 left-5">
        <img class="cursor-pointer" src="../assets/icons/Frame 33317.svg" alt="icon">
      </button>
      <div class="lg:flex lg:flex-row">
        <div class="flex justify-start items-center gap-5 m-3!">
          <input class="size-5 accent-[#007BFF]" type="checkbox" name="check">
          <strong class="text-xl">${title}</strong>
        </div>
        ${tag ? `<span class="inline-block mr-10! mb-3! mt-1! px-3 py-1 lg:mr-5! lg:mt-4! max-w-full rounded-lg text-sm ${tag.class}">${tag.text}</span>` : ''}
      </div>
      ${paragraph ? `<p class="text-gray-500 m-3! max-w-full text-ellipsis">${paragraph}</p>` : ''}
    </li>
  `;
  todayTasksList.insertAdjacentHTML("beforeend", todayHTML);

  // حذف از آرایه انجام‌شده
  completedTasks = completedTasks.filter(t => t.title !== title);

  taskItem.remove();
  Counter(todayTasksList.querySelectorAll("li").length);
}
updateCounter();
});
// به‌روزرسانی اولیه
document.addEventListener("DOMContentLoaded", updateCounter);

