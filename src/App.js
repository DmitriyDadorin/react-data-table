import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TableRows from './components/tables-rows';
import ButtonData from './components/ButtonData';


class App extends Component {

  state = {
    persons: [],
    start: true
   }  

  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;    
      return 0;
    };
  }
 
  sortBy = (key) => {
    let arrayCopy = [...this.state.persons];    
    arrayCopy.sort(this.compareBy(key));
    this.setState({persons: arrayCopy});
       
  }

  miniData = () => {
    axios.get(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
      .then(res => {
        const persons = res.data;         
        this.setState({ persons });  
        this.setState({start: false});        
      }
      )      
  }
  render() {
    return (  
      <div>
      <ButtonData
      miniData={this.miniData}
      start={this.state.start}
      />
      <TableRows
      sortBy={this.sortBy}
      persons={this.state.persons}
      />
      </div> 
    );
  }
}

export default App;
