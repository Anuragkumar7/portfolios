const nav = document.getElementById('site-nav')
const toggle = document.querySelector('.nav-toggle')
const msg = document.getElementById('msg')
const year = document.getElementById('year')
const form = document.forms['submit-to-google-sheet']
const header = document.querySelector('.site-header')
const progress = document.querySelector('.scroll-progress')
const cursor = document.querySelector('.cursor')
const cursorDot = document.querySelector('.cursor-dot')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (year) year.textContent = new Date().getFullYear()

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
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'))
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
  const max = document.documentElement.scrollHeight - window.innerHeight
  if (progress) progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`
  header?.classList.toggle('scrolled', window.scrollY > 12)

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
highlightNav()

const reveals = document.querySelectorAll('.reveal')
if (reduceMotion) {
  reveals.forEach((el) => el.classList.add('visible'))
  document.getElementById('skills')?.classList.add('skills-on')
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        if (entry.target.closest('#about')) {
          document.getElementById('skills')?.classList.add('skills-on')
          animateCounts()
        }
        io.unobserve(entry.target)
      })
    },
    { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
  )
  reveals.forEach((el) => io.observe(el))
}

let counted = false
const animateCounts = () => {
  if (counted) return
  counted = true
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count)
    const duration = 1100
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const value = Math.round(target * (1 - Math.pow(1 - t, 3)))
      el.textContent = t < 1 ? String(value) : target === 8 ? '8+' : String(target)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
}

if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('has-cursor')
  let x = 0
  let y = 0
  let cx = 0
  let cy = 0

  window.addEventListener('mousemove', (event) => {
    x = event.clientX
    y = event.clientY
    cursor.style.opacity = '1'
    cursorDot.style.opacity = '1'
    cursorDot.style.transform = `translate(${x}px, ${y}px)`
  })

  const loop = () => {
    cx += (x - cx) * 0.18
    cy += (y - cy) * 0.18
    cursor.style.transform = `translate(${cx}px, ${cy}px)`
    requestAnimationFrame(loop)
  }
  loop()

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'))
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'))
  })

  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect()
      const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -8
      const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 8
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''
    })
  })

  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      const rect = el.getBoundingClientRect()
      const mx = event.clientX - rect.left - rect.width / 2
      const my = event.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${mx * 0.18}px, ${my * 0.18}px)`
    })
    el.addEventListener('mouseleave', () => {
      el.style.transform = ''
    })
  })
}

const canvas = document.getElementById('constellation')
const ctx = canvas?.getContext('2d')
if (canvas && ctx && !reduceMotion) {
  const dots = []
  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < 70; i += 1) {
    dots.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    })
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dots.forEach((dot, i) => {
      dot.x += dot.vx
      dot.y += dot.vy
      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1
      ctx.fillStyle = 'rgba(180, 190, 255, 0.55)'
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2)
      ctx.fill()
      for (let j = i + 1; j < dots.length; j += 1) {
        const other = dots[j]
        const dx = dot.x - other.x
        const dy = dot.y - other.y
        const dist = Math.hypot(dx, dy)
        if (dist < 120) {
          ctx.strokeStyle = `rgba(139, 124, 255, ${0.12 * (1 - dist / 120)})`
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      }
    })
    requestAnimationFrame(draw)
  }
  draw()
}

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

const roles = ['Java Full Stack Developer', 'MERN Stack Developer', 'C# .NET Developer']
let roleIndex = 0
let charIndex = 0
let deleting = false

const typeEffect = () => {
  const el = document.getElementById('typing-text')
  if (!el) return
  const current = roles[roleIndex]
  el.textContent = `${current.slice(0, charIndex)}|`

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
