import React from 'react'
import NewsList3 from './NewsList3'
import { Typography } from '@mui/material';

const Business = () => {
  return (
    <>
        <Typography variant='h2' align='center' color="textPrimary" gutterBottom marginTop="0.5em">Top business headlines</Typography>
        <NewsList3 />
    </>
  )
}

export default Business