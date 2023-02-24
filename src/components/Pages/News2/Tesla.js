import React from 'react'
import NewsList2 from './NewsList2'
import { Typography } from '@mui/material';

const Tesla = () => {
  return (
    <>
        <Typography variant='h2' align='center' color="textPrimary" gutterBottom marginTop="0.5em">All about Tesla</Typography>
        <NewsList2 />
    </>
  )
}

export default Tesla