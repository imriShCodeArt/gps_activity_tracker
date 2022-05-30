import { Box } from '@mui/material'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import React from 'react'

function Map() {
  const Home = () => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: 'AIzaSyAgGvJN_2mBAeeNHpnpBlPPB1Vp2uN9cig',
    })

    if (!isLoaded) return <div>Loading...</div>

    return <Root />
  }

  function Root() {
    return (
        <GoogleMap
          zoom={10}
          center={{ lat: 44, lng: -80 }}
          mapContainerClassName='map'
        />
    )
  }

  return <Home />
}

export default Map
