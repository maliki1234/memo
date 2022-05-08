import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Homes from '../pages/Home'
import one from '../static/one.jpg'

const Home = () => {
    return (
      
   <div className="app w-full h-screen max-h-screen grid grid-cols-5 grid-rows-6 " >
   <img src={one} className=" h-screen object-fill row-span-6 md:col-span-3 col-span-5 col-start-1 md:col-start-1 row-start-1   " alt="" />
   <div className=" row-span-3 md:row-span-3 lg:row-span-2   col-span-3 md:col-span-2 lg:col-span-3 col-start-2 md:col-start-3 lg:col-start-2 row-start-3 md:row-start-3 lg:row-start-3   p-3 bg-blue-900 ">
      <h1 className='font-bold uppercase text-ml md:text-2xl lg:text-3xl my-2 text-white text-center'> get fun when documenting your <span className='text-red-700 '>moments</span> </h1>
      <p className='px-2 text-gray-300 text-xs  md:tetx-sm lg:text-base my-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ab eos illum est quam sint sunt rem nesciunt nemo ea, eligendi provident pariatur atque excepturi nihil sequi fugit voluptatum. Animi!</p>
      <button className="float-right my-2 mx-6 text-sm  inline-block border-1 border-black bg-red-100 rounded-md py-2 lg:py-3 px-4 lg:px-3"> get started </button>
   </div>
 </div>
 
    );
}

export default Home;
