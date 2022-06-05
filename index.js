const die = document.getElementById("die-img");

die.addEventListener("click", onClick);

async function onClick() {
  for (let i = 0; i < 10; i++) {
    await wait(18);
    showRandomNumber();
  }
}

function showRandomNumber() {
  let r = getRandomNumber();
  let imageName = "images/dice" + r + ".png";
  die.setAttribute("src", imageName);
}

function getRandomNumber() {
  let randomNumber = Math.random();

  randomNumber = Math.ceil(randomNumber * 6);
  return randomNumber;
}
async function wait(ms) {
  return new Promise((res, rej) => setTimeout(res, ms));
}
