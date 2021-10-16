import { useState } from 'react'

export interface useRerenderFunction {
  (): VoidFunction
}

export const useRerender: useRerenderFunction = () => {
  const [, setValue] = useState(false)
  return () => setValue((e) => !e)
}
