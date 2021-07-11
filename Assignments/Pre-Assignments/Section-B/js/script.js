"use-strict";

// Sellecting all my elements
const formInput = document.querySelector(".form__input");
const addButton = document.querySelector(".btn");
const removeAllButton = document.querySelector(".foot__btn");
const closeIcon = document.querySelector(".task__close");
const parentElement = document.querySelector(".tasks");
const taskBox = document.querySelector(".li");

const FINISH = "finish";
const REVERT = "revert";
const HIDDEN = "hidden";
const UNHIDDEN = "unhidden";
const DONE = "done";

let tasks = []; // An emptey array of task objects for the user. everything will be cleared if page is refreshed
let id = 0; // a unique ID that will be stored in addition to any task object created.

/**
 * this function will take the newly typed in taskItem and inject it into the task html element
 * It will then further insert it into the ul as a new li item.
 * From here, we can manipulate the li item based on its ID
 * @param {*} task | the object to be created
 * @param {*} isDone | a boolean value to set the state of the task object
 */
const makeTask = function (task, isDone) {
    const DONE = isDone ? UNHIDDEN : HIDDEN;
    const TASK_CLOSE = isDone ? FINISH : "";
    const CHANGE_COLOR = isDone ? REVERT : "";

    let html = `
    <li class="task task-${id} ${TASK_CLOSE}" id=${id}>
    <svg class="task__corr ${DONE} ${CHANGE_COLOR}">
        <use
            xlink:href="images/icons.svg#icon-check"
            class="corr"
        ></use>
    </svg>

    <div class="task__content">
        <p class="main__content ">
            ${task}
        </p>
    </div>

    <svg class="task__close ${CHANGE_COLOR}">
        <use
            xlink:href="images/icons.svg#icon-cross"
            class="close"
        ></use>
    </svg>
</li>
    `;

    parentElement.insertAdjacentHTML("afterbegin", html);
};

/**
 * click on the Add button
 * After user types something into the input field - that will be termed as a taskItem / If not the user will be prompted to
 * to type something bcos the field cannot be left empty
 * It is then saved into the array of tasks with a unique ID #
 * And right afterwards passed into the makeTask funtion
 * With false as the 2nd argument - the task is created but will not be marked as done
 * Then input filed is cleared and ready for another taskItem
 */
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
    // console.log(tasks);// just for testing purposes
});

/**
 * Add corr icon before the task content.
 * Change background to green.
 * Apply a class - strikethrough to the task content.
 * Revert back the color for the close button
 * @param {*} taskItem
 * @param {*} id
 * take the task and target specific taskItem using the id passed into this function
 * Select the relevant elements and manipulate them from inside this function whan an event happens on the closeIcon
 */
const updateTask = function (taskItem, id) {
    theTask = taskItem.closest(`.task-${id}`);
    const theTaskContent = theTask.querySelector(".main__content");
    const theTaskCorrIcon = theTask.querySelector(".task__corr");
    // console.log(theTask); // just for testing purposes

    theTaskCorrIcon.classList.toggle(HIDDEN);
    theTask.classList.toggle(FINISH);
    theTaskContent.classList.toggle(DONE);
};

/**
 * This is where the magic happens
 * Click happens on the tasks, but only if the click on the .task__close that the needed action will be performed
 */
parentElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("task__close")) {
        const task = e.target.closest(".task");
        const id = Number(task.id);
        // console.log(task, id); // just for testing purposes

        if (task) {
            updateTask(task, id);
        } else return;
    }
});

/**
 * Simple trick I am using here is that when the remove all button is clicked
 * Take the parent element "ul" and set its contents/innerHTML to ""
 */
removeAllButton.addEventListener("click", function (e) {
    parentElement.innerHTML = "";
});
