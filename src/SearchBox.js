import React, { Component } from 'react';
import './searchBox.css';
import request from 'superagent';

// const SearchBox = (props) => {
//   return (
//     <form>
//       <label>
//         <input
//           type='search'
//           placeholder='Search Gifs!'
//           className='search-box tc pa3 ba b--green bg-lightest-blue'
//         />
//       </label>
//       <input type='submit' value='Submit' onSubmit={this.handler} />
//     </form>
//
//   );
// }



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
    console.log(this.state.input)
    this.setState({
      input: event.target.value
    });
    event.preventDefault()
    event.persist()
  }


  render() {
    return(
        <form onSubmit={this.submitHandler}>
            <input
              type='text'
              id='theInput'
              placeholder='Search Gifs!'
              className='search-box tc center pa3 ba b--green bg-lightest-blue'
              onChange={this.handleChange}
            />
            <input type='submit' />
        </form>
    );
  }
}


export default SearchBox;
