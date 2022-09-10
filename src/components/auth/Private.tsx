
import Login from './Login'
import { ProfileProps } from './Profile'

//see video-18 3.00 
type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps> // this is important component type
}


//Here Component will be any component
const Private = ({ isLoggedIn, Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Kaushal' />
    }
    else {
        return (<Login />)
    }
}

export default Private