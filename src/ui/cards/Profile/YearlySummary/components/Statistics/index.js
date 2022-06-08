import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import Body1 from 'base/Typography/Body1'
import Heading6 from 'base/Typography/Heading6'

function Statistics() {
  const LineTitle = ({ title }) => {
    return (
      <ListItem sx={{bgcolor:'#e5e5e5'}} dense>
        <ListItemText>
          <Heading6 text={title} />
        </ListItemText>
      </ListItem>
    )
  }
  const LineDetails = ({ title, value, unitType }) => {
    return (
      <ListItem>
        <ListItemText>
          <Body1 text={title} />
        </ListItemText>
        <ListItemText sx={{textAlign:'right'}}>
            <Body1 text={value || '0'} />
        </ListItemText>
      </ListItem>
    )
  }
  return (
    <List>
      <LineTitle title={'avg weekly activity'} />
      <LineDetails title={'Runs'}  />
      <LineDetails title={'time'}  />
      <LineDetails title={'Distance'}  />
      <LineDetails title={'Elevation Gain'}  />
      <LineTitle title={'Year to date'} />
      <LineDetails title={'Runs'}  />
      <LineDetails title={'time'}  />
      <LineDetails title={'Distance'}  />
      <LineDetails title={'Elevation Gain'}  />
      <LineTitle title={'all time'} />
      <LineDetails title={'Runs'}  />
      <LineDetails title={'Distance'}  />
      <LineTitle title={'estimated best effort'} />
      <LineDetails title={'1k'}  />
      <LineDetails title={'1 mile'}  />
      <LineDetails title={'5k'}  />
      <LineDetails title={'10k'}  />
    </List>
  )
}

export default Statistics
