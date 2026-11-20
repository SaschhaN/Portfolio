import { useEffect, useState } from 'react'

/**
 * useState that is also saved in localStorage.
 * Storage can be unavailable (private windows, blocked cookies), so every access is guarded.
 */
export function useLocalStorage<T>(key: string, initial: () => T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) return JSON.parse(stored) as T
    } catch {
      /* ignore and use the initial value */
    }
    return initial()
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage unavailable: the value just isn't remembered */
    }
  }, [key, value])

  return [value, setValue] as const
}
