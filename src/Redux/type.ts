export interface user {
  id: number
  name: string
  email: string
}

export interface CounterState {
  IsLoading: boolean
  error: string
  user: user[]
}