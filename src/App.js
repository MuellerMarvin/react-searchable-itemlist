import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <SearchBar></SearchBar>
        <ItemList></ItemList>
      </div>
    );
  }
}

function SearchBar() {
  return(
    <div class="SearchBar">
    </div>
  );
}

function ItemList() {
  return(
    <div class="ItemList">
    </div>
  );
}

export default App;
