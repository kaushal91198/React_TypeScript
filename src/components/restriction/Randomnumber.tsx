
type RandomNumberProps = {
    value: number
    isPositive?: boolean
    isNegative?: boolean
    isZero?: boolean
}

//Restricting number
type PropsValue = {
    value: number
}
type PositiveNumber = PropsValue & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = PropsValue & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}
type Zero = PropsValue & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}


// const RandomNumber = ({ value, isPositive, isNegative, isZero }: PositiveNumber | NegativeNumber | Zero) => {
const RandomNumber = ({ value, isPositive, isNegative, isZero }: PositiveNumber | NegativeNumber | Zero) => {
    return (
        <div>
            {value}
            {isPositive && "positive"}
            {isNegative && "negative"}
            {isZero && "zero"}
        </div>
    )
}

export default RandomNumber