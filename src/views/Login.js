import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import * as actions from '../redux/actions'
import * as Api from '../modules/Api'

const loginRequest = async (email, password) => {
  const res = await Api.request('/auth/login', {
    method: 'POST',
    body: { email, password }
  })

  if (res.status === 201) {
    return res.data.access_token
  }

  alert('Zle')
}

const Login = (props) => {
  const [email, setEmail] = React.useState('superadmin@test.pl')
  const [password, setPassword] = React.useState('11111111')
  const dispatch = useDispatch()
  const history = useHistory()

  const loginHandler = async () => {
    const token = await loginRequest(email, password)
    if (!token) return

    localStorage.setItem('token', token)
    dispatch({ type: actions.SET_TOKEN, token })
    history.push('/')
  }

  return (
    <div>
      <label>email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={loginHandler}>login</button>
    </div>
  )
}

export default Login
