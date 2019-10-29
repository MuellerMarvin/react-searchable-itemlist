import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  GetDefaultItemList() {
    let itemList = [];

    itemList.push(
      <ListItem Title="Title" Description="This is the description of the item that should be able to be a little longer than you might be used to from a title." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    itemList.push(
      <ListItem Title="Title" Description="This is the description of the item that should be able to be a little longer than you might be used to from a title." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    itemList.push(
      <ListItem Title="Title" Description="This is the description of the item that should be able to be a little longer than you might be used to from a title." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    itemList.push(
      <ListItem Title="Title" Description="This is the description of the item that should be able to be a little longer than you might be used to from a title." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    itemList.push(
      <ListItem Title="Title" Description="This is the description of the item that should be able to be a little longer than you might be used to from a title." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    

    return itemList;
  }

  render() {
    let itemList = this.GetDefaultItemList();
    return (
      <div class="App">
        <SearchBar></SearchBar>
        <ItemList ListItems={ itemList }></ItemList>
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
      { props.ListItems }
    </div>
  );
}

function ListItem(props) {
  return (
    <div class="ListItem">
      <img src={ props.ImageSource }></img>
      <div>
        <p class="ListItemTitle">{ props.Title }</p>
        <p class="ListItemDescription">{ props.Description }</p>
      </div>
    </div>
  );
}

export default App;
