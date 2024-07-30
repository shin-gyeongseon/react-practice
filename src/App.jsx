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

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const [searchAuthor, setSearchAuthor] = useState('');

  return (
    <>
      <div>
        <h1>{welcome.greeting} {welcome.title}</h1>
        <Search onSearch={handleSearch}/>
        <List bookList={searchedStory}/>
      </div>
    </>
  )
}

const List = (prop) => (
  <ul>
    {
      prop.bookList.map((item) => (
        <Item key={item.objectID} item={item} />
      ))
    }
  </ul>
)

const Item = (prop) => (
  <li key={prop.item.objectID}>
    <span>
      <a href={prop.item.url}>{prop.item.title}</a>
    </span>
    <span>{prop.item.author}</span>
    <span>{prop.item.num_comments}</span>
    <span>{prop.item.points}</span>
  </li>
)

const Search = (props) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id='search' onChange={props.onSearch} />
    </div>
  )
}

export default App
