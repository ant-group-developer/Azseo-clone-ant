import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List'
import ReceiptIcon from '@mui/icons-material/Receipt'
import React from 'react'
import Link from 'next/link'

export default function SideBarMenu() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText> Services </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <Link href={'my-order'} className='w-full'>
          <ListItemButton>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText sx={{ width: '100%' }}>Order</ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> Cron </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> Payment history </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> Refund </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> Cash flow </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> My profile </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> API </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <Link href={'/dashboard'} className='w-full'>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={{ width: '100%' }}>Statistic</ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> User </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> Platform </ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{ width: '100%' }}> Category </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  )
}
