import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

export default function Login() {

  const { userName, setUserName } = useContext(UserContext);

  const { register, handleSubmit } = useForm();
  const [errore, seterrore] = useState(null);
  let navigate = useNavigate()
  // let localhostUrl = 'http://localhost:4000/user/login'
  let localhostUrl = 'https://logan-apps.herokuapp.com/user/login'
  const onSubmit = data => {


    data = JSON.stringify(data)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', 'application/x-www-form-urlencoded');

    myHeaders.append('Access-Control-Allow-Origin', 'https://logan-memo.netlify.app');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');

    myHeaders.append('GET', 'POST', 'OPTIONS');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
      credentials: "include"
    };

    fetch(localhostUrl, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result)
        if (result.success) {

          if (!userName) {
            setUserName(true)
          }

          navigate('/viewmemo')
        } else {

          seterrore(result.message)
        }
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="w-full h-screen bg-gray-300  flex justify-center">
      <div className="absolute right-3/4 opacity-25  rounded-full border-8 border-blue-900 xl h-full w-full">
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)} className=" block z-10 border-1 border-black  form  w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12" >

        <div className="w-full h-full opacity-100">
          <h2 className=" text-3xl text-center py-12 mx-auto text-black font-bold"> log in</h2>
          <div className="py-1">
            <label htmlFor="email" className='block'> email</label>
            <input type="text" {...register("email", { required: true })} className='w-full py-2 rounded-full px-4 text-md' />
          </div>
          <div className="py-1">
            <label htmlFor="email" className='block'> password</label>
            <input type="password" {...register("password", { required: true })} className='w-full py-2 rounded-full px-4 text-md' />
          </div>

          {errore ? <div className="py-1">
            <span className="text-xs   text-red-600 font-bold italic ">{errore}</span>
          </div> : ''}

          <div className="py-1">
            <span className="text-xs font-thin text-black"><Link to="/register"> dont have an account?</Link></span>
          </div>
          <div className="py-1">
            <span className="text-xs font-thin text-black"><Link to="/comfirmemail"> forget password?</Link></span>
          </div>
          <div className="py-4">
            {/* <label htmlFor="email" className='block'> email</label> */}
            <input type="submit" className='float-right inline-block py-2 px-6  border-blue-700 border-2 rounded-xl hover:outline-4  hover:border-blue-800 hover:cursor-pointer' />
          </div>
        </div>
      </form>
    </div>

  )
}
