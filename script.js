const buttonAddTask = document.querySelector("#buttonAddTask")
const inputTask = document.querySelector("#inputTask")
const containerTasks = document.querySelector(".tasks-container")
const modal = document.querySelector(".modal-delete")

let containerList = []

const addTaskInList = (event) => {
    event.preventDefault()

    if(inputTask.value == "") {
        alert("A lista não pode estar vazia")
        return
    }

    containerList.push(inputTask.value)

    inputTask.value = ""
    inputTask.focus()
    showTask()
}

const showTask = () => {
    let newTask = ""

    if(containerList.length != 0) {
        containerList.forEach((task, i) => {
            newTask = newTask + `
                    <li class="task flex items-center gap-12">
                        <div class="checkbox-wrapper">
                            <div class="icon-checkbox"></div>
                            <input type="checkbox" name="" id="">
                        </div>
                        <span>${task}</span>
                        <button type="button" onclick='deleteTask(${i})'>
                            <img src="./assets/trash.svg" alt="">
                        </button>
                    </li>
            `
        })
    }

    containerTasks.innerHTML = newTask
}

const deleteTask = (i) => {
    containerList.splice(i, 1)
    showTask()

    modal.classList.remove("hide-modal")
    modal.querySelector("button").onclick = (event) => {
        event.preventDefault()
        modal.classList.add("hide-modal")
    }

    setTimeout(function() {
        modal.classList.add("hide-modal")
    }, 1000)
}

buttonAddTask.addEventListener("click", addTaskInList)