
const base64 = require('base-64');

export const encryptData = (data: string) => {
  const key = process.env.REACT_COOKIE_KEY
  return base64.encode(data + key)
}

export const decryptData = (data: string) => {
  const key = process.env.REACT_COOKIE_KEY
  return base64.decode(data).toString().replace(key, '')
}

export const encryptToken = (data: string) => {
    const key = process.env.REACT_COOKIE_KEY
    return base64.encode(data + key)
}

export const decryptToken = (data: string) => {
    const key = process.env.REACT_COOKIE_KEY
    return base64.decode(data).toString().replace(key, '')
}