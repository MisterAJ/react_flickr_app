import React, { Component } from "react";
import "./App.css";

import axios from "axios";

import Navbar from "./Components/Nav";
import ImageContainer from "./Components/ImageContainer";

import linkList from "./Utils/linkList";
import apiKey from "./Utils/config";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };

    this.imageSearch = this.imageSearch.bind(this);
  }

  async imageSearch(searchTerm) {
    try {
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=12&safe_search=1&text=${searchTerm}&format=json&nojsoncallback=1`
      );
      this.setState((prevState, props) => {
        return { images: response.data.photos.photo };
      });
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
        <ImageContainer images={this.state.images} />
      </div>
    );
  }
}

export default App;
