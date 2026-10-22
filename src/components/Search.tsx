import { useState } from 'react';
import './search.scss';
import SearchResults from './SearchResults';

export default function Search() {
  const [userInput, setUserInput] = useState('');

  return (
    <>
      <div>
        <h1> Search for your item here</h1>
        <input
          className="search-input-field"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
        <SearchResults userInput={userInput} />
      </div>
    </>
  );
}
