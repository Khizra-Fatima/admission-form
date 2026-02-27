document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var form = event.target;
  var data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thank you for filling Enrollment Form. We will get back to you soon!");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const button = document.querySelector('.contact-form button');
  button.innerHTML = 'Submitting...';

  setTimeout(() => {
    button.innerHTML = 'Submit Form';
    alert('Message sent successfully!');
  }, 2000);
});

