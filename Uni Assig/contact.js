function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields that is required.');
        return;
    }
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset(); //
}
