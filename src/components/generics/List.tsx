// type ListProps = {
//     items: string[] | number[]
//     onClick: (value: string | number) => void
// }

//this is called generic props
type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}


// const List = ({ items, onClick }: ListProps) => {
const List = <T extends string | number | { first: string, last: string }>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {/* {item} */}
                    </div>
                )
            })}
        </div>
    )
}

export default List