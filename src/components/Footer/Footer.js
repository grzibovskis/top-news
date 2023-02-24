import {useState} from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      sx={{width:'100%', bgcolor: '#dfdfdf',}}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
    <BottomNavigationAction label="Facebook" href="https://www.facebook.com/" target="_blank" icon={<FacebookIcon />} />
    <BottomNavigationAction label="Instagram" href="https://www.instagram.com/" target="_blank" icon={<InstagramIcon />} />
    <BottomNavigationAction label="Twitter" href="https://twitter.com/" target="_blank" icon={<TwitterIcon />} />
    </BottomNavigation>
  )
}

export default Footer