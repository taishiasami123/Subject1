const checkboxes = Array.from(document.getElementsByClassName("checkbox"));
const texts = document.getElementsByClassName("qa-question-contents-text");
const arrows = document.getElementsByClassName("fas");

checkboxes.forEach(check => {
    check.addEventListener("click", e => {
        const index = checkboxes.findIndex(check => check === e.target);
        texts[index].classList.toggle("open");
        arrows[index].classList.toggle("open");
    });
});