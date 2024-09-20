let sumHome = document.getElementById("homesum")

let sumGuest = document.getElementById("guestsum")

scoreHome = 0
scoreGuest = 0

function home1(){
   scoreHome += 1
    sumHome.textContent = scoreHome
    
}
function home2(){
    scoreHome += 2
    sumHome.textContent = scoreHome
}
function home3(){
    scoreHome += 3
    sumHome.textContent = scoreHome
}
function guest1(){
    scoreGuest += 1
    sumGuest.textContent = scoreGuest
}
function guest2(){
    scoreGuest += 2
    sumGuest.textContent = scoreGuest
}

function guest3(){
    scoreGuest += 3
    sumGuest.textContent = scoreGuest
}