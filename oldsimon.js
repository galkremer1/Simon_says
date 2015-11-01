var farLeftIsClicked = [];
var leftIsClicked = [];
var rightIsClicked = [];
var farRightIsClicked = [];

var currentlevel = 1;
var lose = false;
var sequence = [];


var c = document.getElementById('farLeft');
var farLeft = c.getContext("2d");
farLeft.fillStyle = "#FF0000";
farLeft.fillRect(0,0,150,300);
farLeft.canvas.style.borderColor = 'gray';


var d = document.getElementById('left');
var left = d.getContext("2d");
left.fillStyle = 'black';
left.fillRect(0,0,150,300);
left.canvas.style.borderColor = 'gray';


var e = document.getElementById('right');
var right = e.getContext('2d');
right.fillStyle = 'green'
right.fillRect(0,0,150,300);
right.canvas.style.borderColor = 'gray';


var f = document.getElementById('farRight');
var farRight= f.getContext('2d');
farRight.fillStyle = 'blue';
farRight.fillRect(0,0,150,300);
farRight.canvas.style.borderColor = 'gray';


function changeColor(canvasName)  {
    setTimeout(function () {
        canvasName.style.borderColor= 'black';
        setTimeout(function () {
            canvasName.style.borderColor = 'gray';
        }, 100)}, 100);
}

function initCanvases(cLvl) {
    var pCounter = 1;
    console.log('level is: ' + cLvl);
    console.log('the sequence is: ' + sequence);
    console.log('pcounter is: ' + pCounter);

    document.getElementById('farLeft').addEventListener('click', function (evt) {
        changeColor(farLeft.canvas);
        if (sequence[pCounter-1] != 1) {
            alert("wrong!" + sequence + 'the counter is ' + pCounter);
            lose = true;
            return false;
        }
        else {
            if (pCounter === cLvl)
            {
                console.log(cLvl + ' is done');
                alert('level is done');
                return true;
            }
            else {
                pCounter++;
                console.log('1Right move. the current pcounter is:' + pCounter);
            }
        }
    }, false);

    document.getElementById('left').addEventListener('click', function (evt) {
        changeColor(left.canvas);
        if (sequence[pCounter-1] != 2) {
            alert("wrong!" + sequence + 'the counter is ' + pCounter);
            lose = true;
            return false;
        }
        else {
            if (pCounter === cLvl)
            {
                console.log(cLvl + ' is done');
                alert('level is done');
                return true;
            }
            else {
                pCounter++;
                console.log('2Right move. the current pcounter is:' + pCounter);
            }
        }
    }, false);

    document.getElementById('right').addEventListener('click', function (evt) {
        changeColor(right.canvas);
        if (sequence[pCounter-1] != 3) {
            alert("wrong!" + sequence + 'the counter is ' + pCounter);
            lose = true;
            return false;
        }
        else {
            if (pCounter === cLvl)
            {
                console.log(cLvl + ' is done');
                alert('level is done');
                return true;
            }
            else {
                pCounter++;
                console.log('3Right move. the current pcounter is:' + pCounter);

            }
        }
    }, false);

    document.getElementById('farRight').addEventListener('click', function (evt) {
        changeColor(farRight.canvas);
        if (sequence[pCounter-1] != 4) {
            alert("wrong!" + sequence + 'the counter is ' + pCounter);
            lose = true;
            return false;
        }
        else {
            if (pCounter === cLvl)
            {
                console.log(cLvl + ' is done');
                alert('level is done');
                return true;
            }
            else {
                pCounter++;
                console.log('4Right move. the current pcounter is:' + pCounter);
            }
        }
    }, false);
}

function playSqc(gameSqc,n) {
    setTimeout(function () {
            if (gameSqc[n] === 1) {
                changeColor(farLeft.canvas);
                if (n<gameSqc.length) {
                    playSqc(gameSqc, n+1);
                }
            }
            else if (gameSqc[n] === 2) {
                changeColor(left.canvas);
                if (n<gameSqc.length) {
                    playSqc(gameSqc, n+1);
                }
            }

            else if (gameSqc[n] === 3) {
                changeColor(right.canvas);
                if (n<gameSqc.length) {
                    playSqc(gameSqc, n+1);
                }
            }

            else if (gameSqc[n] === 4) {
                changeColor(farRight.canvas);
                if (n<gameSqc.length) {
                    playSqc(gameSqc, n+1);
                }
            }
    }, (n+1)*500);
}

function level(lvl) {
    randomNumber = Math.floor(Math.random()*4+1);
    sequence.push(randomNumber);
    playSqc(sequence,0);

   setTimeout(function () {
       alert('your turn');
       initCanvases(lvl,sequence);
        console.log(lvl + ' is the level');
    },(lvl+2)*1300);
}

var startLvl = 1;

while (!initCanvases(startLvl))
{

}


queryselector
