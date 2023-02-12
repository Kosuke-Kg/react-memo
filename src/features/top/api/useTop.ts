import { type NavigateFunction, useNavigate } from 'react-router-dom'

interface funcs {
  navigate: NavigateFunction
}

const useTop = (): funcs => {
  const navigate = useNavigate()

  return { navigate }
}

export default useTop
