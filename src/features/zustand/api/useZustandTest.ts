import useZustondStore from '../../store/useZustondStore'

const useZustandTest = () =>{
  const count = useZustondStore(state => state.count)
  const countUp = useZustondStore(state => state.countUp)

  return{count, countUp}
}

export default  useZustandTest
