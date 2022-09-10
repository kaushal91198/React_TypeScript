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
import MutableRef from './components/ref/MutableRef';
import { DomRef } from './components/ref/DomRef';
import CounterClass from './components/class/CounterClass'
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import Randomnumber from './components/restriction/Randomnumber';
import Toast from './components/templateliterals/Toast'
import ButtonHtml from './components/html/Button'
import Extract from './components/Extract';
import TextPolymorphic from './components/polymorphic/TextPolymorphic'
import LoggedIn from './components/states/LoggedIn';
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

      <h1> 3rd - Typing Props</h1>
      <Greet name='Kaushal' messageCount={10} isLoggedIn={true} />
      <Greet name='Munno' isLoggedIn={true} />

      <h1> 4th - Basic Props</h1>
      <Person name={personName} />
      <PersonList names={personList} />

      <h1> 5th - Advanced Props</h1>
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar  >
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      <h1> 6th - Event Props</h1>
      <Button
        handleClick={() => {
          console.log("Button Clicked")
        }}
        handleClickEvent={(event, id) => {
          console.log("Button Event Clicked ", event, id)
        }}
      />
      <Input value='munno' handleChange={(event) => { console.log(event) }} />

      <h1> 7th - Style Props</h1>
      <Container styles={{ border: '1px solid black', padding: '1 rem' }} />

      <h1> 9th - UseState</h1>
      <Users />

      <h1> 10th and 11th  - UseState Future And UseState Type Assertion</h1>
      <LoggedIn />

      <h1> 12th and 13th - UseReducer And UseReducer Strict Action Types</h1>
      <Counter />

      <h1> 14th- UseContext</h1>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <h1> 15th- UseContext Future Value</h1>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <h1> 16th- UseRef Hook</h1>
      <DomRef />
      <MutableRef />

      <h1> 17th- Class Component</h1>
      <CounterClass message='This is a counter message' />

      <h1> 18th- Class Component prop</h1>
      <Private isLoggedIn={true} Component={Profile} />

      <h1> 19th- Generic prop</h1>
      <List items={['Kaushal', 'Harsh', 'Gopi', 'Gatu']} onClick={(item) => { console.log(item) }} />
      <List items={[1, 2, 3]} onClick={(item) => { console.log(item) }} />
      <List items={[{ first: 'Kaushal', last: "Panchal" }, { first: 'Harsh', last: "Panchal" }]} onClick={(item) => { console.log(item) }} />

      <h1> 20th- Restricting Props</h1>
      <Randomnumber value={10} isPositive={true} />
      {/* this gives the error */}
      {/* <Randomnumber value={10} isPositive={true} isNegative={true} isZero={true}/> */}

      <h1> 21st- Template Literals and Exclude</h1>
      <Toast position='center' />

      <h1>22nd - Wrapping html elements</h1>
      <ButtonHtml variant='primary' onClick={() => { console.log('clicked') }} >Primary Button</ButtonHtml >
      {/* type script tells us that children props not allowed */}
      {/* <ButtonHtml variant='primary' onClick={() => { console.log('clicked') }} ><div>fdhdhf</div></ButtonHtml > */}

      <h1>23rd - Extracting a Components Prop Types</h1>
      <Extract name='Kaushal' messageCount={10} isLoggedIn={true} />

      <h1>24th - Polymorphic Components</h1>
      <TextPolymorphic as='h1' size={'lg'}>Heading</TextPolymorphic>
      <TextPolymorphic as='p' size={'md'}>Paragraph</TextPolymorphic>
      <TextPolymorphic as='label' htmlFor='id' size={'sm'} color={'secondary'}>Label</TextPolymorphic>

    </div>
  );
}

export default App;
