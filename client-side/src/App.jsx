
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './assets/components/Home/Home';
import Login from "./assets/components/Login/Login";
import Signup from "./assets/components/SignUp/Signup";

function App() {


  return (
    <>
   
     <BrowserRouter>
     <Routes>
     <Route path="" element={<Home/>}></Route>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>
     </BrowserRouter>
      
    </>
  );
}

export default App;
