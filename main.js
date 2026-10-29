
let unPurchased = []
let purchased = []


function addButton(){

    let inputField = document.getElementById("add");
    let text = inputField.value.trim();
    console.log(text)
    if (text === "") return;
    let li = document.createElement("li");
    li.innerText = text;
    li.classList.add("item");
    console.log(li)
    unPurchased.push(li)
    li.addEventListener("click", function() {
    li.classList.toggle("completed");
    purchased.push(li)
    unPurchased.splice(li,1)
 let header = document.getElementsByClassName("headerTwo")[0];

    if (header) {
        
        header.classList.remove("flash", "red-flash");
        void header.offsetWidth;
        if (li.classList.contains("completed")) {
            header.classList.add("red-flash");
        } else {
            header.classList.add("flash");
        }
    }
    });
    
    let listy = document.getElementsByClassName("listy")
    console.log(listy)
    listy[0].appendChild(li);
    inputField.value = "";
    let header = document.getElementsByClassName("headerTwo")[0];
    if (header) {
        header.classList.remove("flash");
        void header.offsetWidth;
        header.classList.add("flash");
    }

}


function unPurchasedListy() {
    let listy = document.querySelector('.listy');
    let purchasedList = document.querySelector('.purchasedThings');

    // Refresh the purchased area using completed items
    purchasedList.innerHTML = '';

    let completedItems = listy.querySelectorAll('.item.completed');

    completedItems.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item.textContent.trim();
        purchasedList.appendChild(li);
    });

    // Show both lists
    listy.style.display = 'block';
    purchasedList.style.display = 'block';
}


function purchasedListy() {
    let listy = document.querySelector('.listy');
    let purchasedList = document.querySelector('.purchasedThings');

    // Hide completed items in the original list
    listy.querySelectorAll('.item.completed').forEach(function(item) {
        item.style.display = 'none';
    });

    // Show only uncompleted items
    listy.querySelectorAll('.item:not(.completed)').forEach(function(item) {
        item.style.display = '';
    });

    // Show the unpurchased list and hide the purchased area
    listy.style.display = 'block';
    purchasedList.style.display = 'none';
}