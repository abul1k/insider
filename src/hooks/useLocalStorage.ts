import { useState } from 'react'

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void
type RemoveValue = () => void

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T, SetValue<T>, RemoveValue] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error)
      return initialValue
    }
  })

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      localStorage.setItem(key, JSON.stringify(valueToStore))
      setStoredValue(valueToStore)
    } catch (error) {
      console.error('Error saving data to localStorage:', error)
    }
  }

  const removeValue: RemoveValue = () => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing data from localStorage:', error)
    }
  }

  return [storedValue, setValue, removeValue]
}
