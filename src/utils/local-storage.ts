export const setToLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') return
  return JSON.parse(localStorage.getItem(key) || '{}')
}
