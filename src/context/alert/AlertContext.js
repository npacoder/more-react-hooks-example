import { useReducer, createContext } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null
  
  const [state, dispath] = useReducer(alertReducer, initialState)
  
  const setAlert = (msg, type) => {
    dispath({
      type: 'SET_ALERT',
      payload: { msg, type }
    })
  }
  
  setTimeout(() => dispath({
    type: 'REMOVE_ALERT'
  }), 6000)
  
  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert
    }}>
      { children }
    </AlertContext.Provider>
  )
}

export default AlertContext