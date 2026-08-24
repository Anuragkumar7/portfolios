import { useEffect } from 'react'
import { roles } from '../data'

export function useTypewriter(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    let roleIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = roles[roleIndex]
      el.textContent = `${current.slice(0, charIndex)}|`
      if (!deleting && charIndex < current.length) {
        charIndex += 1
        timer = setTimeout(tick, 80)
        return
      }
      if (!deleting && charIndex === current.length) {
        deleting = true
        timer = setTimeout(tick, 1200)
        return
      }
      if (deleting && charIndex > 0) {
        charIndex -= 1
        timer = setTimeout(tick, 40)
        return
      }
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
      timer = setTimeout(tick, 250)
    }

    tick()
    return () => clearTimeout(timer)
  }, [ref])
}
