document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('mainCard');
  const reveal = document.getElementById('flowerReveal');
  const petals = document.getElementById('petals');
  let shower;

  function petal() {
    const item = document.createElement('i');
    item.className = 'petal';
    const size = 9 + Math.random() * 16;
    const duration = 4 + Math.random() * 4;
    item.style.cssText = `width:${size}px;height:${size * 1.28}px;left:${Math.random() * 100}%;--drift:${-80 + Math.random() * 160}px;animation-duration:${duration}s`;
    petals.appendChild(item);
    setTimeout(() => item.remove(), duration * 1000);
  }
  function burst(count) { for (let i = 0; i < count; i++) setTimeout(petal, i * 65); }
  document.getElementById('revealBtn').addEventListener('click', () => {
    card.classList.add('hidden');
    setTimeout(() => { reveal.classList.remove('hidden'); burst(24); shower = setInterval(petal, 600); }, 320);
  });
  document.getElementById('resetBtn').addEventListener('click', () => {
    reveal.classList.add('hidden'); clearInterval(shower);
    setTimeout(() => card.classList.remove('hidden'), 320);
  });
});
