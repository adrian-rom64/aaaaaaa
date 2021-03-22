import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './redux/actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: actions.INCREMENT })
  }

  return (
    <div className="App">
      {counter}
      <button onClick={increment}>increment</button>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
