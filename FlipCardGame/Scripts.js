console.log("JS file loaded");

const emojis = ['🍎','🚗','🐶','⚽','🍕','🎵','🌟','📚'];
const cards = [...emojis, ...emojis]; // 16 cards (8 pairs)
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matched = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

const board = document.getElementById("board");

function createCard(emoji) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = emoji;

  card.addEventListener("click", () => {
    if (lockBoard || card.classList.contains("revealed")) return;

    card.classList.add("revealed");

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;

      if (firstCard.textContent === secondCard.textContent) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matched++;
        resetTurn();

        if (matched === emojis.length) {
          setTimeout(() => {
            alert("🎉 You found all pairs!");
            location.reload();
          }, 500);
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("revealed");
          secondCard.classList.remove("revealed");
          resetTurn();
        }, 1000);
      }
    }
  });

  return card;
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

shuffle(cards).forEach(emoji => {
  board.appendChild(createCard(emoji));
});
