import {AppBar, Toolbar, Typography} from '@mui/material'

const Header = () => {
  return (
    <AppBar>
        <Toolbar>
            {/*add text using Typography  */}
            <Typography>Recipe Application</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
