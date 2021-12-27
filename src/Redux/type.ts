import { SerializedError } from "@reduxjs/toolkit";

export interface user {
  id: number
  name: string
  email: string
}

export interface CounterState {
  IsLoading: boolean
  error: SerializedError | any
  user: user[]
}