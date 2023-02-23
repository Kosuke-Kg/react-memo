import { create } from 'zustand'

interface State{
  count: number
  countUp: () => void
  reset:() => void
}

const useZustondStore = create<State>()((set) => ({
  count: 0,
  countUp: () => set((s) => ({ count: s.count + 1 })),
  reset: () => set((s) => ({ count: 0 }))
}))

export default useZustondStore
