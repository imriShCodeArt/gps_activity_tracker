import React from 'react'

import { BrowserRouter as Root, Route, Routes } from 'react-router-dom'
import Home from '../ui/pages/Home'
import Theme from '../ui/theme'

function Router({ routes }) {
  return (
    <Root>
      <Theme>
        <Routes>
          <Route index element={<Home />} />
          {routes.map(({ elm, path }, index) => (
            <Route
              index={!path ? true : false}
              key={index}
              element={elm || <></>}
              path={path || null}
            />
          ))}
        </Routes>
      </Theme>
    </Root>
  )
}

export default Router
