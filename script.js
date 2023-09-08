var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')
var sidemeu = document.getElementById('sidemenu')
const msg = document.getElementById('msg')

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
}

function openmenu() {
  sidemeu.style.right = '0'
}

function closemenu() {
  sidemeu.style.right = '-200px'
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycbx3IJT_diXNnTtmY34oVcj_M8l-6qYhrGAu4jYHmPP8_CZ5kX5oJy9RTVOjVJjJRVf5Vg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Massage sent successfully'
      setTimeout(function () {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error('Error!', error.message))
})
