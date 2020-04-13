import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'

const StateContext = React.createContext({})

export function useAppState() {
  return React.useContext(StateContext)
}

function Router() {
  const [state, setState] = React.useState({})
  return (
    <StateContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </StateContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
