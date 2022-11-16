import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { FieldArray, useFormik } from "formik";
import * as yup from "yup";

import ReactDOM from "react-dom";
// import * as yup from "yup"; // for everything
import { Formik, Form, Field } from "formik";
// import DisplayFormikState from "./DisplayFormikState";
import {
  Grid,
  // TextField,
  // IconButton,
  // Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  // Box
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

const initialValues = {};

const addRecipeSchema = yup.object().shape({});

const alpha_num_limited = {
  regex: /^([a-zA-Z0-9 ])+$/,
  message:
    "Only letters, numbers, spaces, and limited punctuation are allowed.",
};

// --- Form Schema Validation Definition -- //
const FormValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(1)
    .required("You Must Provide A Title For Your Recipe!"),
  step_text: yup
    .string()
    .matches(alpha_num_limited.regex, alpha_num_limited.message),
  // quantity: yup.number().typeError("Please enter a numebr"),
});

// --- Form Schema  Definition -- //
const FormSchema = {
  title: "",
  step_text: "",
  items: [],
};

const AddRecipe = () => {
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
    validationSchema: addRecipeSchema,
    onSubmit: async (values, actions) => {},
  });
  return (
    <Container
      style={{
        margin: "auto",
        marginTop: "5%",
        padding: "2%",
        paddingRight: "4%",
        paddingLeft: "4%",
        paddingBottom: "4%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        // border={3}
        // borderColor="#ccc"
        borderRadius: "4%",
        boxShadow: "10px 10px 20px #ccc",
        borderTop: "2px solid #ed6c02",
      }}
    >
      <Formik
        initialValues={FormSchema}
        validationSchema={FormValidationSchema}
        // render=
      >
        {(props, arrayHelpers) => (
          <Form>
            <Typography
              fontWeight={"bolder"}
              // fontSize={30}
              variant="h4"
              padding={2}
              textAlign={"center"}
            >
              Post Your Recipe
            </Typography>
            {/* {console.log(props)} */}
            <InputLabel className="label">Title</InputLabel>

            <TextField
              id="title"
              name="title"
              // label="title"
              fullWidth
              size="small"
              variant="outlined"
              value={props.values.title}
              helperText={
                props.touched.title && props.errors.title
                  ? props.errors.title
                  : " "
              }
              error={props.touched.title && Boolean(props.errors.title)}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              InputLabelProps={{ shrink: true }}
            />
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

            <FieldArray name="items">
              {(arrayHelpers) => (
                <List>
                  {props.values.items.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <TextField
                          value={item.step_text}
                          placeholder={item.step_text}
                          onChange={() => {
                            console.log("editing a step");
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() => {
                            console.log(
                              `delete button clicked, to remove item of index ${index}`
                            );
                            console.log(arrayHelpers);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            console.log(
                              `delete button clicked, to remove item of index ${index}`
                            );
                            arrayHelpers.remove(index);
                          }}
                        >
                          Delete
                        </Button>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </FieldArray>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box item sx={{ width: "90%" }}>
                <TextField
                  id="step_text"
                  name="step_text"
                  label="Step"
                  fullWidth
                  size="small"
                  variant="outlined"
                  value={props.values.step_text}
                  helperText={
                    props.touched.step_text && props.errors.step_text
                      ? props.errors.step_text
                      : " "
                  }
                  error={
                    props.touched.step_text && Boolean(props.errors.step_text)
                  }
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              {/* add button start */}
              <Box item>
                <IconButton
                  sx={{
                    border: "2px solid #ed6c02",
                    borderRadius: "8px",
                    color: "#ed6c02",
                    fontSize: "90px",
                    background: "#ccc",
                  }}
                  type="button"
                  onClick={() => {
                    console.log("Add button clicked");
                    if (props.values.step_text.length > 0) {
                      props.validateForm().then((results) => {
                        if (!("step_text" in results)) {
                          // Sets the item field
                          props.setFieldValue("items", [
                            ...props.values.items,
                            {
                              step_text: props.values.step_text,
                            },
                          ]);

                          // Clear form values
                          props.setFieldValue("step_text", "");
                        }
                      });
                    }
                  }}
                >
                  <AddIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Box>
              {/* add button end */}
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
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddRecipe;
