import React from 'react';

import './Contador.css';

class Contador extends React.Component{    
    constructor(props){
        super(props);
        
        this.state = {
            clicks: props.valorInicial
        }
    }

    render(){
       return (
        <div className="Contador">   
            <h1>Escolha um valor</h1>
            <h2>{this.state.clicks}</h2>
            <button onClick={() => this.setState({clicks: this.state.clicks - 1})}> - </button>   
            <span> </span>   
            <button onClick={() => this.setState({clicks: this.state.clicks + 1})}> + </button>        
        </div>
       )
    }
}
export default Contador;