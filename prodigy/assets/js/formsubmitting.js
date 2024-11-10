// Get the form element
const form = document.getElementById('myForm');

// Add event listener to handle form submission
form.addEventListener('submit', function (event) {
    // console.log("Button clicked forma dded")
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data using the fetch API
    fetch('https://script.google.com/macros/s/AKfycbxB6vO8ns9nYxzB9Hk1fzO1r80BQunzQ2xKIanKizi7Gn6hgGC4vY9UYgFSYqll4eTF/exec', {
        method: 'POST',
        body: new URLSearchParams(data), // Send data as URL-encoded parameters
    })
        .then(response => response.json()) // Assuming the response is in JSON format
        .then(data => {
            console.log('Success:', data);
            // Optionally, display a success message or reset the form
            alert('Form submitted successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again later.');
        });
});
