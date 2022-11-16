import React from 'react'
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Avatar
  } from "@mui/material";
  import { red } from '@mui/material/colors';

export default function Recipe({title,description,imageUrl,userName,date}) {
  return (
    <Card 
    sx={{ 
        width:"40%",
        margin:"auto",
        mt:2,
        padding:2,
        borderTop:"2px solid #ed6c02",
        boxShadow:"0px 5px 5px #ccc",
        ":hover":{
            boxShadow:"2px 10px 20px #ccc",
            cursor:"pointer"
        }
         }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* {userName} */}
          </Avatar>
        }
       
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Food Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            
          {description}<br/>
          by {userName}
        </Typography>
      </CardContent>

    </Card>
  )
}
