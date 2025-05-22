const emails = [
  { content: "Your account has been locked. Click here to reset your password.", phishing: true },
  { content: "Reminder: Team meeting at 3 PM in Room 204 today.", phishing: false },
  { content: "Congrats! You've won a $100 Amazon gift card. Claim now.", phishing: true },
  { content: "Please review the attached report for tomorrow’s presentation.", phishing: false },
  { content: "We noticed a login from a new device. Secure your account here.", phishing: true }
];

let index = 0;
let score = 0;

function loadEmail() {
  if (index < emails.length) {
    document.getElementById("email-content").innerText = emails[index].content;
    document.getElementById("feedback").innerText = "";
  } else {
    document.getElementById("email-content").innerText = "Simulation complete!";
    document.querySelector(".buttons").style.display = "none";
  }
  updateScore();
}

function selectAnswer(isPhishing) {
  const correct = emails[index].phishing === isPhishing;
  if (correct) score++;
  document.getElementById("feedback").innerText = correct ? "Correct!" : "Wrong!";
  index++;
  setTimeout(loadEmail, 1000);
}

function updateScore() {
  document.getElementById("score").innerText = `Score: ${score}/${index}`;
}

window.onload = loadEmail;
