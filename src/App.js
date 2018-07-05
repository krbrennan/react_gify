import React, { Component } from 'react';
import request from 'superagent';
import Card from './Card';
import CardList from './CardList';
import HeaderBar from './HeaderBar';
import SearchBar from './SearchBar';
import './App.css';
import 'tachyons';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        gifs: []
      }
    }

    componentDidMount() {
      const url = 'https://api.giphy.com/v1/gifs/trending?api_key=21pGD8YTJeDH5f5I9HkUce2bfrSIXWXF&limit=25&rating=R'
      request
        .get(url, (err, res) => {
          this.setState({gifs: res.body.data})
        })
        .withCredentials()
      }

    render = () => {
      if(this.state.gifs.length === 0) {
        return null;
      }
      return (
        <div className='view'>
          <HeaderBar />
          <SearchBar>
            <CardList cards={this.state.gifs} />
          </SearchBar>
        </div>
      );
    }
  }

export default App;
