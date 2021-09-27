import { useEffect, useRef } from 'react'

export interface UseIsMountedFunction {
  (): boolean
}

export const useIsMounted: UseIsMountedFunction = () => {
  const value = useRef(false)
  useEffect(() => {
    value.current = true
    return () => {
      value.current = false
    }
  }, [])

  return value.current
}
