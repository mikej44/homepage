let button = document.querySelector(".js-buttonInfo");
let workInfo = document.querySelector(".workInfo");
let buttonPerf = document.querySelector(".js-buttonPerform")
let performLink = document.querySelector(".main__Link")

button.addEventListener("click", () => {
    workInfo.classList.toggle("ukryty")

    if (button.innerText === "Ukryj dane zawodowe") {
        button.innerText = "Pokaż dane zawodowe";
    }
    else { button.innerText = "Ukryj dane zawodowe"; }
})

buttonPerf.addEventListener("click", () => {
    performLink.classList.toggle("js-main__Link--Hide")

    buttonPerf.innerText === "Pokaż link do występu" ? buttonPerf.innerText = "Ukryj link do występu" : buttonPerf.innerText = "Pokaż link do występu";
})