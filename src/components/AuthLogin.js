import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import {useDispatch} from 'react-redux'
import { authActions } from './store/index';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 chars, 1 uppercase, 1 lowercase, 1 numeric

const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email i.e example@gmail.com")
    .required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Please create a stronger password. Minimum of 5 characters, must have 1 uppercase letter, 1 lowercase letter and 1 number!",
    })
    .required("Required"),
});

function AuthLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit:async (values,actions) =>{
        // setLoading(true)
        console.log('formik log in form is submitting');
        try{
            const sendRequest = async () =>{
              console.log("starting submition");
              console.log(values.email);
              console.log(values.password);
              
            const data = await axios.post("http://127.0.0.1:5001/api/users/login",{
                email: values.email,
                password: values.password,
            })
            localStorage.setItem("userId",data?.data?.user?._id)
            dispatch(authActions.login())
            navigate('/recipes')
            console.log('end of submition');
            console.log(data?.data);
        }
        sendRequest()
        }catch(err){
            console.log("there is an error");
            console.log(err);
        }
    }
  });
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        className="contain-auth"
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
        borderTop="2px solid #ed6c02"
      >
        <Typography
          variant="h3"
          fontWeight={800}
          padding={3}
          textAlign="center"
        >
          LogIn
        </Typography>

        <TextField
          id="email"
          name="email"
          label="Email"
          type={"email"}
          placeholder="Email"
          margin="normal"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <TextField
          id="password"
          name="password"
          label="Password"
          type={"password"}
          placeholder="Password"
          margin="normal"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn4"
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
          LinkComponent={Link}
          to="/authSignup"
          className="btn5"
          onClick={() => {
            resetForm();
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
          Change To Sign Up
        </Button>
      </Box>
    </form>
  );
}

export default AuthLogin;
