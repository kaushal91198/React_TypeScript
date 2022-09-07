import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}



const Users = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: "Kaushal Panchal",
            email: 'kaushal91198@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <>
            <button onClick={handleLogin}>LoggedIn</button>
            <button onClick={handleLogout}>LoggedIn</button>

            {
                user ? (
                    <>
                        <div>User Name is {user.name}</div>
                        <div>User Email is {user.email} </div>
                    </>
                )
                    : "Guest User"
            }

        </>
    )
}

export default Users