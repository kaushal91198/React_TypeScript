import { useState } from "react"


const LoggedIn = () => {

    const [loggedIn,setLoggedIn] = useState(false)
    const handleLogin = () => { 
        setLoggedIn(true)
    }
    const handleLogout = () => { 
        setLoggedIn(false)
    }

    return (
        <>
            <button onClick={handleLogin}>LoggedIn</button>
            <button onClick={handleLogout}>LoggedIn</button>
            <div>User {loggedIn?'logged in':'logged out'}</div>
        </>
    )
}

export default LoggedIn