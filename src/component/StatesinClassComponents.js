import React from 'react';
import '../States.css'
class StatesinClassComponents extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name:"Ganesh",
        count:0
    };
}

    render() {
        setTimeout(() =>{
            this.setState({
                name:"Kavanur",
                // count:2
            })
        },3000)
        return <div className='demo'>
            <h1>hello {this.state.name}</h1>
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Increment Count</button>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count=0
                })
            }}>Reset</button>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count-1
                })
            }}>Decrement Count</button>
            
            
        </div>;
    }
}


export default StatesinClassComponents;