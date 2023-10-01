import jwtDecode from 'jwt-decode'

export const decodeToken = (token: string) => jwtDecode(token)
