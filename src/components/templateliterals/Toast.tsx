import React from 'react'

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

// type ToastProps = {
//     position: `${HorizontalPosition}-${VerticalPosition}`
// }

type ToastProps = {
    // for exclude
    // the first argument inside angle bracket would be template-literals followed by then specify type that we want to exclude
    //center is not allowed as props that's why it put here
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | 'center'
}

const Toast = ({ position }: ToastProps) => {
    return (
        <>
            <div >Toast notification position - {position} </div>
        </>
    )
}

export default Toast