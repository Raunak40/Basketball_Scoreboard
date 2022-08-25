let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeRun = 0
let guestRun = 0
function increment1(){
    homeRun += 1
    homeEl.textContent = homeRun
}
function increment2(){
    homeRun = homeRun + 2
    homeEl.textContent = homeRun
}function increment3(){
    homeRun = homeRun + 3
    homeEl.textContent = homeRun
}
function increament1(){
    guestRun += 1
    guestEl.textContent = guestRun
}
function increament2(){
    guestRun += 2
    guestEl.textContent = guestRun
}
function increament3(){
    guestRun += 3
    guestEl.textContent = guestRun
}