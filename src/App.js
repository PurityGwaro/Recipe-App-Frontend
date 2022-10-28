import {Suspense,lazy} from "react"
import './App.css';
import Loader from './components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = lazy(()=> import('./components/Header'))

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Header/>
    </Suspense>
  );
}

export default App;
