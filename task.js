
let tasks ;

let newTask;

let removes

let closed

let restart= true

let option

while(restart){
option = prompt(`Task Manager

What would you like to do(Please enter one of the options below):
"TASK"- Displays all task
"NEW"- Add new task
"REMOVE"- Remove a task
"CLOSE"- Close task manager`).toUpperCase();

if(option === "TASK"){
    alert(`${tasks}`)

}

if (newTask === `NEW`) {
    newTask = prompt(`Enter new Task`)
    alert(`${newTask} has been added.`)
}

closed = alert(`Thank you for using task manager.`)


};