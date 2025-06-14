const text = "Feliz Día del Padre";
let i = 0;
const typingTarget = document.getElementById("typing-text");

function typeEffect() {
  if (i < text.length) {
    typingTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

function showMessage() {
  const dedication = document.getElementById("dedication");
  dedication.style.display = "block";
  showCornerVideos();
  window.scrollTo({ top: dedication.offsetTop, behavior: 'smooth' });
}

function showCornerVideos() {
  document.getElementById("cornerVideos").classList.remove("hidden");
}

window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = "-20px";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.getElementById("confetti-container").appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfetti, 150);

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  document.querySelectorAll(".corner-video").forEach(video => {
    video.style.transform = `translate(${x}px, ${y}px)`;
  });
});
