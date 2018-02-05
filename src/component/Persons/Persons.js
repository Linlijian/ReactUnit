import React ,{Component}from 'react';
import Person from '../Person/Person';

class Persons extends Component {
        constructor(props){
                super(props);
                console.log('Persons.js => insite constructor',props);
        }
        componentWillMount(){
                console.log('Persons.js => insite componentWillMount()');
        }
        componentDidMount(){
                console.log('Persons.js => insite componentDidMount()');
        }
        componentWillReceiveProps(nextProps){
                console.log('Persons.js => insite componentWillReceiveProps()',nextProps);
        }
        shouldComponentUpdate(nextProps, nextState){
                console.log('Persons.js => insite shouldComponentUpdate()',nextProps,nextState);
                return true;
        }
        componentWillUpdate(nextProps, nextState){
                console.log('Persons.js => insite componentWillUpdate()',nextProps,nextState);
        }
        componentDidUpdate(prevProps, prevState){
                console.log('Persons.js => insite componentDidUpdate()',prevProps,prevState);
        }
        componentWillUnmount(){
                console.log('Persons.js => insite componentWillUnmount()');
        }
        render(){
                console.log('Persons.js => insite render()');
                return this.props.persons.map( (persons,index) => {
                        return <Person 
                                click={()=>this.props.del(index)} 
                                name={persons.name} age={this.props.age}
                                key={persons.id}
                                change={(event)=>this.props.change(event, persons.id)}/>
                })
        }
}

export default Persons