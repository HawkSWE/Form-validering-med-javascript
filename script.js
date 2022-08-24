const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const conpass = document.getElementById('confirm_password')
const form = document.getElementById('form')
const fel = document.getElementById('fel')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false){
    messages.push('Enter a valid email')
  }

  if (password.value === '' || password.value == null) {
    messages.push('Password is required')
  }

  if (password.value.length < 6) {
    messages.push('Password must be atleast six characters')
  }

  if (conpass.value === '' || conpass.value == null) {
    messages.push('Confirm password is required')
  }

  if (password.value !== conpass.value){
    messages.push('Password and confirm password need to be the same')
  }

  if (messages.length > 0) {
    e.preventDefault()
    fel.innerText = messages.join(', ')
  }

})