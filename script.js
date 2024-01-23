const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") { // when if when user don't add any input which means, inputBox.value is empty
    //when user click the add button without any value this alert msg will show.
    alert("You must write a task");
  } else {
    //if user input the value and click the add button below code create the list container
    let li = document.createElement("li"); //It's like creating a new line on your paper for a new task.

    //then it will add the task to the list
    li.innerHTML = inputBox.value; //It's like writing your task on the new line you created. The inputBox.value is what you typed in the input box, and you're putting that on your list.

    //then it will show the task in the to do list container
    listContainer.appendChild(li); //It's like sticking the piece of paper with your new task onto your to-do list. Now, your list has one more task on it!

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); // after the task that cross mark will add
  }
  inputBox.value = ""; //Because of it , once we add one task , that task automatically go from the input field
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      listContainer.addEventListener('click',function(e) {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    
}
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Because of it, if we refresh that list still appear, don't vanish, it's store that data in local
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();// Because of it, if we refresh that list still appear, don't vanish


// Finally well done Gayu
