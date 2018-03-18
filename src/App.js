import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Navbar from './Components/Nav'

import linkList from './Utils/linkList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }
  }

  async imageSearch(searchTerm) {
    try {
      const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&photo_id=${searchTerm}&format=json&nojsoncallback=1`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar links={linkList} imageSearch={this.imageSearch} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
