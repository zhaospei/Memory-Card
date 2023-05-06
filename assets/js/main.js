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

const soundbad =[
  "b1.mp3",
  "b2.mp3",
  "b3.mp3",
  "b4.mp3",
  "b5.mp3",
  "b6.mp3",
  "b1.mp3",
  "b2.mp3",
  "b3.mp3",
];

const soundgood =[
  "g1.mp3",
  "g2.mp3",
  "g3.mp3",
  "g4.mp3",
  "g5.mp3",
  "g6.mp3",
  "g7.mp3",
  "g1.mp3",
  "g2.mp3",
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
"b9.gif",
"b10.gif",
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

const diffv = ['EASY', 'NORMAL', 'HARD'];
const sizev = ['2 x 3', '3 x 4', '4 x 5', '4 x 6', '4 x 8'];
const diffarr = [4, 3, 2];
const hsize = [2, 3, 4, 4, 4];
const wsize = [3, 4, 5, 6, 8];
const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
let midDeck = [];
let okchall = true;
let timeStart = false;
let loseCheck = true;
let diffcurrent = 1;
let lencurrent = 1;
let lenarr = 6;
let harr = 2;
let warr = 3;
let lenarrchall = 6;
let harrchall = 2;
let warrchall = 3;
let inchall = false;
let time;
let minutes = 0;
let seconds = 0;
let j = 0;
let k = 0;
let movein = 11;
let timein = 15;
let timecurr = 0;
let timecnt = 0;
let challcount = 0;
let moves = 0;
var backgroundsound = new Audio("./assets/sound/backgroundsound.mp3");
var playsound = new Audio("./assets/sound/playsound.mp3");
let inback;
let inplay;

/* SOUNDS*/

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
    lencurrent = this.value;
   
}

function FunctionLoad() {
  var ac = document.getElementById("loading");
  ac.classList.remove("activee");
  document.getElementById("loading").style.display = 'flex';
  setTimeout(function(){
    ac.classList.add("activee");
  }, 500);
  setTimeout(function(){
      document.getElementById("loading").style.display = 'none';
  }, 1000);
}

var sliderdiff = document.getElementById("diff");
var outputdiff = document.getElementById("diffValue");

// Update the current slider value (each time you drag the slider handle)
sliderdiff.oninput = function() {
    outputdiff.innerHTML = diffv[this.value - 1];
    diffcurrent = this.value;
}

document.getElementById("ranking-menu").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("ranking-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("ranking").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("ranking-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("chall-back").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("chall-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("play").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("chall-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("chall-go").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("chall-container")[0];
        op_backtomenu.style.display = 'none';
        document.getElementsByClassName("game-container")[0].style.display = 'flex';
        document.getElementsByClassName("game-timer")[0].style.display = 'flex';
        inchall = true;
        FunctionLoad();
        StartChall(0, 0);
        backgroundsound.pause();
        backgroundsound.currentTime = 0; 
        clearInterval(inback);
        playsound.play();
        inplay = setInterval(function(){
          playsound.play();
        },168000);
        document.getElementsByClassName("round-count")[0].style.display = 'flex';
        
    }
)

document.getElementById("bcktoMenu").addEventListener("click",
  function(){
    var op_backtomenu = document.getElementsByClassName("game-container")[0];
    var op_backztomenu = document.getElementsByClassName("op-container")[0];
    op_backztomenu.style.display = 'none';
    StartGame();
    backgroundsound.pause();
    backgroundsound.currentTime = 0;
    clearInterval(inback);
    playsound.play();
    op_backtomenu.style.display = 'flex';
    var op_backtohome = document.getElementsByClassName("game-timer")[0];
    op_backtohome.style.display = 'flex';
  }
)
document.getElementById("options").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("op-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("ok-menu").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("htp-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("how-to-play").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("htp-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("returntoMenu").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("op-container")[0];
        op_backtomenu.style.display = 'none';
    }
)

document.getElementById("hello-menu").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("hello")[0];
        op_backtomenu.style.display = 'none';
        var op_menuchoose = document.getElementsByClassName("menu-choose")[0]
        op_menuchoose.style.display = 'block';
        backgroundsound.play();
        inback = setInterval(function(){
          backgroundsound.play();
        },149000);
      }
)

document.getElementById("about-menu").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("about-container")[0];
        op_backtomenu.style.display = 'none';
    }
)
document.getElementById("about").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("about-container")[0];
        op_backtomenu.style.display = 'flex';
    }
)

document.getElementById("bcktoHome").addEventListener("click",
    function(){
      document.getElementsByClassName("ff")[0].style.display = 'flex';
    }
)

document.getElementById("ff-go").addEventListener("click",
    function(){
      loseGame();
      document.getElementsByClassName("ff")[0].style.display = 'none';
    }
)

document.getElementById("ff-back").addEventListener("click",
    function(){
      document.getElementsByClassName("ff")[0].style.display = 'none';
    }
)

/*document.getElementById("play").addEventListener("click",
  function(){
    var op_backtomenu = document.getElementsByClassName("game-container")[0];
    console.log(lenarr);
    StartGame();
    op_backtomenu.style.display = 'flex';
    var op_backtohome = document.getElementsByClassName("game-timer")[0];
    op_backtohome.style.display = 'flex';
  }
)*/

document.getElementById("bcktowinner").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        op_winner.style.display = 'none';
        ResetGame();
        FunctionLoad();
        backgroundsound.play();
        inback = setInterval(function(){
          backgroundsound.play();
        },149000);
        playsound.pause();
        playsound.currentTime = 0;
    }
)
/*document.getElementById("bcktowinner").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        op_winner.style.display = 'none';
        ResetGame();
        FunctionLoad();
    }
)*/

document.getElementById("bcktoloser").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        op_loser.style.display = 'none';
        FunctionLoad();
        ResetGame();
        backgroundsound.play();
        inback = setInterval(function(){
          backgroundsound.play();
        },149000);
        playsound.pause();
        playsound.currentTime = 0;
    }
)

function PlaySound(url){
  var ssound = new Audio("./assets/sound/" + url);
  if (url == "samovar-party.mp3") ssound.volume = 0.1;
  ssound.play();
}

document.getElementById("next-chall").addEventListener("click",
    function(){
        document.getElementsByClassName("winner-chall")[0].style.display = 'none';
        FunctionLoad();
        ResetChall();
        if (k == 2){
            j++; k = 0;
        } else k++;
        playsound.play();
        StartChall(j, k);
    }
)

document.getElementById("back-chall").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        document.getElementsByClassName("chall-container")[0].style.display = 'none';
        document.getElementsByClassName("loser-chall")[0].style.display = 'none';
        FunctionLoad();
        ResetGame();
        backgroundsound.play();
        inback = setInterval(function(){
          backgroundsound.play();
        },149000);
        playsound.pause();
        playsound.currentTime = 0;
        clearInterval(inplay);
    }
)

document.getElementById("end-chall").addEventListener("click",
    function(){
        var op_backtomenu = document.getElementsByClassName("game-container")[0];
        op_backtomenu.style.display = 'none';
        var op_backtohome = document.getElementsByClassName("game-timer")[0];
        op_backtohome.style.display = 'none';
        document.getElementsByClassName("chall-container")[0].style.display = 'none';
        document.getElementsByClassName("final-chall")[0].style.display = 'none';
        FunctionLoad();
        ResetGame();
    }
)

function ResetChall(){
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

function ResetGame(){
    matched = [];
    opened = [];
    loseCheck = true;
    timeStart = false;
    inchall = false;
    timecnt = 0; j = 0; k = 0;
    moves = 0;
    challcount = 0;
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
    document.body.style.pointerEvents = "auto";
    var opp = document.getElementsByClassName("emote")[0];
    opp.style.display = 'none';
    document.getElementsByClassName("round-count")[0].style.display = 'none';
}

function shuffle(array) {
    let currentIndex = lenarr;
    if (inchall) {
      currentIndex = lenarrchall; 
    }
    let temporaryValue, randomIndex;
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

  FunctionLoad();
    harr = hsize[lencurrent - 1];
    warr = wsize[lencurrent - 1];
    lenarr = harr * warr;
    movein = diffarr[diffcurrent - 1];  
    movein = movein * lenarr / 2 - 1;
    timein = (movein * 3 - (movein* 3) % 2) / 2;
    var deckchange = document.getElementsByClassName("deck")[0];
    deckchange.style.width = warr * 120 + (warr + 1) * 25 + "px";
    deckchange.style.height = harr * 120 + (harr + 1) * 25 + "px";
    movesCount.innerHTML = movein + " STEPS";
    minutes = (timein - timein % 60)/60;
    seconds = timein % 60; 
    if (seconds < 10) timeCounter.innerHTML = "0" + minutes + " : 0" + seconds;
    else timeCounter.innerHTML = "0" + minutes + " : " + seconds;
    let shuffledDeck = []; 
    for (let i = 0; i < lenarr; i++){
      midDeck[i] = deckCards[i];
    }
    shuffledDeck = shuffle(midDeck);
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
function StartChall(j, k) {
      document.getElementsByClassName("round-count")[0].innerHTML = (j * 3 + k + 1) + "/15";
      warrchall = wsize[j]; harrchall = hsize[j]; lenarrchall = harrchall * warrchall; lenarr = lenarrchall;
      movein = diffarr[k]; 
      movein = movein * lenarrchall / 2 - 1;
      timein = (movein * 3 - (movein* 3) % 2) / 2;
      var deckchange = document.getElementsByClassName("deck")[0];
      deckchange.style.width = warrchall * 120 + (warrchall + 1) * 25 + "px";
      deckchange.style.height = harrchall * 120 + (harrchall + 1) * 25 + "px";
      movesCount.innerHTML = movein + " STEPS";
      minutes = (timein - timein % 60)/60;
      seconds = timein % 60; 
      if (seconds < 10) timeCounter.innerHTML = "0" + minutes + " : 0" + seconds;
      else timeCounter.innerHTML = "0" + minutes + " : " + seconds;
      let shuffledDeck = []; 
      for (let i = 0; i < lenarrchall; i++){
        midDeck[i] = deckCards[i];
      }
      shuffledDeck = shuffle(midDeck);
      for (let i = 0; i < lenarrchall; i++){
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
  let randombad = Math.floor(Math.random() * 8);
  PlaySound(soundgood[randombad]);
    setTimeout(function() {
      opened[0].classList.add("match");
      opened[1].classList.add("match");
      matched.push(...opened);
      document.body.style.pointerEvents = "auto";
      opened = [];
      if (inchall) winchall();
      else winGame();
      movesCounter();
    }, 300);
    
    good();
}

function noMatch() {
  let randombad = Math.floor(Math.random() * 8);
    PlaySound(soundbad[randombad]);
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
        if (inchall) losechall(); 
        else loseGame();
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
      if (inchall) losechall();
      else loseGame();
    }
}
function winGame() {
    if (matched.length === lenarr) {
      PlaySound("win.mp3");
      playsound.pause();
      playsound.currentTime = 0;
      stopTime();
      op_winner.style.display = 'flex';
      loseCheck = false;
      setTimeout(function(){
        document.body.style.pointerEvents = "none";
        document.getElementsByClassName("winner")[0].style.pointerEvents = "auto";
        console.log(document.body.style.pointerEvents);
      },500);
    }
}

function loseGame(){
    if (loseCheck){
      playsound.pause();
      playsound.currentTime = 0;
      stopTime();
      op_loser.style.display = 'flex';
      document.body.style.pointerEvents = "none";
      document.getElementsByClassName("loser")[0].style.pointerEvents = "auto";
      PlaySound("loser.mp3");
    }
}

function bad(){
  let randombad = Math.floor(Math.random() * 10);
  document.getElementById("tt").innerHTML= badE[randombad] + "!";
  randombad = Math.floor(Math.random() * 9);
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

function winchall() {
  if (matched.length === lenarr) {
    PlaySound("win.mp3");
    playsound.pause();
    stopTime();
    loseCheck = false;
    if (j == 4 && k == 2) {
      document.getElementsByClassName("final-win")[0].style.display = 'flex';
      setTimeout(function(){
        document.body.style.pointerEvents = "none";
        document.getElementsByClassName("final-win")[0].style.pointerEvents = "auto";
      },500);
    }
    else{
      document.getElementsByClassName("winner-chall")[0].style.display = 'flex';
      setTimeout(function(){
        document.body.style.pointerEvents = "none";
        document.getElementsByClassName("winner-chall")[0].style.pointerEvents = "auto";
      },500);
    }
  }
}

function losechall(){
  if (loseCheck){
    PlaySound("loser.mp3");
    playsound.pause();
    playsound.currentTime = 0;
    clearInterval(inplay);
    stopTime();
    document.getElementsByClassName("loser-chall")[0].style.display = 'flex';
    document.body.style.pointerEvents = "none";
    document.getElementsByClassName("loser-chall")[0].style.pointerEvents = "auto";
  }
}