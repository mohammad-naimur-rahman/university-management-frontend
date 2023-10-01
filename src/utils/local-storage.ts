export const setToLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(value))
}
