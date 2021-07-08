"use-strict";

// Sellecting all my elements
const formInput = document.querySelector(".form__input");
const addButton = document.querySelector(".btn");
const corrIcon = document.querySelector(".task__corr");
const closeIcon = document.querySelector(".task__close");
const taskContent = document.querySelector(".main__content");
const taskBox = document.querySelector(".task");

// hide the corr icon
corrIcon.classList.add("hidden");

/**
 * this function will take the task html element and all its associate properties and recreate
 * it if a new task is created
 * @param {*} task
 */
const makeTask = function (task) {
    //TODO
    // check if the task is not empty

    let html = `
    <div class="task">
    <div class="task__corr">
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

    taskBox.insertAdjacentHTML("beforebegin", html);
};

addButton.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("add button is clicked");

    const taskItem = formInput.value;
    makeTask(taskItem);
    formInput.value = "";
});

const tasks = []; // in case I will use a different approach where I have to store all the tasks

closeIcon.addEventListener("click", () => {
    console.log("close button is now clicked"); // this is just for testing purposes

    // 1. Add corr icon before the task content.
    corrIcon.classList.remove("hidden");

    // 2. Change background to green.
    taskBox.classList.add("finish");

    // 3. Apply a class - strikethrough to the task content.
    taskContent.classList.add("done");

    // 4. Revert back the color for the close button
    closeIcon.classList.add("revert");
});
