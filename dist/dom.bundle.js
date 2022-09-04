"use strict";
(self["webpackChunknotifylisttest"] = self["webpackChunknotifylisttest"] || []).push([["dom"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/domManip.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4Q0FBUTtBQUN2QztBQUNBLEtBQUs7QUFDTDtBQUNBLCtCQUErQiwrREFBYztBQUM3QztBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0Esa0VBQWtFLDBDQUEwQztBQUM1RyxvRUFBb0UsMENBQTBDO0FBQzlHLGlFQUFpRSwwQ0FBMEM7QUFDM0c7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL2RvbU1hbmlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVja0xvYyBmcm9tICcuL2NoZWNrLWJvbGQtMi5wbmcnXG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5jbGFzcyBuZXdCdXR0b257XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3RJRCl7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWU9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RJRD0gcHJvamVjdElEO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRWxlbWVudCh0eXBlLCBjbGFzc25hbWUsIGFkZFRvPW51bGwsIHNyY0VsZT0gbnVsbCwgaWQ9bnVsbCwgdGV4dD1udWxsKXtcbiAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGUuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xuICAgIGlmIChzcmNFbGUhPT1udWxsKXtcbiAgICAgICAgZWxlLnNyYz0gc3JjRWxlO1xuICAgIH1cbiAgICBpZihpZCE9PSBudWxsKXtcbiAgICAgICAgZWxlLmlkPSBpZDtcbiAgICB9XG4gICAgaWYgKHRleHQhPT0gbnVsbCl7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoYWRkVG8hPT0gbnVsbCl7XG4gICAgICAgIGFkZFRvLmFwcGVuZENoaWxkKGVsZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1dEJ1dHRvbkluTG9jYWxTdG9yYWdlKG5hbWUpe1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSk7XG4gICAgbGV0IGI9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaWRlQmFyQnV0dG9uc0lkJykpO1xuICAgIGIrPTE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnLCBiKTtcbiAgICBsZXQgbmV4dEJ1dHRvbiA9IG5ldyBuZXdCdXR0b24obmFtZSwgYilcbiAgICBhW2JdPSBuZXh0QnV0dG9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSkpO1xuICAgIHJldHVybiBuZXh0QnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhidXR0b25MaXN0KXtcbiAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpO1xuICAgIGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5wcm9qZWN0SUQpO1xuICAgICAgICBsZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGVsZW1lbnQucHJvamVjdElELCBlbGVtZW50LnByb2plY3ROYW1lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvamVjdHMoKXtcbiAgICBsZXQgc2lkZUJhckJ1dHRvbnNBcnJheT0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoc2lkZUJhckJ1dHRvbnNBcnJheSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaWRlQmFyQnV0dG9uc0lkJywwKTtcbiAgICBsZXQgYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKTtcbiAgICBsZXQgbmV4dEJ1dHRvbiA9IG5ldyBuZXdCdXR0b24oXCJBbGxcIiwgMClcbiAgICBhWzBdPSBuZXh0QnV0dG9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2hlY2soZnVuY25ld1Rhc2ssIGZ1bmN0YXNrLCBmdW5jbmV3VGFza0NoZWNrSW1hZ2Upe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IG5ld1Rhc2s9IGZ1bmNuZXdUYXNrO1xuICAgIGxldCBuZXdUYXNrQ2hlY2tJbWFnZT0gZnVuY25ld1Rhc2tDaGVja0ltYWdlO1xuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiBjaGFuZ2VJY29uKCl7XG4gICAgICAgIG5ld1Rhc2tDaGVja0ltYWdlLnNyYz0gY2hlY2tMb2M7XG4gICAgICAgIG5ld1Rhc2tDaGVja0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVtZVwiKTtcbiAgICB9KVxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gY2hhbmdlSWNvbigpe1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5zcmM9IGJsYW5rY2lyY2xlbG9jO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwicm90YXRlbWVcIik7XG4gICAgfSkgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjaWRlVGFza0JHKG5ld1Rhc2ssIHRhc2spe1xuICAgIHN3aXRjaCh0YXNrLnRhc2tQcmlvcml0eSl7XG4gICAgICAgIGNhc2UgJ2hpZ2gnOiBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCAjZmY2OTYxXCI7IG5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIiNmZmRiZDlcIjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6IG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkICNjNGJjMDBcIjsgbmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiI2ZmZmRjZFwiOyBicmVhaztcbiAgICAgICAgY2FzZSAnbG93JzogbmV3VGFzay5zdHlsZS5ib3JkZXI9IFwiMS41cHggc29saWQgIzc3REQ3N1wiOyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCIjZGVmN2RlXCI7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDogYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1VpRWxlcyhmdW5jbmV3VGFzaywgZnVuY3Rhc2spe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IG5ld1Rhc2s9IGZ1bmNuZXdUYXNrO1xuICAgIGxldCB0YXNrTmFtZUxhYmVsPSBhZGRFbGVtZW50KCdwJywgJ3Rhc2tOYW1lTGFiZWwnLCBuZXdUYXNrLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFzay50YXNrTmFtZSk7XG4gICAgbGV0IHRhc2tEYXRlTGFiZWw9IGFkZEVsZW1lbnQoJ3AnLCAndGFza0RhdGVMYWJlbCcsIG5ld1Rhc2ssIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXNrLnRhc2tEYXRlKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=