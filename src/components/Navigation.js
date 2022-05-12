import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
    const [state, setstate] = useState('');
    const [logOuti, setlogOuti] = useState(false);
    const { userName, setUserName } = useContext(UserContext)
    const navigate = useNavigate()
    // const first = useRef(userName).current
    useEffect(() => {
        // let localhostUrl = 'http://localhost:4000/user/getcurrent'
        let localhostUrl = 'https://logan-apps.herokuapp.com/user/getcurrent'
        var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/x-www-form-urlencoded');
        myHeaders.append('Access-Control-Allow-Origin', 'https://logan-memo.netlify.app');
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
                    setstate(null)

                }
            })

    }, [logOuti, userName]);
    const logOut = () => {
        // let localhostUrl = 'http://localhost:4000/user/logout'
        let localhostUrl = 'https://logan-apps.herokuapp.com/user/logout'
        var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/x-www-form-urlencoded');
        myHeaders.append('Access-Control-Allow-Origin', 'https://logan-memo.netlify.app');
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

                // sessionStorage.setItem('session', result )

                setlogOuti(true)
                setUserName(false)
                navigate('/')
            })

        // localStorage.removeItem('session')

    }
    return (
        // <
        //     div className="w-full  p-4 flex justify-between space-between bg-red-900" >
        //     <
        //         div className="logo  text-black font-bold text-base  " > <Link to={"/"} > My logo </Link></div >
        //     <
        //         div className="account" >
        //         {state ?
        //             <div className="flex  items-center" >
        //                 <div className="add mx-2 font-thin text-md text-white" >
        //                     <Link to={'/addmemo'} >
        //                         add memo
        //                     </Link>
        //                 </div>
        //                 <div className="username text-white font-bold text-lg" > {state.userName} </div>
        //                 <div className="add mx-2 font-thin text-md text-white" >
        //                     <div className="logout cursor-pointer" onClick={logOut} >
        //                         log out
        //                     </div>
        //                 </div >
        //             </div> :
        //             <div className="login font-thin text-bold text-white" >
        //                 <Link to={'/login'} >
        //                     login
        //                 </Link>
        //             </div>
        //         } </div>
        // </div >


        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src={"mmms"} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div class="flex items-center md:order-2">
                    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src=""  />
                    </button>
                    <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                        <div class="py-3 px-4">
                            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul class="py-1" aria-labelledby="dropdown">
                            <li>
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>






    )
}

export default Navigation