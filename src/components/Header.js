import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'

const Header = () => {
  return (
    <AppBar>
        <Toolbar>
            {/*add text using Typography  */}
            <Typography
            variant="h4"
            >Recipe Application
            </Typography>
            <Box>
              {/* acts as a div */}
              <Button color="warning">LogIn</Button>
              <Button color="warning">SignUp</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
