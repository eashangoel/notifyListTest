"use strict";
(self["webpackChunknotifylisttest"] = self["webpackChunknotifylisttest"] || []).push([["home"],{

/***/ "./src/domManip.js":
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskUiEles": () => (/* binding */ addTaskUiEles),
/* harmony export */   "circleCheck": () => (/* binding */ circleCheck),
/* harmony export */   "decideTaskBG": () => (/* binding */ decideTaskBG),
/* harmony export */   "default": () => (/* binding */ addElement),
/* harmony export */   "populateProjects": () => (/* binding */ populateProjects),
/* harmony export */   "putButtonInLocalStorage": () => (/* binding */ putButtonInLocalStorage),
/* harmony export */   "resetProjects": () => (/* binding */ resetProjects)
/* harmony export */ });
/* harmony import */ var _check_bold_2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-bold-2.png */ "./src/check-bold-2.png");
/* harmony import */ var _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-blank-circle-outline.png */ "./src/checkbox-blank-circle-outline.png");


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
        console.log(element.projectID);
        let newButton = addElement('button', 'buttonsInList', buttonList, undefined, element.projectID, element.projectName);
    });
}

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

function circleCheck(funcnewTask, functask, funcnewTaskCheckImage){
    let task = functask;
    let newTask= funcnewTask;
    let newTaskCheckImage= funcnewTaskCheckImage;
    newTask.addEventListener("mouseover", function changeIcon(){
        newTaskCheckImage.src= _check_bold_2_png__WEBPACK_IMPORTED_MODULE_0__;
        newTaskCheckImage.classList.add("rotateme");
    })
    newTask.addEventListener("mouseleave", function changeIcon(){
        newTaskCheckImage.src= _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_1__;
        newTaskCheckImage.classList.remove("rotateme");
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
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _plus_thick_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus-thick-2.png */ "./src/plus-thick-2.png");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");








let backEndSideBarButtonsArray= [];
let divToReturn = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'mainHomeDiv');
let headerDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'headerDiv', divToReturn);
let sideBarDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'sidebarDiv', divToReturn);
let logo= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', 'mainLogo', headerDiv, _logo_png__WEBPACK_IMPORTED_MODULE_0__);
let listsHeaderDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'listsHeaderDiv', sideBarDiv)
let buttonList = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'button-list', sideBarDiv);
//let sideBarButtonsArray= [];
//localStorage.setItem("sideBarButtonsArray",JSON.stringify(sideBarButtonsArray));
// localStorage.setItem('sideBarButtonsId',0);
//console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
let addButtonDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'addButtonDiv', sideBarDiv)
let addButton= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', 'addButton', addButtonDiv, _plus_thick_2_png__WEBPACK_IMPORTED_MODULE_2__);
let listsHeader = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('p', 'listsHeader', listsHeaderDiv);
listsHeader.innerHTML= "Lists";


function addHomeDOM(){
    //resetProjects();
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(buttonList);
    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__["default"])(divToReturn);
    return divToReturn;
}
function showAddingProjectButton(){
    let addingDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'projectAdder', buttonList);
    let newInput = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'addingProjectInput', addingDiv);
    let yesButton = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'addingProjectButton', addingDiv, undefined, undefined, 'Add');
    let noButton = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'addingProjectButton', addingDiv, undefined, undefined, 'Cancel');

    noButton.addEventListener('click', (event)=>{
        addingDiv.remove();
    })
    
    yesButton.addEventListener('click', (event)=>{
        if (newInput.value==""){
            newInput.placeholder= "Please name your project"
        }
        else{
        let buttonObject = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.putButtonInLocalStorage)(newInput.value);
        backEndSideBarButtonsArray.push(buttonObject);
        let newButton = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'buttonsInList', buttonList, undefined, buttonObject.projectID, newInput.value);
        console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
        addingDiv.remove();}
    })
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
/* harmony export */   "default": () => (/* binding */ populateTasks)
/* harmony export */ });
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _close_box_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./close-box.png */ "./src/close-box.png");
/* harmony import */ var _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox-blank-circle-outline.png */ "./src/checkbox-blank-circle-outline.png");







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
function clearText(){
    nameInput.value= "";
    dateInput.value= "";
    descInput.value= "";
}
class Task{
    constructor(taskName, taskDate, taskPriority, taskDesc){
        this.taskName= taskName;
        this.taskDate= taskDate;
        this.taskPriority= taskPriority;
        this.taskDesc= taskDesc;
    }
}

let tasksDiv= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'tasksDiv');
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
nameInput.setAttribute("required", "");
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

function populateTasks(divToReturn){
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
    let newTask= (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'newTask', tasksArea, undefined, "newTask");
    let newTaskCheckImage = (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'newTaskCheckImage', newTask, _checkbox_blank_circle_outline_png__WEBPACK_IMPORTED_MODULE_3__);
    makeInvisible();
    let task = new Task(nameInput.value, dateInput.value, priorityInput.value, descInput.value)
    ;(0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.decideTaskBG)(newTask, task);
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.circleCheck)(newTask, task, newTaskCheckImage);
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_0__.addTaskUiEles)(newTask, task);
    })


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQkFBaUIsd0RBQVU7QUFDM0IsNEJBQTRCLHdEQUFVLHNDQUFzQywrREFBYztBQUMxRjtBQUNBO0FBQ0EsSUFBSSwyREFBWTtBQUNoQixJQUFJLHlEQUFXO0FBQ2YsSUFBSSwyREFBYTtBQUNqQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL3NyYy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlY2tMb2MgZnJvbSAnLi9jaGVjay1ib2xkLTIucG5nJ1xuaW1wb3J0IGJsYW5rY2lyY2xlbG9jIGZyb20gJy4vY2hlY2tib3gtYmxhbmstY2lyY2xlLW91dGxpbmUucG5nJ1xuY2xhc3MgbmV3QnV0dG9ue1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBwcm9qZWN0SUQpe1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0SUQ9IHByb2plY3RJRDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEVsZW1lbnQodHlwZSwgY2xhc3NuYW1lLCBhZGRUbz1udWxsLCBzcmNFbGU9IG51bGwsIGlkPW51bGwsIHRleHQ9bnVsbCl7XG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcbiAgICBpZiAoc3JjRWxlIT09bnVsbCl7XG4gICAgICAgIGVsZS5zcmM9IHNyY0VsZTtcbiAgICB9XG4gICAgaWYoaWQhPT0gbnVsbCl7XG4gICAgICAgIGVsZS5pZD0gaWQ7XG4gICAgfVxuICAgIGlmICh0ZXh0IT09IG51bGwpe1xuICAgICAgICBlbGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKGFkZFRvIT09IG51bGwpe1xuICAgICAgICBhZGRUby5hcHBlbmRDaGlsZChlbGUpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBlbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXRCdXR0b25JbkxvY2FsU3RvcmFnZShuYW1lKXtcbiAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpO1xuICAgIGxldCBiPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcpKTtcbiAgICBiKz0xO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaWRlQmFyQnV0dG9uc0lkJywgYik7XG4gICAgbGV0IG5leHRCdXR0b24gPSBuZXcgbmV3QnV0dG9uKG5hbWUsIGIpXG4gICAgYVtiXT0gbmV4dEJ1dHRvbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpKTtcbiAgICByZXR1cm4gbmV4dEJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoYnV0dG9uTGlzdCl7XG4gICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKTtcbiAgICBhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQucHJvamVjdElEKTtcbiAgICAgICAgbGV0IG5ld0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdidXR0b25zSW5MaXN0JywgYnV0dG9uTGlzdCwgdW5kZWZpbmVkLCBlbGVtZW50LnByb2plY3RJRCwgZWxlbWVudC5wcm9qZWN0TmFtZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFByb2plY3RzKCl7XG4gICAgbGV0IHNpZGVCYXJCdXR0b25zQXJyYXk9IFtdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiLEpTT04uc3RyaW5naWZ5KHNpZGVCYXJCdXR0b25zQXJyYXkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsMCk7XG4gICAgbGV0IGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSk7XG4gICAgbGV0IG5leHRCdXR0b24gPSBuZXcgbmV3QnV0dG9uKFwiQWxsXCIsIDApXG4gICAgYVswXT0gbmV4dEJ1dHRvbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUNoZWNrKGZ1bmNuZXdUYXNrLCBmdW5jdGFzaywgZnVuY25ld1Rhc2tDaGVja0ltYWdlKXtcbiAgICBsZXQgdGFzayA9IGZ1bmN0YXNrO1xuICAgIGxldCBuZXdUYXNrPSBmdW5jbmV3VGFzaztcbiAgICBsZXQgbmV3VGFza0NoZWNrSW1hZ2U9IGZ1bmNuZXdUYXNrQ2hlY2tJbWFnZTtcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gY2hhbmdlSWNvbigpe1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5zcmM9IGNoZWNrTG9jO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm90YXRlbWVcIik7XG4gICAgfSlcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBibGFua2NpcmNsZWxvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO1xuICAgIH0pICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2lkZVRhc2tCRyhuZXdUYXNrLCB0YXNrKXtcbiAgICBzd2l0Y2godGFzay50YXNrUHJpb3JpdHkpe1xuICAgICAgICBjYXNlICdoaWdoJzogbmV3VGFzay5zdHlsZS5ib3JkZXI9IFwiMS41cHggc29saWQgI2ZmNjk2MVwiOyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCIjZmZkYmQ5XCI7IGJyZWFrO1xuICAgICAgICBjYXNlICdtZWRpdW0nOiBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCAjYzRiYzAwXCI7IG5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIiNmZmZkY2RcIjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xvdyc6IG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkICM3N0RENzdcIjsgbmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiI2RlZjdkZVwiOyBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6IGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tVaUVsZXMoZnVuY25ld1Rhc2ssIGZ1bmN0YXNrKXtcbiAgICBsZXQgdGFzayA9IGZ1bmN0YXNrO1xuICAgIGxldCBuZXdUYXNrPSBmdW5jbmV3VGFzaztcbiAgICBsZXQgdGFza05hbWVMYWJlbD0gYWRkRWxlbWVudCgncCcsICd0YXNrTmFtZUxhYmVsJywgbmV3VGFzaywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhc2sudGFza05hbWUpO1xuICAgIGxldCB0YXNrRGF0ZUxhYmVsPSBhZGRFbGVtZW50KCdwJywgJ3Rhc2tEYXRlTGFiZWwnLCBuZXdUYXNrLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFzay50YXNrRGF0ZSk7XG59IiwiaW1wb3J0IGxvZ29Mb2MgZnJvbSAnLi9sb2dvLnBuZydcbmltcG9ydCBhZGRFbGVtZW50IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IHsgcHV0QnV0dG9uSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBwbHVzbG9jIGZyb20gJy4vcGx1cy10aGljay0yLnBuZyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVByb2plY3RzIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyByZXNldFByb2plY3RzIH0gZnJvbSAnLi9kb21NYW5pcC5qcydcbmltcG9ydCBwb3B1bGF0ZVRhc2tzIGZyb20gJy4vdGFza3MuanMnXG5cbmxldCBiYWNrRW5kU2lkZUJhckJ1dHRvbnNBcnJheT0gW107XG5sZXQgZGl2VG9SZXR1cm4gPSBhZGRFbGVtZW50KCdkaXYnLCAnbWFpbkhvbWVEaXYnKTtcbmxldCBoZWFkZXJEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdoZWFkZXJEaXYnLCBkaXZUb1JldHVybik7XG5sZXQgc2lkZUJhckRpdj0gYWRkRWxlbWVudCgnZGl2JywgJ3NpZGViYXJEaXYnLCBkaXZUb1JldHVybik7XG5sZXQgbG9nbz0gYWRkRWxlbWVudCgnaW1nJywgJ21haW5Mb2dvJywgaGVhZGVyRGl2LCBsb2dvTG9jKTtcbmxldCBsaXN0c0hlYWRlckRpdj0gYWRkRWxlbWVudCgnZGl2JywgJ2xpc3RzSGVhZGVyRGl2Jywgc2lkZUJhckRpdilcbmxldCBidXR0b25MaXN0ID0gYWRkRWxlbWVudCgnZGl2JywgJ2J1dHRvbi1saXN0Jywgc2lkZUJhckRpdik7XG4vL2xldCBzaWRlQmFyQnV0dG9uc0FycmF5PSBbXTtcbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoc2lkZUJhckJ1dHRvbnNBcnJheSkpO1xuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnLDApO1xuLy9jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSkpO1xubGV0IGFkZEJ1dHRvbkRpdj0gYWRkRWxlbWVudCgnZGl2JywgJ2FkZEJ1dHRvbkRpdicsIHNpZGVCYXJEaXYpXG5sZXQgYWRkQnV0dG9uPSBhZGRFbGVtZW50KCdpbWcnLCAnYWRkQnV0dG9uJywgYWRkQnV0dG9uRGl2LCBwbHVzbG9jKTtcbmxldCBsaXN0c0hlYWRlciA9IGFkZEVsZW1lbnQoJ3AnLCAnbGlzdHNIZWFkZXInLCBsaXN0c0hlYWRlckRpdik7XG5saXN0c0hlYWRlci5pbm5lckhUTUw9IFwiTGlzdHNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRIb21lRE9NKCl7XG4gICAgLy9yZXNldFByb2plY3RzKCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0cyhidXR0b25MaXN0KTtcbiAgICBwb3B1bGF0ZVRhc2tzKGRpdlRvUmV0dXJuKTtcbiAgICByZXR1cm4gZGl2VG9SZXR1cm47XG59XG5mdW5jdGlvbiBzaG93QWRkaW5nUHJvamVjdEJ1dHRvbigpe1xuICAgIGxldCBhZGRpbmdEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0QWRkZXInLCBidXR0b25MaXN0KTtcbiAgICBsZXQgbmV3SW5wdXQgPSBhZGRFbGVtZW50KCdpbnB1dCcsICdhZGRpbmdQcm9qZWN0SW5wdXQnLCBhZGRpbmdEaXYpO1xuICAgIGxldCB5ZXNCdXR0b24gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkaW5nUHJvamVjdEJ1dHRvbicsIGFkZGluZ0RpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQnKTtcbiAgICBsZXQgbm9CdXR0b24gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkaW5nUHJvamVjdEJ1dHRvbicsIGFkZGluZ0RpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdDYW5jZWwnKTtcblxuICAgIG5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICBhZGRpbmdEaXYucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBcbiAgICB5ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgIGlmIChuZXdJbnB1dC52YWx1ZT09XCJcIil7XG4gICAgICAgICAgICBuZXdJbnB1dC5wbGFjZWhvbGRlcj0gXCJQbGVhc2UgbmFtZSB5b3VyIHByb2plY3RcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgIGxldCBidXR0b25PYmplY3QgPSBwdXRCdXR0b25JbkxvY2FsU3RvcmFnZShuZXdJbnB1dC52YWx1ZSk7XG4gICAgICAgIGJhY2tFbmRTaWRlQmFyQnV0dG9uc0FycmF5LnB1c2goYnV0dG9uT2JqZWN0KTtcbiAgICAgICAgbGV0IG5ld0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdidXR0b25zSW5MaXN0JywgYnV0dG9uTGlzdCwgdW5kZWZpbmVkLCBidXR0b25PYmplY3QucHJvamVjdElELCBuZXdJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG4gICAgICAgIGFkZGluZ0Rpdi5yZW1vdmUoKTt9XG4gICAgfSlcbn1cblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gYWRkQnV0dG9uVG9MaXN0KCl7XG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0QWRkZXInKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wLmxlbmd0aClcbiAgICBpZiAodGVtcC5sZW5ndGggIT09IDApe1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgc2hvd0FkZGluZ1Byb2plY3RCdXR0b24oKTtcbiAgICB9XG59KVxuXG4iLCJpbXBvcnQgYWRkRWxlbWVudCBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBkZWxldGVMb2MgZnJvbSAnLi9kZWxldGUucG5nJ1xuaW1wb3J0IGNsb3NlTG9jIGZyb20gJy4vY2xvc2UtYm94LnBuZydcbmltcG9ydCB7IGNpcmNsZUNoZWNrIH0gZnJvbSAnLi9kb21NYW5pcC5qcydcbmltcG9ydCB7IGRlY2lkZVRhc2tCRyB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IGJsYW5rY2lyY2xlbG9jIGZyb20gJy4vY2hlY2tib3gtYmxhbmstY2lyY2xlLW91dGxpbmUucG5nJ1xuaW1wb3J0IHsgYWRkVGFza1VpRWxlcyB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuZnVuY3Rpb24gYWRkT3B0aW9ucygpe1xuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBhZGRFbGVtZW50KCdvcHRpb24nLCAncHJpb3JpdHknLCBwcmlvcml0eUlucHV0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJIaWdoXCIpO1xuaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xubGV0IG1lZGl1bVByaW9yaXR5ID0gYWRkRWxlbWVudCgnb3B0aW9uJywgJ3ByaW9yaXR5JywgcHJpb3JpdHlJbnB1dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTWVkaXVtXCIpO1xubWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbmxldCBsb3dQcmlvcml0eSA9IGFkZEVsZW1lbnQoJ29wdGlvbicsICdwcmlvcml0eScsIHByaW9yaXR5SW5wdXQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkxvd1wiKTtcbmxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG59XG5mdW5jdGlvbiBtYWtlSW52aXNpYmxlKCl7XG4gICAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eT0gXCJoaWRkZW5cIjtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1kaXZcIik7XG59XG5mdW5jdGlvbiBjbGVhclRleHQoKXtcbiAgICBuYW1lSW5wdXQudmFsdWU9IFwiXCI7XG4gICAgZGF0ZUlucHV0LnZhbHVlPSBcIlwiO1xuICAgIGRlc2NJbnB1dC52YWx1ZT0gXCJcIjtcbn1cbmNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tEZXNjKXtcbiAgICAgICAgdGhpcy50YXNrTmFtZT0gdGFza05hbWU7XG4gICAgICAgIHRoaXMudGFza0RhdGU9IHRhc2tEYXRlO1xuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eT0gdGFza1ByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tEZXNjPSB0YXNrRGVzYztcbiAgICB9XG59XG5cbmxldCB0YXNrc0Rpdj0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzRGl2Jyk7XG5sZXQgdGFza3NNZW51QmFyPSBhZGRFbGVtZW50KCdkaXYnLCAndGFza3NNZW51QmFyJywgdGFza3NEaXYpO1xubGV0IGFkZFRhc2tCdXR0b249IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdhZGRUYXNrQnV0dG9uJywgdGFza3NNZW51QmFyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCBhIHRhc2shJyk7XG5sZXQgcmVtb3ZlUHJvamVjdEJ1dHRvbj0gYWRkRWxlbWVudCgnaW1nJywgJ3JlbW92ZVByb2plY3RCdXR0b24nLCB0YXNrc01lbnVCYXIsIGRlbGV0ZUxvYyk7XG5sZXQgdGFza3NBcmVhID0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzQXJlYScsIHRhc2tzRGl2KTtcblxubGV0IG5ld1Rhc2tGb3JtID0gYWRkRWxlbWVudCgnZGl2JywgJ25ld1Rhc2tGb3JtJywgdGFza3NBcmVhKTtcblxubGV0IGZvcm1DbG9zZUJ1dHRvbj0gYWRkRWxlbWVudCgnaW1nJywgJ2Zvcm1DbG9zZUJ1dHRvbicsIG5ld1Rhc2tGb3JtLCBjbG9zZUxvYyk7XG5sZXQgZm9ybUVsZW1lbnRzPSBhZGRFbGVtZW50KCdkaXYnLCAnZm9ybUVsZW1lbnRzJywgbmV3VGFza0Zvcm0pO1xubGV0IG5hbWVMYWJlbD0gYWRkRWxlbWVudCgnbGFiZWwnLCAnZm9ybUxhYmVsJywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsICdpZDEnLCBcIlRhc2sgbmFtZTpcIik7XG5sZXQgbmFtZUlucHV0PSBhZGRFbGVtZW50KCdpbnB1dCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJuYW1lXCIpO1xubmFtZUlucHV0LnBsYWNlaG9sZGVyPSBcIk5hbWUgeW91ciB0YXNrXCI7XG5uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5sZXQgZGF0ZUxhYmVsPSBhZGRFbGVtZW50KCdsYWJlbCcsICdmb3JtTGFiZWwnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgJ2lkMicsIFwiRmluaXNoIGJ5OlwiKTtcbmxldCBkYXRlSW5wdXQ9IGFkZEVsZW1lbnQoJ2lucHV0JywgJ2Zvcm1JbnB1dCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCBcImRhdGVcIik7XG5kYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5kYXRlSW5wdXQucGxhY2Vob2xkZXI9IFwiQWRkIGEgZGF0ZVwiO1xubGV0IHByaW9yaXR5TGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQzJywgXCJQcmlvcml0eTpcIik7XG5sZXQgcHJpb3JpdHlJbnB1dD0gYWRkRWxlbWVudCgnc2VsZWN0JywgJ2Zvcm1JbnB1dCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCBcInByaW9yaXR5XCIpO1xuYWRkT3B0aW9ucygpO1xubGV0IGRlc2NMYWJlbD0gYWRkRWxlbWVudCgnbGFiZWwnLCAnZm9ybUxhYmVsJywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsICdpZDQnLCBcIkRlc2NyaXB0aW9uOlwiKTtcbmxldCBkZXNjSW5wdXQ9IGFkZEVsZW1lbnQoJ3RleHRhcmVhJywgJ2Zvcm1JbnB1dCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCBcImRlc2NcIik7XG5kZXNjSW5wdXQucGxhY2Vob2xkZXI9IFwiT3B0aW9uYWwgdGFzayBkZXNjcmlwdGlvblwiO1xubGV0IGNyZWF0ZVRhc2tCdXR0b249IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdjcmVhdGVUYXNrQnV0dG9uJywgbmV3VGFza0Zvcm0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnQWRkIScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVRhc2tzKGRpdlRvUmV0dXJuKXtcbiAgICBkaXZUb1JldHVybi5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG59XG5cblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2hvd05ld1Rhc2tGb3JtKCl7XG4gICAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eT0gXCJ2aXNpYmxlXCI7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLWRpdlwiKTtcbiAgICBjbGVhclRleHQoKTtcbiAgICAvLyB0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcInNob3dpbmctZm9ybVwiKTtcbn0pO1xuXG5mb3JtQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIG1ha2VJbnZpc2libGUoKXtcbiAgICBuZXdUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5PSBcImhpZGRlblwiO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLWRpdlwiKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZW5hYmxlLWRpdlwiKTtcbiAgICB0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlLWRpdlwiKTtcbn0pO1xuY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gbWFrZVRhc2soKXtcbiAgICBsZXQgbmV3VGFzaz0gYWRkRWxlbWVudCgnZGl2JywgJ25ld1Rhc2snLCB0YXNrc0FyZWEsIHVuZGVmaW5lZCwgXCJuZXdUYXNrXCIpO1xuICAgIGxldCBuZXdUYXNrQ2hlY2tJbWFnZSA9IGFkZEVsZW1lbnQoJ2ltZycsICduZXdUYXNrQ2hlY2tJbWFnZScsIG5ld1Rhc2ssIGJsYW5rY2lyY2xlbG9jKTtcbiAgICBtYWtlSW52aXNpYmxlKCk7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlKVxuICAgIGRlY2lkZVRhc2tCRyhuZXdUYXNrLCB0YXNrKTtcbiAgICBjaXJjbGVDaGVjayhuZXdUYXNrLCB0YXNrLCBuZXdUYXNrQ2hlY2tJbWFnZSk7XG4gICAgYWRkVGFza1VpRWxlcyhuZXdUYXNrLCB0YXNrKTtcbiAgICB9KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9