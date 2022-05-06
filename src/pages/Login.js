import React from 'react'

export default function Login() {
  return (
   <div className="w-full h-screen bg-gray-300  flex justify-center">
         <div className="absolute right-3/4 opacity-25  rounded-full border-8 border-blue-900 xl h-full w-full">
    </div>
       <form action="" className=" block z-10 border-1 border-black  form  w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12" >

       <div className="w-full h-full opacity-100">
       <h2 className=" text-3xl text-center py-12 mx-auto text-black font-bold"> log in</h2>
         <div className="py-1">
           <label htmlFor="email" className='block'> email</label>
           <input type="text"  className='w-full py-2 rounded-full px-4 text-md' />
         </div>
         <div className="py-1">
           <label htmlFor="email" className='block'> password</label>
           <input type="password"  className='w-full py-2 rounded-full px-4 text-md' />
         </div>
         <div className="py-4">
           {/* <label htmlFor="email" className='block'> email</label> */}
           <input type="submit"  className='float-right inline-block py-2 px-6  border-blue-700 border-2 rounded-xl hover:outline-4  hover:border-blue-800 hover:cursor-pointer'  />
         </div>
       </div>
       </form>
   </div>

  )
}
