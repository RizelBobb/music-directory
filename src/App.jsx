import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Gallery from './Gallery';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      query: '',
      artist:null
    }
  }
  search(){
    console.log('this.state', this.state)
  const BASE_URL=  'https://itunes.apple.com/search?'
  const FETCH_URL = `${BASE_URL}term=${this.state.query}&media=music&limit=1`;
  console.log('FETCH_URL', FETCH_URL)
  fetch(FETCH_URL, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json =>{
    const artist= json.results[0];
    console.log('artist', artist)
    console.log(json)
    this.setState({artist});

  });
  }
  render(){
    return (
      <div className="App">
        <div className="App-title">Music Master from App</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange = {event => {this.setState({query: event.target.value})}}
              onKeyPress = {event =>{
                 if(event.key === 'Enter'){
                   this.search()
                 }
               }}
            />
            <InputGroup.Addon onClick={ () => this.search() }>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ?
            <div>
              <Profile
               artist={this.state.artist}
              />
          </div>
          :<div></div>
        }
      </div>
    )
  }
}

export default App;
