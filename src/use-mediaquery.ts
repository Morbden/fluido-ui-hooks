import { useLayoutEffect, useState } from 'react'

export interface UseMediaquery {
  (query: string): boolean
}

export const useMediaquery = (query: string) => {
  const [value, setValue] = useState(false)

  useLayoutEffect(() => {
    const mql = window.matchMedia(query)
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
