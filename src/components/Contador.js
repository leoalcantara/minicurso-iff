import React from 'react';

class Contador extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            contador: props.valorInicial
        }
    }
    render(){
       return (
        <div>   
            <h1>Você clicou:{this.state.contador} </h1>
            <button onClick={() => this.setState({contador: this.state.contador + 1})}>+</button> 
           
        </div>
       )
    }
}
export default Contador;
