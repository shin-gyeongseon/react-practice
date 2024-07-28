import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const welcome = {
    greeting: "Hey",
    title: "react",
  }

  const exampleBookList = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
  ];

  return (
    <>
      <div>
        <h1>{welcome.greeting} {welcome.title}</h1>
        <Search />
        <List bookList={exampleBookList}/>
      </div>
    </>
  )
}

const List = (prop) => (
  <ui>
    {
      prop.bookList.map((item) => (
        <Item key={item.objectID} item={item} />
      ))
    }
  </ui>
)

const Item = (prop) => (
  <li key={prop.key}>
    <span>
      <a href={prop.item.url}>{prop.item.title}</a>
    </span>
    <span>{prop.item.author}</span>
    <span>{prop.item.num_comments}</span>
    <span>{prop.item.points}</span>
  </li>
)

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input type="text" id='search' onChange={handleChange}/>

    <p>
      this is search term: <strong>{searchTerm}</strong>
    </p>
  </div>
  )
}

export default App
