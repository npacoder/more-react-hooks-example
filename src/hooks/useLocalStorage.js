import { useState } from 'react'


function useLocalStorage(key, initialValue) {
  
  const [ localStorageValue, setLocalStorageValue ] = useState(() => getLocalStorageValue(key, initialValue))
  
  const setValue = (value) => {
    // Check if function
    const valueToStorage = value instanceof Function ? value(localStorageValue) : value
    // Set to state
    setLocalStorageValue(value)
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStorage))
  }
  
  return [ localStorageValue, setValue ]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage