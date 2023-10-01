import { decodeToken } from '@/utils/jwt'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage'

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage('accessToken', accessToken)
}

export const getUserInfo = () => {
  const authToken = getFromLocalStorage('accessToken')
  if (authToken) {
    return decodeToken(authToken)
  } else {
    return ''
  }
}

export const isLoggedIn = () => !!getFromLocalStorage('accessToken')
