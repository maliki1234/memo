import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();


  const navigate = useNavigate()

  // let localhostUrl = 'http://localhost:4000/memo/create'
  let localhostUrl = 'https://logan-apps.herokuapp.com/memo/create'

  const onSubmit = data => {
    data = JSON.stringify(data)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', 'application/x-www-form-urlencoded');

    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');

    myHeaders.append('GET', 'POST', 'OPTIONS');


    // var raw = JSON.stringify({
    //   "userName": "abubakari",
    //   "email": "malikikowero@gmail.com",
    //   "password": "maliki"
    // });

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
        console.log(result)
        if (result.success) {
          // console.log('success')
          navigate('/viewmemo')
        }

        // sessionStorage.setItem('session', result.)
      })
      .catch(error => console.log('error', error));
  };



  return (
    <div className="w-full h-screen bg-gray-300  flex justify-center">
      <div className="absolute right-3/4 opacity-25  rounded-full border-8 border-blue-900 xl h-full w-full">
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)} className=" block z-10 border-1 border-black  form  w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12" >

        <div className="w-full h-full opacity-100">
          <h2 className=" text-3xl text-center py-12 mx-auto uppercase text-black font-bold"> Add new memo</h2>
          <div className="py-1">
            <label htmlFor="title" className='block'> title</label>
            <input type="text" {...register("tittle", { required: true })} className='w-full py-2 rounded-full px-4 text-md' />
          </div>
          <div className="py-1">
            <label htmlFor="desc" className='block'> desc</label>
            {/* <input type="password"  className='w-full py-2 rounded-full px-4 text-md' />
            */}
            <textarea className='w-full py-2   rounded-full px-12 text-md'   {...register("desc", { required: true })} />
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
