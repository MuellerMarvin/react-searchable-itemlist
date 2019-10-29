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

function SearchBar(props) {
  return (
    <div class="SearchBar">
    </div>
  );
}

function ItemList(props) {
  return (
    <div class="ItemList">
    </div>
  );
}

function ListItem(props) {
  return (
    <div class="ListItem">
      <image></image>
      <div>
        <p class="ListItemTitle"></p>
        <p class="ListItemDescription"></p>
      </div>
    </div>
  );
}

export default App;
