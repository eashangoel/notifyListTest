import addElement from './domManip.js';
import deleteLoc from './delete.png'
import closeLoc from './close-box.png'
import { circleCheck } from './domManip.js'
import { decideTaskBG } from './domManip.js';
import blankcircleloc from './checkbox-blank-circle-outline.png'
import { addTaskUiEles } from './domManip.js';
import { validateMe} from './domManip.js';
import { activeProject } from './domManip.js';
import { resetTasks} from './domManip.js';
import checkLoc from './check-bold-2.png'


const obj = {
        "high" : 1,
        "medium" : 2,
        "low" : 3,
        "verylow": 4,
}

let tasksArray= [];
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
function fillCheckedOrUnchecked(element){
    if (element.taskPriority=="verylow"){
        let newTask= addElement('div', 'newTask', tasksArea, undefined, "newTask");
        let newTaskCheckImage = addElement('img', 'newTaskCheckImage', newTask, checkLoc);
        newTaskCheckImage.classList.add("rotateme");
        newTask.classList.add("ivebeenchecked");
        newTask.style.border= "1.5px solid gray";
        newTask.style.color= "gray";
        circleCheck(newTask, element, newTaskCheckImage);
        addTaskUiEles(newTask, element);}
        else
        {
        let newTask= addElement('div', 'newTask', tasksArea, undefined, "newTask");
        let newTaskCheckImage = addElement('img', 'newTaskCheckImage', newTask, blankcircleloc);
        decideTaskBG(newTask, element);
        circleCheck(newTask, element, newTaskCheckImage);
        addTaskUiEles(newTask, element);
        }
}
export function showRelevantTasks(projNum){
    //tasksArea.innerHTML= "";
    let a= JSON.parse(localStorage.getItem("tasksLocalArray"));
    while (tasksArea.childNodes.length > 1) {
        tasksArea.removeChild(tasksArea.lastChild);
    }
    a.sort(function(a,b){return obj[a.taskPriority]-obj[b.taskPriority]});
    a.forEach(element => {
        if (projNum==0){
            fillCheckedOrUnchecked(element);
        }else if (projNum==element.taskProject){
            fillCheckedOrUnchecked(element);
        }
        })
    return 0;
}
function clearText(){
    nameInput.value= "";
    dateInput.value= "";
    descInput.value= "";
}
class Task{
    constructor(taskName, taskDate, taskPriority, taskDesc, taskProject, taskID, taskChecked){
        this.taskName= taskName;
        this.taskDate= taskDate;
        this.taskPriority= taskPriority;
        this.taskDesc= taskDesc;
        this.taskProject= taskProject;
        this.taskID= taskID;
        this.taskChecked= taskChecked;
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
export function updateDashboardLabel(element){
  dashboardP.textContent= capitalizeFirstLetter(element.projectName)+" Dashboard";
}
let tasksDiv= addElement('div', 'tasksDiv');
let dashboardP= addElement('p', 'dashboardP', tasksDiv);
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
    //tasksArea.classList.add("disable-div");
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
function pushIntoTasksLocalArray(functask){
    let task = functask;
    let a= JSON.parse(localStorage.getItem("tasksLocalArray"));
    a.push(task);
    localStorage.setItem("tasksLocalArray",JSON.stringify(a));
    console.log(JSON.parse(localStorage.getItem("tasksLocalArray")));
}
createTaskButton.addEventListener("click", function makeTask(){
    let b= parseInt(localStorage.getItem('taskLocalId'));
    let task = new Task(nameInput.value, dateInput.value, priorityInput.value, descInput.value, activeProject, b, false);
    if (validateMe(task, nameInput, dateInput)){
        b+=1;
        localStorage.setItem('taskLocalId', b);
        tasksArray.push(task);
        pushIntoTasksLocalArray(task);
        makeInvisible();
        let temp= showRelevantTasks(activeProject);
        nameInput.classList.remove("shakeme");
        dateInput.classList.remove("shakeme");
}
    else
    {
        return;
    }
    });

    export {tasksArray};