
const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", ()=>{
  hundlMenu();
})

function hundlMenu(){
menu.classList.taggle("is-active")
action.classList.taggle("is-active")
}