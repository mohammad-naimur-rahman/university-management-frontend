import { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface IDebounce {
  searchQuery: string
  delay: number
}

export const useDebounce = ({ searchQuery, delay }: IDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState(searchQuery)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchQuery)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [delay, searchQuery])

  return debouncedValue
}
