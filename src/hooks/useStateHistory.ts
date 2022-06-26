import { useState } from "react"

const useStateHistory = (key: string, defaultValue: string | number | boolean) => {
  const [data, setData] = useState(() => window.history.state[key] === undefined ? defaultValue : window.history.state[key])
  return [
    data,
    (newData: string | number | boolean) => {
      window.history.replaceState({
        ...window.history.state,
        [key]: newData
      }, '')
      setData(newData)
    }
  ]
}

export default useStateHistory
