import {React, Suspense,lazy} from "react"
import './App.css';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

const Header = lazy(()=> import('./components/Header'))
const Recipes = lazy(()=> import('./components/Recipes'))
const UserRecipes = lazy(()=> import('./components/UserRecipes'))
const RecipeDetail = lazy(()=> import('./components/RecipeDetail'))
const AddRecipe = lazy(()=> import('./components/AddRecipe'))
const AuthLogin = lazy(()=> import('./components/AuthLogin'))
const AuthSignup = lazy(()=> import('./components/AuthSignup'))

function App() {

  return (
    <>
    <Suspense fallback={<Loader />}>
      <Header/>
      <div className="contain">
        <Routes>
          <Route exact path="/authSignup" element={<AuthSignup />} />
          <Route exact path="/authLogin" element={<AuthLogin />} />
          <Route exact path="/recipes" element={<Recipes/>} />
          <Route exact path="/myRecipes" element={<UserRecipes />} />
          <Route exact path="/myRecipes/:id" element={<RecipeDetail />} />
          <Route exact path="/recipes/add" element={<AddRecipe />} />
          {/* add a route for everything else and define an error page: path="*" */}
        </Routes>
      </div>
    </Suspense>
    </>
    
  );
}

export default App;

