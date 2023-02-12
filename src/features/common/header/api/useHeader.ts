import { type NavigateFunction, useNavigate } from 'react-router-dom'

interface hook {
  navigate: NavigateFunction
}

const useHeader = (): hook => {
  const navigate = useNavigate()

  return { navigate }
}

export default useHeader
