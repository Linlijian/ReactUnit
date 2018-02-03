import React, { Component } from 'react';
import '../component/Person/btt.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../component/Persons/Persons';
import Contain from '../component/contain/Contain';


class App extends Component {
  state =  {
    persons : [
      {id : 'aasd261', name : 'A' , age : 19},
      {id : 'a5ssqqa', name : 'B' , age : 20},
      {id : 'qwe5dss', name : 'C' , age : 21}
    ],
    "day" : 24,
    "month" : 'Dec',
    year : 2017,
    conditionPerson :false
  }
  
  changeState = () => {
    this.setState({month : 'Jul'})
  }

  ddelname= (ineex) => {
    const person = this.state.persons
    person.splice(ineex,1)
    this.setState({persons : person})
  }

  changeRealTime = (event) => {
    this.setState({
      persons : [
      {name : event.target.value , age : 19},
      {name : 'Nin' , age : 20},
      {name : 'Ming' , age : 21}
    ]})
  }  

  conditionPersonChange = () =>{
    let a = this.state.conditionPerson
    this.setState({conditionPerson : !a})
  }

  changeEventMap = (event, index) =>{
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === index;
    })

    const tmpPerson = {
      ...this.state.persons[personIndex]
    }

    tmpPerson.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = tmpPerson

    this.setState({persons : persons})
  }
  
  render() {
    let person = null;
    if (this.state.conditionPerson){
      person = (
        <div>
          <Persons 
            persons = {this.state.persons}
            del={this.ddelname}
            change={this.changeEventMap}/>
        </div>
      );
  }
 
    return (
      // <StyleRoot>
      <div className='center'>
      <Contain persons={this.state.persons}
               change={this.conditionPersonChange}
               show={this.state.conditionPerson} />
      {person}
      
      <br/>
      {this.state.month}
      <p onClick={this.changeState}>Click it</p>
      </div>
      // </StyleRoot>
    
    );
  }
}

export default Radium(App);
