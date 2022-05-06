import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homes from '../pages/Home'

const Home = () => {
    return (
       <Routes>
           <Route to="/">{<Homes/>}</Route>
       </Routes>
    );
}

export default Home;
