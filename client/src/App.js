import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=900")
            .then(data=>data.json())
            .then(jsonedData=>this.setState({data:jsonedData.results}))
    }


    render() {
        let DataMap=this.state.data.map(
            (eachElement,index)=>{

                return(<div>
                        <h2>{(index)+ eachElement.name+""}</h2>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+index+".png"} alt=""></img>
                    </div>

                )
            }
        )
    return (
      <div className={"grid"}>
        <h1>Pokemon</h1>
          {DataMap}
      </div>
    );
  }
}

export default App;
