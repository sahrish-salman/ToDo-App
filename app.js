var mainList = document.getElementById("mainList");
var input = document.getElementById("inp");
 
function addElem() {
    var li = document.createElement("LI");
    var b = document.createTextNode(inp.value);
    li.appendChild(b);

    var delBtn = document.createElement("BUTTON");
    var delTxt = document.createTextNode("Delete");
    delBtn.appendChild(delTxt);
    delBtn.setAttribute("class", "butn1");
    delBtn.setAttribute("onclick", "del(this)");
    li.appendChild(delBtn);

    var editBtn = document.createElement("BUTTON");
    var editTxt = document.createTextNode("Edit");
    editBtn.appendChild(editTxt);
    editBtn.setAttribute("class", "butn2");
    editBtn.setAttribute("onclick", "edit(this)");
    li.appendChild(editBtn);

    mainList.appendChild(li);
    console.log(li);
}

function del(element) {
    element.parentNode.remove();
}

function edit(element) {
    element.parentNode.firstChild.nodeValue = prompt();
}

function deleteAll() {
    mainList.innerHTML ="";
    inp.value = "";
}
