
var randomNumber1 = Math.floor((Math.random()) * 6) + 1;

document.querySelector(".dice .img1").setAttribute("src", "/Dice-Roll/images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random()) * 6) + 1;

document.querySelector(".dice .img2").setAttribute("src", "/Dice-Roll/images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins 🏆!"
} else {
    document.querySelector("h1").textContent = "Draw!"
}


// Button refreshing JS
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    location.reload();
}
)
