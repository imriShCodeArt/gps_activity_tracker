import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
} from '@mui/material'
import Heading5 from 'base/Typography/Heading5'
import Statistics from './components/Statistics'
import Segments from './components/Segments'
import Routes from './components/Routes'
import Activities from './components/Activities'

function YearlySummary() {
  const Item = ({ title, component }) => {
    return (
      <Accordion>
        <AccordionSummary>
          <Heading5 size='sm'>{title}</Heading5>
        </AccordionSummary>
        <AccordionDetails sx={{p:0}}>
          {component}
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Item title={'Activities'} component={<Activities />} />
        <Item title={'Statistics'} component={<Statistics />} />
        <Item title={'Routes'} component={<Routes />} />
        <Item title={'Segments'} component={<Segments />} />
      </CardContent>
    </Card>
  )
}

export default YearlySummary
