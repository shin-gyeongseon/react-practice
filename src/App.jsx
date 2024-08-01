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

  const filteredSearch = exampleBookList.filter((book) => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>{welcome.greeting} {welcome.title}</h1>
        <Search search={searchTerm} onSearch={handleSearch} />
        <hr />
        <List bookList={filteredSearch}/>
      </div>
    </>
  )
}

const List = ({bookList}) => (
  <ul>
    {
      bookList.map((item) => (
        <Item key={item.objectID} item={item} />
      ))
    }
  </ul>
)

const Item = ({item}) => (
  <li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
)

const Search = ({search, onSearch}) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        value={search} 
        type="text" 
        id='search' 
        onChange={onSearch} 
      />
    </div>
  )
}

export default App
