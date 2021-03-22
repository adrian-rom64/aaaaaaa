import store from '../redux/store'

const baseUrl = 'http://localhost:3001'

export const request = async (path, options = {}) => {
  // const token = store.getState().token

  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    body: JSON.stringify(options.body),
    headers: { ...options.headers, 'Content-Type': 'application/json' }
  })

  return { data: await res.json(), status: res.status }

  // const res = fetch(`${baseUrl}${path}`, {
  //   headers: { Authorization: `Bearer ${token}`, ...options.headers },
  //   ...options
  // })
}
