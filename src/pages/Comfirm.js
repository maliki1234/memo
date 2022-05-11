import React, { useEffect, useState } from 'react'

export default function Comfirm() {
    const [state, setstate] = useState("");
    useEffect(() => {
        let b = setstate(sessionStorage.getItem('session'))
        console.log(b)
        setstate(b)
    }, []);

    console.log(state)
  return (
    <div className='w-screen h-screen font-extrabold text-xl capitalize grid grid-cols-1 grid-rows-1 items-center  justify-items-center'>go to the email and comfirm first</div>
  )
}
