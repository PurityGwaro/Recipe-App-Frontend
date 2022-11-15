import React from 'react'
import { Box,InputLabel,TextField,Typography } from '@mui/material';

const AddRecipe = () => {
  return (
   
      <form>
      <Box
      margin={"auto"}
      marginTop={5}
      padding={3}
      width={"80%"}
      display={"flex"}
      flexDirection={"column"}
      // border={3}
      // borderColor="#ccc"
      borderRadius={10}
      boxShadow="10px 10px 20px #ccc"
      borderTop="2px solid #ed6c02"
      >
        <Typography
        fontWeight={"bolder"}
        // fontSize={30}
        variant="h4"
        padding={2}
        textAlign={"center"}
        >Post Your Recipe</Typography>
        <InputLabel className='label'>Title</InputLabel>
        <TextField margin='auto' variant="outlined"/>
        <InputLabel className='label'>Description</InputLabel>
        <TextField margin='auto' variant="outlined"/>
        <InputLabel className='label'>Image</InputLabel>
        <TextField margin='auto' variant="outlined"/>
      </Box>
    </form>

    
  )
}

export default AddRecipe
