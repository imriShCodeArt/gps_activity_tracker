import Theme from './ui/theme'
import React from 'react'
import Router from './Router'
import Home from './ui/pages/Home'
import Record from './ui/pages/Record'
import Profile from './ui/pages/Profile'

function App() {
  return (
    
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
    
  )
}

export default App
