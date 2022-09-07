import React from "react"

type ButtonProp = {
    handleClick: () => void
    handleClickEvent: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void

}


const Button = (props: ButtonProp) => {
    return (
        <>
            <div onClick={props.handleClick}>Click</div>
            <button onClick={(event) => { props.handleClickEvent(event, 1) }}></button>
        </>
    )
}

export default Button