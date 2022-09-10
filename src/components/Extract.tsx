import React from 'react'
import Greet from './Greet'

const Extract = (props: React.ComponentProps<typeof Greet>) => {
    console.log(props)
    return (
        <h2>{props.name}</h2>
    )
}

export default Extract