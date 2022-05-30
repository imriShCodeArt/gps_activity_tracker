import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Avatar from '../../../components/base/Avatar'

function AccountHeader({ name, originCountry }) {
  const [accordionCells, setAccordionCells] = useState({
    header: false,
    content: false,
    moreContent: false,
  })

  function toggleItem(item) {
    return setAccordionCells({
      ...accordionCells,
      [item]: !accordionCells[item],
    })
  }

  return (
    <Card>
      <Accordion expanded={accordionCells.header}>
        <AccordionSummary>
          <CardHeader
            avatar={<Avatar size='xl' />}
            title={name || 'Your Name'}
            subheader={originCountry || 'Israel'}
          />
        </AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>

      <CardContent>
        <Accordion expanded={accordionCells.content}>
          <AccordionSummary>Content</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
        <Accordion expanded={accordionCells.moreContent}>
          <AccordionSummary>Content</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default AccountHeader
