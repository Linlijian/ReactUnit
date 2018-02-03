import React from 'react';
import './containCss.css';


const Contain = (props) => {

    const btt = {
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        ':hover' : {
          backgroundColor : 'red',
          color : 'black'
        }
    }
    const classdy = []
    if (props.persons.length <= 2) {
      classdy.push('red')
    }
    if (props.persons.length <= 1) {
      classdy.push('big')
    }
    if(props.show){
            btt.backgroundColor = 'red';
    btt[':hover'] = {
      backgroundColor : 'blue',
      color : 'green'
    }

    }
    return ( <div>
        <p className={classdy.join(' ')}>ทดสอบอะไรหน่อยๆ</p>
     <button  style={btt} onClick={props.change}>{props.show}Switch...</button>
        </div>
    ); 
    
      
}

export default Contain;




