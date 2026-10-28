



function addButton(){

    let inputField = document.getElementById("add");
    let text = inputField.value.trim();
    console.log(text)
    if (text === "") return;
    let li = document.createElement("li");
    li.innerText = text;
    li.classList.add("item");
    console.log(li)
    li.addEventListener("click", function() {
    li.classList.toggle("purchased");
    });
    
    let listy = document.getElementsByClassName("listy")
    console.log(listy)
    listy[0].appendChild(li);
    inputField.value = "";
}

function toggleStrikethrough() {
  const element = document.getElementById("my-text");
  
  element.classList.toggle("strikethrough");
}