"use-strict";

// Sellecting all my elements
const formInput = document.querySelector(".form__input");
const addButton = document.querySelector(".btn");
const corrIcon = document.querySelector(".task__corr");
const closeIcon = document.querySelector(".task__close");
const taskContent = document.querySelector(".main__content");
const parentElement = document.querySelector(".tasks");
const taskBox = document.querySelector(".task");

// hide the corr icon
corrIcon.classList.add("hidden");
const isClosed = true;

/**
 * this function will take the task html element and all its associate properties and recreate
 * it if a new task is created
 * @param {*} task
 */
const makeTask = function (task) {
    //TODO
    // check if the task is not empty

    // taskBox.innerHTML = "";

    let html = `
    <div class="task">
    <div class="task__corr hidden">
        <svg class="corr">
            <use xlink:href="images/icons.svg#icon-check"></use>
        </svg>
    </div>
    <div class="task__content">
        <p class="main__content">
            ${task}
        </p>
    </div>
    <div class="task__close">
        <svg class="close">
            <use xlink:href="images/icons.svg#icon-cross"></use>
        </svg>
    </div>
</div>
    `;

    taskBox.insertAdjacentHTML("afterend", html);
};

addButton.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("add button is clicked");

    const taskItem = formInput.value;
    makeTask(taskItem);
    formInput.value = "";
});

const tasks = []; // in case I will use a different approach where I have to store all the tasks

/**
 * Add corr icon before the task content.
 * Change background to green.
 * Apply a class - strikethrough to the task content.
 * Revert back the color for the close button
 */
parentElement.addEventListener("click", (e) => {
    const btn = e.target.closest(".task");
    console.log(e.target); // for testing purposes

    if (btn) {
        corrIcon.classList.remove("hidden");
        btn.classList.add("finish");
        btn.classList.add("done");
        btn.classList.add("revert");
    }
    if (!btn) return;
});
