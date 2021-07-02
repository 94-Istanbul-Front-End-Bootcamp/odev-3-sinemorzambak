const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Kullanıcı Adı Boş')
    } else {
        setSuccesFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email boş bırakılamaz.')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Geçerli bir Email Adresi')
    } else {
        setSuccesFor(email)
    }


    if (passwordValue === '') {
        setErrorFor(password, 'Şifre boş bırakılamaz.')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password, 'Şifreler eşleşmiyor.')
    } else {
        setSuccesFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Şifre boş bırakılamaz.')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Şifreler eşleşmiyor.')
    } else {
        setSuccesFor(password2);
    }

    if (checkbox === '') {
        setErrorFor(checkbox, 'Checkbox boş')
    } else {
        setSuccesFor(checkbox);
    }

}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}