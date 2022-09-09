import { useContext } from "react"

import { UserContext } from "./UserContext"

const User = () => {

    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "kaudhal",
                email: 'kaushal@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>User Name is {userContext?.user?.name}</div>
            <div>User Email is {userContext?.user?.email} </div>
        </>
    )
}

export default User