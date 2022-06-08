import Theme from './ui/theme'
import React from 'react'
import Router from './Router'
import Home from './ui/pages/Home'
import Record from './ui/pages/Record'
import Profile from './ui/pages/Profile'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <ReduxProvider store={store}>
      <Router
        routes={[
          {
            elm: <Home />,
          },
          {
            elm: <Profile />,
            path: '/profile',
          },
          {
            elm: <Record />,
            path: '/profile',
          },
        ]}
      />
    </ReduxProvider>
  )
}

export default App
