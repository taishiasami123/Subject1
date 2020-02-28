const humberger = document.getElementById("humberger");
const line = document.getElementsByClassName("line");
const item = document.getElementsByClassName("header-nav-list-item");

humberger.onclick = () => {
    for (let i = 0; i < line.length; i++) {
        line[i].classList.toggle("active");
    };
    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle("open");
    };
};