"use-strict";

// Sellecting all my elements
const formInput = document.querySelector(".form__input");
const addButton = document.querySelector(".btn");
const corrIcon = document.querySelector(".task__corr");
const closeIcon = document.querySelector(".task__close");
const taskContent = document.querySelector(".main__content");
const parentElement = document.querySelector(".tasks");
const taskBox = document.querySelector(".li");

// hide the corr icon
// corrIcon.classList.add("hidden");
const FINISH = "finish";
const REVERT = "revert";
const HIDDEN = "hidden";
const UNHIDDEN = "unhidden";
const DONE = "done";

let tasks = []; // in case I will use a different approach where I have to store all the tasks
let id = 0;

/**
 * this function will take the task html element and all its associate properties and recreate
 * it if a new task is created
 * @param {*} task
 */
const makeTask = function (task, isDone, close) {
    if (close) return;

    const DONE = isDone ? UNHIDDEN : HIDDEN;
    const TASK_CLOSE = isDone ? FINISH : "";
    const CHANGE_COLOR = isDone ? REVERT : "";

    let html = `
    <li class="task ${TASK_CLOSE}">
    <svg class="task__corr ${DONE} ${CHANGE_COLOR}">
        <use
            xlink:href="images/icons.svg#icon-check"
            class="corr"
            status="complete"
        ></use>
    </svg>

    <div class="task__content">
        <p class="main__content " status="task_item">
            ${task}
        </p>
    </div>

    <svg class="task__close ${CHANGE_COLOR}">
        <use
            xlink:href="images/icons.svg#icon-cross"
            class="close"
            status="delete"
        ></use>
    </svg>
</li>
    `;

    parentElement.insertAdjacentHTML("afterbegin", html);
    // parentElement.insertBefore(html, parentElement.childNodes[0]);
};

addButton.addEventListener("click", (e) => {
    e.preventDefault();

    const taskItem = formInput.value;
    if (taskItem) {
        tasks.push({
            name: taskItem,
            id: id++,
        });
        makeTask(taskItem, false);
    } else {
        alert("Task cannot be empty");
    }
    formInput.value = "";
    console.log(tasks);
});

// addButton.addEventListener("click", () => {
//     let txt = formInput.value;

//     if (txt) {
//         let li = document.createElement("li");
//         li.className = "task";
//         li.innerHTML = txt;
//         parentElement.insertBefore(li, parentElement.childNodes[0]);
//         formInput.value = "";
//     }
// });

const updateTask = function (taskItem) {
    corrIcon.classList.toggle(HIDDEN);
    taskItem.classList.toggle(FINISH);
    taskContent.classList.toggle(DONE);
};

/**
 * Add corr icon before the task content.
 * Change background to green.
 * Apply a class - strikethrough to the task content.
 * Revert back the color for the close button
 */
if (closeIcon) {
    closeIcon.addEventListener("click", function (e) {
        const task = e.target.closest(".task");
        console.log(e); // for testing purposes

        if (task) {
            updateTask(task);
        } else return;
    });
}
