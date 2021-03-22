import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './redux/actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'
import NotFound from './views/NotFound'

const App = () => {
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    dispatch({ type: actions.SET_TOKEN, token })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {token && (
            <React.Fragment>
              <Route path="/" component={Home} />
            </React.Fragment>
          )}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
