let p = document.getElementsByTagName("p");
let box = document.getElementsByClassName("box");
let item = null;
for (let i of p) {
  i.addEventListener("dragstart", dragStart);
  i.addEventListener("dragend", dragEnd);
}
function dragStart() {
  item = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}
function dragEnd() {
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  item = null;
}
for (let j of box) {
  j.addEventListener("dragenter", dragEnter);
  j.addEventListener("dragover", dragOver);
  j.addEventListener("dragleave", dragLeave);
  j.addEventListener("drop", drop);
}
function drop() {
  this.append(item);
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
