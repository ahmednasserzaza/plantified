import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: keyof HTMLElementTagNameMap
}

/**
 * Wraps content in a container that fades/slides in the first time it
 * enters the viewport. Falls back to visible when IntersectionObserver
 * is unavailable and when the user prefers reduced motion (see CSS).
 *
 * Visibility is tracked in React state (not an imperative classList.add) so
 * that `is-visible` stays in the rendered className. Otherwise a parent that
 * re-renders this element with a different className prop (e.g. toggling
 * `is-switching`) would overwrite the DOM class and strip `is-visible`,
 * leaving the content stuck at opacity 0.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  const style: CSSProperties | undefined = delay
    ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties)
    : undefined

  return (
    // @ts-expect-error -- dynamic tag with a shared HTMLElement ref
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
