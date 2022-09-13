"use strict";
(self["webpackChunknotifylisttest"] = self["webpackChunknotifylisttest"] || []).push([["dom"],{

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

/***/ "./src/minus-circle.png":
/*!******************************!*\
  !*** ./src/minus-circle.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c93b956a6e482a76ef57.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/domManip.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsY0FBYyx3REFBVTtBQUN4QixnQkFBZ0Isd0RBQVU7QUFDMUIsa0JBQWtCLHdEQUFVO0FBQzVCLG1CQUFtQix3REFBVTtBQUM3Qix5QkFBeUIsd0RBQVUsNkNBQTZDLHdDQUFTO0FBQ3pGLGdCQUFnQix3REFBVTs7QUFFMUIsa0JBQWtCLHdEQUFVOztBQUU1QixxQkFBcUIsd0RBQVUsd0NBQXdDLDJDQUFRO0FBQy9FLGtCQUFrQix3REFBVTtBQUM1QixlQUFlLHdEQUFVO0FBQ3pCLGVBQWUsd0RBQVU7QUFDekI7QUFDQSxlQUFlLHdEQUFVO0FBQ3pCLGVBQWUsd0RBQVU7QUFDekI7QUFDQTtBQUNBLG1CQUFtQix3REFBVTtBQUM3QixtQkFBbUIsd0RBQVU7QUFDN0I7QUFDQSxlQUFlLHdEQUFVO0FBQ3pCLGVBQWUsd0RBQVU7QUFDekI7QUFDQSxzQkFBc0Isd0RBQVU7QUFDaEM7O0FBRWU7QUFDZjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csdURBQWE7QUFDN0csUUFBUSx3REFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVEQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL3Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVja0xvYyBmcm9tICcuL2NoZWNrLWJvbGQtMi5wbmcnXG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5pbXBvcnQgbWludXNMb2MgZnJvbSAnLi9taW51cy1jaXJjbGUucG5nJ1xuaW1wb3J0IHsgdXBkYXRlRGFzaGJvYXJkTGFiZWwgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuaW1wb3J0IHsgc2hvd1JlbGV2YW50VGFza3MgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuXG5sZXQgYWN0aXZlUHJvamVjdCA9MDtcbmNsYXNzIG5ld0J1dHRvbntcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdElEKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZT0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdElEPSBwcm9qZWN0SUQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFbGVtZW50KHR5cGUsIGNsYXNzbmFtZSwgYWRkVG89bnVsbCwgc3JjRWxlPSBudWxsLCBpZD1udWxsLCB0ZXh0PW51bGwpe1xuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG4gICAgaWYgKHNyY0VsZSE9PW51bGwpe1xuICAgICAgICBlbGUuc3JjPSBzcmNFbGU7XG4gICAgfVxuICAgIGlmKGlkIT09IG51bGwpe1xuICAgICAgICBlbGUuaWQ9IGlkO1xuICAgIH1cbiAgICBpZiAodGV4dCE9PSBudWxsKXtcbiAgICAgICAgZWxlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChhZGRUbyE9PSBudWxsKXtcbiAgICAgICAgYWRkVG8uYXBwZW5kQ2hpbGQoZWxlKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHV0QnV0dG9uSW5Mb2NhbFN0b3JhZ2UobmFtZSl7XG4gICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKTtcbiAgICBsZXQgYj0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnKSk7XG4gICAgYis9MTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsIGIpO1xuICAgIGxldCBuZXh0QnV0dG9uID0gbmV3IG5ld0J1dHRvbihuYW1lLCBiKVxuICAgIGFbYl09IG5leHRCdXR0b247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG4gICAgcmV0dXJuIG5leHRCdXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKGJ1dHRvbkxpc3Qpe1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSk7XG4gICAgYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5wcm9qZWN0SUQ9PTApe1xuICAgICAgICAgICAgdXBkYXRlRGFzaGJvYXJkTGFiZWwoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdidXR0b25zSW5MaXN0JywgYnV0dG9uTGlzdCwgdW5kZWZpbmVkLCBlbGVtZW50LnByb2plY3RJRCwgZWxlbWVudC5wcm9qZWN0TmFtZSk7XG4gICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gdXBkYXRlQWN0aXZlUHJvaigpe1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdD0gZWxlbWVudC5wcm9qZWN0SUQ7XG4gICAgICAgICAgICB1cGRhdGVEYXNoYm9hcmRMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGJ1dHRvbkxpc3QubGFzdENoaWxkLmlkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3QoYnV0dG9uTGlzdCwgYnV0dG9uT2JqZWN0KXtcbiAgICBsZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0SUQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qKCl7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0PSBidXR0b25PYmplY3QucHJvamVjdElEO1xuICAgICAgICAgICAgdXBkYXRlRGFzaGJvYXJkTGFiZWwobmV3QnV0dG9uKTtcbiAgICAgICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgIH0pXG4gICAgfTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpe1xuICAgIGxldCBzaWRlQmFyQnV0dG9uc0FycmF5PSBbXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShzaWRlQmFyQnV0dG9uc0FycmF5KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnLDApO1xuICAgIGxldCBhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpO1xuICAgIGxldCBuZXh0QnV0dG9uID0gbmV3IG5ld0J1dHRvbihcIkFsbFwiLCAwKVxuICAgIGFbMF09IG5leHRCdXR0b247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRhc2tzKCl7XG4gICAgbGV0IHRhc2tzTG9jYWxBcnJheT0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeSh0YXNrc0xvY2FsQXJyYXkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xvY2FsSWQnLDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2hlY2soZnVuY25ld1Rhc2ssIGZ1bmN0YXNrLCBmdW5jbmV3VGFza0NoZWNrSW1hZ2Upe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IHN0YXR1cz0gXCJ1bmNoZWNrZWRcIjtcbiAgICBsZXQgbmV3VGFzaz0gZnVuY25ld1Rhc2s7XG4gICAgbGV0IG5ld1Rhc2tDaGVja0ltYWdlPSBmdW5jbmV3VGFza0NoZWNrSW1hZ2U7XG4gICAgbGV0IG1pbnVzQnV0dG9uRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnbWludXNCdXR0b25EaXYnLCB1bmRlZmluZWQpO1xuICAgIGxldCBtaW51c0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2ltZycsICdtaW51c0J1dHRvbicsIG1pbnVzQnV0dG9uRGl2LCBtaW51c0xvYyk7XG4gICAgbGV0IGRlc2NQPSBhZGRFbGVtZW50KCdwJywgJ2Rlc2NQJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFzay50YXNrRGVzYyk7ICBcbiAgICBuZXdUYXNrQ2hlY2tJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBjaGVja0xvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvdGF0ZW1lXCIpO1xuICAgIH0pXG4gICAgbmV3VGFza0NoZWNrSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gY2hhbmdlSWNvbigpe1xuICAgICAgICBpZiAoc3RhdHVzPT1cInVuY2hlY2tlZFwiKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBibGFua2NpcmNsZWxvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO31cbiAgICB9KSAgICBcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmhlaWdodD0gXCIxMCVcIjtcbiAgICAgICAgaWYgKG5ld1Rhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZFwiKSl7XG4gICAgICAgIG5ld1Rhc2sucmVtb3ZlQ2hpbGQobWludXNCdXR0b25EaXYpO1xuICAgICAgICBuZXdUYXNrLnJlbW92ZUNoaWxkKGRlc2NQKTtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImdyaWRcIik7fVxuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkXCIpO1xuICAgIH0pIFxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGxvZ01lZWVlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW0gdGhlIHRhc2sgcHJvamVjdCBcIisgdGFzay50YXNrSUQpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmhlaWdodD0gXCI4cmVtXCI7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobWludXNCdXR0b25EaXYpO1xuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgICBpZiAoZGVzY1AudGV4dENvbnRlbnQ9PVwiXCIpe1xuICAgICAgICAgICAgZGVzY1AudGV4dENvbnRlbnQ9XCJObyBkZXNjcmlwdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGVzY1ApO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZChcInJvdGF0ZW1lXCIpO1xuICAgIH0pXG4gICAgbmV3VGFza0NoZWNrSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIml2ZWJlZW5jaGVja2VkXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCBncmF5XCI7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuY29sb3I9IFwiZ3JheVwiO1xuICAgICAgICBzdGF0dXM9IFwiY2hlY2tlZFwiO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5zcmM9IGNoZWNrTG9jO1xuICAgICAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiKSk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGFbaV0udGFza0lEID09dGFzay50YXNrSUQpe1xuICAgICAgICAgICAgICAgIGFbaV0udGFza1ByaW9yaXR5PSBcInZlcnlsb3dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICAgICAgc2hvd1JlbGV2YW50VGFza3MoYWN0aXZlUHJvamVjdCk7XG4gICAgfSlcbiAgICBtaW51c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIikpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihhW2ldLnRhc2tJRCA9PXRhc2sudGFza0lEKXtcbiAgICAgICAgICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNpZGVUYXNrQkcobmV3VGFzaywgdGFzayl7XG4gICAgc3dpdGNoKHRhc2sudGFza1ByaW9yaXR5KXtcbiAgICAgICAgY2FzZSAnaGlnaCc6IG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkICNmZjY5NjFcIjsgbmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiI2ZmZGJkOVwiOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWVkaXVtJzogbmV3VGFzay5zdHlsZS5ib3JkZXI9IFwiMS41cHggc29saWQgI2M0YmMwMFwiOyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCIjZmZmZGNkXCI7IGJyZWFrO1xuICAgICAgICBjYXNlICdsb3cnOiBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCAjNzdERDc3XCI7IG5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIiNkZWY3ZGVcIjsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVWlFbGVzKGZ1bmNuZXdUYXNrLCBmdW5jdGFzayl7XG4gICAgbGV0IHRhc2sgPSBmdW5jdGFzaztcbiAgICBsZXQgbmV3VGFzaz0gZnVuY25ld1Rhc2s7XG4gICAgbGV0IHRhc2tOYW1lTGFiZWw9IGFkZEVsZW1lbnQoJ3AnLCAndGFza05hbWVMYWJlbCcsIG5ld1Rhc2ssIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXNrLnRhc2tOYW1lKTtcbiAgICBsZXQgdGFza0RhdGVMYWJlbD0gYWRkRWxlbWVudCgncCcsICd0YXNrRGF0ZUxhYmVsJywgbmV3VGFzaywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhc2sudGFza0RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZShmdW5jdGFzaywgZnVuY05hbWVJbnB1dCwgZnVuY0RhdGVJbnB1dCl7XG4gICAgbGV0IHRhc2sgPSBmdW5jdGFzaztcbiAgICBsZXQgbmFtZUlucHV0PSBmdW5jTmFtZUlucHV0O1xuICAgIGxldCBkYXRlSW5wdXQ9IGZ1bmNEYXRlSW5wdXQ7XG4gICAgaWYgKHRhc2sudGFza05hbWUgPT0gXCJcIil7XG4gICAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2hha2VtZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFzay50YXNrRGF0ZSA9PSBcIlwiKXtcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJzaGFrZW1lXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmKHRhc2sudGFza1ByaW9yaXR5ID09IFwiXCIpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge2FjdGl2ZVByb2plY3R9OyIsImltcG9ydCBhZGRFbGVtZW50IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IGRlbGV0ZUxvYyBmcm9tICcuL2RlbGV0ZS5wbmcnXG5pbXBvcnQgY2xvc2VMb2MgZnJvbSAnLi9jbG9zZS1ib3gucG5nJ1xuaW1wb3J0IHsgY2lyY2xlQ2hlY2sgfSBmcm9tICcuL2RvbU1hbmlwLmpzJ1xuaW1wb3J0IHsgZGVjaWRlVGFza0JHIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5pbXBvcnQgeyBhZGRUYXNrVWlFbGVzIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZU1lfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7IHJlc2V0VGFza3N9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IGNoZWNrTG9jIGZyb20gJy4vY2hlY2stYm9sZC0yLnBuZydcblxuXG5jb25zdCBvYmogPSB7XG4gICAgICAgIFwiaGlnaFwiIDogMSxcbiAgICAgICAgXCJtZWRpdW1cIiA6IDIsXG4gICAgICAgIFwibG93XCIgOiAzLFxuICAgICAgICBcInZlcnlsb3dcIjogNCxcbn1cblxubGV0IHRhc2tzQXJyYXk9IFtdO1xuZnVuY3Rpb24gYWRkT3B0aW9ucygpe1xuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBhZGRFbGVtZW50KCdvcHRpb24nLCAncHJpb3JpdHknLCBwcmlvcml0eUlucHV0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJIaWdoXCIpO1xuaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xubGV0IG1lZGl1bVByaW9yaXR5ID0gYWRkRWxlbWVudCgnb3B0aW9uJywgJ3ByaW9yaXR5JywgcHJpb3JpdHlJbnB1dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTWVkaXVtXCIpO1xubWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbmxldCBsb3dQcmlvcml0eSA9IGFkZEVsZW1lbnQoJ29wdGlvbicsICdwcmlvcml0eScsIHByaW9yaXR5SW5wdXQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkxvd1wiKTtcbmxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG59XG5mdW5jdGlvbiBtYWtlSW52aXNpYmxlKCl7XG4gICAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eT0gXCJoaWRkZW5cIjtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1kaXZcIik7XG59XG5mdW5jdGlvbiBmaWxsQ2hlY2tlZE9yVW5jaGVja2VkKGVsZW1lbnQpe1xuICAgIGlmIChlbGVtZW50LnRhc2tQcmlvcml0eT09XCJ2ZXJ5bG93XCIpe1xuICAgICAgICBsZXQgbmV3VGFzaz0gYWRkRWxlbWVudCgnZGl2JywgJ25ld1Rhc2snLCB0YXNrc0FyZWEsIHVuZGVmaW5lZCwgXCJuZXdUYXNrXCIpO1xuICAgICAgICBsZXQgbmV3VGFza0NoZWNrSW1hZ2UgPSBhZGRFbGVtZW50KCdpbWcnLCAnbmV3VGFza0NoZWNrSW1hZ2UnLCBuZXdUYXNrLCBjaGVja0xvYyk7XG4gICAgICAgIG5ld1Rhc2tDaGVja0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVtZVwiKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiaXZlYmVlbmNoZWNrZWRcIik7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkIGdyYXlcIjtcbiAgICAgICAgbmV3VGFzay5zdHlsZS5jb2xvcj0gXCJncmF5XCI7XG4gICAgICAgIGNpcmNsZUNoZWNrKG5ld1Rhc2ssIGVsZW1lbnQsIG5ld1Rhc2tDaGVja0ltYWdlKTtcbiAgICAgICAgYWRkVGFza1VpRWxlcyhuZXdUYXNrLCBlbGVtZW50KTt9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICBsZXQgbmV3VGFzaz0gYWRkRWxlbWVudCgnZGl2JywgJ25ld1Rhc2snLCB0YXNrc0FyZWEsIHVuZGVmaW5lZCwgXCJuZXdUYXNrXCIpO1xuICAgICAgICBsZXQgbmV3VGFza0NoZWNrSW1hZ2UgPSBhZGRFbGVtZW50KCdpbWcnLCAnbmV3VGFza0NoZWNrSW1hZ2UnLCBuZXdUYXNrLCBibGFua2NpcmNsZWxvYyk7XG4gICAgICAgIGRlY2lkZVRhc2tCRyhuZXdUYXNrLCBlbGVtZW50KTtcbiAgICAgICAgY2lyY2xlQ2hlY2sobmV3VGFzaywgZWxlbWVudCwgbmV3VGFza0NoZWNrSW1hZ2UpO1xuICAgICAgICBhZGRUYXNrVWlFbGVzKG5ld1Rhc2ssIGVsZW1lbnQpO1xuICAgICAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1JlbGV2YW50VGFza3MocHJvak51bSl7XG4gICAgLy90YXNrc0FyZWEuaW5uZXJIVE1MPSBcIlwiO1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NMb2NhbEFycmF5XCIpKTtcbiAgICB3aGlsZSAodGFza3NBcmVhLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0YXNrc0FyZWEucmVtb3ZlQ2hpbGQodGFza3NBcmVhLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGEuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBvYmpbYS50YXNrUHJpb3JpdHldLW9ialtiLnRhc2tQcmlvcml0eV19KTtcbiAgICBhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChwcm9qTnVtPT0wKXtcbiAgICAgICAgICAgIGZpbGxDaGVja2VkT3JVbmNoZWNrZWQoZWxlbWVudCk7XG4gICAgICAgIH1lbHNlIGlmIChwcm9qTnVtPT1lbGVtZW50LnRhc2tQcm9qZWN0KXtcbiAgICAgICAgICAgIGZpbGxDaGVja2VkT3JVbmNoZWNrZWQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgfSlcbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGNsZWFyVGV4dCgpe1xuICAgIG5hbWVJbnB1dC52YWx1ZT0gXCJcIjtcbiAgICBkYXRlSW5wdXQudmFsdWU9IFwiXCI7XG4gICAgZGVzY0lucHV0LnZhbHVlPSBcIlwiO1xufVxuY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSwgdGFza0Rlc2MsIHRhc2tQcm9qZWN0LCB0YXNrSUQsIHRhc2tDaGVja2VkKXtcbiAgICAgICAgdGhpcy50YXNrTmFtZT0gdGFza05hbWU7XG4gICAgICAgIHRoaXMudGFza0RhdGU9IHRhc2tEYXRlO1xuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eT0gdGFza1ByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tEZXNjPSB0YXNrRGVzYztcbiAgICAgICAgdGhpcy50YXNrUHJvamVjdD0gdGFza1Byb2plY3Q7XG4gICAgICAgIHRoaXMudGFza0lEPSB0YXNrSUQ7XG4gICAgICAgIHRoaXMudGFza0NoZWNrZWQ9IHRhc2tDaGVja2VkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGFzaGJvYXJkTGFiZWwoZWxlbWVudCl7XG4gIGRhc2hib2FyZFAudGV4dENvbnRlbnQ9IGNhcGl0YWxpemVGaXJzdExldHRlcihlbGVtZW50LnByb2plY3ROYW1lKStcIiBEYXNoYm9hcmRcIjtcbn1cbmxldCB0YXNrc0Rpdj0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzRGl2Jyk7XG5sZXQgZGFzaGJvYXJkUD0gYWRkRWxlbWVudCgncCcsICdkYXNoYm9hcmRQJywgdGFza3NEaXYpO1xubGV0IHRhc2tzTWVudUJhcj0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzTWVudUJhcicsIHRhc2tzRGl2KTtcbmxldCBhZGRUYXNrQnV0dG9uPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkVGFza0J1dHRvbicsIHRhc2tzTWVudUJhciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQgYSB0YXNrIScpO1xubGV0IHJlbW92ZVByb2plY3RCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdyZW1vdmVQcm9qZWN0QnV0dG9uJywgdGFza3NNZW51QmFyLCBkZWxldGVMb2MpO1xubGV0IHRhc2tzQXJlYSA9IGFkZEVsZW1lbnQoJ2RpdicsICd0YXNrc0FyZWEnLCB0YXNrc0Rpdik7XG5cbmxldCBuZXdUYXNrRm9ybSA9IGFkZEVsZW1lbnQoJ2RpdicsICduZXdUYXNrRm9ybScsIHRhc2tzQXJlYSk7XG5cbmxldCBmb3JtQ2xvc2VCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdmb3JtQ2xvc2VCdXR0b24nLCBuZXdUYXNrRm9ybSwgY2xvc2VMb2MpO1xubGV0IGZvcm1FbGVtZW50cz0gYWRkRWxlbWVudCgnZGl2JywgJ2Zvcm1FbGVtZW50cycsIG5ld1Rhc2tGb3JtKTtcbmxldCBuYW1lTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQxJywgXCJUYXNrIG5hbWU6XCIpO1xubGV0IG5hbWVJbnB1dD0gYWRkRWxlbWVudCgnaW5wdXQnLCAnZm9ybUlucHV0JywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsIFwibmFtZVwiKTtcbm5hbWVJbnB1dC5wbGFjZWhvbGRlcj0gXCJOYW1lIHlvdXIgdGFza1wiO1xubGV0IGRhdGVMYWJlbD0gYWRkRWxlbWVudCgnbGFiZWwnLCAnZm9ybUxhYmVsJywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsICdpZDInLCBcIkZpbmlzaCBieTpcIik7XG5sZXQgZGF0ZUlucHV0PSBhZGRFbGVtZW50KCdpbnB1dCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJkYXRlXCIpO1xuZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuZGF0ZUlucHV0LnBsYWNlaG9sZGVyPSBcIkFkZCBhIGRhdGVcIjtcbmxldCBwcmlvcml0eUxhYmVsPSBhZGRFbGVtZW50KCdsYWJlbCcsICdmb3JtTGFiZWwnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgJ2lkMycsIFwiUHJpb3JpdHk6XCIpO1xubGV0IHByaW9yaXR5SW5wdXQ9IGFkZEVsZW1lbnQoJ3NlbGVjdCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJwcmlvcml0eVwiKTtcbmFkZE9wdGlvbnMoKTtcbmxldCBkZXNjTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQ0JywgXCJEZXNjcmlwdGlvbjpcIik7XG5sZXQgZGVzY0lucHV0PSBhZGRFbGVtZW50KCd0ZXh0YXJlYScsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJkZXNjXCIpO1xuZGVzY0lucHV0LnBsYWNlaG9sZGVyPSBcIk9wdGlvbmFsIHRhc2sgZGVzY3JpcHRpb25cIjtcbmxldCBjcmVhdGVUYXNrQnV0dG9uPSBhZGRFbGVtZW50KCdidXR0b24nLCAnY3JlYXRlVGFza0J1dHRvbicsIG5ld1Rhc2tGb3JtLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCEnKTtcbmNyZWF0ZVRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVUYXNrcyhkaXZUb1JldHVybil7XG4gICAgZGl2VG9SZXR1cm4uYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xufVxuXG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIHNob3dOZXdUYXNrRm9ybSgpe1xuICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHk9IFwidmlzaWJsZVwiO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIC8vdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLWRpdlwiKTtcbiAgICBjbGVhclRleHQoKTtcbiAgICAvLyB0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcInNob3dpbmctZm9ybVwiKTtcbn0pO1xuXG5mb3JtQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIG1ha2VJbnZpc2libGUoKXtcbiAgICBuZXdUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5PSBcImhpZGRlblwiO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLWRpdlwiKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZW5hYmxlLWRpdlwiKTtcbiAgICB0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlLWRpdlwiKTtcbn0pO1xuZnVuY3Rpb24gcHVzaEludG9UYXNrc0xvY2FsQXJyYXkoZnVuY3Rhc2spe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIikpO1xuICAgIGEucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NMb2NhbEFycmF5XCIpKSk7XG59XG5jcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBtYWtlVGFzaygpe1xuICAgIGxldCBiPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xvY2FsSWQnKSk7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBhY3RpdmVQcm9qZWN0LCBiLCBmYWxzZSk7XG4gICAgaWYgKHZhbGlkYXRlTWUodGFzaywgbmFtZUlucHV0LCBkYXRlSW5wdXQpKXtcbiAgICAgICAgYis9MTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMb2NhbElkJywgYik7XG4gICAgICAgIHRhc2tzQXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgcHVzaEludG9UYXNrc0xvY2FsQXJyYXkodGFzayk7XG4gICAgICAgIG1ha2VJbnZpc2libGUoKTtcbiAgICAgICAgbGV0IHRlbXA9IHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlbWVcIik7XG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VtZVwiKTtcbn1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIH0pO1xuXG4gICAgZXhwb3J0IHt0YXNrc0FycmF5fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=