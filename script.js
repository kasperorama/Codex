// Sjøgren's Travel — booking form (static demo, no backend)
(function () {
  const form = document.getElementById('booking-form');
  const adults = document.getElementById('adults');
  const room = document.getElementById('room');
  const errorEl = document.getElementById('form-error');
  const confirmation = document.getElementById('confirmation');

  function showError(message, field) {
    errorEl.textContent = message;
    errorEl.hidden = false;
    if (field) field.focus();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorEl.hidden = true;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();

    if (!name) return showError('Please tell us your name.', form.elements.name);
    if (!form.elements.email.checkValidity() || !email) {
      return showError('Please enter a valid e-mail address.', form.elements.email);
    }
    if (!data.get('adultsOnly')) {
      return showError('Sjøgren\'s Travel is strictly adults only – please confirm all travellers are 18+.', form.elements.adultsOnly);
    }

    const ref = 'SJ' + Math.random().toString(36).slice(2, 8).toUpperCase();
    const n = Number(adults.value);
    document.getElementById('conf-ref').textContent = ref;
    document.getElementById('conf-name').textContent = name;
    document.getElementById('conf-guests').textContent =
      n + (n === 1 ? ' ADULT' : ' ADULTS') + ', ' + (room.value === 'single' ? 'SINGLE' : 'DOUBLE');
    document.getElementById('tt-clock').textContent = new Date().toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });

    confirmation.hidden = false;
    confirmation.focus();
    confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    form.reset();
  });
})();
