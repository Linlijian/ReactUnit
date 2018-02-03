import React from 'react';
import Radium from 'radium';
import './btt.css';

const person = (props) => {
  // const media = {
  //   '@media (min-width: 500px)':{
  //     width : '450px'
  //   }
  // }
  // const rnd = Math.random();

  // if ( rnd > 0.7 ) {
  //     throw new Error( 'Something went wrong' );
  // }
    return <div classsName='center' >
            <p onClick={props.click}>{props.name} {props.age} this is Pornchai K </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
            
          </div>

}

export default Radium(person);