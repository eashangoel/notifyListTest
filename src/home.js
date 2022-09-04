import logoLoc from './logo.png'
import addElement from './domManip.js';
import { putButtonInLocalStorage } from './domManip.js';
import plusloc from './plus-thick-2.png';
import { populateProjects } from './domManip.js';
import { resetProjects } from './domManip.js'
import populateTasks from './tasks.js'

let activeProject=0;
let backEndSideBarButtonsArray= [];
let divToReturn = addElement('div', 'mainHomeDiv');
let headerDiv= addElement('div', 'headerDiv', divToReturn);
let sideBarDiv= addElement('div', 'sidebarDiv', divToReturn);
let logo= addElement('img', 'mainLogo', headerDiv, logoLoc);
let listsHeaderDiv= addElement('div', 'listsHeaderDiv', sideBarDiv)
let buttonList = addElement('div', 'button-list', sideBarDiv);
//let sideBarButtonsArray= [];
//localStorage.setItem("sideBarButtonsArray",JSON.stringify(sideBarButtonsArray));
// localStorage.setItem('sideBarButtonsId',0);
//console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
let addButtonDiv= addElement('div', 'addButtonDiv', sideBarDiv)
let addButton= addElement('img', 'addButton', addButtonDiv, plusloc);
let listsHeader = addElement('p', 'listsHeader', listsHeaderDiv);
listsHeader.innerHTML= "Lists";


export default function addHomeDOM(){
    //resetProjects();
    activeProject= populateProjects(buttonList);
    populateTasks(divToReturn);
    return divToReturn;
}
function showAddingProjectButton(){
    let addingDiv= addElement('div', 'projectAdder', buttonList);
    let newInput = addElement('input', 'addingProjectInput', addingDiv);
    let yesButton = addElement('button', 'addingProjectButton', addingDiv, undefined, undefined, 'Add');
    let noButton = addElement('button', 'addingProjectButton', addingDiv, undefined, undefined, 'Cancel');

    noButton.addEventListener('click', (event)=>{
        addingDiv.remove();
    })
    
    yesButton.addEventListener('click', (event)=>{
        if (newInput.value==""){
            newInput.placeholder= "Please name your project"
        }
        else{
        let buttonObject = putButtonInLocalStorage(newInput.value);
        backEndSideBarButtonsArray.push(buttonObject);
        let newButton = addElement('button', 'buttonsInList', buttonList, undefined, buttonObject.projectID, newInput.value);
        console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
        addingDiv.remove();
        newButton.addEventListener("click", function updateActiveProj(){
            activeProject = buttonObject.projectID;
        })
        }
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



