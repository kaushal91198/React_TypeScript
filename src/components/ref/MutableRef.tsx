import { useEffect, useRef, useState } from 'react'


//it is setinterval na dcleatinterval javascript function
const MutableRef = () => {
    const [timer, setTimer] = useState(0)
     //for mutable references we define appropriate types
    const intervalRef = useRef<number | null>(null)
    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
        }
    }
    useEffect(() => {
        //window.setInterval return number
        intervalRef.current = window.setInterval(() => {
            setTimer((timer)=>timer+1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])
    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}

export default MutableRef