import {React, Suspense,lazy} from "react"
import './App.css';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

const Header = lazy(()=> import('./components/Header'))
const Login = lazy(()=> import('./components/Login'))

function App() {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
    </Suspense>
    </>
    
  );
}

export default App;
