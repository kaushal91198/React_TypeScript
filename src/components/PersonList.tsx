

//we can write also this

// type Person = {
//     firstName:string
//     lastName:string
// }

// type Persons ={
//     names:Person[]
// }


type Persons = {
  names: {
    firstName: string
    lastName: string
  }[]
}



const PersonList = (props: Persons) => {
  return (
    <div>
      {
        props.names.map((name) => {
          return (
            <h2 key={name.firstName}>
              {name.firstName} {name.lastName}
            </h2>
          )
        })
      }
    </div>
  )
}

export default PersonList