import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Regiter'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ComfirmEmail from './pages/ComfirmEmail'
import ResetPassword from './pages/resetPassword'
import ViewMemo from './pages/ViewMemo'
import Addmemo from './pages/AddMemo'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  
  <BrowserRouter>
  <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={< Register/>} />
        <Route path="comfirmemail" element={<ComfirmEmail/>}/>
        <Route path='resetpassword' element={<ResetPassword />}/>
        <Route path='addmemo' element={<Addmemo/>}/>
        <Route path='viewmemo' element={<ViewMemo/>}/>

    </Routes>
  </BrowserRouter>
  <Footer/>
  
  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
