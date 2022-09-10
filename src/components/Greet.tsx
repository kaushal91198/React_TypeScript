

type GreetProps = {
    name: string
    messageCount?: number //optional
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h6>
                {
                    props.isLoggedIn ? ` Welcome ${props.name}! You have ${messageCount} unread messages.
                    `: 'Welcome Guest'
                }
            </h6>
        </div>
    )
}

export default Greet