import { RefObject, useEffect, useRef, useState } from 'react'

import useMatchMedia from './useMatchMedia'

interface UseHover<T> {
  ref: RefObject<T | null>
  isHovered: boolean
}

function useHover<T extends HTMLElement>(): UseHover<T> {
  const [isHovered, setHovered] = useState(false)
  const isSupported = useMatchMedia('(hover: hover) and (pointer: fine)')
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!isSupported) {
      return
    }

    const element = ref.current
    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)

    element?.addEventListener('mouseenter', onMouseEnter)
    element?.addEventListener('mouseleave', onMouseLeave)

    return () => {
      element?.removeEventListener('mouseenter', onMouseEnter)
      element?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [isSupported])

  return { ref, isHovered }
}

export default useHover
