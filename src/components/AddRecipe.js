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
  item_name: yup
    .string()
    .matches(alpha_num_limited.regex, alpha_num_limited.message),
  // quantity: yup.number().typeError("Please enter a numebr"),
});

// --- Form Schema  Definition -- //
const FormSchema = {
  item_name: "",
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
          margin:"auto",
        marginTop:"5%",        
        padding:"2%",
        paddingRight:"4%",
        paddingLeft:"4%",
        paddingBottom:"4%",
        width:"50%",
        display:"flex",
        flexDirection:"column",
        // border={3}
        // borderColor="#ccc"
        borderRadius:"4%",
        boxShadow:"10px 10px 20px #ccc",
        borderTop:"2px solid #ed6c02",
        }}
        >
          <Formik
            initialValues={FormSchema}
            validationSchema={FormValidationSchema}
            render={(props,arrayHelpers) => (
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
                  margin="auto"
                  variant="outlined"
                  size="small"
                  sx={{ width: "90%" }}
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

                <FieldArray name="items"
                render={(arrayHelpers) => (
                  <List>
                  { props.values.items.map((item,index) => {
                    return (
                      <>
                      <ListItem  key={index}>
                        
                        <TextField
                        value={item.item_name}
                        placeholder={item.item_name}
                        onChange={()=>{console.log('editing a step');}}
                        />
                        <Button
                      type="button"
                      onClick={() =>{
                        console.log(`delete button clicked, to remove item of index ${index}`);
                        // const removed = arrayHelpers.remove(index)
                        console.log(arrayHelpers);
                      }}
                      >Edit</Button>
                        <Button
                      type="button"
                      onClick={() =>{
                        console.log(`delete button clicked, to remove item of index ${index}`);
                        const removed = arrayHelpers.remove(index)
                        console.log(typeof removed);
                      }}
                      >Delete</Button>
                      </ListItem>
                      
                      
                      </>
                      
                    );
                  })}
                </List>
                )}
                />
       
                {/* <Box 
                    // minHeight="200px"
                    // maxHeight="200px"
                    // overflow="scroll"
                    >
                     
                      <List>
                        { props.values.items.map((item,index) => {
                          return (
                            <>
                            <ListItem key={index}>
                              
                              <ListItemText
                              name={`item.${index}`}
                              primary={item.item_name}
                              />
                              <Button
                            type="button"
                            onClick={() =>{
                              console.log(`delete button clicked, to remove item of index ${index}`);
                              console.log(`initial value b4 delete ${item.item_name}`);
                              // props.setValues({
                              //   items: values.items.filter((item) => item !== index), // Remove clicked item
                              // })
                              
                              props.validateForm().then((results) => {
                                if (!("item_name" in results)) {
                                  // Sets the item field
                                  props.setValues({
                                items: values.items.filter((item) => item !== index), // Remove clicked item
                              })
      
                                  // Clear form values
                                }
                              });
                              console.log(`initial value after delete ${item.item_name}`);
                            }}
                            >Delete</Button>
                            </ListItem>
                            
                            </>
                            
                          );
                        })}
                      </List>
                    </Box> */}
               
                

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box item sx={{ width: "90%" }}>
                    <TextField
                      id="item_name"
                      name="item_name"
                      label="Step"
                      fullWidth
                      variant="outlined"
                      value={props.values.item_name}
                      helperText={
                        props.touched.item_name && props.errors.item_name
                          ? props.errors.item_name
                          : " "
                      }
                      error={
                        props.touched.item_name &&
                        Boolean(props.errors.item_name)
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

                        props.validateForm().then((results) => {
                          if (!("item_name" in results)) {
                            // Sets the item field
                            props.setFieldValue("items", [
                              ...props.values.items,
                              {
                                item_name: props.values.item_name,
                              },
                            ]);

                            // Clear form values
                            props.setFieldValue("item_name", "");
                          }
                        });
                      }}
                    >
                      <AddIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                  </Box>
                  {/* add button end */}

                  
                </Box>
               
                
              </Form>
            )}
          />

            {/* <Box
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
        </Box> */}

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
        </Container>

      
  
  );
};

export default AddRecipe;
