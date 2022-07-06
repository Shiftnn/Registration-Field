let username = document.getElementById('username').innerHTML
let submit = document.getElementById('submit').addEventListener('click', () => {
    let form = document.querySelectorAll('.form-control')

    let username = document.getElementById('username')
    let mail = document.getElementById('email')
    let password = document.getElementById('password')
    let passwordSec = document.getElementById('password2')

    let usernameSplit = username.value.split("")
    let mailSplit = mail.value.split("")
    let passwordSplit = password.value.split("")
    let passwordSecSplit = passwordSec.value.split("")

    
    // first input - username
    if (usernameSplit.length < 3) {
        form[0].classList.add('error')
    } else {
        if (form[0].classList.contains('error')) {
            form[0].classList.replace('error','success')
        } else {
            form[0].classList.add('success')
        }
    }
    // second input - Email 
    let sum = 0
    for(let i = 0; mailSplit.length >= i; i++){
        if (mailSplit[i] === '@') sum += 1
        if (mailSplit[i] === '.') sum += 1
    }
    
    if (sum < 2) {
        form[1].classList.add('error')
    } else {
        if (form[1].classList.contains('error')) {
            form[1].classList.replace('error','success')
        } else {
            form[1].classList.add('success')
        }
    }
    // third input - Password 
    if (passwordSplit.length < 6) {
        form[2].classList.add('error')
    } else {
        if (form[2].classList.contains('error')) {
            form[2].classList.replace('error','success')
        } else {
            form[2].classList.add('success')
        }
    }
    // fourth input - Password confirm 
    if (passwordSecSplit.length < 6) {
        form[3].classList.add('error')
    } else if (password.value === passwordSec.value && passwordSecSplit.length > 4) {
        if (form[3].classList.contains('error')) {
            form[3].classList.replace('error','success')
        } else {
            form[3].classList.add('success')
        }
    }
})
