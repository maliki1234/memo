import React, { createContext, useMemo, useState } from 'react'
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
import Comfirm from './pages/Comfirm';
// import one from './static/one.jpg'
// import SetSessions from './components/setSessions';


export const UserContext = createContext({
  userName: '',
  setUserName: () => { },
});

function App() {
  // SetSessions()
  const [userName, setUserName] = useState(false);
  const value = useMemo(
    () => ({ userName, setUserName }),
    [userName]
  );

  const [user] = useState(false);

  return (

    <>

      <BrowserRouter>
        <UserContext.Provider value={value}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={< Register />} />
            <Route path="comfirmemail" element={<ComfirmEmail />} />
            <Route path='resetpassword' element={<ResetPassword />} />
            <Route path='addmemo' element={<Addmemo />} />
            <Route path='viewmemo' element={<ViewMemo />} />
            <Route path='comfirm' element={<Comfirm />} />


          </Routes>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>



    </>
  )
}
export default App