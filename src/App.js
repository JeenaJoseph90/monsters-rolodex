import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchVal : ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => { this.setState({searchVal : e.target.value}) }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  render() {
    const { monsters, searchVal } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchVal.toLowerCase()));

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monster" 
        handleChange = { this.handleChange }></SearchBox>
      <CardList monsters = {filteredMonsters}>
      </CardList>
      </div>
    );
  }
}

export default App;
