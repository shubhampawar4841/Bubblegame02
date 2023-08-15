var score = 0;
var timer = 30;
var hitrun = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i < 261; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter = clutter + `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hitrun = Math.floor(Math.random() * 10); // Use the global hitrun variable
    document.querySelector("#hitval").textContent = hitrun;
}

function increaseScore() {
    score = score + 10;
    document.querySelector("#elem3").textContent = score;
    console.log(score);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickedContent = dets.target.textContent;
    var clickedNum = Number(clickedContent);

    if (!isNaN(clickedNum) && clickedNum === hitrun) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runtimer();
 makeBubble();
 getNewHit();
