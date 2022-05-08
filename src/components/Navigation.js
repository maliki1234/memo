import React, { useEffect, useState } from 'react'
// import {useEffect } from 'react'
// import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'

function Navigation() {
  // console.log(sessionStorage.getItem('session'))
  const [state , setstate] = useState('');
  const [logOuti, setlogOuti] = useState(false);

  console.log(state)
  
  
  useEffect(() => {
    const b = JSON.parse(sessionStorage.getItem('session')).data
    setstate(b)
    
  }, [logOuti]);

 const  logOut =()=>{
  let localhostUrl = 'http://localhost:4000/user/logout' || 'https://logan-apps.herokuapp.com/user/logout'
 
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append('Accept', 'application/x-www-form-urlencoded');

myHeaders.append('Access-Control-Allow-Origin', '*');
myHeaders.append('Access-Control-Allow-Credentials', 'true');

myHeaders.append('GET', 'POST', 'OPTIONS');




var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow',
credentials: "include"
};

fetch(localhostUrl, requestOptions)
.then(response => response.text())
.then(result => {
    console.log(result)
    // sessionStorage.setItem('session', result )
    setlogOuti(true)
})
.catch(error => console.log('error', error));
localStorage.removeItem('session')

  console.log('logedOut')
  }

  return (
    <div className="w-full  p-4 flex justify-between space-between bg-red-900">
      <div className="logo  text-black font-bold text-base  "><Link to={"/"}>My logo</Link></div>
      <div className="account">
        {
          state? 
           <div className="flex  items-center"> 
          <div className="add mx-2 font-thin text-md text-white"> 
            <Link to={'/addmemo'}> add</Link>
           </div>
        <div className="username text-white font-bold text-lg" > {state.userName}</div>
        <div className="add mx-2 font-thin text-md text-white"> 
            {/* <Link to={'/addmemo'}> add</Link> */}
             <div className="logout cursor-pointer" onClick={logOut}>log out</div>
           </div>
        </div>:
        <div className="login font-thin text-bold text-white"> <Link to={'/login'}> login</Link></div>
        }
      </div>
    </div>
  )
}

export default Navigation