window.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('home');
  const trial1 = document.getElementById('trial1');
  const trial2 = document.getElementById('trial2');
  const trial3 = document.getElementById('trial3');
  const trial4 = document.getElementById('trial4');
  const trial5 = document.getElementById('trial5');
  const trialF1 = document.getElementById('trialF1');
  const trialF2 = document.getElementById('trialF2');
  const trialF3 = document.getElementById('trialF3');
  const trialF4 = document.getElementById('trialF4');

  const start = document.getElementById('start');
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');
  const form4 = document.getElementById('form4');
  const form5 = document.getElementById('form5');
  const formF1 = document.getElementById('formF1');
  const formF2 = document.getElementById('formF2');
  const formF3 = document.getElementById('formF3');
  const formF4 = document.getElementById('formF4');

  const fb1 = document.getElementById('fb1');
  const fb2 = document.getElementById('fb2');
  const fb3 = document.getElementById('fb3');
  const fb4 = document.getElementById('fb4');
  const fb5 = document.getElementById('fb5');
  const fbF1 = document.getElementById('fbF1');
  const fbF2 = document.getElementById('fbF2');
  const fbF3 = document.getElementById('fbF3');
  const fbF4 = document.getElementById('fbF4');

  if (start && home && trial1) {
    start.addEventListener('click', () => {
      home.classList.add('hidden');
      trial1.classList.remove('hidden');
      trial1.classList.add('glow');
    });
  }

  form1?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form1.ans1.value;
    trial1.classList.remove('glow');
    if (!choice) {
      fb1.textContent = 'Please select an answer.';
      return;
    }
    if (choice === 'B') {
      fb1.textContent = 'Correct. The shape listens.';
      fb1.style.color = 'green';
      setTimeout(() => {
        trial1.classList.add('hidden');
        trial2.classList.remove('hidden');
      }, 1000);
    } else {
      fb1.textContent = 'No. The shape recoils.';
      fb1.style.color = 'red';
      trial1.classList.add('shake');
      setTimeout(() => trial1.classList.remove('shake'), 500);
    }
  });

  form2?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form2.ans2.value;
    if (!choice) {
      fb2.textContent = 'Please select an answer.';
      return;
    }
    if (choice === 'D') {
      fb2.textContent = 'Correct. Discipline endures.';
      fb2.style.color = 'green';
      trial2.classList.add('glow');
      setTimeout(() => {
        trial2.classList.remove('glow');
        const msg = document.createElement('div');
        msg.className = 'scroll';
        msg.innerHTML = '<p><em>“You follow patterns, but not all threads lead home.”</em></p>';
        document.body.appendChild(msg);
        setTimeout(() => {
          msg.remove();
          trial2.classList.add('hidden');
          trial3.classList.remove('hidden');
          trial3.classList.add('flicker');
        }, 3000);
      }, 1200);
    } else {
      fb2.textContent = 'Wrong. You stepped out of rhythm.';
      fb2.style.color = 'red';
    }
  });

  form3?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form3.ans3.value;
    if (!choice) {
      fb3.textContent = 'Please select an answer.';
      return;
    }
    if (choice === 'C') {
      fb3.textContent = 'Correct. The thread remains unbroken.';
      fb3.style.color = 'green';
      trial3.classList.remove('flicker');
      setTimeout(() => {
        trial3.classList.add('hidden');
        trial4.classList.remove('hidden');
        trial4.classList.add('vignette');
      }, 1000);
    } else {
      fb3.textContent = 'No. The pattern breaks around you.';
      fb3.style.color = 'red';
    }
  });

  form4?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form4.ans4.value;
    if (!choice) {
      fb4.textContent = 'Please select an answer.';
      return;
    }
    if (choice === 'C') {
      fb4.textContent = 'Correct. The lie unravels.';
      fb4.style.color = 'green';
      trial4.classList.remove('vignette');
      setTimeout(() => {
        trial4.classList.add('hidden');
        trial5.classList.remove('hidden');
        trial5.classList.add('breathe');
      }, 1000);
    } else {
      fb4.textContent = 'Wrong. The Veil blinks.';
      fb4.style.color = 'red';
    }
  });

  form5?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form5.ans5.value;
    if (!choice) {
      fb5.textContent = 'Please select an answer.';
      return;
    }
    if (choice === 'B') {
      fb5.textContent = 'Correct. Pain opens the gate.';
      fb5.style.color = 'green';
      trial5.classList.remove('breathe');
      setTimeout(() => {
        trial5.classList.add('hidden');
      }, 1000);
    } else {
      fb5.textContent = 'The Veil watches. But does not move.';
      fb5.style.color = 'red';
      setTimeout(() => {
        trial5.classList.add('hidden');
        trialF1.classList.remove('hidden');
      }, 1000);
    }
  });

  formF1?.addEventListener('submit', e => {
    e.preventDefault();
    trialF1.classList.add('hidden');
    trialF2.classList.remove('hidden');
  });

  formF2?.addEventListener('submit', e => {
    e.preventDefault();
    trialF2.classList.add('hidden');
    trialF3.classList.remove('hidden');
  });

  formF3?.addEventListener('submit', e => {
    e.preventDefault();
    trialF3.classList.add('hidden');
    trialF4.classList.remove('hidden');
  });

  formF4?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = formF4.ansF4.value;
    if (!choice) {
      fbF4.textContent = 'Choose.';
      return;
    }

    if (choice === 'A') {
      trialF4.classList.add('hidden');
      document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
      document.querySelectorAll('p[id^="fb"]').forEach(p => p.textContent = '');
      trial5.classList.remove('hidden');
      fb5.textContent = 'You may choose again... but not forever.';
      fb5.style.color = '#777';
      setTimeout(() => {
        fb5.textContent = '';
        fb5.style.color = 'inherit';
      }, 3000);
    } else {
      fbF4.textContent = 'The Veil forgets you too.';
      fbF4.style.color = '#990000';
      setTimeout(() => {
        trialF4.innerHTML = '<h2 style="color:#990000;">You Are Gone</h2><p><em>Even the Veil cannot find you.</em></p>';
      }, 2000);
    }
  });
});
