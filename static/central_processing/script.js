function randomRegister() {
    return (
        ("00000000" + Math.floor(Math.random() * 0xFF).toString(2)).slice(-8)
    );
}

function randomize() {
    var playerOneRegister = randomRegister();
    var playerTwoRegister = randomRegister();
    var centralRegister = randomRegister();
    var goalState = randomRegister();
    document.getElementById("randomized").textContent
        = `player 1 register: ${playerOneRegister}\n`
        + `player 2 register: ${playerTwoRegister}\n`
        + ` central register: ${centralRegister}\n`
        + `       goal state: ${goalState}`
    ;
}

function customDifficulty() {
    var difficulty = document.getElementById("difficulty").value;
    var bits = "1".repeat(difficulty) + "0".repeat(8 - difficulty);
    // Fisher-Yates shuffle the bits
    var a = bits.split(""),
    n = a.length;
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    bits = a.join("");
    document.getElementById("customGoal").textContent = `goal state: ${bits}`;
}

