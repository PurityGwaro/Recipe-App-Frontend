import {AppBar, Toolbar, Typography,Box, Button} from '@mui/material'

const Header = () => {
  return (
    <AppBar
      sx={{backgroundColor: '#000000'}}
    >
        <Toolbar>
            {/*add text using Typography  */}
            <Typography 
            variant="h5"
            >Recipe Application</Typography>
            <Box
            display="flex"
            marginLeft="320px"
            >
              <Button color='warning'>LogIn</Button>
              <Button color='warning'>SignUp</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
