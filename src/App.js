import {React, Suspense,lazy} from "react"
import './App.css';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = lazy(()=> import('./components/Header'))
const Login = lazy(()=> import('./components/Login'))
const Recipes = lazy(()=> import('./components/Recipes'))
const UserRecipes = lazy(()=> import('./components/UserRecipes'))
const RecipeDetail = lazy(()=> import('./components/RecipeDetail'))
const AddRecipe = lazy(()=> import('./components/AddRecipe'))

function App() {
  // useSelector allows us to grab the state from redux
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn);
  
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Header/>
      <div className="contain">
        <Routes>
          <Route exact path="/auth" element={<Login />} />
          <Route exact path="/recipes" element={<Recipes/>} />
          <Route exact path="/myRecipes" element={<UserRecipes />} />
          <Route exact path="/myRecipes/:id" element={<RecipeDetail />} />
          <Route exact path="/blogs/add" element={<AddRecipe />} />
        </Routes>
      </div>
    </Suspense>
    </>
    
  );
}

export default App;

