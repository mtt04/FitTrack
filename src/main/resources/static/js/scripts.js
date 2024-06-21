document.getElementById('userForm').addEventListener('submit'), function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success: ', data);
        alert('User created successfully!');
    })
    .catch((error) => {
        console.error('Error: ', error);
        alert('Error creating user.');
    })
}