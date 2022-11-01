import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'

const Header = () => {
  return (
    <AppBar
    // header
    sx={{
      backgroundColor: '#000000',
  }}
    >
        <Toolbar
        // div
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
              <Button 
              variant='contained'
              sx={{
                borderRadius:"8px",
                margin:1
              }}
              color="warning">LogIn</Button>
              <Button 
              variant='contained'
              sx={{
                borderRadius:"8px",
                margin:1
              }}
              color="warning">SignUp</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
