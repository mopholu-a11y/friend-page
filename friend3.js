// Get elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const extraQuestion = document.getElementById("extraQuestion");
const ratingSelect = document.getElementById("ratingSelect");

// How many times the No button will dodge before staying put
let moveCount = 0;
const MAX_MOVES = 3; // it will dodge 3 times, then allow click

// When user clicks YES
yesBtn.addEventListener("click", () => {
  message.textContent = "😜 You love me too well!";
  extraQuestion.classList.remove("hidden");
  // reset no button position (optional)
  noBtn.style.transform = "translate(0,0)";
});

// Make NO dodge on hover a few times
noBtn.addEventListener("mouseenter", () => {
  if (moveCount < MAX_MOVES) {
    // Choose a random small translation so it jumps around the container
    const randomX = Math.random() * 220 - 110; // -110 -> 110 px
    const randomY = Math.random() * 80 - 40;   // -40 -> 40 px
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    moveCount++;
  } else {
    // after MAX_MOVES it will stop moving (so the user can finally click)
    noBtn.style.transform = "translate(0,0)";
  }
});

// If user clicks NO
noBtn.addEventListener("click", () => {
  message.textContent = "WHY 🧐";
  extraQuestion.classList.remove("hidden");
});

// Rating selection responses
ratingSelect.addEventListener("change", () => {
  const value = parseInt(ratingSelect.value, 10);
  let response = "";

  switch (value) {
    case 1: response = "wow you hate me 😑"; break;
    case 2: response = "what!!! Good bye 🙄"; break;
    case 3: response = "I will hunt you 😤"; break;
    case 4: response = "you could have just said one 😒"; break;
    case 5: response = "do I look like an average 🤨"; break;
    case 6: response = "do better 🧐"; break;
    case 7: response = "at least not 6 😒"; break;
    case 8: response = "yeah I know I ate everything 😙"; break;
    case 9: response = "in love with me I see 😏🌸"; break;
    case 10: response = "I will marry you fine 🤭🌸"; break;
    default: response = ""; break;
  }

  message.textContent = response;
});
