const humberger = document.getElementById("humberger");
const line = document.getElementsByClassName("el_line");
const li = document.getElementsByClassName("el_headerNav_list_inner")
const item = document.getElementsByClassName("el_headerNav_list_item");

humberger.onclick = () => {
    for (let i = 0; i < line.length; i++) {
        line[i].classList.toggle("active");
        li[i].classList.toggle("open")
        item[i].classList.toggle("open");
    };
};