let homepointsEl = document.getElementById("home-points-el")
let guestpointsEl = document.getElementById("guest-points-el")

let counthome = 0
let countguest = 0


function plus1home() {
    counthome = counthome + 1
    homepointsEl.textContent = counthome;
    highlightleader()
}

function plus2home() {
    counthome = counthome + 2
    homepointsEl.textContent = counthome;
    highlightleader()
}

function plus3home() {
    counthome = counthome + 3
    homepointsEl.textContent = counthome;
}

function plus1guest() {
    countguest = countguest + 1
    guestpointsEl.textContent = countguest;
    highlightleader()
}

function plus2guest() {
    countguest = countguest + 2
    guestpointsEl.textContent = countguest;
    highlightleader()
}

function plus3guest() {
    countguest = countguest + 3
    guestpointsEl.textContent = countguest;
    highlightleader()
}


// Highlight the leader: 
function highlightleader() {
    if (countguest > counthome) {
        homepointsEl.style.fontWeight = "normal";
        homepointsEl.style.textDecoration = "none"
        guestpointsEl.style.fontWeight = "bolder";
        guestpointsEl.style.textDecoration = "underline"
    }
    else if (counthome > countguest)
    {
        homepointsEl.style.fontWeight = "bolder";
        homepointsEl.style.textDecoration = "underline"
        guestpointsEl.style.fontWeight = "normal";
        guestpointsEl.style.textDecoration = "none"
    }
    else {
        homepointsEl.style.fontWeight = "normal";
        homepointsEl.style.textDecoration = "none"
        guestpointsEl.style.fontWeight = "normal";
        guestpointsEl.style.textDecoration = "none"
    }
}

function newgame() {

    countguest = 0
    counthome = 0
    homepointsEl.textContent = counthome;
    guestpointsEl.textContent = countguest;
    highlightleader()
}
