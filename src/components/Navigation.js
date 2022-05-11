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

                // sessionStorage.setItem('session', result )

                setlogOuti(true)
                setUserName(false)
                navigate('/')
            })

        // localStorage.removeItem('session')

    }
    return (<
        div className="w-full  p-4 flex justify-between space-between bg-red-900" >
        <
            div className="logo  text-black font-bold text-base  " > <Link to={"/"} > My logo </Link></div >
        <
            div className="account" >
            {state ?
                <div className="flex  items-center" >
                    <div className="add mx-2 font-thin text-md text-white" >
                        <Link to={'/addmemo'} >
                            add memo
                        </Link>
                    </div>
                    <div className="username text-white font-bold text-lg" > {state.userName} </div>
                    <div className="add mx-2 font-thin text-md text-white" >
                        <div className="logout cursor-pointer" onClick={logOut} >
                            log out
                        </div>
                    </div >
                </div> :
                <div className="login font-thin text-bold text-white" >
                    <Link to={'/login'} >
                        login
                    </Link>
                </div>
            } </div>
    </div >
    )
}

export default Navigation