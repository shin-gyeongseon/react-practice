import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const useStorageState = (initialState, key) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    console.log('entered useStorageState ::: ' + value);
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

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

  const [searchTerm, setSearchTerm] = useStorageState('React', 'search'); // 나는 책이랑 파라미터 순서 다름
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const filteredSearch = exampleBookList.filter((book) => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [checked, setChecked] = React.useState(false);

  const handleChangeCheckbox = (event) => {
    console.log('toggle checkbox ::: ', event.target.value);
    setChecked(!checked);
  }

  // InputWithLabel을 wrapping 못할까 ? 된다면 가독성이 높도록 만들 수 있을거 같은데 ? 
  const RadioInput = (props) => {
    return <InputWithLabel 
            id="checkbox"
            label="checkbox"
            value={checked}
            onInputChange={handleChangeCheckbox}
            type='checkbox'
          ></InputWithLabel>
  }

  return (
    <>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
        type='text' // 사실 없어도 상관은 없지 
      >
        <strong>search: </strong>
      </InputWithLabel>
      
      <RadioInput />

      <hr />

      <List bookList={filteredSearch}/>
    </>
  )
}

const InputWithLabel = ({id, value, onInputChange, type='text', children}) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{children}</label>
        &nbsp;
        <input 
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}></input>
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