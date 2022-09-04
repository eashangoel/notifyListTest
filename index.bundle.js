"use strict";
(self["webpackChunknotifylisttest"] = self["webpackChunknotifylisttest"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid red; */\n    font-family: 'Fira Sans Condensed', sans-serif;\n}\n@keyframes rotate {\n    0% {\n      transform: rotate(0);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n@keyframes spin { \n    100% { \n      transform: rotateZ(360deg);\n    }\n  }\n@keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\n    30% { transform: translate(3px, 2px) rotate(0deg); }\n    40% { transform: translate(1px, -1px) rotate(1deg); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\n    90% { transform: translate(1px, 2px) rotate(0deg); }\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\n  }\n:root {\n    --orange: #E27D60;\n    --cyan: rgb(131, 205, 203); \n    --yellow:#E8A87C;\n    --purple: #C38D9E;\n    --seablue:#41B3A3;\n  }\n\n/* Home styling */\n.mainHomeDiv{\n    width:100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 7fr;\n}\n.headerDiv{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: var(--purple);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.sidebarDiv{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: var(--yellow);\n    box-shadow: 5px 0 5px -2px #888;\n}\n.mainLogo{\n    height: auto;\n    width: 15%;\n}\n.listsHeaderDiv{\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: var(--seablue);\n    box-shadow: 0px 2px 10px -5px #111; \n}\n.listsHeader{\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n    color: white;\n}\n.button-list{\n    margin: 1rem;\n    height: auto;\n}\n.buttonsInList{\n    width: 100%;\n    border: none;\n    border-radius: 15px;\n    background-color: var(--yellow);\n    height: 2rem;\n    margin: 1%;\n    font-size: 1rem;\n}\n.buttonsInList:hover{\n    background-color: var(--purple);\n    font-size: 1.4rem;\n}\n.addButtonDiv{\n    display: flex;\n    justify-content: center;\n}\n.addButton{\n    height: 15%;\n    width: 15%;\n}\n.addButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n}\n.projectAdder{\n    margin-top: 2%;\n    display: flex;\n    justify-content: center;\n    height: 1.3rem;\n}\n.addingProjectInput{\n    border: none;\n    margin-right: 5%;\n    height: 100%;\n}\n/* .addingProjectInput:hover{\n    animation: shake 0.5s; \n    animation-iteration-count: infinite; \n} */\n.addingProjectInput:focus{\n    outline: none;\n    border: 2px solid var(--seablue)\n}\n.addingProjectButton{\n   border:none;\n   width: 4em;\n   margin-inline: auto;\n}\n.addingProjectButton:last-of-type:hover{\n    background-color: #ff6961;\n    animation: shake 0.5s; \n    animation-iteration-count: 1; \n}\n.addingProjectButton:first-of-type:hover{\n    background-color: #77DD77;\n    /* animation: shake 0.5s; \n    animation-iteration-count: 1;  */\n}\n/* home styling */\n\n/* tasks styling */\n.tasksDiv{\n    grid-row: 2/3;\n    grid-column: 2/3;\n    margin-top: 1%;\n}\n.tasksMenuBar{\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.removeProjectButton{\n    width: 3rem;\n    height: auto;\n}\n.removeProjectButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n    width: 3.5rem;\n    height: auto;\n}\n.removeProjectButton:active{\n    animation: shake 0.5s;\n}\n.addTaskButton{\n    width: 90%;\n    height: 80%;\n    border: none;\n    border-radius: 25px;\n    background-color: #e0f4f1;\n    border: 1px solid var(--seablue);\n    font-size: 1rem;\n    color: black;\n}\n.addTaskButton:hover{\n    background-color: #e7d1d8;\n    border: 3px solid var(--purple);\n}\n.tasksArea{\n    margin: 3%;\n    height: 85%;\n    /* border: 2px solid blue; */\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 2%;\n}\n.newTask{\n    border-radius: 40px;\n    height: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.newTaskCheckImage{\n    height: 50%;\n    width: auto;\n    margin-left: 1%;\n}\n.newTaskForm{\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    margin-top: 11%;\n    margin-left: 22%;\n    border: 2px solid var(--purple);\n    border-radius: 15px;\n    background-color: #f0e2e7;\n    visibility: hidden;\n}\n.formCloseButton{\n    height: auto;\n    width: 5%;\n    margin-left: 94%;\n    margin-top: 1%;\n}\n.formCloseButton:hover{\n    filter: invert(25%) sepia(84%) saturate(7492%) hue-rotate(18deg) brightness(100%) contrast(105%);\n}\n.disable-div{\n    pointer-events: none;\n}\n.enable-div{\n    pointer-events: all;\n}\n/* .showing-form{\n    filter: blur(2px);\n} */\n.formElements{\n   width: 65%;\n   height: fit-content;\n   margin-inline: auto;\n   display: grid;\n   column-gap: 2rem;\n   row-gap: 1rem;\n   grid-template-rows: 1fr 1fr;\n   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n   align-items: center;\n}\n.formLabel{\n    font-size: 1.2rem;\n}\n.formInput{\n    height: 1rem;\n}\n#id1{\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n#id2{\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n#id3{\n    grid-row: 3/4;\n    grid-column: 1/2;\n}\n#id4{\n    grid-row: 4/5;\n    grid-column: 1/2;\n}\n#name{\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n#date{\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n#priority{\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n#desc{\n    grid-row: 4/6;\n    grid-column: 2/3;\n    height: 100%;\n    resize: none;\n}\n.createTaskButton{\n    height: 1.5rem;\n    width: 20%;\n    margin-left: 40%;\n    margin-top: 5%;\n    background-color: #a7dfd7;\n    border: none;\n    border-radius: 30px;\n}\n.createTaskButton:hover{\n    color: white;\n    background-color: var(--purple);\n}\n.rotateme{\n    animation-name: rotate;\n    animation-delay: 300ms;\n    animation-duration: 0.5s;\n    filter: invert(67%) sepia(18%) saturate(1224%) hue-rotate(122deg) brightness(88%) contrast(86%);\n}\n.taskNameLabel{\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n.taskDateLabel{\n    margin-right: 1%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,SAAS;IACT,UAAU;IACV,2BAA2B;IAC3B,8CAA8C;AAClD;AACA;IACI;MACE,oBAAoB;IACtB;IACA;MACE,yBAAyB;IAC3B;EACF;AACF;IACI;MACE,0BAA0B;IAC5B;EACF;AACF;IACI,KAAK,2CAA2C,EAAE;IAClD,MAAM,8CAA8C,EAAE;IACtD,MAAM,4CAA4C,EAAE;IACpD,MAAM,2CAA2C,EAAE;IACnD,MAAM,4CAA4C,EAAE;IACpD,MAAM,6CAA6C,EAAE;IACrD,MAAM,4CAA4C,EAAE;IACpD,MAAM,4CAA4C,EAAE;IACpD,MAAM,6CAA6C,EAAE;IACrD,MAAM,2CAA2C,EAAE;IACnD,OAAO,6CAA6C,EAAE;EACxD;AACF;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;EACnB;;AAEF,iBAAiB;AACjB;IACI,UAAU;IACV,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,+BAA+B;IAC/B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,+BAA+B;IAC/B,+BAA+B;AACnC;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,gCAAgC;IAChC,kCAAkC;AACtC;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;AACA;IACI,+BAA+B;IAC/B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;AACA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;AAChB;AACA;;;GAGG;AACH;IACI,aAAa;IACb;AACJ;AACA;GACG,WAAW;GACX,UAAU;GACV,mBAAmB;AACtB;AACA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB;oCACgC;AACpC;AACA,iBAAiB;;AAEjB,kBAAkB;AAClB;IACI,aAAa;IACb,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,aAAa;IACb,YAAY;AAChB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,gCAAgC;IAChC,eAAe;IACf,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,+BAA+B;AACnC;AACA;IACI,UAAU;IACV,WAAW;IACX,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,OAAO;AACX;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,WAAW;IACX,WAAW;IACX,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,gGAAgG;AACpG;AACA;IACI,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;;GAEG;AACH;GACG,UAAU;GACV,mBAAmB;GACnB,mBAAmB;GACnB,aAAa;GACb,gBAAgB;GAChB,aAAa;GACb,2BAA2B;GAC3B,0CAA0C;GAC1C,mBAAmB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,cAAc;IACd,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,+BAA+B;AACnC;AACA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,+FAA+F;AACnG;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid red; */\n    font-family: 'Fira Sans Condensed', sans-serif;\n}\n@keyframes rotate {\n    0% {\n      transform: rotate(0);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n@keyframes spin { \n    100% { \n      transform: rotateZ(360deg);\n    }\n  }\n@keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\n    30% { transform: translate(3px, 2px) rotate(0deg); }\n    40% { transform: translate(1px, -1px) rotate(1deg); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\n    90% { transform: translate(1px, 2px) rotate(0deg); }\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\n  }\n:root {\n    --orange: #E27D60;\n    --cyan: rgb(131, 205, 203); \n    --yellow:#E8A87C;\n    --purple: #C38D9E;\n    --seablue:#41B3A3;\n  }\n\n/* Home styling */\n.mainHomeDiv{\n    width:100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 7fr;\n}\n.headerDiv{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: var(--purple);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.sidebarDiv{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: var(--yellow);\n    box-shadow: 5px 0 5px -2px #888;\n}\n.mainLogo{\n    height: auto;\n    width: 15%;\n}\n.listsHeaderDiv{\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: var(--seablue);\n    box-shadow: 0px 2px 10px -5px #111; \n}\n.listsHeader{\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n    color: white;\n}\n.button-list{\n    margin: 1rem;\n    height: auto;\n}\n.buttonsInList{\n    width: 100%;\n    border: none;\n    border-radius: 15px;\n    background-color: var(--yellow);\n    height: 2rem;\n    margin: 1%;\n    font-size: 1rem;\n}\n.buttonsInList:hover{\n    background-color: var(--purple);\n    font-size: 1.4rem;\n}\n.addButtonDiv{\n    display: flex;\n    justify-content: center;\n}\n.addButton{\n    height: 15%;\n    width: 15%;\n}\n.addButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n}\n.projectAdder{\n    margin-top: 2%;\n    display: flex;\n    justify-content: center;\n    height: 1.3rem;\n}\n.addingProjectInput{\n    border: none;\n    margin-right: 5%;\n    height: 100%;\n}\n/* .addingProjectInput:hover{\n    animation: shake 0.5s; \n    animation-iteration-count: infinite; \n} */\n.addingProjectInput:focus{\n    outline: none;\n    border: 2px solid var(--seablue)\n}\n.addingProjectButton{\n   border:none;\n   width: 4em;\n   margin-inline: auto;\n}\n.addingProjectButton:last-of-type:hover{\n    background-color: #ff6961;\n    animation: shake 0.5s; \n    animation-iteration-count: 1; \n}\n.addingProjectButton:first-of-type:hover{\n    background-color: #77DD77;\n    /* animation: shake 0.5s; \n    animation-iteration-count: 1;  */\n}\n/* home styling */\n\n/* tasks styling */\n.tasksDiv{\n    grid-row: 2/3;\n    grid-column: 2/3;\n    margin-top: 1%;\n}\n.tasksMenuBar{\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.removeProjectButton{\n    width: 3rem;\n    height: auto;\n}\n.removeProjectButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n    width: 3.5rem;\n    height: auto;\n}\n.removeProjectButton:active{\n    animation: shake 0.5s;\n}\n.addTaskButton{\n    width: 90%;\n    height: 80%;\n    border: none;\n    border-radius: 25px;\n    background-color: #e0f4f1;\n    border: 1px solid var(--seablue);\n    font-size: 1rem;\n    color: black;\n}\n.addTaskButton:hover{\n    background-color: #e7d1d8;\n    border: 3px solid var(--purple);\n}\n.tasksArea{\n    margin: 3%;\n    height: 85%;\n    /* border: 2px solid blue; */\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 2%;\n}\n.newTask{\n    border-radius: 40px;\n    height: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.newTaskCheckImage{\n    height: 50%;\n    width: auto;\n    margin-left: 1%;\n}\n.newTaskForm{\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    margin-top: 11%;\n    margin-left: 22%;\n    border: 2px solid var(--purple);\n    border-radius: 15px;\n    background-color: #f0e2e7;\n    visibility: hidden;\n}\n.formCloseButton{\n    height: auto;\n    width: 5%;\n    margin-left: 94%;\n    margin-top: 1%;\n}\n.formCloseButton:hover{\n    filter: invert(25%) sepia(84%) saturate(7492%) hue-rotate(18deg) brightness(100%) contrast(105%);\n}\n.disable-div{\n    pointer-events: none;\n}\n.enable-div{\n    pointer-events: all;\n}\n/* .showing-form{\n    filter: blur(2px);\n} */\n.formElements{\n   width: 65%;\n   height: fit-content;\n   margin-inline: auto;\n   display: grid;\n   column-gap: 2rem;\n   row-gap: 1rem;\n   grid-template-rows: 1fr 1fr;\n   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n   align-items: center;\n}\n.formLabel{\n    font-size: 1.2rem;\n}\n.formInput{\n    height: 1rem;\n}\n#id1{\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n#id2{\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n#id3{\n    grid-row: 3/4;\n    grid-column: 1/2;\n}\n#id4{\n    grid-row: 4/5;\n    grid-column: 1/2;\n}\n#name{\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n#date{\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n#priority{\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n#desc{\n    grid-row: 4/6;\n    grid-column: 2/3;\n    height: 100%;\n    resize: none;\n}\n.createTaskButton{\n    height: 1.5rem;\n    width: 20%;\n    margin-left: 40%;\n    margin-top: 5%;\n    background-color: #a7dfd7;\n    border: none;\n    border-radius: 30px;\n}\n.createTaskButton:hover{\n    color: white;\n    background-color: var(--purple);\n}\n.rotateme{\n    animation-name: rotate;\n    animation-delay: 300ms;\n    animation-duration: 0.5s;\n    filter: invert(67%) sepia(18%) saturate(1224%) hue-rotate(122deg) brightness(88%) contrast(86%);\n}\n.taskNameLabel{\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n.taskDateLabel{\n    margin-right: 1%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



let mainHomeDiv= (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.appendChild(mainHomeDiv);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FB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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQkFBaUIsd0RBQVU7QUFDM0IsNEJBQTRCLHdEQUFVLHNDQUFzQywrREFBYztBQUMxRjtBQUNBO0FBQ0EsSUFBSSwyREFBWTtBQUNoQixJQUFJLHlEQUFXO0FBQ2YsSUFBSSwyREFBYTtBQUNqQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL3NyYy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG5Aa2V5ZnJhbWVzIHNwaW4geyBcXG4gICAgMTAwJSB7IFxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpOyB9XFxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gIH1cXG46cm9vdCB7XFxuICAgIC0tb3JhbmdlOiAjRTI3RDYwO1xcbiAgICAtLWN5YW46IHJnYigxMzEsIDIwNSwgMjAzKTsgXFxuICAgIC0teWVsbG93OiNFOEE4N0M7XFxuICAgIC0tcHVycGxlOiAjQzM4RDlFO1xcbiAgICAtLXNlYWJsdWU6IzQxQjNBMztcXG4gIH1cXG5cXG4vKiBIb21lIHN0eWxpbmcgKi9cXG4ubWFpbkhvbWVEaXZ7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbn1cXG4uaGVhZGVyRGl2e1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNpZGViYXJEaXZ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJveC1zaGFkb3c6IDVweCAwIDVweCAtMnB4ICM4ODg7XFxufVxcbi5tYWluTG9nb3tcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG4ubGlzdHNIZWFkZXJEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFibHVlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IC01cHggIzExMTsgXFxufVxcbi5saXN0c0hlYWRlcntcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ1dHRvbi1saXN0e1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLmJ1dHRvbnNJbkxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYnV0dG9uc0luTGlzdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5hZGRCdXR0b25EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYWRkQnV0dG9ue1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuLmFkZEJ1dHRvbjpob3ZlcntcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4ucHJvamVjdEFkZGVye1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS4zcmVtO1xcbn1cXG4uYWRkaW5nUHJvamVjdElucHV0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLyogLmFkZGluZ1Byb2plY3RJbnB1dDpob3ZlcntcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxcbn0gKi9cXG4uYWRkaW5nUHJvamVjdElucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWFibHVlKVxcbn1cXG4uYWRkaW5nUHJvamVjdEJ1dHRvbntcXG4gICBib3JkZXI6bm9uZTtcXG4gICB3aWR0aDogNGVtO1xcbiAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9uOmxhc3Qtb2YtdHlwZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjk2MTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgXFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9uOmZpcnN0LW9mLXR5cGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICAgIC8qIGFuaW1hdGlvbjogc2hha2UgMC41czsgXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7ICAqL1xcbn1cXG4vKiBob21lIHN0eWxpbmcgKi9cXG5cXG4vKiB0YXNrcyBzdHlsaW5nICovXFxuLnRhc2tzRGl2e1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuLnRhc2tzTWVudUJhcntcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b257XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbi5yZW1vdmVQcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b246YWN0aXZle1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7XFxufVxcbi5hZGRUYXNrQnV0dG9ue1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNGYxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFibHVlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5hZGRUYXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkMWQ4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xcbn1cXG4udGFza3NBcmVhe1xcbiAgICBtYXJnaW46IDMlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIlO1xcbn1cXG4ubmV3VGFza3tcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5ld1Rhc2tDaGVja0ltYWdle1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcXG59XFxuLm5ld1Rhc2tGb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMiU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGUyZTc7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmZvcm1DbG9zZUJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NCU7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbn1cXG4uZm9ybUNsb3NlQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCgyNSUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNzQ5MiUpIGh1ZS1yb3RhdGUoMThkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcbi5kaXNhYmxlLWRpdntcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5lbmFibGUtZGl2e1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4vKiAuc2hvd2luZy1mb3Jte1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG59ICovXFxuLmZvcm1FbGVtZW50c3tcXG4gICB3aWR0aDogNjUlO1xcbiAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgcm93LWdhcDogMXJlbTtcXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtTGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uZm9ybUlucHV0e1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcbiNpZDF7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNpZDJ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNpZDN7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNpZDR7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNuYW1le1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4jZGF0ZXtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuI3ByaW9yaXR5e1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4jZGVzY3tcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5jcmVhdGVUYXNrQnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2RmZDc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLmNyZWF0ZVRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuLnJvdGF0ZW1le1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDY3JSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMjI0JSkgaHVlLXJvdGF0ZSgxMjJkZWcpIGJyaWdodG5lc3MoODglKSBjb250cmFzdCg4NiUpO1xcbn1cXG4udGFza05hbWVMYWJlbHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrRGF0ZUxhYmVse1xcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSTtNQUNFLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7QUFDRjtJQUNJO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7QUFDRjtJQUNJLEtBQUssMkNBQTJDLEVBQUU7SUFDbEQsTUFBTSw4Q0FBOEMsRUFBRTtJQUN0RCxNQUFNLDRDQUE0QyxFQUFFO0lBQ3BELE1BQU0sMkNBQTJDLEVBQUU7SUFDbkQsTUFBTSw0Q0FBNEMsRUFBRTtJQUNwRCxNQUFNLDZDQUE2QyxFQUFFO0lBQ3JELE1BQU0sNENBQTRDLEVBQUU7SUFDcEQsTUFBTSw0Q0FBNEMsRUFBRTtJQUNwRCxNQUFNLDZDQUE2QyxFQUFFO0lBQ3JELE1BQU0sMkNBQTJDLEVBQUU7SUFDbkQsT0FBTyw2Q0FBNkMsRUFBRTtFQUN4RDtBQUNGO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtF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YiwyQkFBMkI7R0FDM0IsMENBQTBDO0dBQzFDLG1CQUFtQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLCtGQUErRjtBQUNuRztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG5Aa2V5ZnJhbWVzIHNwaW4geyBcXG4gICAgMTAwJSB7IFxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpOyB9XFxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gIH1cXG46cm9vdCB7XFxuICAgIC0tb3JhbmdlOiAjRTI3RDYwO1xcbiAgICAtLWN5YW46IHJnYigxMzEsIDIwNSwgMjAzKTsgXFxuICAgIC0teWVsbG93OiNFOEE4N0M7XFxuICAgIC0tcHVycGxlOiAjQzM4RDlFO1xcbiAgICAtLXNlYWJsdWU6IzQxQjNBMztcXG4gIH1cXG5cXG4vKiBIb21lIHN0eWxpbmcgKi9cXG4ubWFpbkhvbWVEaXZ7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbn1cXG4uaGVhZGVyRGl2e1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNpZGViYXJEaXZ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJveC1zaGFkb3c6IDVweCAwIDVweCAtMnB4ICM4ODg7XFxufVxcbi5tYWluTG9nb3tcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG4ubGlzdHNIZWFkZXJEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFibHVlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IC01cHggIzExMTsgXFxufVxcbi5saXN0c0hlYWRlcntcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ1dHRvbi1saXN0e1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLmJ1dHRvbnNJbkxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYnV0dG9uc0luTGlzdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5hZGRCdXR0b25EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYWRkQnV0dG9ue1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuLmFkZEJ1dHRvbjpob3ZlcntcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4ucHJvamVjdEFkZGVye1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS4zcmVtO1xcbn1cXG4uYWRkaW5nUHJvamVjdElucHV0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLyogLmFkZGluZ1Byb2plY3RJbnB1dDpob3ZlcntcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxcbn0gKi9cXG4uYWRkaW5nUHJvamVjdElucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWFibHVlKVxcbn1cXG4uYWRkaW5nUHJvamVjdEJ1dHRvbntcXG4gICBib3JkZXI6bm9uZTtcXG4gICB3aWR0aDogNGVtO1xcbiAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9uOmxhc3Qtb2YtdHlwZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjk2MTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgXFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9uOmZpcnN0LW9mLXR5cGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICAgIC8qIGFuaW1hdGlvbjogc2hha2UgMC41czsgXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7ICAqL1xcbn1cXG4vKiBob21lIHN0eWxpbmcgKi9cXG5cXG4vKiB0YXNrcyBzdHlsaW5nICovXFxuLnRhc2tzRGl2e1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuLnRhc2tzTWVudUJhcntcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b257XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbi5yZW1vdmVQcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b246YWN0aXZle1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7XFxufVxcbi5hZGRUYXNrQnV0dG9ue1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNGYxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFibHVlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5hZGRUYXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkMWQ4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xcbn1cXG4udGFza3NBcmVhe1xcbiAgICBtYXJnaW46IDMlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIlO1xcbn1cXG4ubmV3VGFza3tcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5ld1Rhc2tDaGVja0ltYWdle1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcXG59XFxuLm5ld1Rhc2tGb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMiU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGUyZTc7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmZvcm1DbG9zZUJ1dHRvbntcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NCU7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbn1cXG4uZm9ybUNsb3NlQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCgyNSUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNzQ5MiUpIGh1ZS1yb3RhdGUoMThkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcbi5kaXNhYmxlLWRpdntcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5lbmFibGUtZGl2e1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4vKiAuc2hvd2luZy1mb3Jte1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG59ICovXFxuLmZvcm1FbGVtZW50c3tcXG4gICB3aWR0aDogNjUlO1xcbiAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGNvbHVtbi1nYXA6IDJyZW07XFxuICAgcm93LWdhcDogMXJlbTtcXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtTGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uZm9ybUlucHV0e1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcbiNpZDF7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNpZDJ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNpZDN7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNpZDR7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbiNuYW1le1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4jZGF0ZXtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuI3ByaW9yaXR5e1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4jZGVzY3tcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5jcmVhdGVUYXNrQnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2RmZDc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLmNyZWF0ZVRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuLnJvdGF0ZW1le1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDY3JSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMjI0JSkgaHVlLXJvdGF0ZSgxMjJkZWcpIGJyaWdodG5lc3MoODglKSBjb250cmFzdCg4NiUpO1xcbn1cXG4udGFza05hbWVMYWJlbHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrRGF0ZUxhYmVse1xcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjaGVja0xvYyBmcm9tICcuL2NoZWNrLWJvbGQtMi5wbmcnXG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5jbGFzcyBuZXdCdXR0b257XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3RJRCl7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWU9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RJRD0gcHJvamVjdElEO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRWxlbWVudCh0eXBlLCBjbGFzc25hbWUsIGFkZFRvPW51bGwsIHNyY0VsZT0gbnVsbCwgaWQ9bnVsbCwgdGV4dD1udWxsKXtcbiAgICBsZXQgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGUuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xuICAgIGlmIChzcmNFbGUhPT1udWxsKXtcbiAgICAgICAgZWxlLnNyYz0gc3JjRWxlO1xuICAgIH1cbiAgICBpZihpZCE9PSBudWxsKXtcbiAgICAgICAgZWxlLmlkPSBpZDtcbiAgICB9XG4gICAgaWYgKHRleHQhPT0gbnVsbCl7XG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoYWRkVG8hPT0gbnVsbCl7XG4gICAgICAgIGFkZFRvLmFwcGVuZENoaWxkKGVsZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1dEJ1dHRvbkluTG9jYWxTdG9yYWdlKG5hbWUpe1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSk7XG4gICAgbGV0IGI9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaWRlQmFyQnV0dG9uc0lkJykpO1xuICAgIGIrPTE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnLCBiKTtcbiAgICBsZXQgbmV4dEJ1dHRvbiA9IG5ldyBuZXdCdXR0b24obmFtZSwgYilcbiAgICBhW2JdPSBuZXh0QnV0dG9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSkpO1xuICAgIHJldHVybiBuZXh0QnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhidXR0b25MaXN0KXtcbiAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpO1xuICAgIGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5wcm9qZWN0SUQpO1xuICAgICAgICBsZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGVsZW1lbnQucHJvamVjdElELCBlbGVtZW50LnByb2plY3ROYW1lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJvamVjdHMoKXtcbiAgICBsZXQgc2lkZUJhckJ1dHRvbnNBcnJheT0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoc2lkZUJhckJ1dHRvbnNBcnJheSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaWRlQmFyQnV0dG9uc0lkJywwKTtcbiAgICBsZXQgYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKTtcbiAgICBsZXQgbmV4dEJ1dHRvbiA9IG5ldyBuZXdCdXR0b24oXCJBbGxcIiwgMClcbiAgICBhWzBdPSBuZXh0QnV0dG9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2hlY2soZnVuY25ld1Rhc2ssIGZ1bmN0YXNrLCBmdW5jbmV3VGFza0NoZWNrSW1hZ2Upe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IG5ld1Rhc2s9IGZ1bmNuZXdUYXNrO1xuICAgIGxldCBuZXdUYXNrQ2hlY2tJbWFnZT0gZnVuY25ld1Rhc2tDaGVja0ltYWdlO1xuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiBjaGFuZ2VJY29uKCl7XG4gICAgICAgIG5ld1Rhc2tDaGVja0ltYWdlLnNyYz0gY2hlY2tMb2M7XG4gICAgICAgIG5ld1Rhc2tDaGVja0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVtZVwiKTtcbiAgICB9KVxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gY2hhbmdlSWNvbigpe1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5zcmM9IGJsYW5rY2lyY2xlbG9jO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwicm90YXRlbWVcIik7XG4gICAgfSkgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjaWRlVGFza0JHKG5ld1Rhc2ssIHRhc2spe1xuICAgIHN3aXRjaCh0YXNrLnRhc2tQcmlvcml0eSl7XG4gICAgICAgIGNhc2UgJ2hpZ2gnOiBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCAjZmY2OTYxXCI7IG5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIiNmZmRiZDlcIjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6IG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkICNjNGJjMDBcIjsgbmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiI2ZmZmRjZFwiOyBicmVhaztcbiAgICAgICAgY2FzZSAnbG93JzogbmV3VGFzay5zdHlsZS5ib3JkZXI9IFwiMS41cHggc29saWQgIzc3REQ3N1wiOyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCIjZGVmN2RlXCI7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDogYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1VpRWxlcyhmdW5jbmV3VGFzaywgZnVuY3Rhc2spe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IG5ld1Rhc2s9IGZ1bmNuZXdUYXNrO1xuICAgIGxldCB0YXNrTmFtZUxhYmVsPSBhZGRFbGVtZW50KCdwJywgJ3Rhc2tOYW1lTGFiZWwnLCBuZXdUYXNrLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFzay50YXNrTmFtZSk7XG4gICAgbGV0IHRhc2tEYXRlTGFiZWw9IGFkZEVsZW1lbnQoJ3AnLCAndGFza0RhdGVMYWJlbCcsIG5ld1Rhc2ssIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXNrLnRhc2tEYXRlKTtcbn0iLCJpbXBvcnQgbG9nb0xvYyBmcm9tICcuL2xvZ28ucG5nJ1xuaW1wb3J0IGFkZEVsZW1lbnQgZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyBwdXRCdXR0b25JbkxvY2FsU3RvcmFnZSB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IHBsdXNsb2MgZnJvbSAnLi9wbHVzLXRoaWNrLTIucG5nJztcbmltcG9ydCB7IHBvcHVsYXRlUHJvamVjdHMgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7IHJlc2V0UHJvamVjdHMgfSBmcm9tICcuL2RvbU1hbmlwLmpzJ1xuaW1wb3J0IHBvcHVsYXRlVGFza3MgZnJvbSAnLi90YXNrcy5qcydcblxubGV0IGJhY2tFbmRTaWRlQmFyQnV0dG9uc0FycmF5PSBbXTtcbmxldCBkaXZUb1JldHVybiA9IGFkZEVsZW1lbnQoJ2RpdicsICdtYWluSG9tZURpdicpO1xubGV0IGhlYWRlckRpdj0gYWRkRWxlbWVudCgnZGl2JywgJ2hlYWRlckRpdicsIGRpdlRvUmV0dXJuKTtcbmxldCBzaWRlQmFyRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnc2lkZWJhckRpdicsIGRpdlRvUmV0dXJuKTtcbmxldCBsb2dvPSBhZGRFbGVtZW50KCdpbWcnLCAnbWFpbkxvZ28nLCBoZWFkZXJEaXYsIGxvZ29Mb2MpO1xubGV0IGxpc3RzSGVhZGVyRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnbGlzdHNIZWFkZXJEaXYnLCBzaWRlQmFyRGl2KVxubGV0IGJ1dHRvbkxpc3QgPSBhZGRFbGVtZW50KCdkaXYnLCAnYnV0dG9uLWxpc3QnLCBzaWRlQmFyRGl2KTtcbi8vbGV0IHNpZGVCYXJCdXR0b25zQXJyYXk9IFtdO1xuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShzaWRlQmFyQnV0dG9uc0FycmF5KSk7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsMCk7XG4vL2NvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG5sZXQgYWRkQnV0dG9uRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnYWRkQnV0dG9uRGl2Jywgc2lkZUJhckRpdilcbmxldCBhZGRCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdhZGRCdXR0b24nLCBhZGRCdXR0b25EaXYsIHBsdXNsb2MpO1xubGV0IGxpc3RzSGVhZGVyID0gYWRkRWxlbWVudCgncCcsICdsaXN0c0hlYWRlcicsIGxpc3RzSGVhZGVyRGl2KTtcbmxpc3RzSGVhZGVyLmlubmVySFRNTD0gXCJMaXN0c1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEhvbWVET00oKXtcbiAgICAvL3Jlc2V0UHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzKGJ1dHRvbkxpc3QpO1xuICAgIHBvcHVsYXRlVGFza3MoZGl2VG9SZXR1cm4pO1xuICAgIHJldHVybiBkaXZUb1JldHVybjtcbn1cbmZ1bmN0aW9uIHNob3dBZGRpbmdQcm9qZWN0QnV0dG9uKCl7XG4gICAgbGV0IGFkZGluZ0Rpdj0gYWRkRWxlbWVudCgnZGl2JywgJ3Byb2plY3RBZGRlcicsIGJ1dHRvbkxpc3QpO1xuICAgIGxldCBuZXdJbnB1dCA9IGFkZEVsZW1lbnQoJ2lucHV0JywgJ2FkZGluZ1Byb2plY3RJbnB1dCcsIGFkZGluZ0Rpdik7XG4gICAgbGV0IHllc0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdhZGRpbmdQcm9qZWN0QnV0dG9uJywgYWRkaW5nRGl2LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCcpO1xuICAgIGxldCBub0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdhZGRpbmdQcm9qZWN0QnV0dG9uJywgYWRkaW5nRGl2LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0NhbmNlbCcpO1xuXG4gICAgbm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgIGFkZGluZ0Rpdi5yZW1vdmUoKTtcbiAgICB9KVxuICAgIFxuICAgIHllc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICAgICAgaWYgKG5ld0lucHV0LnZhbHVlPT1cIlwiKXtcbiAgICAgICAgICAgIG5ld0lucHV0LnBsYWNlaG9sZGVyPSBcIlBsZWFzZSBuYW1lIHlvdXIgcHJvamVjdFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgbGV0IGJ1dHRvbk9iamVjdCA9IHB1dEJ1dHRvbkluTG9jYWxTdG9yYWdlKG5ld0lucHV0LnZhbHVlKTtcbiAgICAgICAgYmFja0VuZFNpZGVCYXJCdXR0b25zQXJyYXkucHVzaChidXR0b25PYmplY3QpO1xuICAgICAgICBsZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0SUQsIG5ld0lucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpKTtcbiAgICAgICAgYWRkaW5nRGl2LnJlbW92ZSgpO31cbiAgICB9KVxufVxuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBhZGRCdXR0b25Ub0xpc3QoKXtcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RBZGRlcicpO1xuICAgIGNvbnNvbGUubG9nKHRlbXAubGVuZ3RoKVxuICAgIGlmICh0ZW1wLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICBzaG93QWRkaW5nUHJvamVjdEJ1dHRvbigpO1xuICAgIH1cbn0pXG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgYWRkSG9tZURPTSBmcm9tICcuL2hvbWUuanMnXG5cbmxldCBtYWluSG9tZURpdj0gYWRkSG9tZURPTSgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluSG9tZURpdik7IiwiaW1wb3J0IGFkZEVsZW1lbnQgZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgZGVsZXRlTG9jIGZyb20gJy4vZGVsZXRlLnBuZydcbmltcG9ydCBjbG9zZUxvYyBmcm9tICcuL2Nsb3NlLWJveC5wbmcnXG5pbXBvcnQgeyBjaXJjbGVDaGVjayB9IGZyb20gJy4vZG9tTWFuaXAuanMnXG5pbXBvcnQgeyBkZWNpZGVUYXNrQkcgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBibGFua2NpcmNsZWxvYyBmcm9tICcuL2NoZWNrYm94LWJsYW5rLWNpcmNsZS1vdXRsaW5lLnBuZydcbmltcG9ydCB7IGFkZFRhc2tVaUVsZXMgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmZ1bmN0aW9uIGFkZE9wdGlvbnMoKXtcbiAgICBsZXQgaGlnaFByaW9yaXR5ID0gYWRkRWxlbWVudCgnb3B0aW9uJywgJ3ByaW9yaXR5JywgcHJpb3JpdHlJbnB1dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiSGlnaFwiKTtcbmhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbmxldCBtZWRpdW1Qcmlvcml0eSA9IGFkZEVsZW1lbnQoJ29wdGlvbicsICdwcmlvcml0eScsIHByaW9yaXR5SW5wdXQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIk1lZGl1bVwiKTtcbm1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG5sZXQgbG93UHJpb3JpdHkgPSBhZGRFbGVtZW50KCdvcHRpb24nLCAncHJpb3JpdHknLCBwcmlvcml0eUlucHV0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJMb3dcIik7XG5sb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xufVxuZnVuY3Rpb24gbWFrZUludmlzaWJsZSgpe1xuICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHk9IFwiaGlkZGVuXCI7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImRpc2FibGUtZGl2XCIpO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlLWRpdlwiKTtcbiAgICB0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGUtZGl2XCIpO1xufVxuZnVuY3Rpb24gY2xlYXJUZXh0KCl7XG4gICAgbmFtZUlucHV0LnZhbHVlPSBcIlwiO1xuICAgIGRhdGVJbnB1dC52YWx1ZT0gXCJcIjtcbiAgICBkZXNjSW5wdXQudmFsdWU9IFwiXCI7XG59XG5jbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVzYyl7XG4gICAgICAgIHRoaXMudGFza05hbWU9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLnRhc2tEYXRlPSB0YXNrRGF0ZTtcbiAgICAgICAgdGhpcy50YXNrUHJpb3JpdHk9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgdGhpcy50YXNrRGVzYz0gdGFza0Rlc2M7XG4gICAgfVxufVxuXG5sZXQgdGFza3NEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICd0YXNrc0RpdicpO1xubGV0IHRhc2tzTWVudUJhcj0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzTWVudUJhcicsIHRhc2tzRGl2KTtcbmxldCBhZGRUYXNrQnV0dG9uPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkVGFza0J1dHRvbicsIHRhc2tzTWVudUJhciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQgYSB0YXNrIScpO1xubGV0IHJlbW92ZVByb2plY3RCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdyZW1vdmVQcm9qZWN0QnV0dG9uJywgdGFza3NNZW51QmFyLCBkZWxldGVMb2MpO1xubGV0IHRhc2tzQXJlYSA9IGFkZEVsZW1lbnQoJ2RpdicsICd0YXNrc0FyZWEnLCB0YXNrc0Rpdik7XG5cbmxldCBuZXdUYXNrRm9ybSA9IGFkZEVsZW1lbnQoJ2RpdicsICduZXdUYXNrRm9ybScsIHRhc2tzQXJlYSk7XG5cbmxldCBmb3JtQ2xvc2VCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdmb3JtQ2xvc2VCdXR0b24nLCBuZXdUYXNrRm9ybSwgY2xvc2VMb2MpO1xubGV0IGZvcm1FbGVtZW50cz0gYWRkRWxlbWVudCgnZGl2JywgJ2Zvcm1FbGVtZW50cycsIG5ld1Rhc2tGb3JtKTtcbmxldCBuYW1lTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQxJywgXCJUYXNrIG5hbWU6XCIpO1xubGV0IG5hbWVJbnB1dD0gYWRkRWxlbWVudCgnaW5wdXQnLCAnZm9ybUlucHV0JywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsIFwibmFtZVwiKTtcbm5hbWVJbnB1dC5wbGFjZWhvbGRlcj0gXCJOYW1lIHlvdXIgdGFza1wiO1xubmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xubGV0IGRhdGVMYWJlbD0gYWRkRWxlbWVudCgnbGFiZWwnLCAnZm9ybUxhYmVsJywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsICdpZDInLCBcIkZpbmlzaCBieTpcIik7XG5sZXQgZGF0ZUlucHV0PSBhZGRFbGVtZW50KCdpbnB1dCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJkYXRlXCIpO1xuZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuZGF0ZUlucHV0LnBsYWNlaG9sZGVyPSBcIkFkZCBhIGRhdGVcIjtcbmxldCBwcmlvcml0eUxhYmVsPSBhZGRFbGVtZW50KCdsYWJlbCcsICdmb3JtTGFiZWwnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgJ2lkMycsIFwiUHJpb3JpdHk6XCIpO1xubGV0IHByaW9yaXR5SW5wdXQ9IGFkZEVsZW1lbnQoJ3NlbGVjdCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJwcmlvcml0eVwiKTtcbmFkZE9wdGlvbnMoKTtcbmxldCBkZXNjTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQ0JywgXCJEZXNjcmlwdGlvbjpcIik7XG5sZXQgZGVzY0lucHV0PSBhZGRFbGVtZW50KCd0ZXh0YXJlYScsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJkZXNjXCIpO1xuZGVzY0lucHV0LnBsYWNlaG9sZGVyPSBcIk9wdGlvbmFsIHRhc2sgZGVzY3JpcHRpb25cIjtcbmxldCBjcmVhdGVUYXNrQnV0dG9uPSBhZGRFbGVtZW50KCdidXR0b24nLCAnY3JlYXRlVGFza0J1dHRvbicsIG5ld1Rhc2tGb3JtLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCEnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVUYXNrcyhkaXZUb1JldHVybil7XG4gICAgZGl2VG9SZXR1cm4uYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xufVxuXG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIHNob3dOZXdUYXNrRm9ybSgpe1xuICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHk9IFwidmlzaWJsZVwiO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgY2xlYXJUZXh0KCk7XG4gICAgLy8gdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJzaG93aW5nLWZvcm1cIik7XG59KTtcblxuZm9ybUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBtYWtlSW52aXNpYmxlKCl7XG4gICAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eT0gXCJoaWRkZW5cIjtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1kaXZcIik7XG59KTtcbmNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIG1ha2VUYXNrKCl7XG4gICAgbGV0IG5ld1Rhc2s9IGFkZEVsZW1lbnQoJ2RpdicsICduZXdUYXNrJywgdGFza3NBcmVhLCB1bmRlZmluZWQsIFwibmV3VGFza1wiKTtcbiAgICBsZXQgbmV3VGFza0NoZWNrSW1hZ2UgPSBhZGRFbGVtZW50KCdpbWcnLCAnbmV3VGFza0NoZWNrSW1hZ2UnLCBuZXdUYXNrLCBibGFua2NpcmNsZWxvYyk7XG4gICAgbWFrZUludmlzaWJsZSgpO1xuICAgIGxldCB0YXNrID0gbmV3IFRhc2sobmFtZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSlcbiAgICBkZWNpZGVUYXNrQkcobmV3VGFzaywgdGFzayk7XG4gICAgY2lyY2xlQ2hlY2sobmV3VGFzaywgdGFzaywgbmV3VGFza0NoZWNrSW1hZ2UpO1xuICAgIGFkZFRhc2tVaUVsZXMobmV3VGFzaywgdGFzayk7XG4gICAgfSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==