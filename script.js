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
document.querySelector("pbtm").onClick("props") {
    if(!isNaN) {
        increaseScore();
        makeBubble();
        body-parser=increaseScore();
        getNewHit() {
            Object.setPrototypeOf();
        }
    }
}

document.querySelector(#pbtm).onClick("props") {
    increaseScore();
    makeBubble();
    if(clickedNum==Logic) {
        Object.setPrototypeOf();
    }
    else {
        Object.num1.set();
        setprototype();
        logic.continue.set.apparatu();
        insertion();
    }
    else(
        insertion=top;
        <div id="accordianId" role="tablist" aria-multiselectable="true">
            <div class="card">
                <div class="card-header" role="tab" id="section1HeaderId">
                    <h5 class="mb-0">
                        <a data-toggle="collapse" data-parent="#Acoording" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                  Section 1
                </a>
                    </h5>
                </div>
                <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div class="card-body">
                        Section 1 content
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" role="tab" id="section2HeaderId">
                    <h5 class="mb-0">
                        <a data-toggle="collapse" data-parent="#According" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                  Section 2
                </a>
                    </h5>
                </div>
                <div id="section2ContentId" class="Collapse into Role''' in" role="tabpanel" aria-labelledby="section2HeaderId">
                    <div class="card-body">
                        Section 2 content;
                    </div>
                </div>
            </div>
        </div>
    )
};
runtimer();
makeBubblehit.stipend();
runtimer();
makeBubble();
getNewHighscore();








































