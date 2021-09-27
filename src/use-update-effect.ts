import { useEffect, useRef } from 'react'

export interface UseUpdateEffectFunction {
  (cb: VoidFunction, dependencies?: any[]): void
}

export const useUpdateEffect: UseUpdateEffectFunction = (
  cb,
  dependencies = [],
) => {
  const firstUse = useRef(true)
  useEffect(() => {
    if (firstUse.current) {
      firstUse.current = false
      return
    }

    return () => cb()
  }, dependencies)
}
