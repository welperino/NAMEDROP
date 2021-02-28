x = document.getElementById("text");
let btn = document.getElementById("button");


btn.addEventListener("click", function(){
    var boxNode = document.createElement("div");
    boxNode.classList.add('box');
    var boxContent = document.createTextNode(x.value);
    boxNode.appendChild(boxContent);
    document.getElementById("gridContainer").appendChild(boxNode)
    document.getElementById("textForm").reset();
});



document.getElementById("text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
        
    }
});

func