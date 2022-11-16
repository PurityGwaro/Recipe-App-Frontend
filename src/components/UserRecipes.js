import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Recipe from './Recipe'


const UserRecipes = () => {
  const [recipes,setRecipes] = useState()
  // fetch details from the local storage
  const userId = localStorage.getItem("userId")
  const sendRequest = async () =>{
    try{
      const data = await axios.get(`http://127.0.0.1:5001/api/recipes/user/${userId}`)
      const userRecipes = data?.data?.recipes?.recipes;
      console.log(data?.data?.recipes?.recipes);
      setRecipes(userRecipes)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    sendRequest()
  })
  return (
    <div className='recipes'>
      {recipes && recipes.map((recipe,index)=>(
      <>
      <Recipe key={index} title={recipe?.title} description={recipe?.description} imageUrl={recipe?.image} date={recipe?.createdAt} userName={"Me"}/>
      </>
    ))}
    </div>
  )
}

export default UserRecipes
