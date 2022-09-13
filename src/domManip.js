import checkLoc from './check-bold-2.png'
import blankcircleloc from './checkbox-blank-circle-outline.png'
import minusLoc from './minus-circle.png'
import { updateDashboardLabel } from './tasks.js'
import { showRelevantTasks } from './tasks.js'

let activeProject =0;
class newButton{
    constructor(projectName, projectID){
        this.projectName= projectName;
        this.projectID= projectID;
    }
}

export default function addElement(type, classname, addTo=null, srcEle= null, id=null, text=null){
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

export function putButtonInLocalStorage(name){
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

export function populateProjects(buttonList){
    let a= JSON.parse(localStorage.getItem("sideBarButtonsArray"));
    a.forEach(element => {
        if (element.projectID==0){
            updateDashboardLabel(element);
        }
        let newButton = addElement('button', 'buttonsInList', buttonList, undefined, element.projectID, element.projectName);
        newButton.addEventListener("click", function updateActiveProj(){
            activeProject= element.projectID;
            updateDashboardLabel(element);
            showRelevantTasks(activeProject);
        })
    });
    console.log(buttonList.lastChild.id);
}
export function populateProject(buttonList, buttonObject){
    let newButton = addElement('button', 'buttonsInList', buttonList, undefined, buttonObject.projectID, buttonObject.projectName);
    newButton.addEventListener("click", function updateActiveProj(){
            activeProject= buttonObject.projectID;
            updateDashboardLabel(newButton);
            showRelevantTasks(activeProject);
    })
    };


export function resetProjects(){
    let sideBarButtonsArray= [];
    localStorage.setItem("sideBarButtonsArray",JSON.stringify(sideBarButtonsArray));
    localStorage.setItem('sideBarButtonsId',0);
    let a = JSON.parse(localStorage.getItem("sideBarButtonsArray"));
    let nextButton = new newButton("All", 0)
    a[0]= nextButton;
    localStorage.setItem("sideBarButtonsArray",JSON.stringify(a));
    console.log(JSON.parse(localStorage.getItem("sideBarButtonsArray")));
}

export function resetTasks(){
    let tasksLocalArray= [];
    localStorage.setItem("tasksLocalArray",JSON.stringify(tasksLocalArray));
    localStorage.setItem('taskLocalId',0);
}

export function circleCheck(funcnewTask, functask, funcnewTaskCheckImage){
    let task = functask;
    let status= "unchecked";
    let newTask= funcnewTask;
    let newTaskCheckImage= funcnewTaskCheckImage;
    let minusButtonDiv= addElement('div', 'minusButtonDiv', undefined);
    let minusButton = addElement('img', 'minusButton', minusButtonDiv, minusLoc);
    let descP= addElement('p', 'descP', undefined, undefined, undefined, task.taskDesc);  
    newTaskCheckImage.addEventListener("mouseover", function changeIcon(){
        newTaskCheckImage.src= checkLoc;
        newTaskCheckImage.classList.add("rotateme");
    })
    newTaskCheckImage.addEventListener("mouseleave", function changeIcon(){
        if (status=="unchecked"){
        newTaskCheckImage.src= blankcircleloc;
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
        newTaskCheckImage.src= checkLoc;
        let a= JSON.parse(localStorage.getItem("tasksLocalArray"));
        for (let i=0; i<a.length; i++){
            if(a[i].taskID ==task.taskID){
                a[i].taskPriority= "verylow";
            }
        }
        localStorage.setItem("tasksLocalArray",JSON.stringify(a));
        showRelevantTasks(activeProject);
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
        showRelevantTasks(activeProject);
    })
}

export function decideTaskBG(newTask, task){
    switch(task.taskPriority){
        case 'high': newTask.style.border= "1.5px solid #ff6961"; newTask.style.backgroundColor= "#ffdbd9"; break;
        case 'medium': newTask.style.border= "1.5px solid #c4bc00"; newTask.style.backgroundColor= "#fffdcd"; break;
        case 'low': newTask.style.border= "1.5px solid #77DD77"; newTask.style.backgroundColor= "#def7de"; break;
        default : break;
    }
}

export function addTaskUiEles(funcnewTask, functask){
    let task = functask;
    let newTask= funcnewTask;
    let taskNameLabel= addElement('p', 'taskNameLabel', newTask, undefined, undefined, task.taskName);
    let taskDateLabel= addElement('p', 'taskDateLabel', newTask, undefined, undefined, task.taskDate);
}

export function validateMe(functask, funcNameInput, funcDateInput){
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

export {activeProject};