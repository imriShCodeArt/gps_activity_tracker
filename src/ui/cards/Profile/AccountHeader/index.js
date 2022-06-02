import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Collapse,
  Stack,
} from '@mui/material'
import React, { useState } from 'react'
import Avatar from '../../../components/base/Avatar'
import Form from '../../../components/form/Form'
import TextField from '../../../components/form/TextField'
import Heading5 from '../../../components/base/Typography/Heading5'
import Button from '../../../components/base/Button/BtnSecondary'
import Heading6 from '../../../components/base/Typography/Heading6'
import StatsField from '../../../components/x/Map/StatsField'
import { PinDropOutlined } from '@mui/icons-material'

function AccountHeader({ meta, address, performance }) {
  const [open, setOpen] = useState(false)

  function toggleItem() {
    setOpen(!open)
  }

  const { name, country, birthDay, gender } = meta || {}
  const { houseNum, street, city } = address || {}
  const { weight, height, activityType } = performance || {}

  return (
    <Card>
      <CardHeader
        avatar={<Avatar size='xl' />}
        title={<Heading5 text={name || 'Your Name'} />}
        subheader={
          <Stack direction={'row'}>
            <PinDropOutlined />
            <Heading6 text={country || 'Israel'} />
          </Stack>
        }
      />
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Box display={'flex'}>
          <StatsField
            title={'Followers'}
            value={'14'}
            titleColor='primary'
          />
          <StatsField
            title={'Following'}
            value={'4'}
            titleColor='primary'
          />
        </Box>
        <Box display={'flex'}>
          <Button text={'Edit'} onClick={toggleItem} />
        </Box>
      </CardActions>

      <Collapse in={open}>
        <Form title={<Heading6 text='Personal Details' />}>
          <TextField text='First Name' label id='first-name' />
        </Form>
      </Collapse>
    </Card>
  )
}

export default AccountHeader
