import React, { Component } from 'react';
import './searchBox.css';
import request from 'superagent';


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      input: ''
    };
  }

  submitHandler(event) {
    event.preventDefault()
    this.props.handlerFromParent(this.state.input);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
    event.preventDefault()
    event.persist()
  }


  render() {
    return(
        <form onSubmit={this.submitHandler} className='tc center pv3'>
          <input
            type='text'
            id='theInput'
            placeholder='Search Gifs!'
            className='center tc input-reset ba b--black-20 pa3 mb2 db w-80'
            onChange={this.handleChange}
            />
        </form>
    );
  }
}


export default SearchBox;
