import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { FieldArray } from "formik";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
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
});

// --- Form Schema  Definition -- //
const FormSchema = {
  title: "",
  file: "",
  step_text: "",

  items: [],
};

const AddRecipe = () => {
  const [image, setImage] = useState();
  const [step, setStep] = useState("");

  return (
    <Container
      style={{
        margin: "auto",
        marginTop: "3%",
        padding: "2%",
        paddingRight: "4%",
        paddingLeft: "4%",
        paddingBottom: "4%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4%",
        boxShadow: "10px 10px 20px #ccc",
        borderTop: "2px solid #ed6c02",
      }}
    >
      <Formik
        initialValues={FormSchema}
        validationSchema={FormValidationSchema}
        onSubmit={(values, actions) => {
          console.log("submiting form");
          console.log(values);
          console.log(image);
        }}
      >
        {(props, arrayHelpers) => (
          <Form>
            <Typography
              fontWeight={"bolder"}
              variant="h4"
              padding={2}
              textAlign={"center"}
            >
              Post Your Recipe
            </Typography>
            <InputLabel className="label">Title</InputLabel>

            <TextField
              id="title"
              name="title"
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

            <InputLabel className="label">Upload Image</InputLabel>
            <TextField
              type="file"
              name="file"
              accept="image/*"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
              sx={{ width: "100%", paddingBottom: "4px" }}
            />

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
                          disabled
                          size="small"
                          variant="standard"
                          InputProps={{
                            readOnly: true,
                          }}
                          sx={{
                            width: "90%",
                            marginRight: "20px",
                            borderRadius: "8px",
                          }}
                        />
                        {/* <Button
                          type="button"
                          color="warning"
                          variant="contained"
                          onClick={() => {
                            console.log(
                              `edit button clicked, to edit item of index ${index}`
                            );
                            console.log(arrayHelpers);
                          }}
                          sx={{marginRight:"5px"}}
                        >
                          Edit
                        </Button> */}
                       
                        <IconButton 
                        aria-label="delete"
                        onClick={() => {
                            console.log(
                              `delete button clicked, to remove item of index ${index}`
                            );
                            arrayHelpers.remove(index);
                          }}>
                          <DeleteIcon color="warning"/>
                        </IconButton>
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
              <Box sx={{ width: "94%" }}>
                <TextField
                  id="step_text"
                  name="step_text"
                  label="Add Step"
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
              <Box>
                <IconButton
                  sx={{
                    border: "2px solid #ed6c02",
                    borderRadius: "8px",
                    color: "#ed6c02",
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
                  <AddIcon sx={{ fontSize: "20px" }} />
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
