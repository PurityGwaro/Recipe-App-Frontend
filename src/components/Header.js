import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'

const Header = () => {
  return (
    <AppBar
    position="static"
    sx={{
      backgroundColor: '#000000',
  }}
    >
        <Toolbar
        sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
        }}
        >
            {/*add text using Typography  */}
            <Typography
            variant="h5"
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
