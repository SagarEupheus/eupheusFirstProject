// import logo from './logo.svg';
import "./App.css";
import Header from "../src/Components/Headers/Header";
import Main from "./Components/Main";
import {Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ModalComp from "./Pages/Modal";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// import { useHistory } from "react-router-dom";


function App() {

  // useEffect(() => {
  //   const reset = window.addEventListener('popstate', () => {
  //     console.log('workin');
  //   })
  //   return () => {
  //     window.removeEventListener('popstate',reset)
  //   }
  // }, [])
  
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     window.history.replaceState(null, '', '/');
  //   };
  
  //   window.addEventListener('locationchange', handleRouteChange);
  
  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     window.removeEventListener('locationchange', handleRouteChange);
  //   };
  // }, []);

  const { pathname } = useLocation();
  

  return (
    <div className="App">
      {
        pathname =='/login' ? null : <Header /> && pathname == '/register' ? null : <Header /> 
      }
          <Routes>
            <Route path="/" element={ <Main/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="*" element={ <NotFound/> } />
            <Route path="/modal" element={ <ModalComp/> } />
          </Routes>
    </div>
  );
}

export default App;
