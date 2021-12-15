const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const deerBtn = document.getElementById("deer")

christmasBtn.addEventListener("click", function() {
    body.classList.remove("snow");
    body.classList.remove("deer");
    body.classList.add("christmas");
    greeting.innerHTML = `🎅 HO HO HO! Merry Christmas! 🎄`
});

snowBtn.addEventListener("click", function () {
    body.classList.remove("christmas");
    body.classList.remove("deer");
    body.classList.add("snow");
    greeting.innerHTML = `❄️ Let it SNOW! ☃️`
});

deerBtn.addEventListener("click", function () {
    body.classList.remove("christmas");
    body.classList.remove("snow");
    body.classList.add("deer");
    greeting.innerHTML = `✨ May your day be merry and BRIGHT 🚨`
});