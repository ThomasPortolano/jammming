import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar } from './Searchbar/SearchBar';
import { SearchResults } from './SearchResults/SearchResults';
import { Playlist } from './Playlist/Playlist';
import { render } from '@testing-library/react';

class App extends React.Component() {
  return ()
  
  render(){
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    /* Add a SearchBar component */
    <div className="App-playlist">
    /* Add a SearchResults component */
    /* Add a Playlist component */
    </div>
  </div>
</div>
  }
};

export default App;
