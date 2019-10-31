import React from 'react';
import './App.css';
import './Item.js';
import { Item } from './Item.js';

class App extends React.Component {
  GetDefaultItemList() {
    let item = new Item("Example Title",
                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pulvinar ante pretium pretium. Quisque mollis a urna ut accumsan. Maecenas ut mattis tellus. Cras eu congue metus, sit amet pulvinar nunc. Cras dignissim lacus nec bibendum bibendum. Sed ipsum ex, imperdiet nec metus vitae, maximus ultrices metus. Duis posuere pellentesque nibh vitae molestie. Donec ullamcorper bibendum tempor. Nunc massa leo, placerat in nisi vitae, bibendum pellentesque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
                         "https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"
                         );
    let itemList = [];

    for(let i = 0; i < 10; i++) {
      itemList.push(<ListItem Title={ item.title } Description={ item.description } ImageSource={ item.imageSource }></ListItem>);
    }

    return itemList;
  }

  render() {
    let itemList = this.GetDefaultItemList();
    return (
      <div class="App">
        <SearchBar></SearchBar>
        <div class="TopSpacer"></div>
        <ItemList ListItems={ itemList }></ItemList>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions to the component
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div class="SearchBar">
        <input id="SearchBarInput"></input>
        <button>Search</button>
      </div>
    );
  }
}

function ItemList(props) {
  return (
    <div class="ItemList">
      { props.ListItems }
    </div>
  );
}

function ListItem(props) {
  var description = props.Description;
  var title = props.Title;

  if(props.Description.length > 140) {
    description = props.Description.slice(0, 140) + "...";
  }

  if(props.Title.length > 20) {
    title = props.Title.slice(0, 20) + "...";
  }

  return (
    <div class="ListItem">
      <img src={ props.ImageSource } alt="missing"/>
      <div>
        <p class="ListItemTitle">{ title }</p>
        <p class="ListItemDescription">{ description }</p>
      </div>
    </div>
  );
}

export default App;
