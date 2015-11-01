var farLeftIsClicked = [];
var leftIsClicked = [];
var rightIsClicked = [];
var farRightIsClicked = [];

var currentLevel = 1;
var lose = false;
var sequence = [];
var counter = 0;

var cheer = new Audio('sound/win.mp3');
var wrong = new Audio('sound/wrong.mp3');
var aSound = new Audio('sound/a.wav')
var bSound = new Audio('sound/b.wav')
var cSound = new Audio('sound/c.wav')
var dSound = new Audio('sound/d.wav')

var a = document.getElementById('1');
var farLeft = a.getContext("2d");
farLeft.fillStyle = "#FF0000";
farLeft.fillRect(0,0,150,300);
farLeft.canvas.style.borderColor = 'gray';


var b = document.getElementById('2');
var left = b.getContext("2d");
left.fillStyle = 'black';
left.fillRect(0,0,150,300);
left.canvas.style.borderColor = 'gray';


var c = document.getElementById('3');
var right = c.getContext('2d');
right.fillStyle = 'green'
right.fillRect(0,0,150,300);
right.canvas.style.borderColor = 'gray';


var d = document.getElementById('4');
var farRight= d.getContext('2d');
farRight.fillStyle = 'blue';
farRight.fillRect(0,0,150,300);
farRight.canvas.style.borderColor = 'gray';


function changeColor(canvasName, sound)  {
    setTimeout(function () {
        canvasName.style.borderColor= 'black';
        setTimeout(function () {
            canvasName.style.borderColor = 'gray';
        }, 200)}, 200);
    sound.play();
}

/*
function initCanvases() {

    a.addEventListener('click', function () {
        changeColor(a);
        endTurn = true;
        return 1;
    }, false);
    b.addEventListener('click', function () {
        changeColor(b);
        endTurn = true;
        return 2;
    }, false);
    c.addEventListener('click', function () {
        changeColor(c);
        endTurn = true;
        return 3;
    }, false);
    d.addEventListener('click', function () {
        changeColor(d);
        endTurn = true;
        return 4;
    }, false);
}
*/
function isClicked(clicked, color, sound) {
    if (sequence[counter] === clicked) {
        if (counter < (currentLevel-1)) {
            changeColor(color, sound);
            counter++;
        }

        else if (counter === (currentLevel-1)) {
           // cheer.play();
            changeColor(color, sound);
            setTimeout(function () {
                alert('Great. Moving on the next level')}, 400);
            counter=0;
            currentLevel++;
            level();
            return false;
        }
    }
    else  {
        wrong.play();
        alert('Wrong. you lost the game!');
        return true;
    }

}

function playSqc() {
    for (m=0; m<sequence.length; m++) {
            if (sequence[m] === 1) {
                setTimeout(function() {
            changeColor(a, aSound); }, (m+1)*600);
        }
        else if (sequence[m] === 2) {
                setTimeout(function() {
                    changeColor(b, bSound)}, (m+1)*600);
            }
        else if (sequence[m] === 3) {
                setTimeout(function() {
                    changeColor(c, cSound)}, (m+1)*600);
            }
        else if (sequence[m] === 4) {
                setTimeout(function() {
                    changeColor(d, dSound)}, (m+1)*600);
        }
    }
    setTimeout(function() {alert('Your turn')}, (m+2)*600);
}


function level() {
    randomNumber = Math.floor(Math.random()*4+1);
    sequence.push(randomNumber);
    playSqc();
    console.log(sequence);
}

//sequence = [1,1,1,1]
//playSqc();
level();