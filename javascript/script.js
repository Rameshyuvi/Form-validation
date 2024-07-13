
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");

    // Clear previous error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";

    if (name.trim() === '') {
        nameError.innerHTML = 'Invalid: Name is required';
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailRegex.test(email)) {
        emailError.innerHTML = 'Invalid: Email is required';
        return false;
    }

    // If all validations pass, form submission successful
    alert("Submit successful");
    return true;
}
