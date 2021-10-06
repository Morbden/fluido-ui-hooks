import { useLayoutEffect, useState } from 'react'

export interface UseMediaQuery {
  (query: string): boolean
}

export const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false)

  useLayoutEffect(() => {
    const mql = window.matchMedia(query)
    setValue(mql.matches)
    const handleChange = (ev: MediaQueryListEvent) => {
      setValue(ev.matches)
    }
    mql.addEventListener('change', handleChange)

    return () => {
      mql.removeEventListener('change', handleChange)
    }
  }, [query])

  return value
}
