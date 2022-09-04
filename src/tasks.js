import addElement from './domManip.js';
import deleteLoc from './delete.png'
import closeLoc from './close-box.png'
import { circleCheck } from './domManip.js'
import { decideTaskBG } from './domManip.js';
import blankcircleloc from './checkbox-blank-circle-outline.png'
import { addTaskUiEles } from './domManip.js';
import { validateMe} from './domManip.js';
import { activeProject } from './domManip.js';
function addOptions(){
    let highPriority = addElement('option', 'priority', priorityInput, undefined, undefined, "High");
highPriority.setAttribute('value', 'high');
let mediumPriority = addElement('option', 'priority', priorityInput, undefined, undefined, "Medium");
mediumPriority.setAttribute('value', 'medium');
let lowPriority = addElement('option', 'priority', priorityInput, undefined, undefined, "Low");
lowPriority.setAttribute('value', 'low');
}
function makeInvisible(){
    newTaskForm.style.visibility= "hidden";
    newTaskForm.classList.add("disable-div");
    newTaskForm.classList.remove("enable-div");
    tasksArea.classList.add("enable-div");
    tasksArea.classList.remove("disable-div");
}
function clearText(){
    nameInput.value= "";
    dateInput.value= "";
    descInput.value= "";
}
class Task{
    constructor(taskName, taskDate, taskPriority, taskDesc, taskProject){
        this.taskName= taskName;
        this.taskDate= taskDate;
        this.taskPriority= taskPriority;
        this.taskDesc= taskDesc;
        this.taskProject= taskProject;
    }
}

let tasksDiv= addElement('div', 'tasksDiv');
let tasksMenuBar= addElement('div', 'tasksMenuBar', tasksDiv);
let addTaskButton= addElement('button', 'addTaskButton', tasksMenuBar, undefined, undefined, 'Add a task!');
let removeProjectButton= addElement('img', 'removeProjectButton', tasksMenuBar, deleteLoc);
let tasksArea = addElement('div', 'tasksArea', tasksDiv);

let newTaskForm = addElement('div', 'newTaskForm', tasksArea);

let formCloseButton= addElement('img', 'formCloseButton', newTaskForm, closeLoc);
let formElements= addElement('div', 'formElements', newTaskForm);
let nameLabel= addElement('label', 'formLabel', formElements, undefined, 'id1', "Task name:");
let nameInput= addElement('input', 'formInput', formElements, undefined, "name");
nameInput.placeholder= "Name your task";
let dateLabel= addElement('label', 'formLabel', formElements, undefined, 'id2', "Finish by:");
let dateInput= addElement('input', 'formInput', formElements, undefined, "date");
dateInput.setAttribute("type", "date");
dateInput.placeholder= "Add a date";
let priorityLabel= addElement('label', 'formLabel', formElements, undefined, 'id3', "Priority:");
let priorityInput= addElement('select', 'formInput', formElements, undefined, "priority");
addOptions();
let descLabel= addElement('label', 'formLabel', formElements, undefined, 'id4', "Description:");
let descInput= addElement('textarea', 'formInput', formElements, undefined, "desc");
descInput.placeholder= "Optional task description";
let createTaskButton= addElement('button', 'createTaskButton', newTaskForm, undefined, undefined, 'Add!');
createTaskButton.setAttribute("type", "submit");

export default function populateTasks(divToReturn){
    divToReturn.appendChild(tasksDiv);
}


addTaskButton.addEventListener("click", function showNewTaskForm(){
    newTaskForm.style.visibility= "visible";
    newTaskForm.classList.add("enable-div");
    tasksArea.classList.add("disable-div");
    clearText();
    // tasksArea.classList.add("showing-form");
});

formCloseButton.addEventListener("click", function makeInvisible(){
    newTaskForm.style.visibility= "hidden";
    newTaskForm.classList.add("disable-div");
    newTaskForm.classList.remove("enable-div");
    tasksArea.classList.add("enable-div");
    tasksArea.classList.remove("disable-div");
});
createTaskButton.addEventListener("click", function makeTask(){
    let task = new Task(nameInput.value, dateInput.value, priorityInput.value, descInput.value, activeProject);
    console.log({task});
    if (validateMe(task, nameInput, dateInput)){
    let newTask= addElement('div', 'newTask', tasksArea, undefined, "newTask");
    let newTaskCheckImage = addElement('img', 'newTaskCheckImage', newTask, blankcircleloc);
    makeInvisible();
    decideTaskBG(newTask, task);
    circleCheck(newTask, task, newTaskCheckImage);
    addTaskUiEles(newTask, task);
    nameInput.classList.remove("shakeme");
    dateInput.classList.remove("shakeme");
}
    else
    {
        return;
    }
    })
