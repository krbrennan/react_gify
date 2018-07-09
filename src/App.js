import React, { Component } from 'react';
import request from 'superagent';
import CardList from './CardList';
import HeaderBar from './HeaderBar';
import Scroll from './SearchBar';
import SearchBox from './SearchBox';
import CurrentlyViewing from './CurrentlyViewing';
import './App.css';
import 'tachyons';

  class App extends Component {
    constructor(props) {
      super(props);
      this.handler = this.handler.bind(this)
      this.state = {
        gifs: [],
        searchField: '',
        searched: false
      }
    }

      componentDidMount() {
        if(this.state.searched === false) {
          const url = 'https://api.giphy.com/v1/gifs/trending?api_key=21pGD8YTJeDH5f5I9HkUce2bfrSIXWXF&limit=12&rating=R'

          request
          .get(url, (err, res) => {
            this.setState({gifs: res.body.data})
          })
          .withCredentials()
        }
      }


    handler(data) {
      this.setState({
        searchField: data,
        searched: true
      });
      const searchTerm = data
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=21pGD8YTJeDH5f5I9HkUce2bfrSIXWXF&limit=69&rating=R`

      request
        .get(url, (err, res) => {
          this.setState({gifs:res.body.data})
        })
        .withCredentials()
      this.setState({searched:false})
    }

    render() {
      if(this.state.gifs.length === 0) {
        return null;
      }
      return (
        <div className='view'>
          <HeaderBar />
          <SearchBox handlerFromParent={this.handler} />
          <CurrentlyViewing current={this.state.searchField}/>
          <Scroll>
            <CardList cards={this.state.gifs} />
          </Scroll>
        </div>
      );
    }
  }

export default App;
