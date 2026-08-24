import { useEffect } from 'react'

export function useSiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const header = document.querySelector('.site-header')
    const progress = document.querySelector('.scroll-progress')
    const cursor = document.querySelector('.cursor')
    const cursorDot = document.querySelector('.cursor-dot')
    const canvas = document.getElementById('constellation')

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progress) progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`
      header?.classList.toggle('scrolled', window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    let constellationRaf
    let cursorRaf
    const cleanups = []

    if (!reduce && canvas) {
      const ctx = canvas.getContext('2d')
      const dots = []
      const resize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resize()
      window.addEventListener('resize', resize)
      cleanups.push(() => window.removeEventListener('resize', resize))
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
        constellationRaf = requestAnimationFrame(draw)
      }
      draw()
    }

    if (!reduce && window.matchMedia('(pointer: fine)').matches && cursor && cursorDot) {
      document.body.classList.add('has-cursor')
      let x = 0
      let y = 0
      let cx = 0
      let cy = 0
      const move = (event) => {
        x = event.clientX
        y = event.clientY
        cursor.style.opacity = '1'
        cursorDot.style.opacity = '1'
        cursorDot.style.transform = `translate(${x}px, ${y}px)`
      }
      const loop = () => {
        cx += (x - cx) * 0.18
        cy += (y - cy) * 0.18
        cursor.style.transform = `translate(${cx}px, ${cy}px)`
        cursorRaf = requestAnimationFrame(loop)
      }
      window.addEventListener('mousemove', move)
      loop()
      const hoverOn = () => cursor.classList.add('grow')
      const hoverOff = () => cursor.classList.remove('grow')
      const bindHover = () => {
        document.querySelectorAll('a, button').forEach((el) => {
          el.addEventListener('mouseenter', hoverOn)
          el.addEventListener('mouseleave', hoverOff)
        })
      }
      bindHover()
      cleanups.push(() => {
        window.removeEventListener('mousemove', move)
        document.body.classList.remove('has-cursor')
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (constellationRaf) cancelAnimationFrame(constellationRaf)
      if (cursorRaf) cancelAnimationFrame(cursorRaf)
      cleanups.forEach((fn) => fn())
    }
  }, [])
}
