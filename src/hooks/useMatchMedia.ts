import { useEffect, useState } from 'react'

function useMatchMedia(query: string): boolean {
  const [isMatched, setMatched] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const matchMedia = window.matchMedia(query)
    const onChange = (e: MediaQueryListEvent): void => setMatched(e.matches)

    matchMedia.addEventListener('change', onChange)
    return () => matchMedia.removeEventListener('change', onChange)
  }, [query])

  return isMatched
}

export default useMatchMedia
