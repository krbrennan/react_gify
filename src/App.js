import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import Card from './Card';

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

  render() {
    if(this.state.gifs.length === 0) {
      return null;
    }
    return (
      <div>
        <Card prop={this.state.gifs} />
      </div>
    );
  }
}
    // const GphApiClient = require('giphy-js-sdk-core')
    // const client = GphApiClient("21pGD8YTJeDH5f5I9HkUce2bfrSIXWXF")
    // client.trending("gifs", {})
    //   .then((response) => {
    //     response.data.map((gifObj) => {
    //       this.setState({gifs: gifObj})
    //     });
    //   });





export default App;
