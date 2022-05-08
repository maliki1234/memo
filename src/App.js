import React from 'react'
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
// import one from './static/one.jpg'
import SetSessions from './components/setSessions';

function App() {
  SetSessions()

  return (

    <>
     <BrowserRouter>
  <Navigation />
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
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
  )
}
export default App