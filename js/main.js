window.addEventListener("load", () => {
    truncateCardTitle();
    setTimeout(()=>{
        document.body.classList.remove("preload"); 
    }, 1000)

})

function truncateCardTitle() {
    let cardList = document.getElementsByClassName('card-title');
    for (let i = 0; i < cardList.length; i++) {
        let text = cardList[i].innerHTML;
        let newText = truncateString(text, 4);
        cardList[i].innerHTML = newText;
    }
}
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice((0, num)) + "...";
    } else {
        return str;
    }
}

let sidebarMini = document.querySelector(".sidebarMini");
let buttonSidebar = document.querySelector(".sidebarMini__button");
let checkBox = document.getElementById("checkbox");

let body = document.querySelector("body");
buttonSidebar.addEventListener("click", () => {
    sidebarMini.classList.toggle("isOpen");
})
checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
        body.classList.add("darkMode");
        
    } else {
        body.classList.remove("darkMode");
    }
}); 






