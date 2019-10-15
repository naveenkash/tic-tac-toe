const o = document.getElementById('BigO');
const x = document.getElementById('BigX');
var tic_value;
var randomTicValue;
var tic_array = ['', '', '', '', '', '', '', '', ''];
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const tic_box = document.getElementsByClassName('game-wrapper');
const win_Head = document.querySelector('.win');
const head = document.querySelector('.head');
const lose_Head = document.querySelector('.lose');
start.addEventListener('click', startGame)

function startGame() {
    if (o.checked === true) {
        tic_value = o.value;
        tic_value_X = x.value;
        randomTicValue = x.value;
    } else {
        tic_value = x.value;
        randomTicValue = o.value;
    }
}
restart.addEventListener('click', function () {
    tic_array = ['', '', '', '', '', '', '', '', ''];
    startGame();
    for (let i = 0; i < tic_box.length; i++) {
        tic_box[i].innerHTML = '';
    }
    restart.style.display = 'none';
    start.style.display = 'block';
    win_Head.style.display = 'none';
    lose_Head.style.display = 'none';
    head.style.display = 'block';
})


function addTickToBox() {
    for (let i = 0; i < tic_box.length; i++) {

        const element = tic_box[i];

        element.addEventListener('click', function () {
            console.log('element clicked');

            if (tic_value === undefined) {
                return alert('please select a Player');
            }
            if (tic_value === null) {
                return alert('Restart Game');
            }
            var ticCurrentValue = tic_array[i];
            var isNotEmpty = ticCurrentValue !== '';
            console.log('tic index  ' + ticCurrentValue + ' isNotEmpty' + isNotEmpty);

            if (isNotEmpty) {
                console.log('match found ' + ticCurrentValue);
                return;
            } else {
                ticCurrentValue = tic_value;
                tic_array[i] = ticCurrentValue;
                element.innerHTML = tic_value;
                if (checkIfWin()) {
                    //   console.log(checkIfWin());
                    console.log('check if win user already won');

                    return;
                } else {
                    addRandomTicToBox();
                    checkIfOpponentWin()
                }

                console.log(i + ' tic_array' + tic_array);

            }
        })
    }
}
addTickToBox();

function addRandomTicToBox() {


    if (checkIfOpponentWinning(tic_array[0], tic_array[1], tic_array[2], tic_value)) {
        addComputerToOpponentLine(0, 1, 2, tic_box[0], tic_box[1], tic_box[2], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[0], tic_array[3], tic_array[6], tic_value)) {
        addComputerToOpponentLine(0, 3, 6, tic_box[0], tic_box[3], tic_box[6], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[0], tic_array[4], tic_array[8], tic_value)) {
        addComputerToOpponentLine(0, 4, 8, tic_box[0], tic_box[4], tic_box[8], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[1], tic_array[4], tic_array[7], tic_value)) {
        addComputerToOpponentLine(1, 4, 7, tic_box[1], tic_box[4], tic_box[7], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[2], tic_array[5], tic_array[8], tic_value)) {
        addComputerToOpponentLine(2, 5, 8, tic_box[2], tic_box[5], tic_box[8], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[3], tic_array[4], tic_array[5], tic_value)) {
        addComputerToOpponentLine(3, 4, 5, tic_box[3], tic_box[4], tic_box[5], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[6], tic_array[7], tic_array[8], tic_value)) {
        addComputerToOpponentLine(6, 7, 8, tic_box[6], tic_box[7], tic_box[8], randomTicValue);
        return;
    } else if (checkIfOpponentWinning(tic_array[2], tic_array[4], tic_array[6], tic_value)) {
        addComputerToOpponentLine(2, 4, 6, tic_box[2], tic_box[4], tic_box[6], randomTicValue);
        return;
    }

    if (checkIfCanInsertToWin(tic_array[0], tic_array[1], tic_array[2], randomTicValue)) {
        addComputerValue(0, 1, 2, tic_box[0], tic_box[1], tic_box[2], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[0], tic_array[3], tic_array[6], randomTicValue)) {
        addComputerValue(0, 3, 6, tic_box[0], tic_box[3], tic_box[6], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[0], tic_array[4], tic_array[8], randomTicValue)) {
        addComputerValue(0, 4, 8, tic_box[0], tic_box[4], tic_box[8], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[1], tic_array[4], tic_array[7], randomTicValue)) {
        addComputerValue(1, 4, 7, tic_box[1], tic_box[4], tic_box[7], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[2], tic_array[5], tic_array[8], randomTicValue)) {
        addComputerValue(2, 5, 8, tic_box[2], tic_box[5], tic_box[8], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[3], tic_array[4], tic_array[5], randomTicValue)) {
        addComputerValue(3, 4, 5, tic_box[3], tic_box[4], tic_box[5], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[6], tic_array[7], tic_array[8], randomTicValue)) {
        addComputerValue(6, 7, 8, tic_box[6], tic_box[7], tic_box[8], randomTicValue);
        return;
    } else if (checkIfCanInsertToWin(tic_array[2], tic_array[4], tic_array[6], randomTicValue)) {
        addComputerValue(2, 4, 6, tic_box[2], tic_box[4], tic_box[6], randomTicValue);
        return;
    } else {
        addRandomComputer();
        return
    }


    // console.log('emptyIndexes ' + emptyIndexes);
    // if (emptyIndexes <= 0) {
    //     win_Head.style.display = 'none';
    //     head.style.display = 'block';
    //     tic_value = null;
    //     restart.style.display = 'inline-flex';
    //     start.style.display = 'none';
    // }
    // if (emptyIndexes.length > 0) {
    //     var randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    //     tic_array[emptyIndexes[randomIndex]] = randomTicValue;
    //     tic_box[emptyIndexes[randomIndex]].innerHTML = randomTicValue;
    // }

}

function addRandomComputer() {
    console.log('computer putting random value');
    var emptyIndexes = [];
    for (let i = 0; i < 9; i++) {
        if (tic_array[i] === '') {
            emptyIndexes.push(i);
        }
    }

    if (emptyIndexes <= 0) {
        win_Head.style.display = 'none';
        head.style.display = 'block';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
    }
    if (emptyIndexes.length > 0) {
        var randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        tic_array[emptyIndexes[randomIndex]] = randomTicValue;
        tic_box[emptyIndexes[randomIndex]].innerHTML = randomTicValue;
    }
    console.log('emptyIndexes ' + emptyIndexes);
}

function addComputerValue(num1, num2, num3, box1, box2, box3, a) {
    // tic_array[0],tic_array[1],tic_array[2],
    if (tic_array[num1] === '') {
        tic_array[num1] = a;
        box1.innerHTML = a;
        return
    } else if (tic_array[num2] === '') {
        tic_array[num2] = a;
        box2.innerHTML = a;
        return;
    } else if (tic_array[num3] === '') {
        tic_array[num3] = a;
        box3.innerHTML = a;
        return;
    }
    return;
}

function addComputerToOpponentLine(num1, num2, num3, box1, box2, box3, val) {
    if (tic_array[num1] === '') {
        tic_array[num1] = val;
        box1.innerHTML = val;
        return
    }
    if (tic_array[num2] === '') {
        tic_array[num2] = val;
        box2.innerHTML = val;
        return
    }
    if (tic_array[num3] === '') {
        tic_array[num3] = val;
        box3.innerHTML = val;
        return
    }
    return
}


function checkIfCanInsertToWin(a, b, c, newVal) {
    var oppositeAvailableNum = 0;
    var currentAvailableNum = 0;
    var emptyAvailableNum = 0;
    if (a === newVal) {
        currentAvailableNum++;
    } else if (a === '') {
        emptyAvailableNum++;
    } else {
        oppositeAvailableNum++;
    }

    if (b === newVal) {
        currentAvailableNum++;
    } else if (b === '') {
        emptyAvailableNum++;
    } else {
        oppositeAvailableNum++;
    }

    if (c === newVal) {
        currentAvailableNum++;
    } else if (c === '') {
        emptyAvailableNum++;
    } else {
        oppositeAvailableNum++;
    }
    if (currentAvailableNum === 2 && emptyAvailableNum === 1) {
        return true;
    }
    return false;
}

function checkIfOpponentWinning(a, b, c, val) {
    var currentOpponentNum = 0;
    var currentEmptyOpponent = 0;
    var currentOpponentOpposite = 0;

    if (a === val) {
        currentOpponentNum++
    } else if (a === '') {
        currentEmptyOpponent++
    } else {
        currentOpponentOpposite++
    }

    if (b === val) {
        currentOpponentNum++
    } else if (b === '') {
        currentEmptyOpponent++
    } else {
        currentOpponentOpposite++
    }


    if (c === val) {
        currentOpponentNum++
    } else if (c === '') {
        currentEmptyOpponent++
    } else {
        currentOpponentOpposite++
    }

    if (currentOpponentNum === 2 && currentEmptyOpponent === 1) {
        return true;
    }
    return false;
}


function checkIfWin() {
    if (tic_array[0] === tic_value && tic_array[1] === tic_value && tic_array[2] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[0] === tic_value && tic_array[3] === tic_value && tic_array[6] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[2] === tic_value && tic_array[5] === tic_value && tic_array[8] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[6] === tic_value && tic_array[7] === tic_value && tic_array[8] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[0] === tic_value && tic_array[4] === tic_value && tic_array[8] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[2] === tic_value && tic_array[4] === tic_value && tic_array[6] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[1] === tic_value && tic_array[4] === tic_value && tic_array[7] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    if (tic_array[3] === tic_value && tic_array[4] === tic_value && tic_array[5] === tic_value) {
        win_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        console.log('you won');
        return true;
    }
    return false;
}

function checkIfOpponentWin() {
    console.log('opponent win');
    console.log(tic_array);


    if (tic_array[0] === randomTicValue && tic_array[1] === randomTicValue && tic_array[2] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[0] === randomTicValue && tic_array[3] === randomTicValue && tic_array[6] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[2] === randomTicValue && tic_array[5] === randomTicValue && tic_array[8] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[6] === randomTicValue && tic_array[7] === randomTicValue && tic_array[8] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[0] === randomTicValue && tic_array[4] === randomTicValue && tic_array[8] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[2] === randomTicValue && tic_array[4] === randomTicValue && tic_array[6] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[1] === randomTicValue && tic_array[4] === randomTicValue && tic_array[7] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
    if (tic_array[3] === randomTicValue && tic_array[4] === randomTicValue && tic_array[5] === randomTicValue) {
        lose_Head.style.display = 'block';
        head.style.display = 'none';
        tic_value = null;
        restart.style.display = 'inline-flex';
        start.style.display = 'none';
        return console.log('opponent won');
    }
}