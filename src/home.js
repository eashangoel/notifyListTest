import logoLoc from './logo.png'
import addElement from './domManip.js';
import plusloc from './plus-thick-2.png'

let numButton = 0;
let sideBarButtonsArray= [];
let divToReturn = addElement('div', 'mainHomeDiv');
let headerDiv= addElement('div', 'headerDiv', divToReturn);
let sideBarDiv= addElement('div', 'sidebarDiv', divToReturn);
let logo= addElement('img', 'mainLogo', headerDiv, logoLoc);
let listsHeaderDiv= addElement('div', 'listsHeaderDiv', sideBarDiv)
let buttonList = addElement('div', 'button-list', sideBarDiv);
let allButton= addElement('button', 'buttonsInList', buttonList, undefined, numButton++, "All");
let arr= [];
sideBarButtonsArray.push(arr);
let addButtonDiv= addElement('div', 'addButtonDiv', sideBarDiv)
let addButton= addElement('img', 'addButton', addButtonDiv, plusloc);
let listsHeader = addElement('p', 'listsHeader', listsHeaderDiv);
listsHeader.innerHTML= "Lists";


export default function addHomeDOM(){
    return divToReturn;
}
function showAddingProjectButton(){
    let addingDiv= addElement('div', 'addingProjectDiv', buttonList);
    let newInput = addElement('input', 'addingProjectInput', addingDiv);
    let yesButton = addElement('button', 'addingProjectButton', addingDiv, undefined, undefined, "Add");
    let noButton = addElement('button', 'addingProjectButton', addingDiv, undefined, undefined, "Cancel");
}

// addButton.addEventListener('click', function addButtonToList(){
//     let newButton = addElement('button', 'buttonsInList', buttonList, undefined, numButton++, "new");
//     let arr =[];
//     sideBarButtonsArray.push(arr);
//     showAddingProjectButton();
// })

