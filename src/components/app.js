import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
