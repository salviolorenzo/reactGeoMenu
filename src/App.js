import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Locations from './Locations';
import OnePlace from './OnePlace';
import Menu from './Menu';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: ['Buckhead', 'BufordHwy'],
      locations: {
        Buckhead: ['FarmBurger', 'Chipotle'],
        BufordHwy: ['Pho', 'TacosNstuff']
      },
      restaurants: {
        FarmBurger: ['the farmburger', 'onion rings'],
        Chipotle: ['burrito', 'bowl', 'salad'],
        Pho: ['soup', 'noodles'],
        TacosNstuff: ['tacos', 'stuff']
      }
    };
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Route
            path='/'
            exact
            render={props => {
              return <Locations places={this.state.places} {...props} />;
            }}
          />
          <Route
            path='/:location/restaurants'
            render={props => {
              return <OnePlace items={this.state.locations} {...props} />;
            }}
          />
          <Route
            path='/:location/restaurants/:restaurant'
            render={props => {
              return <Menu items={this.state.restaurants} {...props} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
