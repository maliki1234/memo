// import React from 'react';

import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";

const SetSessions = async() => {

    // const [cookies] = useCookies(['userId']);
    const [cook, setcook] = useState(false);
    // console.log(cookies)

  useEffect(() => {
    // 'http://localhost:4000/user/getcurrent' || 
    let localhostUrl = 'https://logan-apps.herokuapp.com/user/getcurrent'
 
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
        // console.log(result)
       sessionStorage.setItem('session', result )
       setcook(true)
    })
    .catch(error => console.log('error', error));
    // localStorage.getItem('')

  }, [cook]);




}
export default SetSessions;
