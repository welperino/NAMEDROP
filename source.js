var x = document.getElementById("text");
var btn = document.getElementById("button");

//TAKES INPUT VALUE AND PUT IT IN THE GRID
btn.addEventListener("click", function () {
  var para = document.createElement("P");
  var boxContent = document.createTextNode(x.value);
  var boxNode = document.createElement("div");
  var button = document.createElement("BUTTON");
  boxNode.classList.add("box");
  button.classList.add("delButton");
  button.innerHTML = "X";
  boxNode.appendChild(button);
  para.appendChild(boxContent);
  boxNode.appendChild(para);
  document.getElementById("gridContainer").appendChild(boxNode);
  document.getElementById("textForm").reset();
});

//DEFINE INPUT
var input = document.getElementById("text");

//USES ENTER TO SUBMIT TEXT TO THE GRID
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});
