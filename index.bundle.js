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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid red; */\n    font-family: 'Fira Sans Condensed', sans-serif;\n}\n@keyframes makeItfadeIn {\n    100% {\n      background-position: left;\n    }\n  }\n@keyframes rotate {\n    0% {\n      transform: rotate(0);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n@keyframes spin { \n    100% { \n      transform: rotateZ(360deg);\n    }\n  }\n@keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\n    30% { transform: translate(3px, 2px) rotate(0deg); }\n    40% { transform: translate(1px, -1px) rotate(1deg); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\n    90% { transform: translate(1px, 2px) rotate(0deg); }\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\n  }\n:root {\n    --orange: #E27D60;\n    --cyan: rgb(131, 205, 203); \n    --yellow:#E8A87C;\n    --purple: #C38D9E;\n    --seablue:#41B3A3;\n  }\n\n/* Home styling */\n.mainHomeDiv{\n    width:100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 7fr;\n}\n.headerDiv{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: var(--purple);\n    display: flex;\n    align-items: center;\n}\n.sidebarDiv{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: var(--yellow);\n    box-shadow: 5px 0 5px -2px #888;\n}\n.mainLogo{\n    height: auto;\n    width: 15%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.listsHeaderDiv{\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: var(--seablue);\n    box-shadow: 0px 2px 10px -5px #111; \n}\n.listsHeader{\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n    color: white;\n}\n.button-list{\n    margin: 1rem;\n    height: auto;\n}\n.buttonsInList{\n    width: 100%;\n    border: none;\n    border-radius: 15px;\n    background-color: var(--yellow);\n    height: 2rem;\n    margin: 1%;\n    font-size: 1rem;\n}\n.buttonsInList:hover{\n    background-color: var(--purple);\n    font-size: 1.4rem;\n}\n.addButtonDiv{\n    display: flex;\n    justify-content: center;\n}\n.addButton{\n    height: 15%;\n    width: 15%;\n}\n.addButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n}\n.projectAdder{\n    margin-top: 2%;\n    display: flex;\n    justify-content: center;\n    height: 1.3rem;\n}\n.addingProjectInput{\n    border: none;\n    margin-right: 5%;\n    height: 100%;\n}\n/* .addingProjectInput:hover{\n    animation: shake 0.5s; \n    animation-iteration-count: infinite; \n} */\n.addingProjectInput:focus{\n    outline: none;\n    border: 2px solid var(--seablue)\n}\n.addingProjectButton{\n   border:none;\n   width: 4em;\n   margin-inline: auto;\n}\n.addingProjectButton:last-of-type:hover{\n    background-color: #ff6961;\n    animation: shake 0.5s; \n    animation-iteration-count: 1; \n}\n.addingProjectButton:first-of-type:hover{\n    background-color: #77DD77;\n    /* animation: shake 0.5s; \n    animation-iteration-count: 1;  */\n}\n/* home styling */\n\n/* tasks styling */\n.tasksDiv{\n    grid-row: 2/3;\n    grid-column: 2/3;\n    margin-top: 1%;\n}\n.tasksMenuBar{\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.removeProjectButton{\n    width: 3rem;\n    height: auto;\n}\n.removeProjectButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n    width: 3.5rem;\n    height: auto;\n}\n.removeProjectButton:active{\n    animation: shake 0.5s;\n}\n.addTaskButton{\n    width: 90%;\n    height: 80%;\n    border: none;\n    border-radius: 25px;\n    background-color: #e0f4f1;\n    border: 1px solid var(--seablue);\n    font-size: 1rem;\n    color: black;\n}\n.addTaskButton:hover{\n    background-color: #e7d1d8;\n    border: 3px solid var(--purple);\n}\n.tasksArea{\n    margin: 3%;\n    height: 80%;\n    /* border: 2px solid blue; */\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 2%;\n}\n.newTask{\n    border-radius: 40px;\n    height: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 10px solid black;\n}\n.newTaskCheckImage{\n    height: 50%;\n    width: auto;\n    margin-left: 1%;\n    grid-column: 1/2;\n    grid-row: 2/3;\n}\n.newTaskForm{\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    margin-top: 11%;\n    margin-left: 22%;\n    border: 2px solid var(--purple);\n    border-radius: 15px;\n    background-color: #f0e2e7;\n    visibility: hidden;\n}\n.formCloseButton{\n    height: auto;\n    width: 5%;\n    margin-left: 94%;\n    margin-top: 1%;\n}\n.formCloseButton:hover{\n    filter: invert(25%) sepia(84%) saturate(7492%) hue-rotate(18deg) brightness(100%) contrast(105%);\n}\n.disable-div{\n    pointer-events: none;\n}\n.enable-div{\n    pointer-events: all;\n}\n/* .showing-form{\n    filter: blur(2px);\n} */\n.formElements{\n   width: 65%;\n   height: fit-content;\n   margin-inline: auto;\n   display: grid;\n   column-gap: 2rem;\n   row-gap: 1rem;\n   grid-template-rows: 1fr 1fr;\n   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n   align-items: center;\n}\n.formLabel{\n    font-size: 1.2rem;\n}\n.formInput{\n    height: 1rem;\n}\n#id1{\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n#id2{\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n#id3{\n    grid-row: 3/4;\n    grid-column: 1/2;\n}\n#id4{\n    grid-row: 4/5;\n    grid-column: 1/2;\n}\n#name{\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n#date{\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n#priority{\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n#desc{\n    grid-row: 4/6;\n    grid-column: 2/3;\n    height: 100%;\n    resize: none;\n}\n.createTaskButton{\n    height: 1.5rem;\n    width: 20%;\n    margin-left: 40%;\n    margin-top: 5%;\n    background-color: #a7dfd7;\n    border: none;\n    border-radius: 30px;\n}\n.createTaskButton:hover{\n    color: white;\n    background-color: var(--purple);\n}\n.newTaskCheckImage.rotateme{\n    animation-name: rotate;\n    animation-delay: 300ms;\n    animation-duration: 0.5s;\n    filter: invert(67%) sepia(18%) saturate(1224%) hue-rotate(122deg) brightness(88%) contrast(86%);\n}\n.rotateme{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n}\n.shakeme{\n    animation-name: shake;\n    animation-duration: 0.5s;\n    border: 2px solid red;\n}\n.taskNameLabel{\n    font-size: 1.5rem;\n    font-weight: 500;\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n.taskDateLabel{\n    margin-right: 3%;\n    color: black;\n    font-weight: 100;\n    opacity: 0.6;\n    z-index: 1;\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n.hamburgerMenu{\n    filter: invert(13%) sepia(0%) saturate(1888%) hue-rotate(142deg) brightness(91%) contrast(83%);\n    position: absolute;\n    margin-left: 95%;\n}\n.hamburgerMenu:hover{\n    filter: invert(61%) sepia(38%) saturate(595%) hue-rotate(122deg) brightness(93%) contrast(88%);\n}\n.minusButtonDiv{\n    grid-column: 3/4;\n    grid-row:2/3;\n}\n.newTask.grid{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr 6fr 0.5fr;\n}\n.minusButton{\n    filter: invert(13%) sepia(0%) saturate(1888%) hue-rotate(142deg) brightness(91%) contrast(83%);\n    height: 2.5rem;\n    width: auto;\n    margin-left: 20%;\n}\n.minusButton:hover{\n    filter: invert(28%) sepia(70%) saturate(3087%) hue-rotate(352deg) brightness(106%) contrast(101%);\n    animation-name: spin;\n    animation-duration: 0.5s;\n}\n.descP{\n    grid-column: 2/3;\n    color: gray;\n    font-weight: 100;\n}\n.newTaskCheckImage.grid{\n    height: 40%;\n    width: auto;\n}\n.newTaskCheckImage.grid:hover{\n    height: 50%;\n    width: auto;\n}\n.newTask.ivebeenchecked{\n    background: linear-gradient(to right, whitesmoke 50%, transparent 0);\n    background-size: 200% 100%;\n    background-position: right;\n    animation: makeItfadeIn 0.5s 0.5s forwards;\n    border-style:  none;\n}\n.dashboardP{\n    margin: 1%;\n    margin-left: 2%;\n    font-size: 2rem;\n    font-weight: 100;\n    opacity: 0.7;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,SAAS;IACT,UAAU;IACV,2BAA2B;IAC3B,8CAA8C;AAClD;AACA;IACI;MACE,yBAAyB;IAC3B;EACF;AACF;IACI;MACE,oBAAoB;IACtB;IACA;MACE,yBAAyB;IAC3B;EACF;AACF;IACI;MACE,0BAA0B;IAC5B;EACF;AACF;IACI,KAAK,2CAA2C,EAAE;IAClD,MAAM,8CAA8C,EAAE;IACtD,MAAM,4CAA4C,EAAE;IACpD,MAAM,2CAA2C,EAAE;IACnD,MAAM,4CAA4C,EAAE;IACpD,MAAM,6CAA6C,EAAE;IACrD,MAAM,4CAA4C,EAAE;IACpD,MAAM,4CAA4C,EAAE;IACpD,MAAM,6CAA6C,EAAE;IACrD,MAAM,2CAA2C,EAAE;IACnD,OAAO,6CAA6C,EAAE;EACxD;AACF;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;EACnB;;AAEF,iBAAiB;AACjB;IACI,UAAU;IACV,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,+BAA+B;IAC/B,+BAA+B;AACnC;AACA;IACI,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,gCAAgC;IAChC,kCAAkC;AACtC;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;AACA;IACI,+BAA+B;IAC/B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;AACA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;AAChB;AACA;;;GAGG;AACH;IACI,aAAa;IACb;AACJ;AACA;GACG,WAAW;GACX,UAAU;GACV,mBAAmB;AACtB;AACA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,4BAA4B;AAChC;AACA;IACI,yBAAyB;IACzB;oCACgC;AACpC;AACA,iBAAiB;;AAEjB,kBAAkB;AAClB;IACI,aAAa;IACb,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,aAAa;IACb,YAAY;AAChB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,gCAAgC;IAChC,eAAe;IACf,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,+BAA+B;AACnC;AACA;IACI,UAAU;IACV,WAAW;IACX,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,OAAO;AACX;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,gGAAgG;AACpG;AACA;IACI,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;;GAEG;AACH;GACG,UAAU;GACV,mBAAmB;GACnB,mBAAmB;GACnB,aAAa;GACb,gBAAgB;GAChB,aAAa;GACb,2BAA2B;GAC3B,0CAA0C;GAC1C,mBAAmB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,cAAc;IACd,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,+BAA+B;AACnC;AACA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,wBAAwB;IACxB,+FAA+F;AACnG;AACA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;AACA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,qBAAqB;AACzB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,8FAA8F;IAC9F,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,8FAA8F;AAClG;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,oCAAoC;AACxC;AACA;IACI,8FAA8F;IAC9F,cAAc;IACd,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,iGAAiG;IACjG,oBAAoB;IACpB,wBAAwB;AAC5B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,WAAW;AACf;AACA;IACI,WAAW;IACX,WAAW;AACf;AACA;IACI,oEAAoE;IACpE,0BAA0B;IAC1B,0BAA0B;IAC1B,0CAA0C;IAC1C,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid red; */\n    font-family: 'Fira Sans Condensed', sans-serif;\n}\n@keyframes makeItfadeIn {\n    100% {\n      background-position: left;\n    }\n  }\n@keyframes rotate {\n    0% {\n      transform: rotate(0);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n@keyframes spin { \n    100% { \n      transform: rotateZ(360deg);\n    }\n  }\n@keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\n    30% { transform: translate(3px, 2px) rotate(0deg); }\n    40% { transform: translate(1px, -1px) rotate(1deg); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\n    90% { transform: translate(1px, 2px) rotate(0deg); }\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\n  }\n:root {\n    --orange: #E27D60;\n    --cyan: rgb(131, 205, 203); \n    --yellow:#E8A87C;\n    --purple: #C38D9E;\n    --seablue:#41B3A3;\n  }\n\n/* Home styling */\n.mainHomeDiv{\n    width:100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 7fr;\n}\n.headerDiv{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: var(--purple);\n    display: flex;\n    align-items: center;\n}\n.sidebarDiv{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color: var(--yellow);\n    box-shadow: 5px 0 5px -2px #888;\n}\n.mainLogo{\n    height: auto;\n    width: 15%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.listsHeaderDiv{\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: var(--seablue);\n    box-shadow: 0px 2px 10px -5px #111; \n}\n.listsHeader{\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n    color: white;\n}\n.button-list{\n    margin: 1rem;\n    height: auto;\n}\n.buttonsInList{\n    width: 100%;\n    border: none;\n    border-radius: 15px;\n    background-color: var(--yellow);\n    height: 2rem;\n    margin: 1%;\n    font-size: 1rem;\n}\n.buttonsInList:hover{\n    background-color: var(--purple);\n    font-size: 1.4rem;\n}\n.addButtonDiv{\n    display: flex;\n    justify-content: center;\n}\n.addButton{\n    height: 15%;\n    width: 15%;\n}\n.addButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n}\n.projectAdder{\n    margin-top: 2%;\n    display: flex;\n    justify-content: center;\n    height: 1.3rem;\n}\n.addingProjectInput{\n    border: none;\n    margin-right: 5%;\n    height: 100%;\n}\n/* .addingProjectInput:hover{\n    animation: shake 0.5s; \n    animation-iteration-count: infinite; \n} */\n.addingProjectInput:focus{\n    outline: none;\n    border: 2px solid var(--seablue)\n}\n.addingProjectButton{\n   border:none;\n   width: 4em;\n   margin-inline: auto;\n}\n.addingProjectButton:last-of-type:hover{\n    background-color: #ff6961;\n    animation: shake 0.5s; \n    animation-iteration-count: 1; \n}\n.addingProjectButton:first-of-type:hover{\n    background-color: #77DD77;\n    /* animation: shake 0.5s; \n    animation-iteration-count: 1;  */\n}\n/* home styling */\n\n/* tasks styling */\n.tasksDiv{\n    grid-row: 2/3;\n    grid-column: 2/3;\n    margin-top: 1%;\n}\n.tasksMenuBar{\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.removeProjectButton{\n    width: 3rem;\n    height: auto;\n}\n.removeProjectButton:hover{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n    width: 3.5rem;\n    height: auto;\n}\n.removeProjectButton:active{\n    animation: shake 0.5s;\n}\n.addTaskButton{\n    width: 90%;\n    height: 80%;\n    border: none;\n    border-radius: 25px;\n    background-color: #e0f4f1;\n    border: 1px solid var(--seablue);\n    font-size: 1rem;\n    color: black;\n}\n.addTaskButton:hover{\n    background-color: #e7d1d8;\n    border: 3px solid var(--purple);\n}\n.tasksArea{\n    margin: 3%;\n    height: 80%;\n    /* border: 2px solid blue; */\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 2%;\n}\n.newTask{\n    border-radius: 40px;\n    height: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 10px solid black;\n}\n.newTaskCheckImage{\n    height: 50%;\n    width: auto;\n    margin-left: 1%;\n    grid-column: 1/2;\n    grid-row: 2/3;\n}\n.newTaskForm{\n    position: absolute;\n    height: 30%;\n    width: 30%;\n    margin-top: 11%;\n    margin-left: 22%;\n    border: 2px solid var(--purple);\n    border-radius: 15px;\n    background-color: #f0e2e7;\n    visibility: hidden;\n}\n.formCloseButton{\n    height: auto;\n    width: 5%;\n    margin-left: 94%;\n    margin-top: 1%;\n}\n.formCloseButton:hover{\n    filter: invert(25%) sepia(84%) saturate(7492%) hue-rotate(18deg) brightness(100%) contrast(105%);\n}\n.disable-div{\n    pointer-events: none;\n}\n.enable-div{\n    pointer-events: all;\n}\n/* .showing-form{\n    filter: blur(2px);\n} */\n.formElements{\n   width: 65%;\n   height: fit-content;\n   margin-inline: auto;\n   display: grid;\n   column-gap: 2rem;\n   row-gap: 1rem;\n   grid-template-rows: 1fr 1fr;\n   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n   align-items: center;\n}\n.formLabel{\n    font-size: 1.2rem;\n}\n.formInput{\n    height: 1rem;\n}\n#id1{\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n#id2{\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n#id3{\n    grid-row: 3/4;\n    grid-column: 1/2;\n}\n#id4{\n    grid-row: 4/5;\n    grid-column: 1/2;\n}\n#name{\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n#date{\n    grid-row: 2/3;\n    grid-column: 2/3;\n}\n#priority{\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n#desc{\n    grid-row: 4/6;\n    grid-column: 2/3;\n    height: 100%;\n    resize: none;\n}\n.createTaskButton{\n    height: 1.5rem;\n    width: 20%;\n    margin-left: 40%;\n    margin-top: 5%;\n    background-color: #a7dfd7;\n    border: none;\n    border-radius: 30px;\n}\n.createTaskButton:hover{\n    color: white;\n    background-color: var(--purple);\n}\n.newTaskCheckImage.rotateme{\n    animation-name: rotate;\n    animation-delay: 300ms;\n    animation-duration: 0.5s;\n    filter: invert(67%) sepia(18%) saturate(1224%) hue-rotate(122deg) brightness(88%) contrast(86%);\n}\n.rotateme{\n    animation-name: rotate;\n    animation-duration: 0.5s;\n}\n.shakeme{\n    animation-name: shake;\n    animation-duration: 0.5s;\n    border: 2px solid red;\n}\n.taskNameLabel{\n    font-size: 1.5rem;\n    font-weight: 500;\n    grid-row: 1/2;\n    grid-column: 2/3;\n}\n.taskDateLabel{\n    margin-right: 3%;\n    color: black;\n    font-weight: 100;\n    opacity: 0.6;\n    z-index: 1;\n    grid-row: 3/4;\n    grid-column: 2/3;\n}\n.hamburgerMenu{\n    filter: invert(13%) sepia(0%) saturate(1888%) hue-rotate(142deg) brightness(91%) contrast(83%);\n    position: absolute;\n    margin-left: 95%;\n}\n.hamburgerMenu:hover{\n    filter: invert(61%) sepia(38%) saturate(595%) hue-rotate(122deg) brightness(93%) contrast(88%);\n}\n.minusButtonDiv{\n    grid-column: 3/4;\n    grid-row:2/3;\n}\n.newTask.grid{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr 6fr 0.5fr;\n}\n.minusButton{\n    filter: invert(13%) sepia(0%) saturate(1888%) hue-rotate(142deg) brightness(91%) contrast(83%);\n    height: 2.5rem;\n    width: auto;\n    margin-left: 20%;\n}\n.minusButton:hover{\n    filter: invert(28%) sepia(70%) saturate(3087%) hue-rotate(352deg) brightness(106%) contrast(101%);\n    animation-name: spin;\n    animation-duration: 0.5s;\n}\n.descP{\n    grid-column: 2/3;\n    color: gray;\n    font-weight: 100;\n}\n.newTaskCheckImage.grid{\n    height: 40%;\n    width: auto;\n}\n.newTaskCheckImage.grid:hover{\n    height: 50%;\n    width: auto;\n}\n.newTask.ivebeenchecked{\n    background: linear-gradient(to right, whitesmoke 50%, transparent 0);\n    background-size: 200% 100%;\n    background-position: right;\n    animation: makeItfadeIn 0.5s 0.5s forwards;\n    border-style:  none;\n}\n.dashboardP{\n    margin: 1%;\n    margin-left: 2%;\n    font-size: 2rem;\n    font-weight: 100;\n    opacity: 0.7;\n}"],"sourceRoot":""}]);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwSUFBMEk7QUFDMUk7QUFDQSw0Q0FBNEMsZ0JBQWdCLGlCQUFpQixnQ0FBZ0MsdURBQXVELEdBQUcsMkJBQTJCLFlBQVksa0NBQWtDLE9BQU8sS0FBSyxxQkFBcUIsVUFBVSw2QkFBNkIsT0FBTyxZQUFZLGtDQUFrQyxPQUFPLEtBQUssb0JBQW9CLGFBQWEsbUNBQW1DLE9BQU8sS0FBSyxvQkFBb0IsV0FBVyw4Q0FBOEMsWUFBWSxpREFBaUQsWUFBWSwrQ0FBK0MsWUFBWSw4Q0FBOEMsWUFBWSwrQ0FBK0MsWUFBWSxnREFBZ0QsWUFBWSwrQ0FBK0MsWUFBWSwrQ0FBK0MsWUFBWSxnREFBZ0QsWUFBWSw4Q0FBOEMsYUFBYSxnREFBZ0QsS0FBSyxTQUFTLHdCQUF3QixrQ0FBa0MsdUJBQXVCLHdCQUF3Qix3QkFBd0IsS0FBSyxxQ0FBcUMsaUJBQWlCLG9CQUFvQixvQkFBb0IscUNBQXFDLGtDQUFrQyxHQUFHLGFBQWEsb0JBQW9CLHVCQUF1QixzQ0FBc0Msb0JBQW9CLDBCQUEwQixHQUFHLGNBQWMsb0JBQW9CLHVCQUF1QixzQ0FBc0Msc0NBQXNDLEdBQUcsWUFBWSxtQkFBbUIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLDhCQUE4QixvQkFBb0IsdUNBQXVDLDBDQUEwQyxHQUFHLGVBQWUsd0JBQXdCLDBCQUEwQixtQkFBbUIsR0FBRyxlQUFlLG1CQUFtQixtQkFBbUIsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsc0NBQXNDLG1CQUFtQixpQkFBaUIsc0JBQXNCLEdBQUcsdUJBQXVCLHNDQUFzQyx3QkFBd0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDhCQUE4QixHQUFHLGFBQWEsa0JBQWtCLGlCQUFpQixHQUFHLG1CQUFtQiw2QkFBNkIsK0JBQStCLEdBQUcsZ0JBQWdCLHFCQUFxQixvQkFBb0IsOEJBQThCLHFCQUFxQixHQUFHLHNCQUFzQixtQkFBbUIsdUJBQXVCLG1CQUFtQixHQUFHLCtCQUErQiw2QkFBNkIsMkNBQTJDLElBQUksOEJBQThCLG9CQUFvQix5Q0FBeUMsdUJBQXVCLGlCQUFpQixnQkFBZ0IseUJBQXlCLEdBQUcsMENBQTBDLGdDQUFnQyw2QkFBNkIsb0NBQW9DLEdBQUcsMkNBQTJDLGdDQUFnQyxnQ0FBZ0MscUNBQXFDLEtBQUssdURBQXVELG9CQUFvQix1QkFBdUIscUJBQXFCLEdBQUcsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLG9DQUFvQyxHQUFHLHVCQUF1QixrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLDZCQUE2QiwrQkFBK0Isb0JBQW9CLG1CQUFtQixHQUFHLDhCQUE4Qiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixtQkFBbUIsMEJBQTBCLGdDQUFnQyx1Q0FBdUMsc0JBQXNCLG1CQUFtQixHQUFHLHVCQUF1QixnQ0FBZ0Msc0NBQXNDLEdBQUcsYUFBYSxpQkFBaUIsa0JBQWtCLGlDQUFpQyx5QkFBeUIsb0JBQW9CLDZCQUE2QixzQkFBc0IsY0FBYyxHQUFHLFdBQVcsMEJBQTBCLGtCQUFrQixvQkFBb0IsMEJBQTBCLHFDQUFxQywrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLGtCQUFrQixzQkFBc0IsdUJBQXVCLG9CQUFvQixHQUFHLGVBQWUseUJBQXlCLGtCQUFrQixpQkFBaUIsc0JBQXNCLHVCQUF1QixzQ0FBc0MsMEJBQTBCLGdDQUFnQyx5QkFBeUIsR0FBRyxtQkFBbUIsbUJBQW1CLGdCQUFnQix1QkFBdUIscUJBQXFCLEdBQUcseUJBQXlCLHVHQUF1RyxHQUFHLGVBQWUsMkJBQTJCLEdBQUcsY0FBYywwQkFBMEIsR0FBRyxtQkFBbUIsd0JBQXdCLElBQUksa0JBQWtCLGdCQUFnQix5QkFBeUIseUJBQXlCLG1CQUFtQixzQkFBc0IsbUJBQW1CLGlDQUFpQyxnREFBZ0QseUJBQXlCLEdBQUcsYUFBYSx3QkFBd0IsR0FBRyxhQUFhLG1CQUFtQixHQUFHLE9BQU8sb0JBQW9CLHVCQUF1QixHQUFHLE9BQU8sb0JBQW9CLHVCQUF1QixHQUFHLE9BQU8sb0JBQW9CLHVCQUF1QixHQUFHLE9BQU8sb0JBQW9CLHVCQUF1QixHQUFHLFFBQVEsb0JBQW9CLHVCQUF1QixHQUFHLFFBQVEsb0JBQW9CLHVCQUF1QixHQUFHLFlBQVksb0JBQW9CLHVCQUF1QixHQUFHLFFBQVEsb0JBQW9CLHVCQUF1QixtQkFBbUIsbUJBQW1CLEdBQUcsb0JBQW9CLHFCQUFxQixpQkFBaUIsdUJBQXVCLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixHQUFHLDBCQUEwQixtQkFBbUIsc0NBQXNDLEdBQUcsOEJBQThCLDZCQUE2Qiw2QkFBNkIsK0JBQStCLHNHQUFzRyxHQUFHLFlBQVksNkJBQTZCLCtCQUErQixHQUFHLFdBQVcsNEJBQTRCLCtCQUErQiw0QkFBNEIsR0FBRyxpQkFBaUIsd0JBQXdCLHVCQUF1QixvQkFBb0IsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQixxR0FBcUcseUJBQXlCLHVCQUF1QixHQUFHLHVCQUF1QixxR0FBcUcsR0FBRyxrQkFBa0IsdUJBQXVCLG1CQUFtQixHQUFHLGdCQUFnQixvQkFBb0Isc0NBQXNDLDJDQUEyQyxHQUFHLGVBQWUscUdBQXFHLHFCQUFxQixrQkFBa0IsdUJBQXVCLEdBQUcscUJBQXFCLHdHQUF3RywyQkFBMkIsK0JBQStCLEdBQUcsU0FBUyx1QkFBdUIsa0JBQWtCLHVCQUF1QixHQUFHLDBCQUEwQixrQkFBa0Isa0JBQWtCLEdBQUcsZ0NBQWdDLGtCQUFrQixrQkFBa0IsR0FBRywwQkFBMEIsMkVBQTJFLGlDQUFpQyxpQ0FBaUMsaURBQWlELDBCQUEwQixHQUFHLGNBQWMsaUJBQWlCLHNCQUFzQixzQkFBc0IsdUJBQXVCLG1CQUFtQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxN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QWUsd0RBQVU7QUFDekI7QUFDQSxzQkFBc0Isd0RBQVU7QUFDaEM7O0FBRWU7QUFDZjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csdURBQWE7QUFDN0csUUFBUSx3REFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVEQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3RpZnlsaXN0dGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL25vdGlmeWxpc3R0ZXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm90aWZ5bGlzdHRlc3QvLi9zcmMvdGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnMrQ29uZGVuc2VkOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5Aa2V5ZnJhbWVzIG1ha2VJdGZhZGVJbiB7XFxuICAgIDEwMCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxuICAgIH1cXG4gIH1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuQGtleWZyYW1lcyBzcGluIHsgXFxuICAgIDEwMCUgeyBcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG4gICAgfVxcbiAgfVxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTsgfVxcbiAgICAyMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTsgfVxcbiAgICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpOyB9XFxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAxcHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTsgfVxcbiAgICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gICAgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICB9XFxuOnJvb3Qge1xcbiAgICAtLW9yYW5nZTogI0UyN0Q2MDtcXG4gICAgLS1jeWFuOiByZ2IoMTMxLCAyMDUsIDIwMyk7IFxcbiAgICAtLXllbGxvdzojRThBODdDO1xcbiAgICAtLXB1cnBsZTogI0MzOEQ5RTtcXG4gICAgLS1zZWFibHVlOiM0MUIzQTM7XFxuICB9XFxuXFxuLyogSG9tZSBzdHlsaW5nICovXFxuLm1haW5Ib21lRGl2e1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmcjtcXG59XFxuLmhlYWRlckRpdntcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNpZGViYXJEaXZ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJveC1zaGFkb3c6IDVweCAwIDVweCAtMnB4ICM4ODg7XFxufVxcbi5tYWluTG9nb3tcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ubGlzdHNIZWFkZXJEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFibHVlKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IC01cHggIzExMTsgXFxufVxcbi5saXN0c0hlYWRlcntcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ1dHRvbi1saXN0e1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLmJ1dHRvbnNJbkxpc3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luOiAxJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYnV0dG9uc0luTGlzdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5hZGRCdXR0b25EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYWRkQnV0dG9ue1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuLmFkZEJ1dHRvbjpob3ZlcntcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4ucHJvamVjdEFkZGVye1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS4zcmVtO1xcbn1cXG4uYWRkaW5nUHJvamVjdElucHV0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLyogLmFkZGluZ1Byb2plY3RJbnB1dDpob3ZlcntcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxcbn0gKi9cXG4uYWRkaW5nUHJvamVjdElucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWFibHVlKVxcbn1cXG4uYWRkaW5nUHJvamVjdEJ1dHRvbntcXG4gICBib3JkZXI6bm9uZTtcXG4gICB3aWR0aDogNGVtO1xcbiAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9uOmxhc3Qtb2YtdHlwZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjk2MTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgXFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9uOmZpcnN0LW9mLXR5cGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICAgIC8qIGFuaW1hdGlvbjogc2hha2UgMC41czsgXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7ICAqL1xcbn1cXG4vKiBob21lIHN0eWxpbmcgKi9cXG5cXG4vKiB0YXNrcyBzdHlsaW5nICovXFxuLnRhc2tzRGl2e1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuLnRhc2tzTWVudUJhcntcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b257XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbi5yZW1vdmVQcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b246YWN0aXZle1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7XFxufVxcbi5hZGRUYXNrQnV0dG9ue1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNGYxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWFibHVlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5hZGRUYXNrQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkMWQ4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xcbn1cXG4udGFza3NBcmVhe1xcbiAgICBtYXJnaW46IDMlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIlO1xcbn1cXG4ubmV3VGFza3tcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ubmV3VGFza0NoZWNrSW1hZ2V7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG4ubmV3VGFza0Zvcm17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbi10b3A6IDExJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIyJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHVycGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZTJlNztcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uZm9ybUNsb3NlQnV0dG9ue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDk0JTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxufVxcbi5mb3JtQ2xvc2VCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDI1JSkgc2VwaWEoODQlKSBzYXR1cmF0ZSg3NDkyJSkgaHVlLXJvdGF0ZSgxOGRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuLmRpc2FibGUtZGl2e1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmVuYWJsZS1kaXZ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi8qIC5zaG93aW5nLWZvcm17XFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcbn0gKi9cXG4uZm9ybUVsZW1lbnRze1xcbiAgIHdpZHRoOiA2NSU7XFxuICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgY29sdW1uLWdhcDogMnJlbTtcXG4gICByb3ctZ2FwOiAxcmVtO1xcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm1MYWJlbHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5mb3JtSW5wdXR7XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuI2lkMXtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuI2lkMntcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuI2lkM3tcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuI2lkNHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuI25hbWV7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbiNkYXRle1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4jcHJpb3JpdHl7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbiNkZXNje1xcbiAgICBncmlkLXJvdzogNC82O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuLmNyZWF0ZVRhc2tCdXR0b257XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZGZkNztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4uY3JlYXRlVGFza0J1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG4ubmV3VGFza0NoZWNrSW1hZ2Uucm90YXRlbWV7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjclKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDEyMjQlKSBodWUtcm90YXRlKDEyMmRlZykgYnJpZ2h0bmVzcyg4OCUpIGNvbnRyYXN0KDg2JSk7XFxufVxcbi5yb3RhdGVtZXtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4uc2hha2VtZXtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuLnRhc2tOYW1lTGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG4udGFza0RhdGVMYWJlbHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbi5oYW1idXJnZXJNZW51e1xcbiAgICBmaWx0ZXI6IGludmVydCgxMyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxODg4JSkgaHVlLXJvdGF0ZSgxNDJkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4MyUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NSU7XFxufVxcbi5oYW1idXJnZXJNZW51OmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCg2MSUpIHNlcGlhKDM4JSkgc2F0dXJhdGUoNTk1JSkgaHVlLXJvdGF0ZSgxMjJkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4OCUpO1xcbn1cXG4ubWludXNCdXR0b25EaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OjIvMztcXG59XFxuLm5ld1Rhc2suZ3JpZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDAuNWZyO1xcbn1cXG4ubWludXNCdXR0b257XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEzJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE4ODglKSBodWUtcm90YXRlKDE0MmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDgzJSk7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1pbnVzQnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCgyOCUpIHNlcGlhKDcwJSkgc2F0dXJhdGUoMzA4NyUpIGh1ZS1yb3RhdGUoMzUyZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbn1cXG4uZGVzY1B7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4ubmV3VGFza0NoZWNrSW1hZ2UuZ3JpZHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4ubmV3VGFza0NoZWNrSW1hZ2UuZ3JpZDpob3ZlcntcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4ubmV3VGFzay5pdmViZWVuY2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZXNtb2tlIDUwJSwgdHJhbnNwYXJlbnQgMCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG4gICAgYW5pbWF0aW9uOiBtYWtlSXRmYWRlSW4gMC41cyAwLjVzIGZvcndhcmRzO1xcbiAgICBib3JkZXItc3R5bGU6ICBub25lO1xcbn1cXG4uZGFzaGJvYXJkUHtcXG4gICAgbWFyZ2luOiAxJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0k7TUFDRSx5QkFBeUI7SUFDM0I7RUFD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dHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2FucytDb25kZW5zZWQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxufVxcbkBrZXlmcmFtZXMgbWFrZUl0ZmFkZUluIHtcXG4gICAgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gICAgfVxcbiAgfVxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG5Aa2V5ZnJhbWVzIHNwaW4geyBcXG4gICAgMTAwJSB7IFxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpOyB9XFxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpOyB9XFxuICAgIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7IH1cXG4gIH1cXG46cm9vdCB7XFxuICAgIC0tb3JhbmdlOiAjRTI3RDYwO1xcbiAgICAtLWN5YW46IHJnYigxMzEsIDIwNSwgMjAzKTsgXFxuICAgIC0teWVsbG93OiNFOEE4N0M7XFxuICAgIC0tcHVycGxlOiAjQzM4RDlFO1xcbiAgICAtLXNlYWJsdWU6IzQxQjNBMztcXG4gIH1cXG5cXG4vKiBIb21lIHN0eWxpbmcgKi9cXG4ubWFpbkhvbWVEaXZ7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xcbn1cXG4uaGVhZGVyRGl2e1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2lkZWJhckRpdntcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDAgNXB4IC0ycHggIzg4ODtcXG59XFxuLm1haW5Mb2dve1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5saXN0c0hlYWRlckRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYWJsdWUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLTVweCAjMTExOyBcXG59XFxuLmxpc3RzSGVhZGVye1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnV0dG9uLWxpc3R7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uYnV0dG9uc0luTGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW46IDElO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5idXR0b25zSW5MaXN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLmFkZEJ1dHRvbkRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGRCdXR0b257XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG4uYWRkQnV0dG9uOmhvdmVye1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbi5wcm9qZWN0QWRkZXJ7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxLjNyZW07XFxufVxcbi5hZGRpbmdQcm9qZWN0SW5wdXR7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4vKiAuYWRkaW5nUHJvamVjdElucHV0OmhvdmVye1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7IFxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXFxufSAqL1xcbi5hZGRpbmdQcm9qZWN0SW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlYWJsdWUpXFxufVxcbi5hZGRpbmdQcm9qZWN0QnV0dG9ue1xcbiAgIGJvcmRlcjpub25lO1xcbiAgIHdpZHRoOiA0ZW07XFxuICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuLmFkZGluZ1Byb2plY3RCdXR0b246bGFzdC1vZi10eXBlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2OTYxO1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7IFxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyBcXG59XFxuLmFkZGluZ1Byb2plY3RCdXR0b246Zmlyc3Qtb2YtdHlwZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3REQ3NztcXG4gICAgLyogYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgICovXFxufVxcbi8qIGhvbWUgc3R5bGluZyAqL1xcblxcbi8qIHRhc2tzIHN0eWxpbmcgKi9cXG4udGFza3NEaXZ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDElO1xcbn1cXG4udGFza3NNZW51QmFye1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ucmVtb3ZlUHJvamVjdEJ1dHRvbntcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuLnJlbW92ZVByb2plY3RCdXR0b246aG92ZXJ7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb3RhdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ucmVtb3ZlUHJvamVjdEJ1dHRvbjphY3RpdmV7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgMC41cztcXG59XFxuLmFkZFRhc2tCdXR0b257XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGY0ZjE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYWJsdWUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmFkZFRhc2tCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2QxZDg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXB1cnBsZSk7XFxufVxcbi50YXNrc0FyZWF7XFxuICAgIG1hcmdpbjogMyU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMiU7XFxufVxcbi5uZXdUYXNre1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgYmxhY2s7XFxufVxcbi5uZXdUYXNrQ2hlY2tJbWFnZXtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMSU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcbi5uZXdUYXNrRm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luLXRvcDogMTElO1xcbiAgICBtYXJnaW4tbGVmdDogMjIlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlMmU3O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5mb3JtQ2xvc2VCdXR0b257XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDUlO1xcbiAgICBtYXJnaW4tbGVmdDogOTQlO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuLmZvcm1DbG9zZUJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjUlKSBzZXBpYSg4NCUpIHNhdHVyYXRlKDc0OTIlKSBodWUtcm90YXRlKDE4ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG4uZGlzYWJsZS1kaXZ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZW5hYmxlLWRpdntcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuLyogLnNob3dpbmctZm9ybXtcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxufSAqL1xcbi5mb3JtRWxlbWVudHN7XFxuICAgd2lkdGg6IDY1JTtcXG4gICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgIHJvdy1nYXA6IDFyZW07XFxuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybUxhYmVse1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLmZvcm1JbnB1dHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG4jaWQxe1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4jaWQye1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4jaWQze1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4jaWQ0e1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4jbmFtZXtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuI2RhdGV7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbiNwcmlvcml0eXtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuI2Rlc2N7XFxuICAgIGdyaWQtcm93OiA0LzY7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG4uY3JlYXRlVGFza0J1dHRvbntcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdkZmQ3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcbi5jcmVhdGVUYXNrQnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcbi5uZXdUYXNrQ2hlY2tJbWFnZS5yb3RhdGVtZXtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBmaWx0ZXI6IGludmVydCg2NyUpIHNlcGlhKDE4JSkgc2F0dXJhdGUoMTIyNCUpIGh1ZS1yb3RhdGUoMTIyZGVnKSBicmlnaHRuZXNzKDg4JSkgY29udHJhc3QoODYlKTtcXG59XFxuLnJvdGF0ZW1le1xcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbi5zaGFrZW1le1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG4udGFza05hbWVMYWJlbHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbi50YXNrRGF0ZUxhYmVse1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuLmhhbWJ1cmdlck1lbnV7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEzJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE4ODglKSBodWUtcm90YXRlKDE0MmRlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDgzJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLmhhbWJ1cmdlck1lbnU6aG92ZXJ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDYxJSkgc2VwaWEoMzglKSBzYXR1cmF0ZSg1OTUlKSBodWUtcm90YXRlKDEyMmRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDg4JSk7XFxufVxcbi5taW51c0J1dHRvbkRpdntcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6Mi8zO1xcbn1cXG4ubmV3VGFzay5ncmlke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMC41ZnI7XFxufVxcbi5taW51c0J1dHRvbntcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTMlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMTg4OCUpIGh1ZS1yb3RhdGUoMTQyZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODMlKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWludXNCdXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDI4JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgzMDg3JSkgaHVlLXJvdGF0ZSgzNTJkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAxJSk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbi5kZXNjUHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5uZXdUYXNrQ2hlY2tJbWFnZS5ncmlke1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5uZXdUYXNrQ2hlY2tJbWFnZS5ncmlkOmhvdmVye1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5uZXdUYXNrLml2ZWJlZW5jaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlc21va2UgNTAlLCB0cmFuc3BhcmVudCAwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICBhbmltYXRpb246IG1ha2VJdGZhZGVJbiAwLjVzIDAuNXMgZm9yd2FyZHM7XFxuICAgIGJvcmRlci1zdHlsZTogIG5vbmU7XFxufVxcbi5kYXNoYm9hcmRQe1xcbiAgICBtYXJnaW46IDElO1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjaGVja0xvYyBmcm9tICcuL2NoZWNrLWJvbGQtMi5wbmcnXG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5pbXBvcnQgbWludXNMb2MgZnJvbSAnLi9taW51cy1jaXJjbGUucG5nJ1xuaW1wb3J0IHsgdXBkYXRlRGFzaGJvYXJkTGFiZWwgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuaW1wb3J0IHsgc2hvd1JlbGV2YW50VGFza3MgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuXG5sZXQgYWN0aXZlUHJvamVjdCA9MDtcbmNsYXNzIG5ld0J1dHRvbntcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdElEKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZT0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdElEPSBwcm9qZWN0SUQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFbGVtZW50KHR5cGUsIGNsYXNzbmFtZSwgYWRkVG89bnVsbCwgc3JjRWxlPSBudWxsLCBpZD1udWxsLCB0ZXh0PW51bGwpe1xuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG4gICAgaWYgKHNyY0VsZSE9PW51bGwpe1xuICAgICAgICBlbGUuc3JjPSBzcmNFbGU7XG4gICAgfVxuICAgIGlmKGlkIT09IG51bGwpe1xuICAgICAgICBlbGUuaWQ9IGlkO1xuICAgIH1cbiAgICBpZiAodGV4dCE9PSBudWxsKXtcbiAgICAgICAgZWxlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChhZGRUbyE9PSBudWxsKXtcbiAgICAgICAgYWRkVG8uYXBwZW5kQ2hpbGQoZWxlKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHV0QnV0dG9uSW5Mb2NhbFN0b3JhZ2UobmFtZSl7XG4gICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKTtcbiAgICBsZXQgYj0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnKSk7XG4gICAgYis9MTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsIGIpO1xuICAgIGxldCBuZXh0QnV0dG9uID0gbmV3IG5ld0J1dHRvbihuYW1lLCBiKVxuICAgIGFbYl09IG5leHRCdXR0b247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG4gICAgcmV0dXJuIG5leHRCdXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKGJ1dHRvbkxpc3Qpe1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lkZUJhckJ1dHRvbnNBcnJheVwiKSk7XG4gICAgYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5wcm9qZWN0SUQ9PTApe1xuICAgICAgICAgICAgdXBkYXRlRGFzaGJvYXJkTGFiZWwoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2J1dHRvbicsICdidXR0b25zSW5MaXN0JywgYnV0dG9uTGlzdCwgdW5kZWZpbmVkLCBlbGVtZW50LnByb2plY3RJRCwgZWxlbWVudC5wcm9qZWN0TmFtZSk7XG4gICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gdXBkYXRlQWN0aXZlUHJvaigpe1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdD0gZWxlbWVudC5wcm9qZWN0SUQ7XG4gICAgICAgICAgICB1cGRhdGVEYXNoYm9hcmRMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGJ1dHRvbkxpc3QubGFzdENoaWxkLmlkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3QoYnV0dG9uTGlzdCwgYnV0dG9uT2JqZWN0KXtcbiAgICBsZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0SUQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qKCl7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0PSBidXR0b25PYmplY3QucHJvamVjdElEO1xuICAgICAgICAgICAgdXBkYXRlRGFzaGJvYXJkTGFiZWwobmV3QnV0dG9uKTtcbiAgICAgICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgIH0pXG4gICAgfTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcm9qZWN0cygpe1xuICAgIGxldCBzaWRlQmFyQnV0dG9uc0FycmF5PSBbXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShzaWRlQmFyQnV0dG9uc0FycmF5KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpZGVCYXJCdXR0b25zSWQnLDApO1xuICAgIGxldCBhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpO1xuICAgIGxldCBuZXh0QnV0dG9uID0gbmV3IG5ld0J1dHRvbihcIkFsbFwiLCAwKVxuICAgIGFbMF09IG5leHRCdXR0b247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIsSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRhc2tzKCl7XG4gICAgbGV0IHRhc2tzTG9jYWxBcnJheT0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeSh0YXNrc0xvY2FsQXJyYXkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xvY2FsSWQnLDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ2hlY2soZnVuY25ld1Rhc2ssIGZ1bmN0YXNrLCBmdW5jbmV3VGFza0NoZWNrSW1hZ2Upe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IHN0YXR1cz0gXCJ1bmNoZWNrZWRcIjtcbiAgICBsZXQgbmV3VGFzaz0gZnVuY25ld1Rhc2s7XG4gICAgbGV0IG5ld1Rhc2tDaGVja0ltYWdlPSBmdW5jbmV3VGFza0NoZWNrSW1hZ2U7XG4gICAgbGV0IG1pbnVzQnV0dG9uRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnbWludXNCdXR0b25EaXYnLCB1bmRlZmluZWQpO1xuICAgIGxldCBtaW51c0J1dHRvbiA9IGFkZEVsZW1lbnQoJ2ltZycsICdtaW51c0J1dHRvbicsIG1pbnVzQnV0dG9uRGl2LCBtaW51c0xvYyk7XG4gICAgbGV0IGRlc2NQPSBhZGRFbGVtZW50KCdwJywgJ2Rlc2NQJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFzay50YXNrRGVzYyk7ICBcbiAgICBuZXdUYXNrQ2hlY2tJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBjaGVja0xvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvdGF0ZW1lXCIpO1xuICAgIH0pXG4gICAgbmV3VGFza0NoZWNrSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gY2hhbmdlSWNvbigpe1xuICAgICAgICBpZiAoc3RhdHVzPT1cInVuY2hlY2tlZFwiKXtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2Uuc3JjPSBibGFua2NpcmNsZWxvYztcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO31cbiAgICB9KSAgICBcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIGNoYW5nZUljb24oKXtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZW1lXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmhlaWdodD0gXCIxMCVcIjtcbiAgICAgICAgaWYgKG5ld1Rhc2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZFwiKSl7XG4gICAgICAgIG5ld1Rhc2sucmVtb3ZlQ2hpbGQobWludXNCdXR0b25EaXYpO1xuICAgICAgICBuZXdUYXNrLnJlbW92ZUNoaWxkKGRlc2NQKTtcbiAgICAgICAgbmV3VGFza0NoZWNrSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImdyaWRcIik7fVxuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkXCIpO1xuICAgIH0pIFxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGxvZ01lZWVlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW0gdGhlIHRhc2sgcHJvamVjdCBcIisgdGFzay50YXNrSUQpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmhlaWdodD0gXCI4cmVtXCI7XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobWludXNCdXR0b25EaXYpO1xuICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgICBpZiAoZGVzY1AudGV4dENvbnRlbnQ9PVwiXCIpe1xuICAgICAgICAgICAgZGVzY1AudGV4dENvbnRlbnQ9XCJObyBkZXNjcmlwdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGVzY1ApO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgICAgbWludXNCdXR0b24uY2xhc3NMaXN0LmFkZChcInJvdGF0ZW1lXCIpO1xuICAgIH0pXG4gICAgbmV3VGFza0NoZWNrSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIml2ZWJlZW5jaGVja2VkXCIpO1xuICAgICAgICBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCBncmF5XCI7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuY29sb3I9IFwiZ3JheVwiO1xuICAgICAgICBzdGF0dXM9IFwiY2hlY2tlZFwiO1xuICAgICAgICBuZXdUYXNrQ2hlY2tJbWFnZS5zcmM9IGNoZWNrTG9jO1xuICAgICAgICBsZXQgYT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiKSk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGFbaV0udGFza0lEID09dGFzay50YXNrSUQpe1xuICAgICAgICAgICAgICAgIGFbaV0udGFza1ByaW9yaXR5PSBcInZlcnlsb3dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICAgICAgc2hvd1JlbGV2YW50VGFza3MoYWN0aXZlUHJvamVjdCk7XG4gICAgfSlcbiAgICBtaW51c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIikpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihhW2ldLnRhc2tJRCA9PXRhc2sudGFza0lEKXtcbiAgICAgICAgICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIixKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgIHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNpZGVUYXNrQkcobmV3VGFzaywgdGFzayl7XG4gICAgc3dpdGNoKHRhc2sudGFza1ByaW9yaXR5KXtcbiAgICAgICAgY2FzZSAnaGlnaCc6IG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkICNmZjY5NjFcIjsgbmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiI2ZmZGJkOVwiOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWVkaXVtJzogbmV3VGFzay5zdHlsZS5ib3JkZXI9IFwiMS41cHggc29saWQgI2M0YmMwMFwiOyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0gXCIjZmZmZGNkXCI7IGJyZWFrO1xuICAgICAgICBjYXNlICdsb3cnOiBuZXdUYXNrLnN0eWxlLmJvcmRlcj0gXCIxLjVweCBzb2xpZCAjNzdERDc3XCI7IG5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSBcIiNkZWY3ZGVcIjsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOiBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVWlFbGVzKGZ1bmNuZXdUYXNrLCBmdW5jdGFzayl7XG4gICAgbGV0IHRhc2sgPSBmdW5jdGFzaztcbiAgICBsZXQgbmV3VGFzaz0gZnVuY25ld1Rhc2s7XG4gICAgbGV0IHRhc2tOYW1lTGFiZWw9IGFkZEVsZW1lbnQoJ3AnLCAndGFza05hbWVMYWJlbCcsIG5ld1Rhc2ssIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXNrLnRhc2tOYW1lKTtcbiAgICBsZXQgdGFza0RhdGVMYWJlbD0gYWRkRWxlbWVudCgncCcsICd0YXNrRGF0ZUxhYmVsJywgbmV3VGFzaywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhc2sudGFza0RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVNZShmdW5jdGFzaywgZnVuY05hbWVJbnB1dCwgZnVuY0RhdGVJbnB1dCl7XG4gICAgbGV0IHRhc2sgPSBmdW5jdGFzaztcbiAgICBsZXQgbmFtZUlucHV0PSBmdW5jTmFtZUlucHV0O1xuICAgIGxldCBkYXRlSW5wdXQ9IGZ1bmNEYXRlSW5wdXQ7XG4gICAgaWYgKHRhc2sudGFza05hbWUgPT0gXCJcIil7XG4gICAgICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2hha2VtZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFzay50YXNrRGF0ZSA9PSBcIlwiKXtcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJzaGFrZW1lXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmKHRhc2sudGFza1ByaW9yaXR5ID09IFwiXCIpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge2FjdGl2ZVByb2plY3R9OyIsImltcG9ydCBsb2dvTG9jIGZyb20gJy4vbG9nby5wbmcnXG5pbXBvcnQgbWVudUxvYyBmcm9tICcuL21lbnUucG5nJ1xuaW1wb3J0IGFkZEVsZW1lbnQsIHsgcmVzZXRUYXNrcyB9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IHsgcHV0QnV0dG9uSW5Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCBwbHVzbG9jIGZyb20gJy4vcGx1cy10aGljay0yLnBuZyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVByb2plY3RzIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyByZXNldFByb2plY3RzIH0gZnJvbSAnLi9kb21NYW5pcC5qcydcbmltcG9ydCBwb3B1bGF0ZVRhc2tzIGZyb20gJy4vdGFza3MuanMnXG5pbXBvcnQgeyBwb3B1bGF0ZVByb2plY3R9ICBmcm9tICcuL2RvbU1hbmlwLmpzJ1xuaW1wb3J0IHsgc2hvd1JlbGV2YW50VGFza3MgfSBmcm9tICcuL3Rhc2tzLmpzJ1xuXG5sZXQgYmFja0VuZFNpZGVCYXJCdXR0b25zQXJyYXk9IFtdO1xubGV0IGRpdlRvUmV0dXJuID0gYWRkRWxlbWVudCgnZGl2JywgJ21haW5Ib21lRGl2Jyk7XG5sZXQgaGVhZGVyRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnaGVhZGVyRGl2JywgZGl2VG9SZXR1cm4pO1xubGV0IHNpZGVCYXJEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdzaWRlYmFyRGl2JywgZGl2VG9SZXR1cm4pO1xubGV0IGxvZ289IGFkZEVsZW1lbnQoJ2ltZycsICdtYWluTG9nbycsIGhlYWRlckRpdiwgbG9nb0xvYyk7XG5sZXQgbGlzdHNIZWFkZXJEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdsaXN0c0hlYWRlckRpdicsIHNpZGVCYXJEaXYpXG5sZXQgYnV0dG9uTGlzdCA9IGFkZEVsZW1lbnQoJ2RpdicsICdidXR0b24tbGlzdCcsIHNpZGVCYXJEaXYsIHVuZGVmaW5lZCwgJ2J1dHRvbkxpc3QnKTtcbi8vbGV0IHNpZGVCYXJCdXR0b25zQXJyYXk9IFtdO1xuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIixKU09OLnN0cmluZ2lmeShzaWRlQmFyQnV0dG9uc0FycmF5KSk7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZUJhckJ1dHRvbnNJZCcsMCk7XG4vL2NvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWRlQmFyQnV0dG9uc0FycmF5XCIpKSk7XG5sZXQgYWRkQnV0dG9uRGl2PSBhZGRFbGVtZW50KCdkaXYnLCAnYWRkQnV0dG9uRGl2Jywgc2lkZUJhckRpdik7XG4vL3RlbXBvcmFyeSEhISFcbmxldCByZWZyZXNoVGFza3MgPSBhZGRFbGVtZW50KCdidXR0b24nLCAncmVmcmVzaHRhc2tzJywgc2lkZUJhckRpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwicmVzZXQgdGFza3NcIilcbmxldCByZWZyZXNoUHJvamVjdHMgPSBhZGRFbGVtZW50KCdidXR0b24nLCAncmVmcmVzaHByb2plY3RzJywgc2lkZUJhckRpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwicmVzZXQgcHJvalwiKVxuLy8gdGVtcG9yYXJ5ISEhIVxubGV0IGFkZEJ1dHRvbj0gYWRkRWxlbWVudCgnaW1nJywgJ2FkZEJ1dHRvbicsIGFkZEJ1dHRvbkRpdiwgcGx1c2xvYyk7XG5sZXQgbGlzdHNIZWFkZXIgPSBhZGRFbGVtZW50KCdwJywgJ2xpc3RzSGVhZGVyJywgbGlzdHNIZWFkZXJEaXYpO1xubGlzdHNIZWFkZXIuaW5uZXJIVE1MPSBcIkxpc3RzXCI7XG5cbmZ1bmN0aW9uIHNob3dIYW1idXJnZXJNZW51KCl7XG4gICAgbGV0IGhhbWJ1cmdlcj0gYWRkRWxlbWVudCgnaW1nJywgJ2hhbWJ1cmdlck1lbnUnLCBoZWFkZXJEaXYsIG1lbnVMb2MpO1xuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScpO1xuICAgIH0pXG59XG5yZWZyZXNoVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgcmVzZXRUYXNrcygpO1xufSlcbnJlZnJlc2hQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICByZXNldFByb2plY3RzKCk7XG59KVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSG9tZURPTSgpe1xuICAgIHBvcHVsYXRlUHJvamVjdHMoYnV0dG9uTGlzdCk7XG4gICAgcG9wdWxhdGVUYXNrcyhkaXZUb1JldHVybik7XG4gICAgc2hvd1JlbGV2YW50VGFza3MoMCk7XG4gICAgc2hvd0hhbWJ1cmdlck1lbnUoKTtcbiAgICByZXR1cm4gZGl2VG9SZXR1cm47XG59XG5mdW5jdGlvbiBzaG93QWRkaW5nUHJvamVjdEJ1dHRvbigpe1xuICAgIGxldCBhZGRpbmdEaXY9IGFkZEVsZW1lbnQoJ2RpdicsICdwcm9qZWN0QWRkZXInLCBidXR0b25MaXN0KTtcbiAgICBsZXQgbmV3SW5wdXQgPSBhZGRFbGVtZW50KCdpbnB1dCcsICdhZGRpbmdQcm9qZWN0SW5wdXQnLCBhZGRpbmdEaXYpO1xuICAgIGxldCB5ZXNCdXR0b24gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkaW5nUHJvamVjdEJ1dHRvbicsIGFkZGluZ0RpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQnKTtcbiAgICBsZXQgbm9CdXR0b24gPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkaW5nUHJvamVjdEJ1dHRvbicsIGFkZGluZ0RpdiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdDYW5jZWwnKTtcblxuICAgIG5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICBhZGRpbmdEaXYucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBcbiAgICB5ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgIGlmIChuZXdJbnB1dC52YWx1ZT09XCJcIil7XG4gICAgICAgICAgICBuZXdJbnB1dC5wbGFjZWhvbGRlcj0gXCJQbGVhc2UgbmFtZSB5b3VyIHByb2plY3RcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgIGxldCBidXR0b25PYmplY3QgPSBwdXRCdXR0b25JbkxvY2FsU3RvcmFnZShuZXdJbnB1dC52YWx1ZSk7XG4gICAgICAgIGJhY2tFbmRTaWRlQmFyQnV0dG9uc0FycmF5LnB1c2goYnV0dG9uT2JqZWN0KTtcbiAgICAgICAgLy9sZXQgbmV3QnV0dG9uID0gYWRkRWxlbWVudCgnYnV0dG9uJywgJ2J1dHRvbnNJbkxpc3QnLCBidXR0b25MaXN0LCB1bmRlZmluZWQsIGJ1dHRvbk9iamVjdC5wcm9qZWN0SUQsIG5ld0lucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGVCYXJCdXR0b25zQXJyYXlcIikpKTtcbiAgICAgICAgYWRkaW5nRGl2LnJlbW92ZSgpO1xuICAgICAgICBwb3B1bGF0ZVByb2plY3QoYnV0dG9uTGlzdCwgYnV0dG9uT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxufVxuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBhZGRCdXR0b25Ub0xpc3QoKXtcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RBZGRlcicpO1xuICAgIGNvbnNvbGUubG9nKHRlbXAubGVuZ3RoKVxuICAgIGlmICh0ZW1wLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICBzaG93QWRkaW5nUHJvamVjdEJ1dHRvbigpO1xuICAgIH1cbn0pXG5cblxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGFkZEhvbWVET00gZnJvbSAnLi9ob21lLmpzJ1xuXG5sZXQgbWFpbkhvbWVEaXY9IGFkZEhvbWVET00oKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkhvbWVEaXYpOyIsImltcG9ydCBhZGRFbGVtZW50IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IGRlbGV0ZUxvYyBmcm9tICcuL2RlbGV0ZS5wbmcnXG5pbXBvcnQgY2xvc2VMb2MgZnJvbSAnLi9jbG9zZS1ib3gucG5nJ1xuaW1wb3J0IHsgY2lyY2xlQ2hlY2sgfSBmcm9tICcuL2RvbU1hbmlwLmpzJ1xuaW1wb3J0IHsgZGVjaWRlVGFza0JHIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgYmxhbmtjaXJjbGVsb2MgZnJvbSAnLi9jaGVja2JveC1ibGFuay1jaXJjbGUtb3V0bGluZS5wbmcnXG5pbXBvcnQgeyBhZGRUYXNrVWlFbGVzIH0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZU1lfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7IHJlc2V0VGFza3N9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IGNoZWNrTG9jIGZyb20gJy4vY2hlY2stYm9sZC0yLnBuZydcblxuXG5jb25zdCBvYmogPSB7XG4gICAgICAgIFwiaGlnaFwiIDogMSxcbiAgICAgICAgXCJtZWRpdW1cIiA6IDIsXG4gICAgICAgIFwibG93XCIgOiAzLFxuICAgICAgICBcInZlcnlsb3dcIjogNCxcbn1cblxubGV0IHRhc2tzQXJyYXk9IFtdO1xuZnVuY3Rpb24gYWRkT3B0aW9ucygpe1xuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBhZGRFbGVtZW50KCdvcHRpb24nLCAncHJpb3JpdHknLCBwcmlvcml0eUlucHV0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJIaWdoXCIpO1xuaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xubGV0IG1lZGl1bVByaW9yaXR5ID0gYWRkRWxlbWVudCgnb3B0aW9uJywgJ3ByaW9yaXR5JywgcHJpb3JpdHlJbnB1dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiTWVkaXVtXCIpO1xubWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbmxldCBsb3dQcmlvcml0eSA9IGFkZEVsZW1lbnQoJ29wdGlvbicsICdwcmlvcml0eScsIHByaW9yaXR5SW5wdXQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkxvd1wiKTtcbmxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG59XG5mdW5jdGlvbiBtYWtlSW52aXNpYmxlKCl7XG4gICAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eT0gXCJoaWRkZW5cIjtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1kaXZcIik7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZS1kaXZcIik7XG59XG5mdW5jdGlvbiBmaWxsQ2hlY2tlZE9yVW5jaGVja2VkKGVsZW1lbnQpe1xuICAgIGlmIChlbGVtZW50LnRhc2tQcmlvcml0eT09XCJ2ZXJ5bG93XCIpe1xuICAgICAgICBsZXQgbmV3VGFzaz0gYWRkRWxlbWVudCgnZGl2JywgJ25ld1Rhc2snLCB0YXNrc0FyZWEsIHVuZGVmaW5lZCwgXCJuZXdUYXNrXCIpO1xuICAgICAgICBsZXQgbmV3VGFza0NoZWNrSW1hZ2UgPSBhZGRFbGVtZW50KCdpbWcnLCAnbmV3VGFza0NoZWNrSW1hZ2UnLCBuZXdUYXNrLCBjaGVja0xvYyk7XG4gICAgICAgIG5ld1Rhc2tDaGVja0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVtZVwiKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiaXZlYmVlbmNoZWNrZWRcIik7XG4gICAgICAgIG5ld1Rhc2suc3R5bGUuYm9yZGVyPSBcIjEuNXB4IHNvbGlkIGdyYXlcIjtcbiAgICAgICAgbmV3VGFzay5zdHlsZS5jb2xvcj0gXCJncmF5XCI7XG4gICAgICAgIGNpcmNsZUNoZWNrKG5ld1Rhc2ssIGVsZW1lbnQsIG5ld1Rhc2tDaGVja0ltYWdlKTtcbiAgICAgICAgYWRkVGFza1VpRWxlcyhuZXdUYXNrLCBlbGVtZW50KTt9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICBsZXQgbmV3VGFzaz0gYWRkRWxlbWVudCgnZGl2JywgJ25ld1Rhc2snLCB0YXNrc0FyZWEsIHVuZGVmaW5lZCwgXCJuZXdUYXNrXCIpO1xuICAgICAgICBsZXQgbmV3VGFza0NoZWNrSW1hZ2UgPSBhZGRFbGVtZW50KCdpbWcnLCAnbmV3VGFza0NoZWNrSW1hZ2UnLCBuZXdUYXNrLCBibGFua2NpcmNsZWxvYyk7XG4gICAgICAgIGRlY2lkZVRhc2tCRyhuZXdUYXNrLCBlbGVtZW50KTtcbiAgICAgICAgY2lyY2xlQ2hlY2sobmV3VGFzaywgZWxlbWVudCwgbmV3VGFza0NoZWNrSW1hZ2UpO1xuICAgICAgICBhZGRUYXNrVWlFbGVzKG5ld1Rhc2ssIGVsZW1lbnQpO1xuICAgICAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1JlbGV2YW50VGFza3MocHJvak51bSl7XG4gICAgLy90YXNrc0FyZWEuaW5uZXJIVE1MPSBcIlwiO1xuICAgIGxldCBhPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NMb2NhbEFycmF5XCIpKTtcbiAgICB3aGlsZSAodGFza3NBcmVhLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0YXNrc0FyZWEucmVtb3ZlQ2hpbGQodGFza3NBcmVhLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGEuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBvYmpbYS50YXNrUHJpb3JpdHldLW9ialtiLnRhc2tQcmlvcml0eV19KTtcbiAgICBhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChwcm9qTnVtPT0wKXtcbiAgICAgICAgICAgIGZpbGxDaGVja2VkT3JVbmNoZWNrZWQoZWxlbWVudCk7XG4gICAgICAgIH1lbHNlIGlmIChwcm9qTnVtPT1lbGVtZW50LnRhc2tQcm9qZWN0KXtcbiAgICAgICAgICAgIGZpbGxDaGVja2VkT3JVbmNoZWNrZWQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgfSlcbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGNsZWFyVGV4dCgpe1xuICAgIG5hbWVJbnB1dC52YWx1ZT0gXCJcIjtcbiAgICBkYXRlSW5wdXQudmFsdWU9IFwiXCI7XG4gICAgZGVzY0lucHV0LnZhbHVlPSBcIlwiO1xufVxuY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSwgdGFza0Rlc2MsIHRhc2tQcm9qZWN0LCB0YXNrSUQsIHRhc2tDaGVja2VkKXtcbiAgICAgICAgdGhpcy50YXNrTmFtZT0gdGFza05hbWU7XG4gICAgICAgIHRoaXMudGFza0RhdGU9IHRhc2tEYXRlO1xuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eT0gdGFza1ByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tEZXNjPSB0YXNrRGVzYztcbiAgICAgICAgdGhpcy50YXNrUHJvamVjdD0gdGFza1Byb2plY3Q7XG4gICAgICAgIHRoaXMudGFza0lEPSB0YXNrSUQ7XG4gICAgICAgIHRoaXMudGFza0NoZWNrZWQ9IHRhc2tDaGVja2VkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGFzaGJvYXJkTGFiZWwoZWxlbWVudCl7XG4gIGRhc2hib2FyZFAudGV4dENvbnRlbnQ9IGNhcGl0YWxpemVGaXJzdExldHRlcihlbGVtZW50LnByb2plY3ROYW1lKStcIiBEYXNoYm9hcmRcIjtcbn1cbmxldCB0YXNrc0Rpdj0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzRGl2Jyk7XG5sZXQgZGFzaGJvYXJkUD0gYWRkRWxlbWVudCgncCcsICdkYXNoYm9hcmRQJywgdGFza3NEaXYpO1xubGV0IHRhc2tzTWVudUJhcj0gYWRkRWxlbWVudCgnZGl2JywgJ3Rhc2tzTWVudUJhcicsIHRhc2tzRGl2KTtcbmxldCBhZGRUYXNrQnV0dG9uPSBhZGRFbGVtZW50KCdidXR0b24nLCAnYWRkVGFza0J1dHRvbicsIHRhc2tzTWVudUJhciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdBZGQgYSB0YXNrIScpO1xubGV0IHJlbW92ZVByb2plY3RCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdyZW1vdmVQcm9qZWN0QnV0dG9uJywgdGFza3NNZW51QmFyLCBkZWxldGVMb2MpO1xubGV0IHRhc2tzQXJlYSA9IGFkZEVsZW1lbnQoJ2RpdicsICd0YXNrc0FyZWEnLCB0YXNrc0Rpdik7XG5cbmxldCBuZXdUYXNrRm9ybSA9IGFkZEVsZW1lbnQoJ2RpdicsICduZXdUYXNrRm9ybScsIHRhc2tzQXJlYSk7XG5cbmxldCBmb3JtQ2xvc2VCdXR0b249IGFkZEVsZW1lbnQoJ2ltZycsICdmb3JtQ2xvc2VCdXR0b24nLCBuZXdUYXNrRm9ybSwgY2xvc2VMb2MpO1xubGV0IGZvcm1FbGVtZW50cz0gYWRkRWxlbWVudCgnZGl2JywgJ2Zvcm1FbGVtZW50cycsIG5ld1Rhc2tGb3JtKTtcbmxldCBuYW1lTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQxJywgXCJUYXNrIG5hbWU6XCIpO1xubGV0IG5hbWVJbnB1dD0gYWRkRWxlbWVudCgnaW5wdXQnLCAnZm9ybUlucHV0JywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsIFwibmFtZVwiKTtcbm5hbWVJbnB1dC5wbGFjZWhvbGRlcj0gXCJOYW1lIHlvdXIgdGFza1wiO1xubGV0IGRhdGVMYWJlbD0gYWRkRWxlbWVudCgnbGFiZWwnLCAnZm9ybUxhYmVsJywgZm9ybUVsZW1lbnRzLCB1bmRlZmluZWQsICdpZDInLCBcIkZpbmlzaCBieTpcIik7XG5sZXQgZGF0ZUlucHV0PSBhZGRFbGVtZW50KCdpbnB1dCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJkYXRlXCIpO1xuZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuZGF0ZUlucHV0LnBsYWNlaG9sZGVyPSBcIkFkZCBhIGRhdGVcIjtcbmxldCBwcmlvcml0eUxhYmVsPSBhZGRFbGVtZW50KCdsYWJlbCcsICdmb3JtTGFiZWwnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgJ2lkMycsIFwiUHJpb3JpdHk6XCIpO1xubGV0IHByaW9yaXR5SW5wdXQ9IGFkZEVsZW1lbnQoJ3NlbGVjdCcsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJwcmlvcml0eVwiKTtcbmFkZE9wdGlvbnMoKTtcbmxldCBkZXNjTGFiZWw9IGFkZEVsZW1lbnQoJ2xhYmVsJywgJ2Zvcm1MYWJlbCcsIGZvcm1FbGVtZW50cywgdW5kZWZpbmVkLCAnaWQ0JywgXCJEZXNjcmlwdGlvbjpcIik7XG5sZXQgZGVzY0lucHV0PSBhZGRFbGVtZW50KCd0ZXh0YXJlYScsICdmb3JtSW5wdXQnLCBmb3JtRWxlbWVudHMsIHVuZGVmaW5lZCwgXCJkZXNjXCIpO1xuZGVzY0lucHV0LnBsYWNlaG9sZGVyPSBcIk9wdGlvbmFsIHRhc2sgZGVzY3JpcHRpb25cIjtcbmxldCBjcmVhdGVUYXNrQnV0dG9uPSBhZGRFbGVtZW50KCdidXR0b24nLCAnY3JlYXRlVGFza0J1dHRvbicsIG5ld1Rhc2tGb3JtLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ0FkZCEnKTtcbmNyZWF0ZVRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVUYXNrcyhkaXZUb1JldHVybil7XG4gICAgZGl2VG9SZXR1cm4uYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xufVxuXG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIHNob3dOZXdUYXNrRm9ybSgpe1xuICAgIG5ld1Rhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHk9IFwidmlzaWJsZVwiO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtZGl2XCIpO1xuICAgIC8vdGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLWRpdlwiKTtcbiAgICBjbGVhclRleHQoKTtcbiAgICAvLyB0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcInNob3dpbmctZm9ybVwiKTtcbn0pO1xuXG5mb3JtQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIG1ha2VJbnZpc2libGUoKXtcbiAgICBuZXdUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5PSBcImhpZGRlblwiO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLWRpdlwiKTtcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZW5hYmxlLWRpdlwiKTtcbiAgICB0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcImVuYWJsZS1kaXZcIik7XG4gICAgdGFza3NBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlLWRpdlwiKTtcbn0pO1xuZnVuY3Rpb24gcHVzaEludG9UYXNrc0xvY2FsQXJyYXkoZnVuY3Rhc2spe1xuICAgIGxldCB0YXNrID0gZnVuY3Rhc2s7XG4gICAgbGV0IGE9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0xvY2FsQXJyYXlcIikpO1xuICAgIGEucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzTG9jYWxBcnJheVwiLEpTT04uc3RyaW5naWZ5KGEpKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NMb2NhbEFycmF5XCIpKSk7XG59XG5jcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBtYWtlVGFzaygpe1xuICAgIGxldCBiPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xvY2FsSWQnKSk7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayhuYW1lSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSwgZGVzY0lucHV0LnZhbHVlLCBhY3RpdmVQcm9qZWN0LCBiLCBmYWxzZSk7XG4gICAgaWYgKHZhbGlkYXRlTWUodGFzaywgbmFtZUlucHV0LCBkYXRlSW5wdXQpKXtcbiAgICAgICAgYis9MTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMb2NhbElkJywgYik7XG4gICAgICAgIHRhc2tzQXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgcHVzaEludG9UYXNrc0xvY2FsQXJyYXkodGFzayk7XG4gICAgICAgIG1ha2VJbnZpc2libGUoKTtcbiAgICAgICAgbGV0IHRlbXA9IHNob3dSZWxldmFudFRhc2tzKGFjdGl2ZVByb2plY3QpO1xuICAgICAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlbWVcIik7XG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VtZVwiKTtcbn1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIH0pO1xuXG4gICAgZXhwb3J0IHt0YXNrc0FycmF5fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=