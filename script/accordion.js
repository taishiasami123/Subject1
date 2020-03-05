const checkboxes = Array.from(document.getElementsByClassName("el_checkbox"));
const texts = document.getElementsByClassName("bl_qanda_conts_txt");
const arrows = document.getElementsByClassName("fas");

checkboxes.forEach(check => {
    check.addEventListener("click", e => {
        const index = checkboxes.findIndex(check => check === e.target);
        texts[index].classList.toggle("open");
        arrows[index].classList.toggle("open");
    });
});