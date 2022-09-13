"use strict";
(self["webpackChunknotifylisttest"] = self["webpackChunknotifylisttest"] || []).push([["home"],{

/***/ "./src/domManip.js":
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "addTaskUiEles": () => (/* binding */ addTaskUiEles),
/* harmony export */   "circleCheck": () => (/* binding */ circleCheck),
/* harmony export */   "decideTaskBG": () => (/* binding */ decideTaskBG),
/* harmony export */   "default": () => (/* binding */ addElement),
/* harmony export */   "populateProject": () => (/* binding */ populateProject),
/* harmony export */   "populateProjects": () => (/* binding */ populateProjects),
/* harmony export */   "putButtonInLocalStorage": () => (/* binding */ putButtonInLocalStorage),
/* harmony export */   "resetProjects": () => (/* binding */ resetProjects),
/* harmony export */   "resetTasks": () => (/* binding */ resetTasks),
/* harmony export */   "validateMe": () => (/* binding */ validateMe)
/* harmony export */ });
/* harmony import */ var _check_bold_2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-bold-2.png */ "./src/check-bold-2.png");
/* harmony import */ var _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-blank-circle-outline.png */ "./src/checkbox-blank-circle-outline.png");
/* harmony import */ var _minus_circle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minus-circle.png */ "./src/minus-circle.png");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");






let activeProject =0;
class newButton{
    constructor(projectName, projectID){
        this.projectName= projectName;
        this.projectID= projectID;
    }
}

function addElement(type, classname, addTo=null, srcEle= null, id=null, text=null){
    let ele = document.createElement(type);
    ele.classList.add(classname);
    if (srcEle!==null){
        ele.src= srcEle;
    }
    if(id!== null){
        ele.id= id;
    }
    if (text!== null){
        ele.innerHTML = text;
    }
    if (addTo!== null){
        addTo.appendChild(ele)
    }
    
    return ele;
}

function putButtonInLocalStorage(name){
    let a= JSON.parse(localStorage.getItem("sideBarButtonsArray"));
    let b= parseInt(localStorage.getItem('sideBarButtonsId'));
    b+=1;
    localStorage.setItem('sideBarButtonsId', b);
    let nextButton = new newButton(name, b)
    a[b]= nextButton;
    localStorage.setItem("sideBarButtonsArray",JSON.stringify(a));
    console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
    return nextButton;
}

function populateProjects(buttonList){
    let a= JSON.parse(localStorage.getItem("sideBarButtonsArray"));
    a.forEach(element => {
        if (element.projectID==0){
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.updateDashboardLabel)(element);
        }
        let newButton = addElement('button', 'buttonsInList', buttonList, undefined, element.projectID, element.projectName);
        newButton.addEventListener("click", function updateActiveProj(){
            activeProject= element.projectID;
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.updateDashboardLabel)(element);
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.showRelevantTasks)(activeProject);
        })
    });
    console.log(buttonList.lastChild.id);
}
function populateProject(buttonList, buttonObject){
    let newButton = addElement('button', 'buttonsInList', buttonList, undefined, buttonObject.projectID, buttonObject.projectName);
    newButton.addEventListener("click", function updateActiveProj(){
            activeProject= buttonObject.projectID;
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.updateDashboardLabel)(newButton);
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.showRelevantTasks)(activeProject);
    })
    };


function resetProjects(){
    let sideBarButtonsArray= [];
    localStorage.setItem("sideBarButtonsArray",JSON.stringify(sideBarButtonsArray));
    localStorage.setItem('sideBarButtonsId',0);
    let a = JSON.parse(localStorage.getItem("sideBarButtonsArray"));
    let nextButton = new newButton("All", 0)
    a[0]= nextButton;
    localStorage.setItem("sideBarButtonsArray",JSON.stringify(a));
    console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
}

function resetTasks(){
    let tasksLocalArray= [];
    localStorage.setItem("tasksLocalArray",JSON.stringify(tasksLocalArray));
    localStorage.setItem('taskLocalId',0);
}

function circleCheck(funcnewTask, functask, funcnewTaskCheckImage){
    let task = functask;
    let status= "unchecked";
    let newTask= funcnewTask;
    let newTaskCheckImage= funcnewTaskCheckImage;
    let minusButtonDiv= addElement('div', 'minusButtonDiv', undefined);
    let minusButton = addElement('img', 'minusButton', minusButtonDiv, _minus_circle_png__WEBPACK_IMPORTED_MODULE_2__);
    let descP= addElement('p', 'descP', undefined, undefined, undefined, task.taskDesc);  
    newTaskCheckImage.addEventListener("mouseover", function changeIcon(){
        newTaskCheckImage.src= _check_bold_2_png__WEBPACK_IMPORTED_MODULE_0__;
        newTaskCheckImage.classList.add("rotateme");
    })
    newTaskCheckImage.addEventListener("mouseleave", function changeIcon(){
        if (status=="unchecked"){
        newTaskCheckImage.src= _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_1__;
        newTaskCheckImage.classList.remove("rotateme");}
    })    
    newTask.addEventListener("mouseleave", function changeIcon(){
        minusButton.classList.remove("rotateme");
        newTask.style.height= "10%";
        if (newTask.classList.contains("grid")){
        newTask.removeChild(minusButtonDiv);
        newTask.removeChild(descP);
        newTaskCheckImage.classList.remove("grid");}
        newTask.classList.remove("grid");
    }) 
    newTask.addEventListener("click", function logMeeee(){
        console.log("Im the task project "+ task.taskID);
        newTask.style.height= "8rem";
        newTask.appendChild(minusButtonDiv);
        newTask.classList.add("grid");
        if (descP.textContent==""){
            descP.textContent="No description";
        }
        newTask.appendChild(descP);
        newTaskCheckImage.classList.add("grid");
        minusButton.classList.add("rotateme");
    })
    newTaskCheckImage.addEventListener("click", ()=>{
        newTask.classList.add("ivebeenchecked");
        newTask.style.border= "1.5px solid gray";
        newTask.style.color= "gray";
        status= "checked";
        newTaskCheckImage.src= _check_bold_2_png__WEBPACK_IMPORTED_MODULE_0__;
        let a= JSON.parse(localStorage.getItem("tasksLocalArray"));
        for (let i=0; i<a.length; i++){
            if(a[i].taskID ==task.taskID){
                a[i].taskPriority= "verylow";
            }
        }
        localStorage.setItem("tasksLocalArray",JSON.stringify(a));
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.showRelevantTasks)(activeProject);
    })
    minusButton.addEventListener("click", ()=>{
        let a= JSON.parse(localStorage.getItem("tasksLocalArray"));
        for (let i=0; i<a.length; i++){
            if(a[i].taskID ==task.taskID){
                a.splice(i, 1);
            }
        }
        console.log(a);
        localStorage.setItem("tasksLocalArray",JSON.stringify(a));
        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.showRelevantTasks)(activeProject);
    })
}

function decideTaskBG(newTask, task){
    switch(task.taskPriority){
        case 'high': newTask.style.border= "1.5px solid #ff6961"; newTask.style.backgroundColor= "#ffdbd9"; break;
        case 'medium': newTask.style.border= "1.5px solid #c4bc00"; newTask.style.backgroundColor= "#fffdcd"; break;
        case 'low': newTask.style.border= "1.5px solid #77DD77"; newTask.style.backgroundColor= "#def7de"; break;
        default : break;
    }
}

function addTaskUiEles(funcnewTask, functask){
    let task = functask;
    let newTask= funcnewTask;
    let taskNameLabel= addElement('p', 'taskNameLabel', newTask, undefined, undefined, task.taskName);
    let taskDateLabel= addElement('p', 'taskDateLabel', newTask, undefined, undefined, task.taskDate);
}

function validateMe(functask, funcNameInput, funcDateInput){
    let task = functask;
    let nameInput= funcNameInput;
    let dateInput= funcDateInput;
    if (task.taskName == ""){
        nameInput.classList.add("shakeme");
        return false;
    }
    if (task.taskDate == ""){
        dateInput.classList.add("shakeme");
        return false;
    }
    if(task.taskPriority == ""){
        return false;
    }
    return true;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHomeDOM)
/* harmony export */ });
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.png */ "./src/menu.png");
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _plus_thick_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus-thick-2.png */ "./src/plus-thick-2.png");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");











let backEndSideBarButtonsArray= [];
let divToReturn = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'mainHomeDiv');
let headerDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'headerDiv', divToReturn);
let sideBarDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'sidebarDiv', divToReturn);
let logo= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('img', 'mainLogo', headerDiv, _logo_png__WEBPACK_IMPORTED_MODULE_0__);
let listsHeaderDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'listsHeaderDiv', sideBarDiv)
let buttonList = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'button-list', sideBarDiv, undefined, 'buttonList');
//let sideBarButtonsArray= [];
//localStorage.setItem("sideBarButtonsArray",JSON.stringify(sideBarButtonsArray));
// localStorage.setItem('sideBarButtonsId',0);
//console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
let addButtonDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'addButtonDiv', sideBarDiv);
//temporary!!!!
let refreshTasks = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('button', 'refreshtasks', sideBarDiv, undefined, undefined, "reset tasks")
let refreshProjects = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('button', 'refreshprojects', sideBarDiv, undefined, undefined, "reset proj")
// temporary!!!!
let addButton= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('img', 'addButton', addButtonDiv, _plus_thick_2_png__WEBPACK_IMPORTED_MODULE_3__);
let listsHeader = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('p', 'listsHeader', listsHeaderDiv);
listsHeader.innerHTML= "Lists";

function showHamburgerMenu(){
    let hamburger= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('img', 'hamburgerMenu', headerDiv, _menu_png__WEBPACK_IMPORTED_MODULE_1__);
    hamburger.addEventListener('click', ()=>{
        console.log('hi');
    })
}
refreshTasks.addEventListener("click", ()=>{
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__.resetTasks)();
})
refreshProjects.addEventListener("click", ()=>{
    ;(0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__.resetProjects)();
})
function addHomeDOM(){
    ;(0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__.populateProjects)(buttonList);
    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_4__["default"])(divToReturn);
    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_4__.showRelevantTasks)(0);
    showHamburgerMenu();
    return divToReturn;
}
function showAddingProjectButton(){
    let addingDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('div', 'projectAdder', buttonList);
    let newInput = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('input', 'addingProjectInput', addingDiv);
    let yesButton = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('button', 'addingProjectButton', addingDiv, undefined, undefined, 'Add');
    let noButton = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__["default"])('button', 'addingProjectButton', addingDiv, undefined, undefined, 'Cancel');

    noButton.addEventListener('click', (event)=>{
        addingDiv.remove();
    })
    
    yesButton.addEventListener('click', (event)=>{
        if (newInput.value==""){
            newInput.placeholder= "Please name your project"
        }
        else{
        let buttonObject = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__.putButtonInLocalStorage)(newInput.value);
        backEndSideBarButtonsArray.push(buttonObject);
        //let newButton = addElement('button', 'buttonsInList', buttonList, undefined, buttonObject.projectID, newInput.value);
        console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
        addingDiv.remove();
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_2__.populateProject)(buttonList, buttonObject);
        }
        }
    )
}

addButton.addEventListener('click', function addButtonToList(){
    let temp = document.getElementsByClassName('projectAdder');
    console.log(temp.length)
    if (temp.length !== 0){
        return 0;
    }
    else {
    showAddingProjectButton();
    }
})





/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateTasks),
/* harmony export */   "showRelevantTasks": () => (/* binding */ showRelevantTasks),
/* harmony export */   "tasksArray": () => (/* binding */ tasksArray),
/* harmony export */   "updateDashboardLabel": () => (/* binding */ updateDashboardLabel)
/* harmony export */ });
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _close_box_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./close-box.png */ "./src/close-box.png");
/* harmony import */ var _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox-blank-circle-outline.png */ "./src/checkbox-blank-circle-outline.png");
/* harmony import */ var _check_bold_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-bold-2.png */ "./src/check-bold-2.png");













const obj = {
        "high" : 1,
        "medium" : 2,
        "low" : 3,
        "verylow": 4,
}

let tasksArray= [];
function addOptions(){
    let highPriority = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', 'priority', priorityInput, undefined, undefined, "High");
highPriority.setAttribute('value', 'high');
let mediumPriority = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', 'priority', priorityInput, undefined, undefined, "Medium");
mediumPriority.setAttribute('value', 'medium');
let lowPriority = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('option', 'priority', priorityInput, undefined, undefined, "Low");
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
        let newTask= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'newTask', tasksArea, undefined, "newTask");
        let newTaskCheckImage = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'newTaskCheckImage', newTask, _check_bold_2_png__WEBPACK_IMPORTED_MODULE_4__);
        newTaskCheckImage.classList.add("rotateme");
        newTask.classList.add("ivebeenchecked");
        newTask.style.border= "1.5px solid gray";
        newTask.style.color= "gray";
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.circleCheck)(newTask, element, newTaskCheckImage);
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.addTaskUiEles)(newTask, element);}
        else
        {
        let newTask= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'newTask', tasksArea, undefined, "newTask");
        let newTaskCheckImage = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'newTaskCheckImage', newTask, _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_3__);
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.decideTaskBG)(newTask, element);
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.circleCheck)(newTask, element, newTaskCheckImage);
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.addTaskUiEles)(newTask, element);
        }
}
function showRelevantTasks(projNum){
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
function updateDashboardLabel(element){
  dashboardP.textContent= capitalizeFirstLetter(element.projectName)+" Dashboard";
}
let tasksDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'tasksDiv');
let dashboardP= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'dashboardP', tasksDiv);
let tasksMenuBar= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'tasksMenuBar', tasksDiv);
let addTaskButton= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'addTaskButton', tasksMenuBar, undefined, undefined, 'Add a task!');
let removeProjectButton= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'removeProjectButton', tasksMenuBar, _delete_png__WEBPACK_IMPORTED_MODULE_1__);
let tasksArea = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'tasksArea', tasksDiv);

let newTaskForm = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'newTaskForm', tasksArea);

let formCloseButton= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'formCloseButton', newTaskForm, _close_box_png__WEBPACK_IMPORTED_MODULE_2__);
let formElements= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'formElements', newTaskForm);
let nameLabel= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'formLabel', formElements, undefined, 'id1', "Task name:");
let nameInput= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'formInput', formElements, undefined, "name");
nameInput.placeholder= "Name your task";
let dateLabel= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'formLabel', formElements, undefined, 'id2', "Finish by:");
let dateInput= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'formInput', formElements, undefined, "date");
dateInput.setAttribute("type", "date");
dateInput.placeholder= "Add a date";
let priorityLabel= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'formLabel', formElements, undefined, 'id3', "Priority:");
let priorityInput= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('select', 'formInput', formElements, undefined, "priority");
addOptions();
let descLabel= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'formLabel', formElements, undefined, 'id4', "Description:");
let descInput= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea', 'formInput', formElements, undefined, "desc");
descInput.placeholder= "Optional task description";
let createTaskButton= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'createTaskButton', newTaskForm, undefined, undefined, 'Add!');
createTaskButton.setAttribute("type", "submit");

function populateTasks(divToReturn){
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
    let task = new Task(nameInput.value, dateInput.value, priorityInput.value, descInput.value, _domManip_js__WEBPACK_IMPORTED_MODULE_0__.activeProject, b, false);
    if ((0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.validateMe)(task, nameInput, dateInput)){
        b+=1;
        localStorage.setItem('taskLocalId', b);
        tasksArray.push(task);
        pushIntoTasksLocalArray(task);
        makeInvisible();
        let temp= showRelevantTasks(_domManip_js__WEBPACK_IMPORTED_MODULE_0__.activeProject);
        nameInput.classList.remove("shakeme");
        dateInput.classList.remove("shakeme");
}
    else
    {
        return;
    }
    });

    

/***/ }),

/***/ "./src/check-bold-2.png":
/*!******************************!*\
  !*** ./src/check-bold-2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b9e16baaa601db11114.png";

/***/ }),

/***/ "./src/checkbox-blank-circle-outline.png":
/*!***********************************************!*\
  !*** ./src/checkbox-blank-circle-outline.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0d2d8ea4909bf549ee2.png";

/***/ }),

/***/ "./src/close-box.png":
/*!***************************!*\
  !*** ./src/close-box.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3771cafda882f2a8acf4.png";

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73a5e85864412349b270.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4b2b7319b66350348a0.png";

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fd3b62c3a29b9b30a0e.png";

/***/ }),

/***/ "./src/minus-circle.png":
/*!******************************!*\
  !*** ./src/minus-circle.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c93b956a6e482a76ef57.png";

/***/ }),

/***/ "./src/plus-thick-2.png":
/*!******************************!*\
  !*** ./src/plus-thick-2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a2511f5d6d10f7226cc.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGNBQWMsd0RBQVU7QUFDeEIsZ0JBQWdCLHdEQUFVO0FBQzFCLGtCQUFrQix3REFBVTtBQUM1QixtQkFBbUIsd0RBQVU7QUFDN0IseUJBQXlCLHdEQUFVLDZDQUE2Qyx3Q0FBUztBQUN6RixnQkFBZ0Isd0RBQVU7O0FBRTFCLGtCQUFrQix3REFBVTs7QUFFNUIscUJBQXFCLHdEQUFVLHdDQUF3QywyQ0FBUTtBQUMvRSxrQkFBa0Isd0RBQVU7QUFDNUIsZUFBZSx3REFBVTtBQUN6QixlQUFlLHdEQUFVO0FBQ3pCO0FBQ0EsZUFBZSx3REFBVTtBQUN6QixlQUFlLHdEQUFVO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQVU7QUFDN0IsbUJBQW1CLHdEQUFVO0FBQzdCO0FBQ0EsZUFBZSx3REFBVTtBQUN6QixlQUFlLHdEQUFVO0FBQ3pCO0FBQ0Esc0JBQXNCLHdEQUFVO0FBQ2hDOztBQUVlO0FBQ2Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHVEQUFhO0FBQzdHLFFBQVEsd0RBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1REFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL3Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVja0xvYyBmcm9tICcuL2NoZWNrLWJvbGQtMi5wbmcnXG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5pbXBvcnQgbWludXNMb2MgZnJvbSAnLi9taW51cy1jaXJjbGUucG5nJ1xuaW1wb3J0IHsgdXBkYXRlRGFzaGJvYXJkTGFiZWwgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuaW1wb3J0IHsgc2hvd1JlbGV2YW50VGFza3MgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuXG5sZXQgYWN0aXZlUHJvamVjdCA9MDtcbmNsYXNzIG5ld0J1dHRvbntcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdElEKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZT0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdElEPSBwcm9qZWN0SUQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFbGVtZW50KHR5cGUsIGNsYXNzbmFtZSwgYWRkVG89bnVsbCwgc3JjRWxlPSBudWxsLCBpZD1udWxsLCB0ZXh0PW51bGwpe1xuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG4gICAgaWYgKHNyY0VsZSE9PW51bGwpe1xuICAgICAgICBlbGUuc3JjPSBzcmNFbGU7XG4gICAgfVxuICAgIGlmKGlkIT09IG51bGwpe1xuICAgICAgICBlbGUuaWQ9IGlkO1xuICAgIH1cbiAgICBpZiAodGV4dCE9PSBudWxsKXtcbiAgICAgICAgZWxlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChhZGRUbyE9PSBudWxsKXtcbiAgICAgICAgYWRkVG8uYXBwZW5kQ2hpbGQoZWxlKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHV0QnV0dG9uSW5Mb2NhbFN0b3JhZ2UobmFtZSl7XG4gICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKTtcbiAgICBsZXQgYj0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnKSk7XG4gICAgYis9MTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsIGIpO1xuICAgIGxldCBuZXh0QnV0dG9uID0gbmV3IG5ld0J1dHRvbihuYW1lLCBiKVxuICAgIGFbYl09IG5leHRCdXR0b247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG4gICAgcmV0dXJuIG5leHRCdXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKGJ1dHRvbkxpc3Qpe1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSk7XG4gICAgYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5wcm9qZWN0SUQ9PTApe1xuICAgICAgICAgICAgdXBkYXRlRGFzaGJvYXJkTGFiZWwoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdidXR0b25zSW5MaXN0JywgYnV0dG9uTGlzdCwgdW5kZWZpbmVkLCBlbGVtZW50LnByb2plY3RJRCwgZWxlbWVudC5wcm9qZWN0TmFtZSk7XG4gICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gdXBkYXRlQWN0aXZlUHJvaigpe1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdD0gZWxlbWVudC5wcm9qZWN0SUQ7XG4gICAgICAgICAgICB1cGRhdGVEYXNoYm9hcmRMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGJ1dHRvbkxpc3QubGFzdENoaWxkLmlkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3QoYnV0dG9uTGlzdCwgYnV0dG9uT2JqZWN0KXtcbiAgICBsZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0SUQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qKCl7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0PSBidXR0b25PYmplY3QucHJvamVjdElEO1xuICAgICAgICAgICAgdXBkYXRlRGFzaGJvYXJkTGFiZWwobmV3QnV0dG9uKTtcbiAgICAgICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgIH0pXG4gICAgfTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpe1xuICAgIGxldCBzaWRlQmFyQnV0dG9uc0FycmF5PSBbXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShzaWRlQmFyQnV0dG9uc0FycmF5KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnLDApO1xuICAgIGxldCBhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpO1xuICAgIGxldCBuZXh0QnV0dG9uID0gbmV3IG5ld0J1dHRvbihcIkFsbFwiLCAwKVxuICAgIGFbMF09IG5leHRCdXR0b247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRhc2tzKCl7XG4gICAgbGV0IHRhc2tzTG9jYWxBcnJheT0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeSh0YXNrc0xvY2FsQXJyYXkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xvY2FsSWQnLDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2hlY2soZnVuY25ld1Rhc2ssIGZ1bmN0YXNrLCBmdW5jbmV3VGFza0NoZWNrSW1hZ2Upe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IHN0YXR1cz0gXCJ1bmNoZWNrZWRcIjtcbiAgICBsZXQgbmV3VGFzaz0gZnVuY25ld1Rhc2s7XG4gICAgbGV0IG5ld1Rhc2tDaGVja0ltYWdlPSBmdW5jbmV3VGFza0NoZWNrSW1hZ2U7XG4gICAgbGV0IG1pbnVzQnV0dG9uRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnbWludXNCdXR0b25EaXYnLCB1bmRlZmluZWQpO1xuICAgIGxldCBtaW51c0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2ltZycsICdtaW51c0J1dHRvbicsIG1pbnVzQnV0dG9uRGl2LCBtaW51c0xvYyk7XG4gICAgbGV0IGRlc2NQPSBhZGRFbGVtZW50KCdwJywgJ2Rlc2NQJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFzay50YXNrRGVzYyk7ICBcbiAgICBuZXdUYXNrQ2hlY2tJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBjaGVja0xvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvdGF0ZW1lXCIpO1xuICAgIH0pXG4gICAgbmV3VGFza0NoZWNrSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gY2hhbmdlSWNvbigpe1xuICAgICAgICBpZiAoc3RhdHVzPT1cInVuY2hlY2tlZFwiKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBibGFua2NpcmNsZWxvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO31cbiAgICB9KSAgICBcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmhlaWdodD0gXCIxMCVcIjtcbiAgICAgICAgaWYgKG5ld1Rhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZFwiKSl7XG4gICAgICAgIG5ld1Rhc2sucmVtb3ZlQ2hpbGQobWludXNCdXR0b25EaXYpO1xuICAgICAgICBuZXdUYXNrLnJlbW92ZUNoaWxkKGRlc2NQKTtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImdyaWRcIik7fVxuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkXCIpO1xuICAgIH0pIFxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGxvZ01lZWVlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW0gdGhlIHRhc2sgcHJvamVjdCBcIisgdGFzay50YXNrSUQpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmhlaWdodD0gXCI4cmVtXCI7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobWludXNCdXR0b25EaXYpO1xuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgICBpZiAoZGVzY1AudGV4dENvbnRlbnQ9PVwiXCIpe1xuICAgICAgICAgICAgZGVzY1AudGV4dENvbnRlbnQ9XCJObyBkZXNjcmlwdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGVzY1ApO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZChcInJvdGF0ZW1lXCIpO1xuICAgIH0pXG4gICAgbmV3VGFza0NoZWNrSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIml2ZWJlZW5jaGVja2VkXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCBncmF5XCI7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuY29sb3I9IFwiZ3JheVwiO1xuICAgICAgICBzdGF0dXM9IFwiY2hlY2tlZFwiO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5zcmM9IGNoZWNrTG9jO1xuICAgICAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiKSk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGFbaV0udGFza0lEID09dGFzay50YXNrSUQpe1xuICAgICAgICAgICAgICAgIGFbaV0udGFza1ByaW9yaXR5PSBcInZlcnlsb3dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICAgICAgc2hvd1JlbGV2YW50VGFza3MoYWN0aXZlUHJvamVjdCk7XG4gICAgfSlcbiAgICBtaW51c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIikpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihhW2ldLnRhc2tJRCA9PXRhc2sudGFza0lEKXtcbiAgICAgICAgICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNpZGVUYXNrQkcobmV3VGFzaywgdGFzayl7XG4gICAgc3dpdGNoKHRhc2sudGFza1ByaW9yaXR5KXtcbiAgICAgICAgY2FzZSAnaGlnaCc6IG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkICNmZjY5NjFcIjsgbmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiI2ZmZGJkOVwiOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWVkaXVtJzogbmV3VGFzay5zdHlsZS5ib3JkZXI9IFwiMS41cHggc29saWQgI2M0YmMwMFwiOyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCIjZmZmZGNkXCI7IGJyZWFrO1xuICAgICAgICBjYXNlICdsb3cnOiBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCAjNzdERDc3XCI7IG5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIiNkZWY3ZGVcIjsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVWlFbGVzKGZ1bmNuZXdUYXNrLCBmdW5jdGFzayl7XG4gICAgbGV0IHRhc2sgPSBmdW5jdGFzaztcbiAgICBsZXQgbmV3VGFzaz0gZnVuY25ld1Rhc2s7XG4gICAgbGV0IHRhc2tOYW1lTGFiZWw9IGFkZEVsZW1lbnQoJ3AnLCAndGFza05hbWVMYWJlbCcsIG5ld1Rhc2ssIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXNrLnRhc2tOYW1lKTtcbiAgICBsZXQgdGFza0RhdGVMYWJlbD0gYWRkRWxlbWVudCgncCcsICd0YXNrRGF0ZUxhYmVsJywgbmV3VGFzaywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhc2sudGFza0RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZShmdW5jdGFzaywgZnVuY05hbWVJbnB1dCwgZnVuY0RhdGVJbnB1dCl7XG4gICAgbGV0IHRhc2sgPSBmdW5jdGFzaztcbiAgICBsZXQgbmFtZUlucHV0PSBmdW5jTmFtZUlucHV0O1xuICAgIGxldCBkYXRlSW5wdXQ9IGZ1bmNEYXRlSW5wdXQ7XG4gICAgaWYgKHRhc2sudGFza05hbWUgPT0gXCJcIil7XG4gICAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2hha2VtZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFzay50YXNrRGF0ZSA9PSBcIlwiKXtcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJzaGFrZW1lXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmKHRhc2sudGFza1ByaW9yaXR5ID09IFwiXCIpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge2FjdGl2ZVByb2plY3R9OyIsImltcG9ydCBsb2dvTG9jIGZyb20gJy4vbG9nby5wbmcnXG5pbXBvcnQgbWVudUxvYyBmcm9tICcuL21lbnUucG5nJ1xuaW1wb3J0IGFkZEVsZW1lbnQsIHsgcmVzZXRUYXNrcyB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IHsgcHV0QnV0dG9uSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBwbHVzbG9jIGZyb20gJy4vcGx1cy10aGljay0yLnBuZyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVByb2plY3RzIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyByZXNldFByb2plY3RzIH0gZnJvbSAnLi9kb21NYW5pcC5qcydcbmltcG9ydCBwb3B1bGF0ZVRhc2tzIGZyb20gJy4vdGFza3MuanMnXG5pbXBvcnQgeyBwb3B1bGF0ZVByb2plY3R9ICBmcm9tICcuL2RvbU1hbmlwLmpzJ1xuaW1wb3J0IHsgc2hvd1JlbGV2YW50VGFza3MgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuXG5sZXQgYmFja0VuZFNpZGVCYXJCdXR0b25zQXJyYXk9IFtdO1xubGV0IGRpdlRvUmV0dXJuID0gYWRkRWxlbWVudCgnZGl2JywgJ21haW5Ib21lRGl2Jyk7XG5sZXQgaGVhZGVyRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnaGVhZGVyRGl2JywgZGl2VG9SZXR1cm4pO1xubGV0IHNpZGVCYXJEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdzaWRlYmFyRGl2JywgZGl2VG9SZXR1cm4pO1xubGV0IGxvZ289IGFkZEVsZW1lbnQoJ2ltZycsICdtYWluTG9nbycsIGhlYWRlckRpdiwgbG9nb0xvYyk7XG5sZXQgbGlzdHNIZWFkZXJEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdsaXN0c0hlYWRlckRpdicsIHNpZGVCYXJEaXYpXG5sZXQgYnV0dG9uTGlzdCA9IGFkZEVsZW1lbnQoJ2RpdicsICdidXR0b24tbGlzdCcsIHNpZGVCYXJEaXYsIHVuZGVmaW5lZCwgJ2J1dHRvbkxpc3QnKTtcbi8vbGV0IHNpZGVCYXJCdXR0b25zQXJyYXk9IFtdO1xuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShzaWRlQmFyQnV0dG9uc0FycmF5KSk7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsMCk7XG4vL2NvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG5sZXQgYWRkQnV0dG9uRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnYWRkQnV0dG9uRGl2Jywgc2lkZUJhckRpdik7XG4vL3RlbXBvcmFyeSEhISFcbmxldCByZWZyZXNoVGFza3MgPSBhZGRFbGVtZW50KCdidXR0b24nLCAncmVmcmVzaHRhc2tzJywgc2lkZUJhckRpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwicmVzZXQgdGFza3NcIilcbmxldCByZWZyZXNoUHJvamVjdHMgPSBhZGRFbGVtZW50KCdidXR0b24nLCAncmVmcmVzaHByb2plY3RzJywgc2lkZUJhckRpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwicmVzZXQgcHJvalwiKVxuLy8gdGVtcG9yYXJ5ISEhIVxubGV0IGFkZEJ1dHRvbj0gYWRkRWxlbWVudCgnaW1nJywgJ2FkZEJ1dHRvbicsIGFkZEJ1dHRvbkRpdiwgcGx1c2xvYyk7XG5sZXQgbGlzdHNIZWFkZXIgPSBhZGRFbGVtZW50KCdwJywgJ2xpc3RzSGVhZGVyJywgbGlzdHNIZWFkZXJEaXYpO1xubGlzdHNIZWFkZXIuaW5uZXJIVE1MPSBcIkxpc3RzXCI7XG5cbmZ1bmN0aW9uIHNob3dIYW1idXJnZXJNZW51KCl7XG4gICAgbGV0IGhhbWJ1cmdlcj0gYWRkRWxlbWVudCgnaW1nJywgJ2hhbWJ1cmdlck1lbnUnLCBoZWFkZXJEaXYsIG1lbnVMb2MpO1xuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScpO1xuICAgIH0pXG59XG5yZWZyZXNoVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgcmVzZXRUYXNrcygpO1xufSlcbnJlZnJlc2hQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICByZXNldFByb2plY3RzKCk7XG59KVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSG9tZURPTSgpe1xuICAgIHBvcHVsYXRlUHJvamVjdHMoYnV0dG9uTGlzdCk7XG4gICAgcG9wdWxhdGVUYXNrcyhkaXZUb1JldHVybik7XG4gICAgc2hvd1JlbGV2YW50VGFza3MoMCk7XG4gICAgc2hvd0hhbWJ1cmdlck1lbnUoKTtcbiAgICByZXR1cm4gZGl2VG9SZXR1cm47XG59XG5mdW5jdGlvbiBzaG93QWRkaW5nUHJvamVjdEJ1dHRvbigpe1xuICAgIGxldCBhZGRpbmdEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0QWRkZXInLCBidXR0b25MaXN0KTtcbiAgICBsZXQgbmV3SW5wdXQgPSBhZGRFbGVtZW50KCdpbnB1dCcsICdhZGRpbmdQcm9qZWN0SW5wdXQnLCBhZGRpbmdEaXYpO1xuICAgIGxldCB5ZXNCdXR0b24gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkaW5nUHJvamVjdEJ1dHRvbicsIGFkZGluZ0RpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQnKTtcbiAgICBsZXQgbm9CdXR0b24gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkaW5nUHJvamVjdEJ1dHRvbicsIGFkZGluZ0RpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdDYW5jZWwnKTtcblxuICAgIG5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICBhZGRpbmdEaXYucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBcbiAgICB5ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgIGlmIChuZXdJbnB1dC52YWx1ZT09XCJcIil7XG4gICAgICAgICAgICBuZXdJbnB1dC5wbGFjZWhvbGRlcj0gXCJQbGVhc2UgbmFtZSB5b3VyIHByb2plY3RcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgIGxldCBidXR0b25PYmplY3QgPSBwdXRCdXR0b25JbkxvY2FsU3RvcmFnZShuZXdJbnB1dC52YWx1ZSk7XG4gICAgICAgIGJhY2tFbmRTaWRlQmFyQnV0dG9uc0FycmF5LnB1c2goYnV0dG9uT2JqZWN0KTtcbiAgICAgICAgLy9sZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0SUQsIG5ld0lucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpKTtcbiAgICAgICAgYWRkaW5nRGl2LnJlbW92ZSgpO1xuICAgICAgICBwb3B1bGF0ZVByb2plY3QoYnV0dG9uTGlzdCwgYnV0dG9uT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxufVxuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBhZGRCdXR0b25Ub0xpc3QoKXtcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RBZGRlcicpO1xuICAgIGNvbnNvbGUubG9nKHRlbXAubGVuZ3RoKVxuICAgIGlmICh0ZW1wLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICBzaG93QWRkaW5nUHJvamVjdEJ1dHRvbigpO1xuICAgIH1cbn0pXG5cblxuXG4iLCJpbXBvcnQgYWRkRWxlbWVudCBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBkZWxldGVMb2MgZnJvbSAnLi9kZWxldGUucG5nJ1xuaW1wb3J0IGNsb3NlTG9jIGZyb20gJy4vY2xvc2UtYm94LnBuZydcbmltcG9ydCB7IGNpcmNsZUNoZWNrIH0gZnJvbSAnLi9kb21NYW5pcC5qcydcbmltcG9ydCB7IGRlY2lkZVRhc2tCRyB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IGJsYW5rY2lyY2xlbG9jIGZyb20gJy4vY2hlY2tib3gtYmxhbmstY2lyY2xlLW91dGxpbmUucG5nJ1xuaW1wb3J0IHsgYWRkVGFza1VpRWxlcyB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IHsgdmFsaWRhdGVNZX0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyByZXNldFRhc2tzfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBjaGVja0xvYyBmcm9tICcuL2NoZWNrLWJvbGQtMi5wbmcnXG5cblxuY29uc3Qgb2JqID0ge1xuICAgICAgICBcImhpZ2hcIiA6IDEsXG4gICAgICAgIFwibWVkaXVtXCIgOiAyLFxuICAgICAgICBcImxvd1wiIDogMyxcbiAgICAgICAgXCJ2ZXJ5bG93XCI6IDQsXG59XG5cbmxldCB0YXNrc0FycmF5PSBbXTtcbmZ1bmN0aW9uIGFkZE9wdGlvbnMoKXtcbiAgICBsZXQgaGlnaFByaW9yaXR5ID0gYWRkRWxlbWVudCgnb3B0aW9uJywgJ3ByaW9yaXR5JywgcHJpb3JpdHlJbnB1dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiSGlnaFwiKTtcbmhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbmxldCBtZWRpdW1Qcmlvcml0eSA9IGFkZEVsZW1lbnQoJ29wdGlvbicsICdwcmlvcml0eScsIHByaW9yaXR5SW5wdXQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1lZGl1bVwiKTtcbm1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG5sZXQgbG93UHJpb3JpdHkgPSBhZGRFbGVtZW50KCdvcHRpb24nLCAncHJpb3JpdHknLCBwcmlvcml0eUlucHV0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJMb3dcIik7XG5sb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xufVxuZnVuY3Rpb24gbWFrZUludmlzaWJsZSgpe1xuICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHk9IFwiaGlkZGVuXCI7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImRpc2FibGUtZGl2XCIpO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlLWRpdlwiKTtcbiAgICB0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGUtZGl2XCIpO1xufVxuZnVuY3Rpb24gZmlsbENoZWNrZWRPclVuY2hlY2tlZChlbGVtZW50KXtcbiAgICBpZiAoZWxlbWVudC50YXNrUHJpb3JpdHk9PVwidmVyeWxvd1wiKXtcbiAgICAgICAgbGV0IG5ld1Rhc2s9IGFkZEVsZW1lbnQoJ2RpdicsICduZXdUYXNrJywgdGFza3NBcmVhLCB1bmRlZmluZWQsIFwibmV3VGFza1wiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tDaGVja0ltYWdlID0gYWRkRWxlbWVudCgnaW1nJywgJ25ld1Rhc2tDaGVja0ltYWdlJywgbmV3VGFzaywgY2hlY2tMb2MpO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm90YXRlbWVcIik7XG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIml2ZWJlZW5jaGVja2VkXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCBncmF5XCI7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuY29sb3I9IFwiZ3JheVwiO1xuICAgICAgICBjaXJjbGVDaGVjayhuZXdUYXNrLCBlbGVtZW50LCBuZXdUYXNrQ2hlY2tJbWFnZSk7XG4gICAgICAgIGFkZFRhc2tVaUVsZXMobmV3VGFzaywgZWxlbWVudCk7fVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgbGV0IG5ld1Rhc2s9IGFkZEVsZW1lbnQoJ2RpdicsICduZXdUYXNrJywgdGFza3NBcmVhLCB1bmRlZmluZWQsIFwibmV3VGFza1wiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2tDaGVja0ltYWdlID0gYWRkRWxlbWVudCgnaW1nJywgJ25ld1Rhc2tDaGVja0ltYWdlJywgbmV3VGFzaywgYmxhbmtjaXJjbGVsb2MpO1xuICAgICAgICBkZWNpZGVUYXNrQkcobmV3VGFzaywgZWxlbWVudCk7XG4gICAgICAgIGNpcmNsZUNoZWNrKG5ld1Rhc2ssIGVsZW1lbnQsIG5ld1Rhc2tDaGVja0ltYWdlKTtcbiAgICAgICAgYWRkVGFza1VpRWxlcyhuZXdUYXNrLCBlbGVtZW50KTtcbiAgICAgICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dSZWxldmFudFRhc2tzKHByb2pOdW0pe1xuICAgIC8vdGFza3NBcmVhLmlubmVySFRNTD0gXCJcIjtcbiAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiKSk7XG4gICAgd2hpbGUgKHRhc2tzQXJlYS5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGFza3NBcmVhLnJlbW92ZUNoaWxkKHRhc2tzQXJlYS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBhLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gb2JqW2EudGFza1ByaW9yaXR5XS1vYmpbYi50YXNrUHJpb3JpdHldfSk7XG4gICAgYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocHJvak51bT09MCl7XG4gICAgICAgICAgICBmaWxsQ2hlY2tlZE9yVW5jaGVja2VkKGVsZW1lbnQpO1xuICAgICAgICB9ZWxzZSBpZiAocHJvak51bT09ZWxlbWVudC50YXNrUHJvamVjdCl7XG4gICAgICAgICAgICBmaWxsQ2hlY2tlZE9yVW5jaGVja2VkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBjbGVhclRleHQoKXtcbiAgICBuYW1lSW5wdXQudmFsdWU9IFwiXCI7XG4gICAgZGF0ZUlucHV0LnZhbHVlPSBcIlwiO1xuICAgIGRlc2NJbnB1dC52YWx1ZT0gXCJcIjtcbn1cbmNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tEZXNjLCB0YXNrUHJvamVjdCwgdGFza0lELCB0YXNrQ2hlY2tlZCl7XG4gICAgICAgIHRoaXMudGFza05hbWU9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLnRhc2tEYXRlPSB0YXNrRGF0ZTtcbiAgICAgICAgdGhpcy50YXNrUHJpb3JpdHk9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgdGhpcy50YXNrRGVzYz0gdGFza0Rlc2M7XG4gICAgICAgIHRoaXMudGFza1Byb2plY3Q9IHRhc2tQcm9qZWN0O1xuICAgICAgICB0aGlzLnRhc2tJRD0gdGFza0lEO1xuICAgICAgICB0aGlzLnRhc2tDaGVja2VkPSB0YXNrQ2hlY2tlZDtcbiAgICB9XG59XG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhc2hib2FyZExhYmVsKGVsZW1lbnQpe1xuICBkYXNoYm9hcmRQLnRleHRDb250ZW50PSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZWxlbWVudC5wcm9qZWN0TmFtZSkrXCIgRGFzaGJvYXJkXCI7XG59XG5sZXQgdGFza3NEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICd0YXNrc0RpdicpO1xubGV0IGRhc2hib2FyZFA9IGFkZEVsZW1lbnQoJ3AnLCAnZGFzaGJvYXJkUCcsIHRhc2tzRGl2KTtcbmxldCB0YXNrc01lbnVCYXI9IGFkZEVsZW1lbnQoJ2RpdicsICd0YXNrc01lbnVCYXInLCB0YXNrc0Rpdik7XG5sZXQgYWRkVGFza0J1dHRvbj0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2FkZFRhc2tCdXR0b24nLCB0YXNrc01lbnVCYXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnQWRkIGEgdGFzayEnKTtcbmxldCByZW1vdmVQcm9qZWN0QnV0dG9uPSBhZGRFbGVtZW50KCdpbWcnLCAncmVtb3ZlUHJvamVjdEJ1dHRvbicsIHRhc2tzTWVudUJhciwgZGVsZXRlTG9jKTtcbmxldCB0YXNrc0FyZWEgPSBhZGRFbGVtZW50KCdkaXYnLCAndGFza3NBcmVhJywgdGFza3NEaXYpO1xuXG5sZXQgbmV3VGFza0Zvcm0gPSBhZGRFbGVtZW50KCdkaXYnLCAnbmV3VGFza0Zvcm0nLCB0YXNrc0FyZWEpO1xuXG5sZXQgZm9ybUNsb3NlQnV0dG9uPSBhZGRFbGVtZW50KCdpbWcnLCAnZm9ybUNsb3NlQnV0dG9uJywgbmV3VGFza0Zvcm0sIGNsb3NlTG9jKTtcbmxldCBmb3JtRWxlbWVudHM9IGFkZEVsZW1lbnQoJ2RpdicsICdmb3JtRWxlbWVudHMnLCBuZXdUYXNrRm9ybSk7XG5sZXQgbmFtZUxhYmVsPSBhZGRFbGVtZW50KCdsYWJlbCcsICdmb3JtTGFiZWwnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgJ2lkMScsIFwiVGFzayBuYW1lOlwiKTtcbmxldCBuYW1lSW5wdXQ9IGFkZEVsZW1lbnQoJ2lucHV0JywgJ2Zvcm1JbnB1dCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCBcIm5hbWVcIik7XG5uYW1lSW5wdXQucGxhY2Vob2xkZXI9IFwiTmFtZSB5b3VyIHRhc2tcIjtcbmxldCBkYXRlTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQyJywgXCJGaW5pc2ggYnk6XCIpO1xubGV0IGRhdGVJbnB1dD0gYWRkRWxlbWVudCgnaW5wdXQnLCAnZm9ybUlucHV0JywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsIFwiZGF0ZVwiKTtcbmRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbmRhdGVJbnB1dC5wbGFjZWhvbGRlcj0gXCJBZGQgYSBkYXRlXCI7XG5sZXQgcHJpb3JpdHlMYWJlbD0gYWRkRWxlbWVudCgnbGFiZWwnLCAnZm9ybUxhYmVsJywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsICdpZDMnLCBcIlByaW9yaXR5OlwiKTtcbmxldCBwcmlvcml0eUlucHV0PSBhZGRFbGVtZW50KCdzZWxlY3QnLCAnZm9ybUlucHV0JywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsIFwicHJpb3JpdHlcIik7XG5hZGRPcHRpb25zKCk7XG5sZXQgZGVzY0xhYmVsPSBhZGRFbGVtZW50KCdsYWJlbCcsICdmb3JtTGFiZWwnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgJ2lkNCcsIFwiRGVzY3JpcHRpb246XCIpO1xubGV0IGRlc2NJbnB1dD0gYWRkRWxlbWVudCgndGV4dGFyZWEnLCAnZm9ybUlucHV0JywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsIFwiZGVzY1wiKTtcbmRlc2NJbnB1dC5wbGFjZWhvbGRlcj0gXCJPcHRpb25hbCB0YXNrIGRlc2NyaXB0aW9uXCI7XG5sZXQgY3JlYXRlVGFza0J1dHRvbj0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2NyZWF0ZVRhc2tCdXR0b24nLCBuZXdUYXNrRm9ybSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQhJyk7XG5jcmVhdGVUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlVGFza3MoZGl2VG9SZXR1cm4pe1xuICAgIGRpdlRvUmV0dXJuLmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcbn1cblxuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzaG93TmV3VGFza0Zvcm0oKXtcbiAgICBuZXdUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5PSBcInZpc2libGVcIjtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlLWRpdlwiKTtcbiAgICAvL3Rhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgY2xlYXJUZXh0KCk7XG4gICAgLy8gdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJzaG93aW5nLWZvcm1cIik7XG59KTtcblxuZm9ybUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBtYWtlSW52aXNpYmxlKCl7XG4gICAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eT0gXCJoaWRkZW5cIjtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1kaXZcIik7XG59KTtcbmZ1bmN0aW9uIHB1c2hJbnRvVGFza3NMb2NhbEFycmF5KGZ1bmN0YXNrKXtcbiAgICBsZXQgdGFzayA9IGZ1bmN0YXNrO1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NMb2NhbEFycmF5XCIpKTtcbiAgICBhLnB1c2godGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiKSkpO1xufVxuY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gbWFrZVRhc2soKXtcbiAgICBsZXQgYj0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMb2NhbElkJykpO1xuICAgIGxldCB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgYWN0aXZlUHJvamVjdCwgYiwgZmFsc2UpO1xuICAgIGlmICh2YWxpZGF0ZU1lKHRhc2ssIG5hbWVJbnB1dCwgZGF0ZUlucHV0KSl7XG4gICAgICAgIGIrPTE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTG9jYWxJZCcsIGIpO1xuICAgICAgICB0YXNrc0FycmF5LnB1c2godGFzayk7XG4gICAgICAgIHB1c2hJbnRvVGFza3NMb2NhbEFycmF5KHRhc2spO1xuICAgICAgICBtYWtlSW52aXNpYmxlKCk7XG4gICAgICAgIGxldCB0ZW1wPSBzaG93UmVsZXZhbnRUYXNrcyhhY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgbmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFrZW1lXCIpO1xuICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlbWVcIik7XG59XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB9KTtcblxuICAgIGV4cG9ydCB7dGFza3NBcnJheX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9