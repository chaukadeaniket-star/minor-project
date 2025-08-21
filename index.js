document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const symptoms = document.getElementById('symptoms').value.trim();

  if (name === '' || age === '' || gender === '' || email === '' || phone === '' || symptoms === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simple success message (can be enhanced to store in DB or localStorage)
  document.getElementById('registrationForm').reset();
  document.getElementById('successMessage').classList.remove('hidden');
});
