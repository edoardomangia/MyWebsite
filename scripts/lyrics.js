const fadeDuration = 5000;     
const displayDuration = 10000;  
const cycleInterval = displayDuration + (fadeDuration * 2);

fetch('assets/lyrics.txt')
  .then(res => res.text())
  .then(text => {
    const lyrics = text
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    if (!lyrics.length) return;

    let idx = Math.floor(Math.random() * lyrics.length);
    const el = document.getElementById('lyric');

    function showNext() {
      el.textContent = lyrics[idx];
      el.classList.add('visible');

      setTimeout(() => {
        el.classList.remove('visible');
      }, displayDuration);

      idx = (idx + 1) % lyrics.length;
    }

    showNext();
    setInterval(showNext, cycleInterval);
  })
  .catch(err => console.error('Could not load lyrics:', err));
