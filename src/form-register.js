const scriptURL = 'https://script.google.com/macros/s/AKfycbywusRZqDGnmwA7YivEh6C-6BmPJT3LO-UIw-yEggtWPXG_1abrvdrN_0zAmurRMze25w/exec';
const form = document.forms['form-register'];

form.addEventListener('submit', e => {
  e.preventDefault();

  const btnSubmit = e.target.querySelector('button[type="submit"]');
  const myAlert = document.querySelector('.my-alert');

  // Disable the submit button and change its text
  btnSubmit.disabled = true;
  btnSubmit.innerHTML = 'Sedang dikirim...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Enable the submit button and change its text back
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = 'Simpan';
      
      if (response.ok) {
        myAlert.classList.remove('d-none'); // Show the alert
        form.reset();
        console.log('Success!', response);
      } else {
        console.error('Gagal mengirim data. Status:', response.status);
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});

// Event listener untuk menangani penutupan modal
const myModal = document.getElementById('exampleModal'); // Ganti dengan ID modal Anda
myModal.addEventListener('hidden.bs.modal', function () {
  const myAlert = document.querySelector('.my-alert');
  myAlert.classList.add('d-none'); // Sembunyikan alert ketika modal ditutup
});
