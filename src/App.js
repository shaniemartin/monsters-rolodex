import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [], 
      searchField: ''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => this.setState({ monsters:data }));
  }



    
  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={e=> this.setState({searchField: e.target.value})}/>        
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
