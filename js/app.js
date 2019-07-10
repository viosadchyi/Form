var button = document.getElementById( 'button' );
button.addEventListener ('click', saySmth);
function saySmth(event) {
    console.log (event);
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    if (firstName.length < 5) {
        alert ('First name is too short');
    } 
    if (lastName.length < 5) {
    alert ('Last name is too short');
    }
    if (email.length < 5) {
    alert ('Email is too short');
    } else {
    alert ('Success!');
    }
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    console.log (user);
    
} 
