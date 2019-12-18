import React, { Component } from "react";
import Card from "../Components/Card/Card"

class StarWars extends Component {
  state = { data: [] };
  
  async componentDidMount() {
    const response = await fetch(`https://swapi.co/api/people/10/`);
    const json = await response.json();
    // console.log(json)
    this.setState({ data: [json] });
  }

  render() {
   
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <Card id={el.name} name={el.name} email={el.mass}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default StarWars