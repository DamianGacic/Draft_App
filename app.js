const items = document.querySelectorAll(".items");
const textbox = document.getElementById("searchbar");

let item;
let entered;
const deleteElement = (e, item) => {
  item.parentElement.removeChild(item);
};

let counter = 0;

function addNewItem(parent, value) {
  if (!value) return;
  const newItem = document.createElement("div");
  newItem.setAttribute("draggable", true);
  newItem.classList.add("item");
  //newItem.setAttribute("id", value);
  newItem.textContent = value;
  parent.appendChild(newItem);

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "delete.png");
  deleteBtn.setAttribute("draggable", false);
  deleteBtn.classList.add("delete-icon");
  newItem.setAttribute("id", value);
  deleteBtn.addEventListener("click", (e) => deleteElement(e, newItem));
  newItem.appendChild(deleteBtn);
  if(counter > 9)
  document.getElementById("outb1").innerHTML = document.getElementById(value).textContent;
  else if(counter == 0)
  document.getElementById("outb1").innerHTML = document.getElementById(value).textContent;
  else if(counter == 1)
  document.getElementById("outr1").innerHTML = document.getElementById(value).textContent;
  else if(counter == 2)
  document.getElementById("outr2").innerHTML = document.getElementById(value).textContent;
  else if(counter == 3)
  document.getElementById("outb2").innerHTML = document.getElementById(value).textContent;
  else if(counter == 4)
  document.getElementById("outb3").innerHTML = document.getElementById(value).textContent;
  else if(counter == 5)
  document.getElementById("outr3").innerHTML = document.getElementById(value).textContent;
  else if(counter == 6)
  document.getElementById("outr4").innerHTML = document.getElementById(value).textContent;
  else if(counter == 7)
  document.getElementById("outb4").innerHTML = document.getElementById(value).textContent;
  else if(counter == 8)
  document.getElementById("outb5").innerHTML = document.getElementById(value).textContent;
  else if(counter == 9)
  document.getElementById("outr5").innerHTML = document.getElementById(value).textContent;
}

textbox.addEventListener("keydown", (event) => {
  if (event.key === " ")  { 
  event.preventDefault()
  if(counter > 9)
  addNewItem(items[0], textbox.value);
  else if(counter == 0)
  addNewItem(items[0], textbox.value);
  else if(counter == 1)
  addNewItem(items[1], textbox.value);
  else if(counter == 2)
  addNewItem(items[3], textbox.value);
  else if(counter == 3)
  addNewItem(items[2], textbox.value);
  else if(counter == 4)
  addNewItem(items[4], textbox.value);
  else if(counter == 5)
  addNewItem(items[5], textbox.value);
  else if(counter == 6)
  addNewItem(items[7], textbox.value);
  else if(counter == 7)
  addNewItem(items[6], textbox.value);
  else if(counter == 8)
  addNewItem(items[8], textbox.value);
  else if(counter == 9)
  addNewItem(items[9], textbox.value);
  testvar = textbox.value;
  counter++;
  document.getElementById("counter").textContent = counter;
  //if (items[0] != 0)
  //addNewItem(items[0], textbox.value);
  textbox.value = "";
}}
);
document.addEventListener("keydown", (event) => {
  if (event.key === "5"){
  event.preventDefault()
  counter--;
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "7"){
  event.preventDefault()
  if (document.getElementById("outb1").innerHTML == "");
  let varb1 = document.getElementById("outb1").innerHTML;
  }
});
//using event delegation here to minimize multiple listener attachments to each child
for (const i of items) {
  i.addEventListener("dragstart", dragStart);
  i.addEventListener("drop", drop);
  i.addEventListener("dragover", dragOver);
  i.addEventListener("dragenter", dragEnter);
}

//stores dragged item
function dragStart(e) {
  item = e.target;
}

//move down other items when dragged item is dragged over them to show user where the item will be dropped
function dragOver(e) {
  e.preventDefault();

  if (this != e.target && e.target != item) {
    // console.log("e.target", e.target.attributes.draggable == false);
    if (
      !e.target.classList.contains("move-down") &&
      e.target.attributes.draggable == true
    ) {
      console.log("e.target", e.target);
      e.target.className += " move-down";
    }
  }
}

//removes move-down animation
function dragEnter(e) {
  e.preventDefault();
  if (this != e.target) {
    if (
      entered &&
      entered != e.target &&
      e.target.attributes.draggable == true
    ) {
      entered.className = "item";
    }
    entered = e.target;
  }
}

//drops item to specified position
function drop() 
{
  item.className = "item";
  entered.className = "item";
  this.insertBefore(
    item,
    this.children[Array.prototype.indexOf.call(this.children, entered)]
  );

  const newTasks = Array.from(items[0].children).map((item) => {
    console.log("item", item.innerText);
    return item.innerText;
  });
  const goingTasks = Array.from(items[1].children).map((item) => {
    console.log("item", item.innerText);
    return item.innerText;
  });
  const doneTasks = Array.from(items[2].children).map((item) => {
    console.log("item", item.innerText);
    return item.innerText;
  });

  const storageObj = {
    newTasks,
    goingTasks,
    doneTasks,
  };
  localStorage.setItem("DragNDropTasks", JSON.stringify(storageObj));
  //item.setAttribute("class", document.getElementById(item.id).parentElement.id);
  item.setAttribute("id", "i" + document.getElementById(item.id).parentElement.id);

  if (document.getElementById('ib1') !=null)
    document.getElementById("outb1").innerHTML = document.getElementById("ib1").textContent;
  if (document.getElementById('ir1') !=null)
    document.getElementById("outr1").innerHTML = document.getElementById("ir1").textContent;  
  if (document.getElementById('ib2') !=null)
    document.getElementById("outb2").innerHTML = document.getElementById("ib2").textContent; 
  if (document.getElementById('ir2') !=null)
    document.getElementById("outr2").innerHTML = document.getElementById("ir2").textContent;
  if (document.getElementById('ib3') !=null)
    document.getElementById("outb3").innerHTML = document.getElementById("ib3").textContent;
  if (document.getElementById('ir3') !=null)
    document.getElementById("outr3").innerHTML = document.getElementById("ir3").textContent;
  if (document.getElementById('ib4') !=null)
    document.getElementById("outb4").innerHTML = document.getElementById("ib4").textContent;
  if (document.getElementById('ir4') !=null)
    document.getElementById("outr4").innerHTML = document.getElementById("ir4").textContent;
  if (document.getElementById('ib5') !=null)
    document.getElementById("outb5").innerHTML = document.getElementById("ib5").textContent;
  if (document.getElementById('ir5') !=null)
    document.getElementById("outr5").innerHTML = document.getElementById("ir5").textContent;
  
}
