console.log('hello');
alert('Welcome to the dice game');

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const gameSection = document.getElementById('game');
    const rollButton = document.getElementById('rollButton');
    const freezeButton = document.getElementById('freezeButton');
    const restartButton = document.getElementById('restartButton');
    const resultDiv = document.getElementById('result');
    const pointsDiv = document.getElementById('points');
    const paragraphs = document.querySelectorAll('p');

    let diceRolls = [];
    let totalSum = 0;
    let playerName;
    let counter = 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        playerName = nameInput.value.trim();
        console.log(playerName);

        if (playerName === "") {
            alert("Name must be filled out");
            return;
        }
    
        gameSection.style.display = 'block';
        form.style.display = 'none';

        resultDiv.style.display = 'block';
        pointsDiv.style.display = 'block';

        paragraphs.forEach(function(paragraphs) {
            paragraphs.style.display = 'none';

        });

        startGame(playerName);
    });

    
    rollButton.addEventListener('click', function () {

        let roll = Math.floor(Math.random() * 6) + 1;

        if (roll == 1) {
            var millisecondsToWait = 500;
            setTimeout(function () {
                resultDiv.innerText = "You rolled a 1 resets game";
            }, millisecondsToWait);
            counter++;

            diceRolls = [];
            roll = 0;

        } else {

            diceRolls.push(roll);
        }

        console.log(diceRolls);

        points = diceRolls;

        resultDiv.innerText = "Dice Rolls: " + diceRolls.join(', ');
        
        console.log(playerName);
    });

    freezeButton.addEventListener('click', function () {

        let sum = 0;
        counter++;

        for (let i = 0; i < diceRolls.length; i++) {

            sum = sum + diceRolls[i];
        }

        totalSum = totalSum + sum;

        pointsDiv.innerText = "Round points: " + sum + ". ";
        resultDiv.innerText = "Total points: " + totalSum + ". ";

        diceRolls = [];

        if (totalSum >= 100) {
            resultDiv.innerText = resultDiv.innerText + "You reached 100 points, congratulations!" + " " + playerName + " " + "You played: " + counter + " times" ;
            
        }

        console.log(playerName);
    });

    restartButton.addEventListener('click', function () {
        diceRolls = [];
        totalSum = 0;
        playerName = "";
        counter = 0;
        nameInput.value = "";

        gameSection.style.display = 'none';
        form.style.display = 'block';
        resultDiv.style.display = 'none';
        pointsDiv.style.display = 'none';

        paragraphs.forEach(function(paragraphs) {
            paragraphs.style.display = 'block';
        });

        resultDiv.innerText = '';
        pointsDiv.innerText = '';

    });

});

function startGame(playerName) {
    alert("Lets start the game, " + playerName);
}


