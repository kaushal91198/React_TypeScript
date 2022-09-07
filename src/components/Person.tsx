type PersonName ={
    name:{
        firstName:string
        lastName:string
    }
}
const Person = (props:PersonName) => {
    
  return (
    <div>{props.name.firstName} {props.name.lastName}</div>
  )
}

export default Person