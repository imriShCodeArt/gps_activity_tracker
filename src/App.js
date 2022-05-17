import Theme from './ui/theme'
import Home from './ui/pages/Home'

function App() {

  return <Theme>
    <Home 
    posts={[
      {title: 'Morning Run', dateTime: new Date().toISOString(), runDistance: 3, runTime: 200},
      {title: 'Morning Run', dateTime: new Date().toISOString(), runDistance: 3, runTime: 257},
      {title: 'Morning Run', dateTime: new Date().toISOString(), runDistance: 3, runTime: 257},
    ]}/>
  </Theme>
}

export default App
