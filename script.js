window.addEventListener('DOMContentLoaded', () => {
  // grab elements only after they exist
  const bgAudio = document.getElementById('bg-audio');
  const home    = document.getElementById('home');
  const trial1  = document.getElementById('trial1');
  const start   = document.getElementById('start');
  const form1   = document.getElementById('form1');
  const fb1     = document.getElementById('fb1');

  // when they click “Enter the Veil”…
  start.onclick = () => {
    home.classList.add('hidden');
    trial1.classList.remove('hidden');
    // user gesture ‣ now play your background loop
    bgAudio.play().catch(() => {});
  };

  // simple Trial I logic
  form1.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form1.ans1.value;
    if (!choice) {
      fb1.textContent = 'Please select an answer.';
      fb1.style.color = 'inherit';
      return;
    }
    if (choice === 'B') {
      fb1.textContent = 'Correct.';
      fb1.style.color = 'green';
    } else {
      fb1.textContent = 'Wrong—try again.';
      fb1.style.color = 'red';
    }
  });
});
