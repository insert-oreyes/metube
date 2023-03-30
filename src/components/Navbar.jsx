import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import logo from '../assets/logo 2.svg'
import { SearchBar } from '../components'

const Navbar = () => (
  <Stack
    direction='row'
    alignContent='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
