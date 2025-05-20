window.addEventListener('DOMContentLoaded', () => {
  const home   = document.getElementById('home');
  const trial1 = document.getElementById('trial1');
  const trial2 = document.getElementById('trial2');
  const trial3 = document.getElementById('trial3');
  const trial4 = document.getElementById('trial4');

  const start  = document.getElementById('start');
  const form1  = document.getElementById('form1');
  const form2  = document.getElementById('form2');
  const form3  = document.getElementById('form3');
  const form4  = document.getElementById('form4');

  const fb1 = document.getElementById('fb1');
  const fb2 = document.getElementById('fb2');
  const fb3 = document.getElementById('fb3');
  const fb4 = document.getElementById('fb4');

  start?.addEventListener('click', () => {
    home.classList.add('hidden');
    trial1.classList.remove('hidden');
  });

  form1?.addEventListener('submit', e => {
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
      setTimeout(() => {
        trial1.classList.add('hidden');
        trial2.classList.remove('hidden');
      }, 1000);
    } else {
      fb1.textContent = 'Wrong—try again.';
      fb1.style.color = 'red';
    }
  });

  form2?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form2.ans2.value;
    if (!choice) {
      fb2.textContent = 'Please select an answer.';
      fb2.style.color = 'inherit';
      return;
    }
    if (choice === 'D') {
      fb2.textContent = 'Correct.';
      fb2.style.color = 'green';
      setTimeout(() => {
        trial2.classList.add('hidden');
        trial3.classList.remove('hidden');
      }, 1000);
    } else {
      fb2.textContent = 'Wrong—try again.';
      fb2.style.color = 'red';
    }
  });

  form3?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form3.ans3.value;
    if (!choice) {
      fb3.textContent = 'Please select an answer.';
      fb3.style.color = 'inherit';
      return;
    }
    if (choice === 'C') {
      fb3.textContent = 'Correct.';
      fb3.style.color = 'green';
      setTimeout(() => {
        trial3.classList.add('hidden');
        trial4.classList.remove('hidden');
      }, 1000);
    } else {
      fb3.textContent = 'Wrong—try again.';
      fb3.style.color = 'red';
    }
  });

  form4?.addEventListener('submit', e => {
    e.preventDefault();
    const choice = form4.ans4.value;
    if (!choice) {
      fb4.textContent = 'Please select an answer.';
      fb4.style.color = 'inherit';
      return;
    }
   if (choice === 'C') {
  fb4.textContent = 'Correct. The lie unravels.';
  fb4.style.color = 'green';
  setTimeout(() => {
    trial4.classList.add('hidden');
    trial5.classList.remove('hidden');
  }, 1000);
}

    } else {
      fb4.textContent = 'Incorrect. That truth is masked.';
      fb4.style.color = 'red';
    }
  });
});

const form5 = document.getElementById('form5');
const fb5 = document.getElementById('fb5');

form5?.addEventListener('submit', e => {
  e.preventDefault();
  const choice = form5.ans5.value;
  if (!choice) {
    fb5.textContent = 'Please select an answer.';
    fb5.style.color = 'inherit';
    return;
  }
  if (choice === 'B') {
    fb5.textContent = 'Correct. Pain opens the final gate.';
    fb5.style.color = 'green';
  } else {
    fb5.textContent = 'The Veil watches, but does not move.';
    fb5.style.color = 'red';
  }
});
