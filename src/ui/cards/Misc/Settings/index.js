import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'

import SettingsOutlined from '@mui/icons-material/SettingsOutlined'

function Settings({ personalDetails, data, preferences, updateParam }) {
  const { fName, lName, userName, email, phone } = personalDetails
  const { age, height, weight, preferedActivity } = data || {}
  const { distanceUnit, colorMode } = preferences || {} //  *distanceUnit:choose meters/feet.

  const EditableItem = ({ param, paramName }) => {
    return (
      <ListItem>
        <Typography sx={{ cursor: 'default' }}>{`${paramName}`}:</Typography>
        <TextField
          onBlur={() => updateParam(paramName, param)}
          sx={{ marginLeft: '.75em' }}
          placeholder={param}
          variant={'standard'}
          InputProps={{ disableUnderline: true }}
        />
      </ListItem>
    )
  }

  return (
    <Card sx={{ minHeight: '100vh' }}>
      <CardHeader
        title={
          <>
            <SettingsOutlined sx={{ fontSize: '1.2rem' }} />
            Settings
          </>
        }
      />
      <CardContent>
        <List>
          <EditableItem param={fName} paramName='First Name' />
          <EditableItem param={lName} paramName='Last Name' />
        </List>
      </CardContent>
    </Card>
  )
}

Settings.defaultProps = {
  personalDetails: {
    fName: 'Imri',
    lName: 'Wainberg',
    userName: 'DEFAULT',
    email: 'DEFAULT',
    phone: 'DEFAULT',
  },
  data: { age: 10, height: 10, weight: 10, preferedActivity: 'run' },
  preferences: { distanceUnit: 'metric', colorMode: 'normal' },
}

Settings.propTypes = {
  personalDetails: PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    userName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  data: PropTypes.shape({
    age: PropTypes.number,
    height: PropTypes.number,
    weight: PropTypes.number,
    preferedActivity: PropTypes.string,
  }),
  preferences: PropTypes.shape({
    distanceUnit: PropTypes.string,
    colorMode: PropTypes.string,
  }),
}

export default Settings
