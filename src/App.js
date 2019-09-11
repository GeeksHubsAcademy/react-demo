import React from 'react';
import './App.css';
import Header from './components/header';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinos: []
    }
  }
  async componentDidMount() {
    const destinos = await fetch('http://localhost:3001/destinations/').then(res => res.json())
    this.setState({ destinos })
  }
  render() {
    console.log('renderizado');
    return (
      <div className="App">
        <Header />
        <ul>
          {this.state.destinos.map(destino => <li className="destino" key={destino.id}> {destino.travel} </li>)}
        </ul>
      </div>
    )
  }

}
export default App;
