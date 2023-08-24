let password_input = document.querySelectorAll('.password');
const password_invalid = document.querySelector('#invalid-pswrd');

function validatePassword() {

    let input1 = password_input[0].value;
    let input2 = password_input[1].value; 
    if(input1.length > 0 && input2.length > 0 && input1 === input2) {
        password_input[0].classList.remove('error');
        password_input[1].classList.remove('error');
        password_invalid.textContent = null;
    } else {
        password_input[0].classList.add('error');
        password_input[1].classList.add('error');
        password_invalid.textContent = '* Passwords do not match';
    }
}

password_input.forEach(function(el) {
    el.addEventListener('focusout', function(evt) {
        validatePassword();
    })
})

