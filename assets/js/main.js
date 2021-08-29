const deckCards = [
"0.jpg", 
"0.jpg", 
"1.jpg",
"1.jpg",
"2.jpg",
"2.jpg",
"3.jpg",
"3.jpg",
"4.jpg",
"4.jpg",
"5.jpg",
"5.jpg",
"6.jpg",
"6.jpg",
"7.jpg",
"7.jpg",
"8.jpg",
"8.jpg",
"9.jpg",
"9.jpg",
"10.jpg",
"10.jpg", 
"11.jpg", 
"11.jpg",
"12.jpg",
"12.jpg",
"13.jpg",
"13.jpg",
"14.jpg",
"14.jpg",
"15.jpg",
"15.jpg",
"16.jpg",
"16.jpg",
"17.jpg",
"17.jpg",
"18.jpg",
"18.jpg",
"19.jpg",
"19.jpg",
];

const goodGiff =[
"g1.gif",
"g2.gif",
"g3.gif",
"g4.gif",
"g5.gif",
"g6.gif",
"g7.gif",
"g8.gif",
"g9.gif",
"g10.gif",
"g11.gif",
];

const badGiff =[
"b1.gif",
"b2.gif",
"b3.gif",
"b4.gif",
"b5.gif",
"b6.gif",
"b7.gif",
"b8.gif",
];

const goodE = [
"Awesome",
"Excellent",
"How lucky",
"Oh, that’s great",
"Thank God",
"Nice",
"Not Bad",
"Wow",
"Kinh Day",
"Ghe",
"Ban la nhat",
];

const badE = [
  "Noob",
  "Loser",
  "idiot",
  "Ngu",
  "Non",
  "spoony",
  "Very Bad",
  "Dan Don",
  "You idiot",
  "Don't be such an ass",
];

const diffv = ['Easy', 'Normal', 'Difficult'];
const sizev = ['2 x 3', '3 x 4', '4 x 5', '4 x 6', '4 x 8'];
const diffarr = [4, 3, 2];
const hsize = [2, 3, 4, 4, 4];
const wsize = [3, 4, 5, 6, 8];
const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
let timeStart = false;
let loseCheck = true;
let lenarr = 6;
let harr = 2;
let warr = 3;
let time;
let minutes = 0;
let seconds = 0;
let movein = 11;
let timein = 15;
let timecurr = 0;
let timecnt = 0;
let moves = 0;
var op_loser = document.getElementsByClassName("loser")[0];
var op_winner = document.getElementsByClassName("winner")[0];
var timeCounter = document.getElementsByClassName("timer-count")[0];
var slider = document.getElementById("size");
var output = document.getElementById("sizeValue");
var movesCount = document.getElementsByClassName("step-info")[0];
var cc = document.getElementById("full");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = sizev[this.value - 1];
    harr = hsize[this.value - 1];
    warr = wsize[this.value - 1];
    lenarr = harr * warr;
    movein = diffarr[0]; 
    movein = movein * lenarr / 2 - 1;
    timein = (movein * 3 - (movein* 3) % 2) / 2;
    console.log(lenarr);
}



for (let i = 0; i < 11; i++){
  const lizTag = document.createElement('IMG');
  lizTag.classList.add('fulll');
  lizTag.setAttribute("src", "./assets/img/" + goodGiff[i]);
  cc.appendChild(lizTag)
}
for (let i = 0; i < 8; i++){
  lizTag = document.createElement('IMG');
  lizTag.classList.add('fulll');
  lizTag.setAttribute("src", "./assets/img/" + badGiff[i]);
  cc.appendChild(lizTag)
}


var sliderdiff = document.getElementById("diff");
var outputdiff = document.getElementById("diffValue");

// Update the current slider value (each time you drag the slider handle)
sliderdiff.oninput = function() {
    outputdiff.innerHTML = diffv[this.value - 1];
    movein = diffarr[this.value - 1]; 
    movein = movein * lenarr / 2 - 1;
    timein = (movein * 3 - (movein* 3) % 2) / 2;
    console.log(movein);
}

document.getElementById("bcktoMenu").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("op-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("options").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("op-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("ok-menu").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("htp-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("how-to-play").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("htp-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("about-menu").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("about-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("about").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("about-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("bcktoHome").addEventListener("click",
    function(){
      loseGame();
    }
)

document.getElementById("play").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        console.log(lenarr);
        StartGame();
        op_backtomenu.style.display = 'flex';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'flex';
    }
)

document.getElementById("bcktowinner").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        op_winner.style.display = 'none';
        ResetGame();
    }
)

document.getElementById("bcktoloser").addEventListener("click",
    function(){
        console.log("CLICKED");
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        op_loser.style.display = 'none';
        ResetGame();
    }
)

function ResetGame(){
    matched = [];
    opened = [];
    loseCheck = true;
    timeStart = false;
    timecnt = 0;
    moves = 0;
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
    document.body.style.pointerEvents = "auto";
    var opp = document.getElementsByClassName("emote")[0];
    opp.style.display = 'none';
}

function shuffle(array) {
    let currentIndex = lenarr, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function StartGame() {
    var deckchange = document.getElementsByClassName("deck")[0];
    deckchange.style.width = warr * 120 + (warr + 1) * 25 + "px";
    deckchange.style.height = harr * 120 + (harr + 1) * 25 + "px";
    movesCount.innerHTML = movein + " STEPS";
    minutes = (timein - timein % 60)/60;
    seconds = timein % 60; 
    if (seconds < 10) timeCounter.innerHTML = "0" + minutes + " : 0" + seconds;
    else timeCounter.innerHTML = "0" + minutes + " : " + seconds;
    const shuffledDeck = shuffle(deckCards);
    for (let i = 0; i < lenarr; i++){
        const frontTag = document.createElement('DIV');
        frontTag.classList.add('front');
        const backTag = document.createElement('DIV');
        backTag.classList.add('back');
        backTag.style.backgroundImage = `url("./assets/img/` + shuffledDeck[i];
        const cardTag = document.createElement('DIV');
        cardTag.classList.add('card');
        cardTag.appendChild(frontTag);
        cardTag.appendChild(backTag);
        const card_containerTag = document.createElement('DIV');
        card_containerTag.classList.add('card-container');
        card_containerTag.appendChild(cardTag);
        deck.appendChild(card_containerTag);
    }
}

function compareTwo() {
    if (opened.length === 2) {
        document.body.style.pointerEvents = "none";
    }
    if (opened.length === 2 && opened[0].lastElementChild.style.backgroundImage === opened[1].lastElementChild.style.backgroundImage) {
      match();
    } else if (opened.length === 2 && opened[0].lastElementChild.style.backgroundImage != opened[1].lastElementChild.style.backgroundImage) {
      noMatch();
    }
}

function match() {
    setTimeout(function() {
      opened[0].classList.add("match");
      opened[1].classList.add("match");
      matched.push(...opened);
      document.body.style.pointerEvents = "auto";
      opened = [];
      winGame();
      movesCounter();
    }, 300);
    good();
}

function noMatch() {
    setTimeout(function() {
      opened[0].classList.remove("flip");
      opened[1].classList.remove("flip");
      document.body.style.pointerEvents = "auto";
      opened = [];
      movesCounter();
    }, 400);
    bad();
}

deck.addEventListener("click", function(evt) {
    if (evt.target.classList.contains("front")){
      if (timeStart === false) {
        timeStart = true; 
        timer();
      }
      flipCard();
    }
    function flipCard() {
      evt.target.parentElement.classList.add("flip");
      addToOpened();
    }
    function addToOpened() {
      if (opened.length === 0 || opened.length === 1) {
        opened.push(evt.target.parentElement);
      }
      compareTwo();
    }
});

function timer() {
    time = setInterval(function() {
        timecnt ++; timecurr = timein - timecnt;
        minutes = (timecurr - timecurr % 60)/60;
        seconds = timecurr % 60; 
      if (seconds < 10) timeCounter.innerHTML = "0" + minutes + " : 0" + seconds;
      else timeCounter.innerHTML = "0" + minutes + " : " + seconds;
      if (timecurr == 0){
        stopTime();
        loseGame();
      }
    }, 1000);
}

function stopTime() {
    clearInterval(time);
}

function movesCounter() {
    moves ++;
    movesCount.innerHTML = movein - moves + " STEPS";
    if (moves == movein){
      stopTime();
      loseGame();
    }
}
function winGame() {
    if (matched.length === lenarr) {
      stopTime();
      op_winner.style.display = 'flex';
      setTimeout(function(){
        document.body.style.pointerEvents = "none";
        document.getElementsByClassName("winner")[0].style.pointerEvents = "auto";
        console.log(document.body.style.pointerEvents);
      },500);
      loseCheck = false;
    }
}

function loseGame(){
    if (loseCheck){
      stopTime();
      op_loser.style.display = 'flex';
      document.body.style.pointerEvents = "none";
      document.getElementsByClassName("loser")[0].style.pointerEvents = "auto";
      console.log(document.body.style.pointerEvents);
    }
}
setInterval(function() {
  console.log(document.body.style.pointerEvents);
}, 1000);

function bad(){
  let randombad = Math.floor(Math.random() * 10);
  document.getElementById("tt").innerHTML= badE[randombad] + "!";
  randombad = Math.floor(Math.random() * 7);
  var jj = document.getElementById("gg");
  jj.setAttribute("src", "./assets/img/" + badGiff[randombad]);
  var opp = document.getElementsByClassName("emote")[0];
  opp.style.display = 'flex';
}

function good(){
  let randomgood = Math.floor(Math.random() * 10);
  document.getElementById("tt").innerHTML= goodE[randomgood] + "!";
  randomgood = Math.floor(Math.random() * 9);
  var zz = document.getElementById("gg");
  zz.setAttribute("src", "./assets/img/" + goodGiff[randomgood]);
  var opp = document.getElementsByClassName("emote")[0];
  opp.style.display = 'flex';
}

function FunctionLoad() {
  var ac = document.getElementById("loading");
  ac.classList.add("activee");
  setTimeout(function(){
      document.getElementById("loading").style.display = 'none';
  }, 1000);
}