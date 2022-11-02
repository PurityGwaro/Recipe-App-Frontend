import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const Auth = () => {
  const [isSignup, setIssignup] = useState(false);
  return (
    <form>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={400}
        boxShadow="10px 10px 30px #ccc"
        padding={3}
        margin="auto"
        marginTop={15}
        borderRadius={5}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          padding={3}
          textAlign="center"
        >
          { isSignup ? "SignUp" : "LogIn" }
        </Typography>
        {isSignup && (
          <>
            <TextField label="Username" placeholder="UserName" margin="normal" />
          </>
        )}
        <TextField label="Email" type={"email"} placeholder="Email" margin="normal" />
        <TextField label="Password" type={"password"} placeholder="Password" margin="normal" />
        <Button
          color="warning"
          variant="contained"
          sx={{
            borderRadius: "8px",
            marginTop: 3,
          }}
        >
          Submit
        </Button>

       
          <Button
            onClick={() => {
              setIssignup(!isSignup);
            }}
            sx={{
              marginTop: 2,
              marginBottom: 2,
              borderRadius: "8px",
              textDecoration: "underline",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Change To {isSignup ? "Log In" : "Sign Up"}
          </Button>
      
      </Box>
    </form>
  );
};

export default Auth;
