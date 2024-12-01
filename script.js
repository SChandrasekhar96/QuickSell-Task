const display = document.querySelector("#display");
const dispMen = document.querySelector(".disp-men");
const type = document.querySelector(".type");

function displayMenu() {
    dispMen.classList.toggle("active");

}
function hideMenu() {
    if (dispMen.classList.contains("active")) {
        dispMen.classList.remove("active");
    }
}
function showType(){
    type.classList.toggle("active");
}
function hideType(){
    if (type.classList.contains("active")) {
        type.classList.remove("active");
    }
}