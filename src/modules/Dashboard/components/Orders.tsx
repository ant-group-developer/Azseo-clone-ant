import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

interface OrdersProps {
  present: number
  progress: number
}

export default function Orders({ present, progress }: OrdersProps) {
  return (
    <Card variant='outlined' sx={{ borderRadius: '.5rem' }}>
      <Typography variant='h6' textAlign='left' p='1rem 1.5rem'>
        Orders
      </Typography>
      <hr />
      <CardContent sx={{ p: '1.5rem 8rem' }}>
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Typography variant='h5'>{present ?? 0} </Typography>
            <Typography variant='body1'>In progress</Typography>
          </Box>
          <Box>
            <Typography variant='h5'>{progress ?? 0}</Typography>
            <Typography variant='body1'>Completed</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
