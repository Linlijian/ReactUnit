import React from 'react';
import Person from '../Person/Person';

const Persons = (props) => props.persons.map( (persons,index) => {
        return <Person 
                click={()=>props.del(index)} 
                name={persons.name} age={props.age}
                key={persons.id}
                change={(event)=>props.change(event, persons.id)}/>
      });


export default Persons