// funktionen nedanför validerar en email.
function validera_email(email) {
  // Här sparar jag ett mönster som man kan använda för att testa om en email är riktig.
  var mönster = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // Här testar vi mönstret mot mailen som användaren har matat in. Vi får antingen true eller false tillbaka.
  // False betyder att mailen inte är godtagbar medans om det är true så är det tvärtom.
  return mönster.test(email);
}
// Variablar
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const conpass = document.getElementById('confirm_password')
const terms = document.getElementById('terms')
const form = document.getElementById('form')
const fel = document.getElementById('fel')

// All kod nedanför är kopplad till en event listner så denna kod kommer bara att köras när någon trycker på submit.
form.addEventListener('submit', (e) => {
  let messages = []

  // Kollar så någon har matat in ett namn.
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  // Kollar så email fältet inte är tomt.
  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }
  // Kör funktionen för att kolla om det är en riktig email.
  if (!validera_email(email.value)){
    messages.push('Enter a valid email')
  }
  // Kollar så password inte är tomt.
  if (password.value === '' || password.value == null) {
    messages.push('Password is required')
  }
  // Kollar så password är mer än 6 tecken.
  if (password.value.length < 6) {
    messages.push('Password must be atleast six characters')
  }
  // Kollar så confirm password inte är tomt.
  if (conpass.value === '' || conpass.value == null) {
    messages.push('Confirm password is required')
  }
  // Kollar så password och confirm password innehåller samma tecken.
  if (password.value !== conpass.value){
    messages.push('Password and confirm password need to be the same')
  }
  //  Kollar ifall dem har kryssat rutan.
  if (terms.checked == false){
    messages.push('You need to agree to the terms')
  }
  // Kollar om några fel ovan har skett och om det har skett så stoppar den submiten och meddelar användaren om felen.
  if (messages.length > 0) {
    e.preventDefault()
    fel.innerText = messages.join(', ')
  }

})