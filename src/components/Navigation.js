import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="w-full  p-4 flex justify-between space-between bg-red-900">
      <div className="logo  text-black font-bold text-base  ">My logo</div>
      <div className="account">
        {/* <div className="flex  items-center"> */}
          {/* <div className="add mx-2 font-thin text-md text-white">  */}
            {/* <Link to={'/addmemo'}> add</Link> */}
           {/* </div> */}
        {/* <div className="username text-white font-bold text-lg" > maliki kowero</div> */}
        {/* <div className="add mx-2 font-thin text-md text-white">  */}
            {/* <Link to={'/addmemo'}> add</Link>
             */}
             {/* <div className="logout">log out</div> */}
           {/* </div> */}
        {/* </div> */}
        <div className="login font-thin text-bold text-white"> <Link to={'/login'}> login</Link></div>
      </div>
    </div>
  )
}

export default Navigation