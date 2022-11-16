import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Recipe from './Recipe'

const Recipes = () => {
  const [recipes,setRecipes] = useState()
  // get all blogs
  const getAllRecipes = async () =>{
    try{
      const data = await axios.get("http://127.0.0.1:5001/api/recipes")
      const recipes = data?.data?.recipes;
      console.log(recipes);
      
      setRecipes(recipes)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getAllRecipes()
  },[])
  return (
    <div className='recipes'>
    {recipes && recipes.map((recipe,index)=>(
      <>
      <Recipe key={index} title={recipe?.title} description={recipe?.description} imageUrl={recipe?.image} date={recipe?.createdAt} userName={recipe?.user?.name}/>
      </>
    ))}
    </div>
  )
}

export default Recipes
