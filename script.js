let dino = document.getElementById("dino");
let rock = document.getElementById("rock");
let score = document.getElementById("score");
let cloud = document.getElementById("clouds");

function jump() {
    if (!dino.classList.contains("animate")) {
        dino.classList.add("animate");
    }

    setTimeout(() => {
        dino.classList.remove("animate");
    }, 650);
}

document.addEventListener('keypress', () => {
    jump();
})

let checkDeath = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    let cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));

    score.innerText++;

    if (rockLeft < 25 && rockLeft > 0 && dinoTop >= 70) {
        rock.style.animation = "none";
        rock.style.display = "none";
        alert("Your score is " + score.innerText + "\nClick OK to play again");
        location.reload();
        score.innerText = "0";
    }

    if (rockLeft < 0) {
        rock.style.display = "none";
    } else {
        rock.style.display = "";
    }

    if (cloudLeft < -35) {
        cloud.style.display = "none";
    } else {
        cloud.style.display = "";
    }
}, 10);