import { ACCESS_TOKEN } from '@/constants/storageKey'
import { decodeToken } from '@/utils/jwt'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage'

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(ACCESS_TOKEN, accessToken)
}

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(ACCESS_TOKEN)
  if (authToken) {
    return decodeToken(authToken)
  } else {
    return ''
  }
}

export const isLoggedIn = () => !!getFromLocalStorage(ACCESS_TOKEN)

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key)
}
