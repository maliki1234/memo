import React, { useEffect, useState } from 'react'
import { FcEmptyTrash } from 'react-icons/fc'

export default function Login() {

  const [state, setstate] = useState(null);
  const [reloadMemo, setreloadMemo] = useState(false);

  useEffect(() => {
    // let localhostUrl = 'http://localhost:4000/memo/readmemymemo'
    let localhostUrl = 'https://logan-apps.herokuapp.com/memo/readmemymemo'

    var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', 'application/x-www-form-urlencoded');

    myHeaders.append('Access-Control-Allow-Origin', 'https://logan-memo.netlify.app/');
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

        let jsonResult = JSON.parse(result)
        setstate(jsonResult)
        if (jsonResult.success) {

          setstate(jsonResult.data)
        } else {
          // setUserName(false)
          setstate(null)
        }
        // setUserName(true)
      })
      .catch(error => console.log('error', error));
    // localStorage.removeItem('session')




  }, [reloadMemo]);



  const deleteMemo = (e, b) => {
    e.preventDefault()

    console.log(e)
    console.log('memememememememe')
    setreloadMemo(true)

  }


  return (
    <div className="w-full h-screen bg-gray-300  flex justify-center">
      <div className="absolute right-3/4 opacity-25  rounded-full border-8 border-blue-900 xl h-full w-full">
      </div>
      {/* <d`iv className="w-ful py-2 "></div> */}
      <div className="w-7/12 my-12  ">
        {
          state ? state.map(element => {
            return (
              <div className="relative pl-4 m-6 h-auto py-2 overflow-auto border-2 boder-black rounded-md">
                <h3 className="title font-bold text-xl text-black"> {element.tittle}</h3>
                <p className="tex-md  text-gray-600 font-thin">{element.desc}.</p>
                <span className="text-gray-400 font-semi-bold text-xs">{element.time}</span>
              </div>
            )
          }) : <div className="relative pl-4 m-6 h-auto py-2 overflow-auto border-2 boder-black rounded-md">
            <h3 className="title font-bold text-xl text-black"> </h3>
            <p className="tex-md  text-gray-600 font-thin"></p>
            <span className="text-gray-400 font-semi-bold text-xs"></span>
            <div className="flex justify-end ">
              <FcEmptyTrash className='cursor-pointer '
                onClick={(e) => deleteMemo(e, 'me')}
              />
            </div>
          </div>
        }


      </div>
    </div>

  )
}
