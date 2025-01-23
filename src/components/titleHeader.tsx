import { Typography } from '@mui/material'
import React from 'react'

export default function TitlePage({ children }: { children: string }) {
  return (
    <Typography variant='h4' color='#3f4254' marginBottom='1.5rem'>
      {children}
    </Typography>
  )
}
