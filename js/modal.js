const body = document.body;
const btns = document.querySelectorAll("[data-target]");
const closeBtns = document.querySelectorAll(".modal-close");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add("modal-show");
        document.body.classList.add("no-scroll");
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove("modal-show");
        document.body.classList.remove("no-scroll");
    });
});

// body.addEventListener("click", function bodyListner(e) {
//     if (e.target.class === ("show")) {
//         body.classList.add("no-scroll");
//         toggleViewportScrolling(true);
//     }
// })

