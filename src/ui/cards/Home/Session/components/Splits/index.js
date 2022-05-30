import { Grid } from '@mui/material'
import React from 'react'
import Heading6 from '../../../../../components/base/Typography/Heading6'
import StatsHeading from '../../../../../components/base/Typography/StatsHeading'
import StatsValue from '../../../../../components/base/Typography/StatsValue'
import SubHeader1 from '../../../../../components/base/Typography/SubHeader1'

function Splits({ splitsArr }) {
  const Lines = splitsArr.map(({ pace, paceUnit, elevation }, index) => {
    //  splits the splitsArr to lines, each k/m gets a single line

    const paceTimeStr = () => {
      //  calcs and returns the pace-time as a formated string- M:SS / MM:SS
      let m = Math.floor(pace / 60),
        tmpS = pace % 60,
        s = tmpS < 10 ? `${0}${tmpS}` : `${pace % 60}`,
        str = `${m}:${s}`
      return str
    }

    return (
      <Grid key={index} mt={0.25} item container xs={12}>
        <Grid textAlign={'center'} xs={1} item>
          <StatsHeading>{index + 1}</StatsHeading>
        </Grid>
        <Grid item xs={1}>
          <StatsValue>{paceTimeStr()}</StatsValue>
        </Grid>
        <Grid item xs={9} bgcolor='#5BF'></Grid>
        <Grid textAlign={'center'} item xs={1}>
          <StatsValue>{elevation}</StatsValue>
        </Grid>
      </Grid>
    )
  })

  const tableHead = () => (
    <Grid mt={0.25} item container>
      <Grid textAlign={'center'} xs={1} item>
        <SubHeader1>KM</SubHeader1>
      </Grid>
      <Grid item xs={1}>
        <SubHeader1>PACE</SubHeader1>
      </Grid>
      <Grid item xs={9}></Grid>
      <Grid textAlign={'center'} item xs={1}>
        <SubHeader1>ELEV</SubHeader1>
      </Grid>
    </Grid>
  )

  return (
    <Grid item container>
      <Heading6 text={'Splits'} />
      {tableHead()}
      {Lines}
    </Grid>
  )
}

Splits.defaultProps = {
  splitsArr: [
    {
      unit: 1,
      pace: 415,
      paceUnit: 'km',
      elevation: -14,
    },
    {
      unit: 1,
      pace: 407,
      paceUnit: 'km',
      elevation: 13,
    },
    {
      unit: 1,
      pace: 547,
      paceUnit: 'km',
      elevation: 14,
    },
    {
      unit: 1,
      pace: 247,
      paceUnit: 'km',
      elevation: 14,
    },
  ],
}

export default Splits
