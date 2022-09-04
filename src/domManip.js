import checkLoc from './check-bold-2.png'
import blankcircleloc from './checkbox-blank-circle-outline.png'

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
        let newButton = addElement('button', 'buttonsInList', buttonList, undefined, element.projectID, element.projectName);
        newButton.addEventListener("click", function updateActiveProj(){
            activeProject= element.projectID;
        })
    });
}

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

export function circleCheck(funcnewTask, functask, funcnewTaskCheckImage){
    let task = functask;
    let newTask= funcnewTask;
    let newTaskCheckImage= funcnewTaskCheckImage;
    newTask.addEventListener("mouseover", function changeIcon(){
        newTaskCheckImage.src= checkLoc;
        newTaskCheckImage.classList.add("rotateme");
    })
    newTask.addEventListener("mouseleave", function changeIcon(){
        newTaskCheckImage.src= blankcircleloc;
        newTaskCheckImage.classList.remove("rotateme");
        newTask.style.height= "10%";
    })  
    newTask.addEventListener("click", function logMeeee(){
        console.log("Im the task project "+ task.taskProject);
        newTask.style.height= "8rem";
        
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