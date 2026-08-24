import { useEffect } from 'react'

export function useReveal(deps = []) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll('.reveal')
    if (reduce) {
      nodes.forEach((el) => el.classList.add('visible'))
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    )
    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, deps)
}
