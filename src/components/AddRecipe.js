import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import AddIcon from "@mui/icons-material/Add";

const AddRecipe = () => {
  return (
    <form>
      <Box
        margin={"auto"}
        marginTop={5}
        padding={3}
        paddingRight={10}
        paddingLeft={10}
        paddingBottom={10}
        width={"50%"}
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
        >
          Post Your Recipe
        </Typography>
        <InputLabel className="label">Title</InputLabel>
        <TextField margin="auto" variant="outlined" size="small" />

        {/* <InputLabel className='label'>Image</InputLabel>
        <TextField margin='auto' variant="outlined" size="small"/> */}
        
        <Button
          variant="contained"
          component="label"
          color="warning"
          sx={{
            borderRadius: "8px",
            marginTop: 3,
            width: "20%",
          }}
        >
          Upload Image
          <input hidden accept="image/*" multiple type="file" />
          
        </Button>
      

        <InputLabel className="label">Procedure</InputLabel>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            margin="auto"
            variant="outlined"
            size="small"
            placeholder="Add Step"
            sx={{
              width: "90%",
            }}
          />
          <Button
            sx={{
              background: "#ccc",
              padding: "0",
              marginLeft: "15px",
            }}
          >
            <AddIcon sx={{ color: "#ed6c02", fontSize: "30px" }} />
          </Button>
        </Box>

        <Box textAlign="center">
          <Button
            type="submit"
            className="btn4"
            color="warning"
            variant="contained"
            sx={{
              borderRadius: "8px",
              marginTop: 5,
              width: "20%",
            }}
          >
            POST
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddRecipe;
