import {AppBar, Toolbar, Typography, Box, Button, Tabs, Tab} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [value,setValue] = useState()
  return (
    <AppBar
    // header
    position='sticky'
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
            <Box 
            display="flex"
            marginLeft={"auto"}
            marginRight={"auto"}
            >
              <Tabs
              textColor='inherit'
              value={value}
              onChange={(e,val)=>{setValue(val)}}
              >
                <Tab       
                LinkComponent={Link}  
                to="/recipes"       
                label="All Recipes"/>
                <Tab 
                LinkComponent={Link}  
                to="/myRecipes" 
                label="My Recipes"/>
              </Tabs>
            </Box>
            <Box>
              {/* acts as a div */}
              <Button 
              LinkComponent={Link}  
              to="/auth" 
              variant='contained'
              sx={{
                borderRadius:"8px",
                margin:1
              }}
              color="warning">Log In</Button>
              <Button 
              LinkComponent={Link}  
              to="/auth" 
              variant='contained'
              sx={{
                borderRadius:"8px",
                margin:1
              }}
              color="warning">Sign Up</Button>
              <Button 
              LinkComponent={Link}  
              to="/auth"
              variant='contained'
              sx={{
                borderRadius:"8px",
                margin:1
              }}
              color="warning">Log Out</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
