import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}



const Users = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // we can also write like this and that is called useState type assertion
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    
    const handleLogin = () => {
        setUser({
            name: "Kaushal Panchal",
            email: 'kaushal91198@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
        // setUser({} as AuthUser)
    }

    return (
        <>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>

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