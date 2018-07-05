import React, { Component } from 'react';
import request from 'superagent';
import Card from './Card';
import CardList from './CardList';
import './App.css';

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
        <div>
          <CardList cards={this.state.gifs} />
        </div>
      );
    }
  }

export default App;
