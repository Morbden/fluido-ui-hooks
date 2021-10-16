import { useState } from 'react'

export interface useBooleanFunction {
  (initial?: boolean): [
    boolean,
    { on: VoidFunction; off: VoidFunction; toggle: VoidFunction },
  ]
}

export const useBoolean: useBooleanFunction = (initial = false) => {
  const [value, setValue] = useState(initial)

  return [
    value,
    {
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((v) => !v),
    },
  ]
}
