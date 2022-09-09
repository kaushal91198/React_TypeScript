import React, { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Input from './components/Input';
import Container from './components/Container';
import Users from './components/states/Users';
import Counter from './components/reducers/counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/UserCo'


function App() {
  const personName = {
    firstName: 'Kaushal',
    lastName: 'Panchal'
  }

  const personList = [
    {
      firstName: 'Harsh',
      lastName: 'Panchal'
    },
    {
      firstName: 'Vijay',
      lastName: 'Desai'
    },
    {
      firstName: 'Rugved',
      lastName: 'Patel'
    }
  ]

  return (
    <div className="App">

      <Container styles={{ border: '1px solid black', padding: '1 rem' }} />

      <Greet name='Kaushal' messageCount={10} isLoggedIn={true} />

      <Greet name='Munno' isLoggedIn={true} />

      <Person name={personName} />

      <PersonList names={personList} />

      <Status status='loading' />

      <Heading>Placeholder Text</Heading>

      <Oscar  >
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      <Button
        handleClick={() => {
          console.log("Button Clicked")
        }}
        handleClickEvent={(event, id) => {
          console.log("Button Event Clicked ", event, id)
        }}
      />

      <Input value='munno' handleChange={(event) => { console.log(event) }} />

      <Users />

      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

    </div>
  );
}

export default App;
