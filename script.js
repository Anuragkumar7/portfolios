const nav = document.getElementById('site-nav')
const toggle = document.querySelector('.nav-toggle')
const msg = document.getElementById('msg')
const year = document.getElementById('year')
const form = document.forms['submit-to-google-sheet']

if (year) {
  year.textContent = new Date().getFullYear()
}

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
})

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open')
    toggle?.setAttribute('aria-expanded', 'false')
  })
})

document.querySelectorAll('.tab-link').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-link').forEach((item) => {
      item.classList.remove('active')
      item.setAttribute('aria-selected', 'false')
    })
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.remove('active')
    })
    button.classList.add('active')
    button.setAttribute('aria-selected', 'true')
    document.getElementById(button.dataset.tab)?.classList.add('active')
  })
})

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((item) => {
      item.classList.remove('active')
    })
    button.classList.add('active')
    const filter = button.dataset.filter
    document.querySelectorAll('.work-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter
      card.style.display = show ? '' : 'none'
    })
  })
})

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]')

const highlightNav = () => {
  const y = window.scrollY + 120
  sections.forEach((section) => {
    const top = section.offsetTop
    const bottom = top + section.offsetHeight
    if (y >= top && y < bottom) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`)
      })
    }
  })
}

window.addEventListener('scroll', highlightNav, { passive: true })

const scriptURL =
  'https://script.google.com/macros/s/AKfycbx3IJT_diXNnTtmY34oVcj_M8l-6qYhrGAu4jYHmPP8_CZ5kX5oJy9RTVOjVJjJRVf5Vg/exec'

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      msg.textContent = 'Message sent successfully.'
      form.reset()
      setTimeout(() => {
        msg.textContent = ''
      }, 5000)
    })
    .catch(() => {
      msg.textContent = 'Something went wrong. Please email me instead.'
    })
})

const roles = [
  'Java Full Stack Developer',
  'MERN Stack Developer',
  'C# .NET Developer',
]

let roleIndex = 0
let charIndex = 0
let deleting = false

const typeEffect = () => {
  const el = document.getElementById('typing-text')
  if (!el) return
  const current = roles[roleIndex]
  el.textContent = current.slice(0, charIndex) + (deleting ? '' : '|')

  if (!deleting && charIndex < current.length) {
    charIndex += 1
    setTimeout(typeEffect, 80)
    return
  }

  if (!deleting && charIndex === current.length) {
    deleting = true
    setTimeout(typeEffect, 1200)
    return
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1
    setTimeout(typeEffect, 40)
    return
  }

  deleting = false
  roleIndex = (roleIndex + 1) % roles.length
  setTimeout(typeEffect, 250)
}

document.addEventListener('DOMContentLoaded', typeEffect)
