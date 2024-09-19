import { useState } from 'react'

export function useInput() {
  const [isFocus, setIsFocus] = useState(false)

  function handleFocus(focus: boolean) {
    setIsFocus(focus)
  }

  return { isFocus, handleFocus }
}
