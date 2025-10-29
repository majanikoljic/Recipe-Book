// ====== Scroll to Instructions ======
const startBtn = document.querySelector('.cta-btn');
const instructions = document.querySelector('.instructions');

if (startBtn && instructions) {
  startBtn.addEventListener('click', () => {
    instructions.scrollIntoView({ behavior: 'smooth' });
  });
}

// ====== Favorite / Save Recipe Toggle ======
const favBtn = document.querySelector('.favorite-btn');

if (favBtn) {
  favBtn.addEventListener('click', () => {
    favBtn.classList.toggle('saved');
    favBtn.textContent = favBtn.classList.contains('saved') ? '❤️ Saved' : '❤️ Save';
  });
}

// ====== Fade-in animation for recipe image ======
const recipeImg = document.querySelector('.recipe-overview img');

if (recipeImg) {
  recipeImg.style.opacity = 0;
  recipeImg.style.transition = 'opacity 1s ease-in';

  window.addEventListener('load', () => {
    recipeImg.style.opacity = 1;
  });
}
