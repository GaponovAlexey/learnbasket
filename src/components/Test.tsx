import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchUsers } from '../Redux/ActionCreators'

export const Test = () => {
  const { user, IsLoading, error } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <div>{IsLoading && <div>Загрузка идет...</div>}</div>
      <div>{error && <h1>{error}</h1>}</div>
      {JSON.stringify(user)}
    </div>
  )
}
