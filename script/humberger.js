const humberger = document.getElementById("humberger");
const line = document.getElementsByClassName("line");
const li = document.getElementsByClassName("header-nav-list-li")
const item = document.getElementsByClassName("header-nav-list-item");

humberger.onclick = () => {
    for (let i = 0; i < line.length; i++) {
        line[i].classList.toggle("active");
        li[i].classList.toggle("open")
        item[i].classList.toggle("open");
    };
};