import React from 'react';
import './App.css';

class App extends React.Component {
  GetDefaultItemList() {
    let itemList = [];

    itemList.push(
      <ListItem Title="Title" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pulvinar ante pretium pretium. Quisque mollis a urna ut accumsan. Maecenas ut mattis tellus. Cras eu congue metus, sit amet pulvinar nunc. Cras dignissim lacus nec bibendum bibendum. Sed ipsum ex, imperdiet nec metus vitae, maximus ultrices metus. Duis posuere pellentesque nibh vitae molestie. Donec ullamcorper bibendum tempor. Nunc massa leo, placerat in nisi vitae, bibendum pellentesque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    itemList.push(
      <ListItem Title="Title" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pulvinar ante pretium pretium. Quisque mollis a urna ut accumsan. Maecenas ut mattis tellus. Cras eu congue metus, sit amet pulvinar nunc. Cras dignissim lacus nec bibendum bibendum. Sed ipsum ex, imperdiet nec metus vitae, maximus ultrices metus. Duis posuere pellentesque nibh vitae molestie. Donec ullamcorper bibendum tempor. Nunc massa leo, placerat in nisi vitae, bibendum pellentesque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    itemList.push(
      <ListItem Title="Title" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pulvinar ante pretium pretium. Quisque mollis a urna ut accumsan. Maecenas ut mattis tellus. Cras eu congue metus, sit amet pulvinar nunc. Cras dignissim lacus nec bibendum bibendum. Sed ipsum ex, imperdiet nec metus vitae, maximus ultrices metus. Duis posuere pellentesque nibh vitae molestie. Donec ullamcorper bibendum tempor. Nunc massa leo, placerat in nisi vitae, bibendum pellentesque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );    itemList.push(
      <ListItem Title="Title" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pulvinar ante pretium pretium. Quisque mollis a urna ut accumsan. Maecenas ut mattis tellus. Cras eu congue metus, sit amet pulvinar nunc. Cras dignissim lacus nec bibendum bibendum. Sed ipsum ex, imperdiet nec metus vitae, maximus ultrices metus. Duis posuere pellentesque nibh vitae molestie. Donec ullamcorper bibendum tempor. Nunc massa leo, placerat in nisi vitae, bibendum pellentesque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );    itemList.push(
      <ListItem Title="Title" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pulvinar ante pretium pretium. Quisque mollis a urna ut accumsan. Maecenas ut mattis tellus. Cras eu congue metus, sit amet pulvinar nunc. Cras dignissim lacus nec bibendum bibendum. Sed ipsum ex, imperdiet nec metus vitae, maximus ultrices metus. Duis posuere pellentesque nibh vitae molestie. Donec ullamcorper bibendum tempor. Nunc massa leo, placerat in nisi vitae, bibendum pellentesque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." ImageSource="https://upload.wikimedia.org/wikipedia/commons/e/ed/20170522_Schalkenmehrener_Maar_30.jpg"></ListItem>
    );
    

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
