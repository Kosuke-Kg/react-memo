import useZustondStore from '../../store/useZustondStore'

const useZustandTestReset = () => {
  const  count = useZustondStore(state => state.count)
  const reset = useZustondStore(state => state.reset)
  return {count, reset}
}

export default  useZustandTestReset
